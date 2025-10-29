import * as THREE from 'three';
import { GUI } from 'dat.gui';
import { EffectComposer } from 'three-stdlib';
import { RenderPass } from 'three-stdlib';
import { UnrealBloomPass } from 'three-stdlib';
import vertexShader from '../../../shaders/vertex.glsl';
import fragmentShader from '../../../shaders/fragment.glsl';
import React from 'react';
import { Stack } from '@mui/material';

export function PerlinBloomScene() {
    const mountRef = React.useRef<HTMLDivElement>(null);
    const audioContextRef = React.useRef<AudioContext | null>(null);

    React.useEffect(() => {
        if (!mountRef.current) return;

        // Clear any previous canvas if it somehow exists
        if (mountRef.current?.firstChild) {
            mountRef.current.innerHTML = '';
        }

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        mountRef.current.appendChild(renderer.domElement);

        // Scene + Camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, -2, 8);
        camera.lookAt(0, 0, 0);

        // Uniforms
        const uniforms = {
            u_time: { value: 0.0 },
            u_frequency: { value: 0.0 },
            u_color: { value: new THREE.Color(0x00ffff) },
        };

        // Material + Geometry
        const mat = new THREE.ShaderMaterial({
            uniforms,
            vertexShader,
            fragmentShader,
            wireframe: true,
        });
        const geo = new THREE.IcosahedronGeometry(4, 30);
        const mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);

        // Audio setup
        if (!audioContextRef.current) {
            audioContextRef.current = new window.AudioContext();
        }

        const audioElement = document.getElementById('audio-player') as HTMLAudioElement;

        // Only create source if it doesn't exist (prevents "already connected" error)
        let source;
        let analyser;

        try {
            source = audioContextRef.current.createMediaElementSource(audioElement);
            analyser = audioContextRef.current.createAnalyser();
            source.connect(analyser);
            analyser.connect(audioContextRef.current.destination);
            analyser.fftSize = 1024;
        } catch (error) {
            // If source already exists, just create a new analyser
            console.log('Audio source already connected, reusing context');
            analyser = audioContextRef.current.createAnalyser();
            // You'll need to store and reuse the source node
        }

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        // Post-processing
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 0.8, 0.5);

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // GUI
        const params = {
            color: '#00FFFF',
            threshold: 0.5,
            strength: 0.5,
            radius: 0.8,
        };

        const gui = new GUI({ autoPlace: false });

        const colorsFolder = gui.addFolder('Colors');
        colorsFolder.addColor(params, 'color').onChange(v => {
            uniforms.u_color.value.set(v);
        });

        const bloomFolder = gui.addFolder('Bloom');
        bloomFolder.add(params, 'threshold', 0, 0.5).onChange(v => (bloomPass.threshold = v));
        bloomFolder.add(params, 'strength', 0, 2).onChange(v => (bloomPass.strength = v));
        bloomFolder.add(params, 'radius', 0, 2).onChange(v => (bloomPass.radius = v));

        const guiSlot = document.getElementById('gui-slot');
        guiSlot?.appendChild(gui.domElement);

        // Mouse
        let mouseX = 0,
            mouseY = 0;
        const onMouseMove = (e: MouseEvent) => {
            const halfX = window.innerWidth / 2;
            const halfY = window.innerHeight / 2;
            mouseX = (e.clientX - halfX) / 100;
            mouseY = (e.clientY - halfY) / 100;
        };
        document.addEventListener('mousemove', onMouseMove);

        // Dynamic resize of the screen
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        // Animate
        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.5;
            camera.lookAt(scene.position);

            // Get frequency data
            analyser.getByteFrequencyData(dataArray);

            // Focus on bass frequencies (lower bins)
            // With fftSize = 1024, we have 512 bins
            // Bass is roughly in the first 10-15% of bins (0-50Hz to ~200Hz range)
            const bassRange = Math.floor(dataArray.length * 0.15);
            let bassSum = 0;
            for (let i = 0; i < bassRange; i++) {
                bassSum += dataArray[i];
            }
            const bassAverage = bassSum / bassRange;

            // You can also boost the bass impact by multiplying or using a curve
            uniforms.u_frequency.value = bassAverage * 1.5; // Boost bass by 1.5x

            uniforms.u_time.value = clock.getElapsedTime();

            composer.render();
        };
        animate();

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            guiSlot?.removeChild(gui.domElement);

            mountRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <Stack ref={mountRef} />;
}

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GUI } from 'dat.gui';
import { EffectComposer } from 'three-stdlib';
import { RenderPass } from 'three-stdlib';
import { UnrealBloomPass } from 'three-stdlib';
import vertexShader from '../../../shaders/vertex.glsl';
import fragmentShader from '../../../shaders/fragment.glsl';

interface Props {
    mediaElement?: HTMLMediaElement | null;
}

const PerlinBloomScene: React.FC<Props> = ({ mediaElement }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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
        camera.position.set(0, -2, 14);
        camera.lookAt(0, 0, 0);

        // Uniforms
        const uniforms = {
            u_time: { value: 0.0 },
            u_frequency: { value: 0.0 },
            u_red: { value: 1.0 },
            u_green: { value: 1.0 },
            u_blue: { value: 1.0 },
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
        const listener = new THREE.AudioListener();
        camera.add(listener);
        const audioContext = listener.context;
        console.log('audioContext', audioContext);

        const analyser = new THREE.AudioAnalyser(new THREE.Audio(listener), 64);
        console.log('analyser', analyser);

        console.log('mediaElement', mediaElement);

        // Connect react-player's media element if available
        if (mediaElement) {
            try {
                const source = audioContext.createMediaElementSource(mediaElement);
                analyser.analyser.disconnect();
                source.connect(analyser.analyser);
                source.connect(audioContext.destination);
                console.log('Visualizer connected to media element');
            } catch (err) {
                console.warn('Could not connect to react-player element:', err);
            }
        }

        // Post-processing
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 0.8, 0.5);

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // GUI
        const params = {
            red: 1.0,
            green: 1.0,
            blue: 1.0,
            threshold: 0.5,
            strength: 0.5,
            radius: 0.8,
        };

        const gui = new GUI();
        const colorsFolder = gui.addFolder('Colors');
        colorsFolder.add(params, 'red', 0, 1).onChange(v => (uniforms.u_red.value = v));
        colorsFolder.add(params, 'green', 0, 1).onChange(v => (uniforms.u_green.value = v));
        colorsFolder.add(params, 'blue', 0, 1).onChange(v => (uniforms.u_blue.value = v));

        const bloomFolder = gui.addFolder('Bloom');
        bloomFolder.add(params, 'threshold', 0, 1).onChange(v => (bloomPass.threshold = v));
        bloomFolder.add(params, 'strength', 0, 3).onChange(v => (bloomPass.strength = v));
        bloomFolder.add(params, 'radius', 0, 1).onChange(v => (bloomPass.radius = v));

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

            uniforms.u_time.value = clock.getElapsedTime();
            uniforms.u_frequency.value = analyser.getAverageFrequency();

            composer.render();
        };
        animate();

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            gui.destroy();

            mountRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, [mediaElement]);

    return <div ref={mountRef} />;
};

export default PerlinBloomScene;

import React from 'react';
import * as THREE from 'three';

export function RotatingCube() {
    const mountRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!mountRef.current) return;

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Initialize camera
        const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
        camera.position.z = 0.5;

        // Create scene
        const scene = new THREE.Scene();

        // Add cube
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const material = new THREE.MeshNormalMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Create renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Animation loop
        const animate = time => {
            mesh.rotation.x = time / 2000;
            mesh.rotation.y = time / 1000;
            renderer.render(scene, camera);
        };
        renderer.setAnimationLoop(animate);

        // Cleanup on unmount
        return () => {
            if (!mountRef.current) return;
            renderer.dispose();
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ overflow: 'hidden', width: '100vw', height: '100vh' }} />;
}

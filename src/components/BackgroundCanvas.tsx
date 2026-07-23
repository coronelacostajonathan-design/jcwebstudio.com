import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BackgroundCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Three.js Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0b0b, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 80, 220);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Grid System
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    let i = 0, j = 0;
    const numX = 40;
    const numZ = 30;
    const separation = 22;

    for (let ix = 0; ix < numX; ix++) {
      for (let iz = 0; iz < numZ; iz++) {
        positions[i] = ix * separation - (numX * separation) / 2; // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iz * separation - (numZ * separation) / 2; // z
        scales[j] = 1;
        i += 3;
        j++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Shader Material
    const material = new THREE.PointsMaterial({
      color: 0x00c8ff,
      size: 2.8,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Ambient Glowing Sphere Lines
    const ringGeo = new THREE.RingGeometry(80, 81, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00c8ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.08,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = -20;
    scene.add(ringMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let count = 0;
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x += (targetX - camera.position.x) * 0.03;
      camera.position.y += (-targetY + 80 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      const positions = particles.geometry.attributes.position.array as Float32Array;
      let i = 0;
      count += 0.03;

      for (let ix = 0; ix < numX; ix++) {
        for (let iz = 0; iz < numZ; iz++) {
          // Wave equation
          positions[i + 1] =
            Math.sin((ix + count) * 0.3) * 12 +
            Math.sin((iz + count) * 0.5) * 12;
          i += 3;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      ringMesh.rotation.z += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

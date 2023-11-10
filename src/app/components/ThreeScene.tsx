'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor(0x000000); // Black background
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      const createStar = () => {
        const geometry = new THREE.SphereGeometry(0.05, 24, 24);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);

        // Randomly position stars in the scene
        star.position.set(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          -Math.random() * 10
        );

        scene.add(star);
      };

      // Create a few yellow, white, and red stars
      for (let i = 0; i < 200; i++) {
        let starColor = 0xffffff; // White
        if (i % 3 === 0) {
          starColor = 0xffff00; // Yellow
        } else if (i % 5 === 0) {
          starColor = 0xff0000; // Red
        }
        const geometry = new THREE.SphereGeometry(0.07, 144, 144);
        const material = new THREE.MeshBasicMaterial({ color: starColor });
        const star = new THREE.Mesh(geometry, material);

        // Randomly position stars in the scene
        star.position.set(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          -Math.random() * 10
        );

        scene.add(star);
      }

      const animate = () => {
        requestAnimationFrame(animate);

        scene.children.forEach((child) => {
          child.position.z += 0.006; // Move stars forward
          if (child.position.z > 0) {
            child.position.z = -10; // Reset stars when they move out of the view
          }
        });

        renderer.render(scene, camera);
      };

      const handleResize = () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      animate();
    }
  }, []);

  return <div ref={containerRef} className="block absolute z-[-1] w-full h-auto" />;
};

export default ThreeScene;


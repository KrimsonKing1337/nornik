import { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Bounds } from '@react-three/drei';

import LogoModel from 'assets/logo.glb';

const Model = () => {
  const ref = useRef<any>(null);

  const { scene } = useGLTF(LogoModel as string);

  useFrame(() => {
    if (ref.current) ref.current.rotation.z -= 0.01;
  });

  useEffect(() => {
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;

      if (mesh.isMesh) {
        mesh.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#0077C8'),
          roughness: 0.5,
          metalness: 0.2,
        });
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.5}
      rotation={[20, 0, 0]}
    />
  );
};

export const App = () => {
  return (
    <div style={{ height: '50px', width: '50px' }}>
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={0.6} />

        <Environment preset="sunset" />

        <Bounds fit clip observe>
          <Model />
        </Bounds>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

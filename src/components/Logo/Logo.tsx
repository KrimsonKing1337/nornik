import { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

import classNames from 'classnames';

import LogoModel from 'assets/logo.glb';
import EnvSunset from 'assets/venice_sunset_1k.hdr';

import styles from './Logo.scss';

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

export type LogoProps = {
  className?: string;
};

export const Logo = ({ className = '' }: LogoProps) => {
  const logoClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  return (
    <div className={logoClassNames}>
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={0.6} />

        <Environment files={EnvSunset} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

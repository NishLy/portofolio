import { CameraControls, Preload } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { MutableRefObject, Suspense, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

import nebula from "../assets/models/space.glb?url";
import iss from "../assets/models/iss.glb?url";
import earthModel from "../assets/models/earth/scene.gltf?url";

import React from "react";
import {
  DepthOfField,
  Bloom,
  Noise,
  EffectComposer,
} from "@react-three/postprocessing";
import { Mesh } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

const ControlContext =
  React.createContext<MutableRefObject<CameraControls | null> | null>(null);

export function MouseParalax({ mouseToleance }: { mouseToleance?: number }) {
  const controls = React.useContext(ControlContext);
  useThree(() => {
    const mouseTolerance = mouseToleance || -0.000001;

    document.body.onmousemove = function (e) {
      const centerX = window.innerWidth * 0.5;
      const centerY = window.innerHeight * 0.5;

      controls?.current?.rotate(
        (e.clientX - centerX) * mouseTolerance,
        (e.clientY - centerY) * mouseTolerance,
        true
      );
    };
    controls?.current?.zoomTo(1, true);

    return () => {
      document.body.onmousemove = null;
    };
  });

  return (
    <>
      <CameraControls ref={controls} makeDefault />
    </>
  );
}

export default function ThreeCanvas() {
  const ref = useRef<CameraControls | null>(null);
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      frameloop="demand"
      shadows
      camera={{ position: [-5, 2, 10], fov: 60 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ControlContext.Provider value={ref}>
          <MouseParalax />
          <EffectComposer>
            <DepthOfField
              focusDistance={0}
              focalLength={3}
              bokehScale={5}
              height={480}
            />
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={3.5}
              height={300}
            />
            <Noise opacity={0.02} />
          </EffectComposer>
          <mesh position={[100, 0, 0]} rotation={[0, 0, 0]}>
            <sphereGeometry attach="geometry" args={[1, 16, 16]} />
            <meshStandardMaterial transparent roughness={0.1} metalness={0.1} />
            <pointLight intensity={100000} />
          </mesh>
          <Skybox />
          <Earth />
          <ISS />
        </ControlContext.Provider>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

function Earth() {
  const ref = useRef<Mesh | null>(null);
  const model = useGLTF(earthModel);

  useEffect(() => {
    document.body.onscroll = function (e) {
      if (!ref.current) return;
      const current = e.currentTarget as Window;
      const offset = current.scrollY / 2000;

      ref.current?.rotation.set(
        ref.current.rotation.x,
        ref.current.rotation.y + offset,
        ref.current.rotation.z
      );
    };

    return () => {
      document.body.onscroll = null;
    };
  }, [ref]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!ref.current) return;
      ref.current?.rotation.set(
        ref.current.rotation.x,
        ref.current.rotation.y + 0.0005,
        ref.current.rotation.z
      );
    }, 100);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <mesh
      ref={ref}
      rotation={[0, -1, 0]}
      scale={[0.5, 0.5, 0.5]}
      position={[10, 0, -60]}
    >
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight position={[10, 10, 10]} />
      <primitive object={(model as GLTF).scene} />
    </mesh>
  );
}

function ISS() {
  const model = useGLTF(iss);

  return (
    <mesh rotation={[4.5, 4.9, 3.2]} position={[10, 5, -10]}>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight position={[10, 10, 10]} />
      <primitive object={(model as GLTF).scene} />
    </mesh>
  );
}

export function Skybox() {
  const model = useGLTF(nebula);
  return (
    <mesh rotation={[0, 2.5, 0]} scale={[80, 80, 80]}>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight position={[10, 10, 10]} />
      <primitive object={(model as GLTF).scene} />
    </mesh>
  );
}

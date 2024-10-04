
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { Suspense, useEffect, useRef, useState } from "react";
import { Chair } from "../../../../Chair";
import { Avatar } from "../../../components/Avatar";
import { Ground } from "./Ground";
import { VideoText } from "./VideoText";

export const CanvasComponent = () => {
  const ref = useRef();





  return (
    <>
      <Suspense fallback={null}>
        <color attach="background" args={['black']} />
        <fog attach="fog" args={['black', 15, 20]} />
        <ambientLight intensity={0.36} />
        <spotLight position={[0, 10, -2]} intensity={0.96} />
        <directionalLight position={[-50, 0, -40]} intensity={0.8317} />

        <group ref={ref}>
          <Chair scale={0.01} position={[-3, -2, -2]} rotation={[0, 1, 0]} />
          <Avatar animation={"sitting"} position={[-3,-2,-2]} rotation={[0, 1, 0]} />
          <Ground position={[0,-2,0]}/>
          <VideoText />


        </group>
        <Intro />
      </Suspense>
    </>
  );
};


function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.pointer.x * 5, 3 + state.pointer.y * 2, 13), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
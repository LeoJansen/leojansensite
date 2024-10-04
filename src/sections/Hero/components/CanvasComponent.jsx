
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
        <ambientLight intensity={0.2915} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[-50, 0, -40]} intensity={0.17} />

        <group ref={ref}>
          <Chair scale={0.01} position={[-3, -1, 0]} rotation={[0, 1, 0]} />
          <Avatar animation={"sitting"} position={[-3,-1,0]} rotation={[0, 1, 0]} />
          <Ground />
          <VideoText position={[0, 0.15, -2]} />


        </group>
        <Intro />
      </Suspense>
    </>
  );
};


function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
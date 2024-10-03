
import { useFrame } from "@react-three/fiber";

import { useRef } from "react";
import { Chair } from "../../../../Chair";
import { Avatar } from "../../../components/Avatar";
import { Ground } from "./Ground";
import { VideoText } from "./VideoText";

export const CanvasComponent = () => {


  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const x = Math.sin(t / 2) * 2
    const y = Math.cos(t / 2) * 2
    const z = Math.sin(t / 2) * 2
  }

  )

  return (
    <>

      <group ref={ref}>
        <Chair scale={0.01} position={[-3, 0, 0]} rotation={[0, 1, 0]} />
        <Avatar animation="Typing" position={[-3, 0, 0]} rotation={[0, 1, 0]} />
        <Ground />
        <VideoText position={[0, 1.3, -2]} />


      </group>

    </>
  );
};



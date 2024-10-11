

import { Suspense, useRef, useState } from "react";




import { Avatar2 } from "../../components/Avatar2";
import { Environment, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../components/CanvasLoader";
import { Ground } from "../Hero/components/Ground";
import { VideoText } from "../Hero/components/VideoText";
import { ExperienceVideoText } from "./ExperienceVideoText";







export const CanvasComponent = ({ animationName, ...props }) => {


  const ref = useRef();


  return (
    <>
      <ambientLight intensity={1.05} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <directionalLight position={[20, 10, 10]} intensity={0.9101} />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />


      <Suspense fallback={<CanvasLoader />}>
        




        <Avatar2 animation={animationName} position={[0, -1.82, -6]} rotation={[0, 0, 0]} scale={1.8} />
        <Ground position={[0, 0, 0]} />
        <ExperienceVideoText position1={[-1.5, 5.3, -36]} rotation1={[0, 0, 0]} fontSize1={2} scale1={1} position2={[0,1.2,-36]} rotation2={[(0, 0, 0)]} scale2={0.1} fontSize2={8.5} />
      </Suspense>
    </>
  );
};


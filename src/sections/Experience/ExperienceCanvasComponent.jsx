

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
      {/*  <Suspense fallback={<CanvasLoader/>}>
        <color attach="background" args={['black']} />
        <fog attach="fog" args={['black', 15, 20]} />
        <ambientLight intensity={0.46} />
        <spotLight position={[0, 10, -2]} intensity={0.96} />
        <directionalLight position={[-50, 0, -40]} intensity={0.8317} />

        <group ref={ref}>
          <Chair scale={chair.scale} position={chair.position} rotation={chair.rotation} />

          <Avatar position={avatar.position} scale={avatar.scale} rotation={avatar.rotation} animation="sitting" />

          <Ground position={[0, -2, 0]} />
          <VideoText position1={videoText.text1.position} rotation1={videoText.text1.rotation}  scale1={videoText.text1.scale} position2={videoText.text2.position} rotation2={videoText.text2.rotation}  scale2={videoText.text2.scale}
          fontSize1={videoText.text1.fontSize}  fontSize2={videoText.text2.fontSize}/>


        </group>
        <Intro />
      </Suspense> */}
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




import { Suspense, useRef, useState } from "react";




import { Avatar2 } from "../../components/Avatar2";
import { Environment, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../components/CanvasLoader";
import { Ground } from "../Hero/components/Ground";
import { VideoText } from "../Hero/components/VideoText";







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
      <ambientLight intensity={1.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <directionalLight position={[20, 10, 10]} intensity={0.01} />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />


      <Suspense fallback={<CanvasLoader />}>
        <Environment preset="warehouse" />




        <Avatar2 animation={animationName} position={[0, -1.82, -6]} rotation={[0, 0, 0]} scale={3} />
        <Ground position={[0, 0, 0]} />
        <VideoText position1={[-0.16782, -0.0789, -6]} rotation1={[0, 0, 0]} fontSize1={0.4} scale1={2} position2={[0,-0.81,-6]} rotation2={[(0, 0, 0)]} scale2={2}
          fontSize2={12.5} />
      </Suspense>
    </>
  );
};


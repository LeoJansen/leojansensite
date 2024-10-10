import { Text, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function ExperienceVideoText({
  position1,
  rotation1,
  scale1,
  fontSize1,
  position2,
  rotation2,
  scale2,
  fontSize2,
...props}) {




    const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
    useEffect(() => void video.play(), [video])
    return (
      <>
   
  

        <Text font="/Inter-Bold.woff" fontSize={fontSize1} letterSpacing={-0.03} {...props} position={position1} rotation={rotation1} color={"#ffffff"}
          className="bright-text">
    Hello, I&apos;m
        <meshBasicMaterial toneMapped={false} color={"#ffffff"}   className="bright-text" >
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} color={"#ffffff"}   className="bright-text"/>
        </meshBasicMaterial>
      </Text>
      <Text font="/Inter-Bold.woff" fontSize={fontSize2} letterSpacing={-0.03} {...props} position={position2} >
        leo
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
     
   
      </>
      
    )
  }
import { Text, Text3D } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";

export function VideoText({isSmall=true, isMobile=false, isTablet=false, ...props}) {


    const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
    useEffect(() => void video.play(), [video])
    return (
      <>
      { isSmall &&  ( <>
        <Text font="/Inter-Bold.woff" fontSize={0.4} letterSpacing={-0.03} {...props} position={[-0.16782,-0.0789,-4]} rotate={[2,20,0]}>
    Hello, I&apos;m
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
      <Text font="/Inter-Bold.woff" fontSize={1.5} letterSpacing={-0.03} {...props} position={[0,-0.81,-4]} depth={51}>
        leo
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
      </>)
      } {
        !isSmall && !isMobile && !isTablet && (

        
        <>
           <Text font="/Inter-Bold.woff" fontSize={0.6} letterSpacing={-0.03} {...props} position={[-0.61,0.5,-4]} rotate={[2,20,0]}>
    Hello, I'm
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
      <Text font="/Inter-Bold.woff" fontSize={2.8} letterSpacing={-0.03} {...props} position={[0,-0.81,-4]} depth={51}>
        leo
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
        </>
        )
      }
   
      </>
      
    )
  }
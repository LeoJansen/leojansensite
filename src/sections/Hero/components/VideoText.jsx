import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";

export function VideoText(props) {
    const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
    useEffect(() => void video.play(), [video])
    return (
      <>
      <Text font="/Inter-Bold.woff" fontSize={0.6} letterSpacing={-0.03} {...props} position={[-0.61,0.5,-4]}>
    Hello, I'm
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
      <Text font="/Inter-Bold.woff" fontSize={2.8} letterSpacing={-0.03} {...props} position={[0,-0.81,-4]}>
        leo
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
      </>
      
    )
  }
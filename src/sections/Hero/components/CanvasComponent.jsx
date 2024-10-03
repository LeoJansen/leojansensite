import { useDepthBuffer, VideoTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { MovingSpot } from "../../../components/MovingSpot";
import { CodeMeter } from "../../../components/CodeMeter";
import { useRef } from "react";
import { Chair } from "../../../../Chair";
import { Avatar } from "../../../components/Avatar";

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
            <Chair scale={0.01} position={[-3,0,0]} rotation={[0,1,0]}/>
          <Avatar animation="Typing" position={[-3, 0, 0]} rotation={[0,1,0]}/>
          

          <VideoText position={[0, 1.3, -2]} />
          <Ground />
          
            </group>

        </>
    );
};


function VideoText(props) {
    const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
    useEffect(() => void video.play(), [video])
    return (
      <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
        leo
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
    )
  }
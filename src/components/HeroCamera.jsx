import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react"

const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef(null);

    useFrame((state, delta) => {
        if(groupRef.current) {
            easing.damp3(state.camera.position, [0, 0, 15], 0.25, delta)
        };
        if(!isMobile) {
            easing.damp3(groupRef.current.rotation, [-state.pointer.y/3, -state.pointer.x/5, 0], 0.25, delta)
        };
    });

   

  return (
    <group ref={groupRef} scale={1.0}>
      {children}
    </group>
  )
}

export default HeroCamera
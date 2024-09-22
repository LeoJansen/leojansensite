import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react"

const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef(null);

    useFrame((state, delta) => {
        if(groupRef.current) {
            easing.damp3(state.camera.position, [0, 0, 15], 0.25, delta)
        }
    });

    if(!isMobile) {

    };

  return (
    <group ref={groupRef}>
      {children}
    </group>
  )
}

export default HeroCamera
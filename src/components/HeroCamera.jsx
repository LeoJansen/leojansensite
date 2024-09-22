import { useFrame } from "@react-three/fiber";
import { useRef } from "react"

const HeroCamera = ({children}) => {
    const groupRef = useRef(null);

    useFrame((state, delta) => {
        if(groupRef.current) {
            groupRef.current.rotation.y += delta
        }
    })

  return (
    <group>
      {children}
    </group>
  )
}

export default HeroCamera
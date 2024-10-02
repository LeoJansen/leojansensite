import { SpotLight } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Vector3 } from "three"

export function MovingSpot({ vec = new Vector3(), ...props }) {
 
    const light = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame((state) => {
      light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight castShadow ref={light} penumbra={2} distance={16} angle={0.35} attenuation={11} anglePower={10} intensity={0.3} {...props} />
  }
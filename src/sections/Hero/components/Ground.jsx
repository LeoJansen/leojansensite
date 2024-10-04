import { Reflector, useTexture } from "@react-three/drei"


export function Ground() {
    const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
    return (
      <Reflector blur={[400, 100]} resolution={2048} args={[100, 100]} mirror={0} mixBlur={6} mixContrast={1}  mixStrength={11.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0,-2,0]} >
        {(Material, props) => <Material color="rgb(80,30,120)" metalness={0.9} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
      </Reflector>
    )
  }
import { Vector3 } from 'three'
import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, SpotLight, useDepthBuffer, OrbitControls } from '@react-three/drei'
import Statue from '../../components/Statue'

export default function Hero() {
  return (
    <section className='h-screen'>
    <Canvas shadows dpr={[1, 2]} camera={{ position: [-2, 2, 16], fov: 50, near: 1, far: 230 }}>
      <OrbitControls/>
      <color attach="background" args={['#202020']} />
      <fog attach="fog" args={['#202020', 5, 20]} />
      <ambientLight intensity={0.543210951391015} />
      <Scene />
    </Canvas>
    </section>
  )
}

function Scene() {
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
  const depthBuffer = useDepthBuffer({ frames: 1 })
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dragon/model.gltf')
  return (
    <>
      <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[-3, 5, 3]} />
      <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[-1, 5, 3]} />

      <Statue receiveShadow castShadow scale={0.125}  position={[-5, -1,3]}/>
      <mesh receiveShadow position={[0, -6, 10]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial />
      </mesh>
    </>
  )
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
    light.current.target.updateMatrixWorld()
  })
  return <SpotLight castShadow ref={light} penumbra={1} distance={16} angle={2.1435} attenuation={17} anglePower={26} intensity={29} {...props} />
}
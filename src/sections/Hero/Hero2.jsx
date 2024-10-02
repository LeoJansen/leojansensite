import { Vector3 } from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, SpotLight, SpotLightShadow, useDepthBuffer, OrbitControls, PerspectiveCamera, MeshReflectorMaterial, Environment, Backdrop } from '@react-three/drei';
import Statue from '../../components/Statue';
import HeroCamera from './components/HeroCamera';



export default function Hero() {
  const cameraRef = useRef();





  return (
    <section id="hero" className='h-screen w-full'>
      <div className="absolute h-screen w-full -z-10">
        <Canvas shadows dpr={[1, 2]} className="w-full">
          <HeroCamera cameraRef={cameraRef} />
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.32} />
          <Scene />
        </Canvas>
      </div>
      <div className="flex w-full h-full bg-transparent justify-center items-center">
      <h1 className="text-white text-3xl ">Inspiration</h1>

      </div>
      

    </section>
  )
}

function Scene() {
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
  const depthBuffer = useDepthBuffer({ frames: 1 })
  const targetRef = useRef();

  return (
    <>
      <MovingSpot depthBuffer={depthBuffer} color="rgb(222,255,255)" position={[1, 5, 3]} targetPosition={[0, 0, 0]} />
      <Statue receiveShadow castShadow scale={0.125} position={[0, 0, 0]} />
      <group ref={targetRef}>
        <mesh receiveShadow position={[0, -4.867, 0]} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[50, 50]} />
          <meshPhongMaterial color="rgb(80,10,80)" />
        </mesh>
      </group>
    </>
  )
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    light.current.target.position.lerp(vec.set(2, -3, -5), 0.1)
    light.current.target.updateMatrixWorld()
  })
  return <SpotLight castShadow ref={light} penumbra={111} distance={26} angle={0.85} attenuation={29} anglePower={21} intensity={222.8} {...props} />
}

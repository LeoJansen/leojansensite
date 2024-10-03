import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'
import { Chair } from '../../../Chair';

import { Avatar } from '../../components/Avatar';
import { CanvasComponent } from './components/CanvasComponent';

export default function Hero() {


  return (
    <section className='w-full h-screen'>
    <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
      <color attach="background" args={['black']} />
      <fog attach="fog" args={['black', 15, 20]} />
 
       <CanvasComponent />
      
       
 
    </Canvas>
    </section>
  )
}







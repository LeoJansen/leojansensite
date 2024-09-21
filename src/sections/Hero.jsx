/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import HackerRoom from "../components/HackerRoom"




const Hero = () => {
  return (
    <section className="min-h-screen border-2 border-blue-500 w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-xl sm:text-3xl font-medium text-white text-center font-generalsans">Hi, I am Leo <span className="waving-hand">👋</span> </p>
        <p className="hero_tag text-gray_gradient ">Building Products & Brands</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom scale={0.05} position={[0, 0, 0]} rotation={[0, -Math.PI/2, 0]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 5]} />


          </Suspense>

        </Canvas>

      </div>

    </section>
  )
}

export default Hero
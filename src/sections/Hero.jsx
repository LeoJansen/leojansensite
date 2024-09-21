import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import HackerRoom from "../components/HackerRoom"
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive"




const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  const x = useControls('HackerRoom', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 0.07,
      min: 0.01,
      max: 0.5,
    },
  });


  return (
    <section className="min-h-screen border-2 border-blue-500 w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-xl sm:text-3xl font-medium text-white text-center font-generalsans">Hi, I am Leo <span className="waving-hand">👋</span> </p>
        <p className="hero_tag text-gray_gradient ">Building Products & Brands</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva />

        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              scale={isMobile ? 0.07 : 0.1}
              position={isMobile ? [0.5,-3,2.9] : [0.5,-10,2.9]}
              rotation={[0.4, 3.2, 0.0]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />


          </Suspense>

        </Canvas>

      </div>

    </section>
  )
}

export default Hero
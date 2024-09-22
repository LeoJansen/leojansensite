import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import HackerRoom from "../components/HackerRoom"
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import Target from "../components/Target"
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/Cube"




const Hero = () => {
  const isSmall = useMediaQuery({maxWidth: 480});
  const isMobile = useMediaQuery({minWidth: 480.001, maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768.001, maxWidth: 1024});
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen border-2 border-blue-500 w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-20">
        <p className="text-xl sm:text-3xl font-medium text-white text-center font-generalsans">Hi, I am Leo <span className="waving-hand">👋</span> </p>
        <p className="hero_tag text-blue-500 text-3xl font-bold  ">Building Products & Brands</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}

        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.2, -Math.PI, 0]}
            />
            <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactLogoScale}/>
              <Cube position={sizes.cubePosition}/>
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />


          </Suspense>

        </Canvas>

      </div>

    </section>
  )
}

export default Hero
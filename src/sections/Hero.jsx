import { PerspectiveCamera, Ring } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import { Button } from "../components/Button";
import Spline from "@splinetool/react-spline";
import { motion } from 'framer-motion';
import {images} from "../constants/images";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
    },
  },
};

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen border-2 border-blue-500 w-full flex flex-col relative">
        <div className="absolute flex inset-0">
      <Spline scene="https://prod.spline.design/KPq2zRTBztdxQH2L/scene.splinecode" />
      </div>
      <div className="app__header-container">
        <div className="app__header-info">
          <motion.div className="app__header-badge app__flex"
      
            >
        
            <motion.div className="badge-cmp app__flex" style={{ marginLeft: 20 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{
                duration: 0.3,
                delay: 3.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1
              }}>
              <p > Hello, I am</p>
              <br />
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.3,
                  delay: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1
                }}>
                <h1 className='head-text'>Leo</h1>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="app__header-tag"
            whileInView={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{ delay: 7, duration: 1, ease: "easeInOut" }}>
            <div className="tag-cmp app__flex">
              <p className="p-text">Web Developer</p>
              <p className="p-text">Freelancer</p>
            </div>
          </motion.div>
        </div>
        <motion.div className="app__header-circles"
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}>
          {[images.react, images.redux, images.node].map((circle, index) => (
            <>
            <div className="circle-cmp app__flex" key={`circle-${circle}`}
            data-tip
            data-for={circle}
            >
              <img src={circle} alt="circle" />
            </div>
            
            </>
            
          ))}
        </motion.div>
      </div>
     
    </section>
  )
}

export default Hero
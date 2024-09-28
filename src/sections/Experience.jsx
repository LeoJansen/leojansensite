import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants/index.js";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { OrbitControls } from "@react-three/drei";

import DevAvatar from "../components/DevAvatar";


const Experience = () => {
  return (
    <div className="c-space my-20 ">
      <div className="w-full text-white-600">
        <h3 className="head-text" > My work experience</h3>
        <div className="work-container">
          <div className="work-canvas">
          <Canvas shadows pixelRatio={[1, 2]} dpr={[1, 2]}> 
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={10.5} />
              <directionalLight position={[10, 10, 10]} intensity={.5} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
              <mesh position={[0, 10, -15]} receiveShadow>
                  <planeGeometry args={[1100, 40]} />
                  <meshStandardMaterial color="rgba(20,20,20,0.8)" />
                </mesh>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, -10]} receiveShadow>
                  <planeGeometry args={[1200, 1130]} />
                  <meshStandardMaterial color="rgba(20,20,20,0.9)" />
                  
                </mesh>
                <DevAvatar position-y={-3} scale={3}  castShadow />
              </Suspense>
            </Canvas>
            </div>

            <div className="work-content">
              <div className="sm:py-10 sm:px-5 px-2.5">
                {workExperiences.map(({ id, name, icon, pos, duration, title, animation }) => (
                  <div key={id} className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" />
                      </div>
                      <div className="work-content_bar" />
                    </div>

                    <div  className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{name}</p>
                    <p className="text-sm mb-5">
                      {pos} -- <span>{duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{title}</p>
                      
                    </div>
                  </div>
                ))}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
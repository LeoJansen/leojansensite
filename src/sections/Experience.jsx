import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { workExperiences } from '../constants/index.js';
import { Avatar2 } from '../components/Avatar2.jsx';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('thoughtful');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas camera={{ position: [0, 3, 25], fov: 15 }}>
              <ambientLight intensity={1.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[20, 10, 10]} intensity={0.01} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />


              <Suspense fallback={<CanvasLoader />}>
               <mesh position={[0, 10, -15]} receiveShadow>
                  <planeGeometry args={[1100, 4000]} />
                  <meshStandardMaterial color="rgba(255,255,255,0.8)" />
                </mesh> 
               <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, -10]} receiveShadow>
                  <planeGeometry args={[1200, 1130]} />
                  <meshStandardMaterial color="rgba(20,20,20,0.9)" />
                </mesh> 
                {/* Right Wall */}
               <mesh rotation={[0, -Math.PI / 2, 0]} position={[150, 0, 0]} receiveShadow>
                  <planeGeometry args={[1100, 4000]} />
                  <meshStandardMaterial color="rgba(200,0,255,0.9)" />
                </mesh> 
                {/* Left Wall */}
              <mesh rotation={[0, Math.PI / 2, 0]} position={[-150, 0, 0]} receiveShadow>
                  <planeGeometry args={[1100, 4000]} />
                  <meshStandardMaterial color="rgba(20,20,80,0.9)" />
                </mesh> 
            



                <Avatar2 position-y={-3} scale={3} animation={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('thoughtful')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

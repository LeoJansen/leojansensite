import { Suspense, useState } from "react"
import { myProjects } from "../../constants/index.js";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../components/CanvasLoader.jsx";
import DemoComputer from "../../components/DemoComputer.jsx";
import { VideoText } from "./components/VideoText.jsx";



const projectCount = myProjects.length;


const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];




  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else if (direction === 'next') {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      };
    });

  };



  return (
    <section className="c-space my-20 h-screen flex flex-col gap-4">


      <p className="head-text mt-2">My Work</p>
      <div className="border border-black-300 w-full h-96 rounded-lg bg-black-200 md:h-[50vh] min-h-96 overflow-hidden ">
   
      <Canvas>
          <ambientLight intensity={3.3} />
          <directionalLight position={[10, 10, 5]} />
          <Center>
            <Suspense fallback={<CanvasLoader />}>
              <group scale={3} position={[-0.5, -4, -1.1]} rotation={[0, -0.1, 0]}>
               <VideoText videoUrl={currentProject.texture} />
              </group>
            </Suspense>
          </Center>
          <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
        </Canvas> 

      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2 py-2 px-5 shadow-2xl">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
        <div className="flex justify-between items-center">
            <button className="arrow-btn"
              onClick={() => handleNavigation('previous')}
            >
              <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
            </button>
            <button className="arrow-btn"
              onClick={() => handleNavigation('next')}
            >
              <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
            </button>
          </div>


          <div className="absolute top-0 right-0 -z-10">
            <img src={currentProject.spotlight} alt="spotligth" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="flex gap-4 items-center">
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg " style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
          </div>
          <p className="text-white  text-md md:text-2xl font-semibold animatedText">{currentProject.title}</p>

          </div>
        
          <div className="flex flex-col gap-5 text-white-600 my-500">
            
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}

            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
     




        </div>
      </div>

    </section>
  )
}

export default Projects
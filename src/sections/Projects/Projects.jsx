import { useState } from "react"
import { myProjects } from "../../constants/index.js";

import ReactPlayer from 'react-player/youtube'
import { useMediaQuery } from "react-responsive";


const projectCount = myProjects.length;




const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: 1024 });




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
    <section className="c-space h-screen w-full bg-[rgba(10,10,10,0.5)]  -z-40">
      <div className="flex w-full p-4">
        <p className="head-text ">My Work</p>
      </div>
      <div className="flex flex-col w-full lg:flex-row justify-center items-center ">

        <div className={`bg-black w-fit h-fit rounded-lg flex overflow-hidden`}>    
    


            <ReactPlayer width={isMobile ? "90vw" :" 40vw" } url='https://www.youtube.com/embed/fgy3ycb1Zow' /> 




        </div>
        <div className="flex gap-5 mt-2 py-2 px-5 shadow-2xl lg:w-[50vw] ">
          <div className="grid grid-cols-4 relative gap-5 sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="flex w-full h-full justify-center items-center  col-start-1 row-start-1">
              <button className="arrow-btn"
                onClick={() => handleNavigation('previous')}
              >
                <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
              </button>
            </div>


            <div className="absolute top-0 right-0 -z-10">
              <img src={currentProject.spotlight} alt="spotligth" className="w-full h-96 object-cover rounded-xl" />
            </div>

            <div className="flex gap-4 items-center row-span-1 col-span-2 row-start-1 col-start-2">
              <div className="p-3 backdrop-filter backdrop-blur-3xl w-20 h-fit  flex justify-center rounded-lg " style={currentProject.logoStyle}>
                <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
              </div>
              <p className="text-white  text-md md:text-2xl font-semibold animatedText">{currentProject.title}</p>

            </div>

            <div className="flex flex-col gap-5 text-white-600 my-500 col-span-4 row-start-2">

              <p className="animatedText">{currentProject.desc}</p>
        
            </div>
            <div className="flex flex-wrap gap-5 row-start-3 col-span-2 col-start-1 w-full h-full justify-center items-center ">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}

              </div>

            
            </div>
            <div className="flex w-full h-full justify-center items-center col-span-2 col-start-3 row-start-3">
            <a
                className="flex w-full h-full justify-center items-center 3 gap-2 cursor-pointer text-white-600 "
                href={currentProject.href}
                target="_blank"
                rel="noreferrer">
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>

            </div>

            <div className="flex w-full h-full justify-center items-center col-start-4 row-start-1">
  
              <button className="arrow-btn"
                onClick={() => handleNavigation('next')}
              >
                <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
              </button>
            </div>



          </div>
        </div>

      </div>




    </section>
  )
}

export default Projects
import { useState } from "react"
import { myProjects } from "../constants/index.js";


const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];
  console.log(myProjects[0])
  console.log(currentProject.href)
  console.log(myProjects[selectedProjectIndex].href)
  const handleNavigation = () => {

  }



  return (
    <section className="c-space my-20">

      <p className="head-text">My Work</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 py-10 px-5 shadow-2xl">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">


          <div className="absolute top-0 right-0">
            <img src={myProjects[0].spotlight} alt="spotligth" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg " style={currentProject.logoStyle}>
            <img src={myProjects[0].logo} alt="logo" className="w-10 h-10 shadow-sm" />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-500">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
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
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn"
              onClick={() => handleNavigation('previous')}
            >
              <img src="/assets/right-arrow.png" alt="arrow" className="w-4 h-4" />

            </button>


          </div>



        </div>
      </div>

    </section>
  )
}

export default Projects
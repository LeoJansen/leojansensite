import { Canvas } from "@react-three/fiber"
import { workExperiences } from "../constants"


const Experience = () => {
  return (
    <div className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text" > My work experience</h3>
        <div className="work-container">
          <div className="work-canvas">

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
                    <div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
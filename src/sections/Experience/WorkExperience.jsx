import { Suspense, useState } from "react"
import { workExperiences } from "../../constants";
import { Avatar2 } from "../../components/Avatar2";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

import { CanvasComponent } from "./ExperienceCanvasComponent";



const WorkExperience = () => {
    const [selectedExperience, setSelectedExperience] = useState(0);
    const [animationName, setAnimationName] = useState('thoughtful');

    const handleNavigation = (direction) => {
        setSelectedExperience((index) => {
            if (direction === "previous") {
                return index === 0 ? workExperiences.length - 1 : index - 1;
            } else {
                return index === workExperiences.length - 1 ? 0 : index + 1;
            }
        })


    };


    const currentExperience = workExperiences[selectedExperience];

    return (
        <section id="experience" className="c-space h-screen flex flex-col justify-between">
            <div className="flex w-full my-4 self-start">
                <div className="head-text ">Experience</div>
            </div>
            <div className="flex h-full justify-center items-center ">
                <div className="flex flex-col md:flex-row justify-stretch h-fit rounded-lg overflow-hidden">


                    <div className="flex h-[60vh] lg:h-[80vh]">
                        <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} >
                           <PerspectiveCamera makeDefault position={[0, -1, 2]}   fov={25} />
                           <CanvasComponent animationName={animationName}/>
                        </Canvas>
                    </div>


                    <div className="flex w-full bg-black p-4 md:px-8 ">
                        <div
                            key={selectedExperience}
                            onClick={() => setAnimationName(currentExperience.animation.toLowerCase())}
                           
                            onPointerOut={() => setAnimationName('thoughtful')}
                            className="flex flex-row justify-center items-center group">
                            <div>
                                <button className="arrow-btn"
                                    onClick={() => handleNavigation('previous')}
                                >
                                    <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
                                </button>
                            </div>


                            <div className="flex flex-col">
                                <div className="flex flex-row items-center gap-4">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="rounded-md w-16 h-16 bg-[#1d1d1d]">
                                            <div className="w-fit h-fit rounded-full overflow-hidden m-[0.7891px]">
                                            <img className="w-full h-full rounded-md" src={currentExperience.icon} alt="" />

                                            </div>
                                            
                                        </div>



                                    </div>

                                    <p className="font-bold text-white-800">{currentExperience.name}</p>


                                </div>


                                <div className="sm:p-5 px-2.5 py-5 text-neutral-400">

                                    <p className="text-sm mb-5">
                                        {currentExperience.pos} -- <span>{currentExperience.duration}</span>
                                    </p>
                                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{currentExperience.title}</p>
                                </div>

                            </div>

                            <div>
                                <button className="arrow-btn"
                                    onClick={() => handleNavigation('next')}
                                >
                                    <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
                                </button>

                            </div>

                        </div>

                    </div>


                </div>

            </div>




        </section>

    )
}

export default WorkExperience
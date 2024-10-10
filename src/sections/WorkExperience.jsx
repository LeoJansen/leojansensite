import { Suspense, useState } from "react"
import { workExperiences } from "../constants";
import { Avatar2 } from "../components/Avatar2";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";



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
        <section className="c-space h-screen flex flex-col justify-between">
            <div className="flex w-full my-4 self-start">
                <div className="head-text ">WorkExperience</div>
            </div>
            <div className="flex h-full justify-center items-center ">
                <div className="flex flex-col md:flex-row justify-stretch h-fit rounded-lg overflow-hidden">


                    <div className="flex h-[60vh] lg:h-[80vh]">
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


                    <div className="flex w-full bg-black p-4 md:px-8 ">
                        <div
                            key={selectedExperience}
                            onClick={() => setAnimationName(currentExperience.animation.toLowerCase())}
                            onPointerOver={() => setAnimationName(currentExperience.animation.toLowerCase())}
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
                                        <div className="">
                                            <img className="w-full h-full" src={currentExperience.icon} alt="" />
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
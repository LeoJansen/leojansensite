import Globe from "react-globe.gl";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";


const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    setHasCopied(() => true);
    navigator.clipboad.writeText("leo@leonardojansen.com")
    setTimeout(() => setHasCopied(false), 3000)
  };
  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => setHasCopied(false), 3000)
    }
  }, [hasCopied])

  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext"> Hi, I&apos;m Leo.</p>
              <p className="grid-subtext">With 4 years of experience, I am a full-stack developer.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">I specialize in Javascript/Typescript with a focus on React and NextJs ecosystems.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[236px] h-fit flex justify-center items-center overflow-hidden">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  { lat: -25.52669798834267, lng: -54.55250972271618, text: "I'm here!" },
                  { lat: 25.52669798834267, lng: 0.55250972271618, text: "Zoom and Rotate this globe!", }
                ]}
                labelColor={() => "rgb(25,255,250)"}
                labelDotRadius={0.25}
                labelSize={() => 3}
              />,
            </div>
            <div className="z-20">
              <p className="grid-headtext">I work remotely across most timezones.</p>
              <p className="grid-subtext">I&apos;m based in Foz do Iguaçu, Brazil, with remote work available.</p>
              <Button name="Contact me" isBeam={true} containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Passion for Coding</p>
              <p className="grid-subtext"> “Programming is not just a vocation for me; It&apos;s what I was born to do. Every time I get involved in a project and start coding, I feel that my purpose in life is to be in contact with algorithms.”</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[146px] sm:h-[276px] h-fit object-cover sm:object-top" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">leo@leonardojansen.com</p>
              </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About
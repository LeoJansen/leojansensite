import { useEffect, useState } from 'react';
import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import WorkExperience from "./sections/Experience/WorkExperience";

import Footer from "./sections/Footer";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects/Projects";
import { useInView } from 'react-intersection-observer';

const Section = ({ id, color, children, onInView }) => {
  const [ref, inView] = useInView({ threshold: 0.70 });

  useEffect(() => {
    if (inView) {
      console.log({ inView, color });
      onInView(color);
    }
  }, [inView, color, onInView]);

  return (
    <div ref={ref} id={id} >
      {children}
    </div>
  );
};

const App = () => {


  const [navbarColor, setNavbarColor] = useState('bg-[#000000]');

  const handleInView = (color) => {
    setNavbarColor(color);
  };

  return (
    <main className="w-full mx-auto">
      <Navbar className={navbarColor} />
      <Section id="section1" color="bg-[transparent]" onInView={handleInView}>
        <Hero />
      </Section>
      <Section id="section2" color="bg-[rgba(12,12,12,0.9)]" onInView={handleInView}>
        <About />
      </Section>
      <Section id="section3" color="bg-[rgba(12,12,12,0.9)]" onInView={handleInView}>
        <Projects />
      </Section>
      <Section id="section4" color="bg-[rgba(12,12,12,0.9)]" onInView={handleInView}>
        <Clients />
      </Section>
      <Section id="section5" color="bg-[rgba(5,5,5,0.9)]" onInView={handleInView}>

        <WorkExperience />
      </Section>
      <Section id="section6" color="bg-[#0c0414]" onInView={handleInView}>
        <Contact />
        <Footer />
      </Section>
     
       
     






    </main>
  )
};

export default App;

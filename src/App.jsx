
import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import WorkExperience from "./sections/Experience/WorkExperience";

import Footer from "./sections/Footer";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects/Projects";


//#5C53AC

const App = () => {
  return (
    <main className="w-full mx-auto">
      <Navbar />
    <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  )
};

export default App;

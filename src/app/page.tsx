import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

const page = () => {
  return (
    // bg-gradient-to-br from-[#778DA9] to-[#E0E1DD]
    <div className="  flex flex-col  bg-white">
      <Navbar />

      <HeroSection />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default page;

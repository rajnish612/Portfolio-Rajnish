import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import AIMLSection from "./components/AIMLSection";
import ToolsFrameworks from "./components/ToolsFrameworks";

const page = () => {
  return (
    <div className="flex flex-col bg-transparent text-foreground overflow-x-hidden">
      <Navbar />

      <HeroSection />
      <ToolsFrameworks />
      <AIMLSection />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default page;

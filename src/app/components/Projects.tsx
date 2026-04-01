"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Poppins, Titan_One } from "next/font/google";
const projects = [
  {
    title: "PDF CHATBOT",
    description:
      "This tool allows users to upload any PDF and ask questions related to its content. The AI reads the document and provides instant, accurate answers, making it perfect for research, learning, or quickly extracting insights from documents.",
    image: "/images/pdfChatbot.png",
    github: "https://github.com/rajnish612/pdf-chatbot-backend",
    live: "https://pdf-chatbot-frontend-ten.vercel.app/",
  },
  {
    title: "Job Connect",
    description:
      "This is a full-stack MERN application that connects job seekers with recruiters. Job seekers can register, create detailed profiles with their skills and experience, and upload projects with GitHub or demo links to showcase their professional portfolio. Recruiters can browse developers, filter candidates by location, skills, and experience, and contact them directly via email or social links. The application supports pagination for large datasets and is built with React.js and Tailwind CSS on the frontend, Node.js and Express.js on the backend, MongoDB with Mongoose for the database, and JWT for authentication.",
    image: "/images/jobConnect.png",
    github: "https://github.com/rajnish612/JobConnect",
    live: "https://job-connect-liard.vercel.app/",
  },
  {
    title: "Genesis AI",
    description:
      'I built a custom AI desktop assistant called Genesis, designed to perform actions on voice command with a wake-word activation system. The assistant wakes up when the user says "Hey Genesis" and can open desktop applications using voice commands, provided the application path is added to the agent.',
    image: "/images/genesisAI.png",
    github: "https://github.com/rajnish612/Genesis-AI",
    live: "https://genesis-ai-website-5ysi.vercel.app/",
  },
  {
    title:
      "Human Emotion Recognition using Convolutional Neural Networks (CNN) on a Noisy and Unbalanced Dataset (64% Accuracy)",
    description:
      "I built a deep learning–based web app that can detect human emotions from facial expressions in real time. The project uses Convolutional Neural Networks (CNN) trained on labeled emotion datasets to classify emotions such as happy, sad, angry, surprised, neutral, fear, and disgust.",
    // image: "/images/genesisAI.png",
    github: "https://github.com/rajnish612/HumanEmotionRecognitionCNN",
    // live: "https://genesis-ai-website-5ysi.vercel.app/",
  },

  {
    title: "TechAgency landing page",
    description:
      "I am building a full-featured chat web application from scratch that includes real-time messaging, user authentication, and voice/video calling. The app uses React.js with Tailwind CSS for a polished frontend, Node.js with GraphQL for backend functionality, MongoDB for data management, Socket.io for real-time interactions, and WebRTC for voice and video capabilities. Current efforts are focused on integrating video calling, enhancing the UI with responsive design, and optimizing overall performance for a faster and more engaging user experience.",
    image: "/images/techAgency.png",
    github: "https://github.com/rajnish612/TechAgency",
    live: "https://tech-agency-nylr.vercel.app/",
  },
  {
    title: "Digital Marketing Agency landing page",
    description:
      "This project is a sleek, responsive landing page for a digital marketing agency, built end-to-end with the MERN stack. It features a React frontend with dynamic service sections, an interactive testimonial carousel, and a sticky navigation bar. The design is fully responsive, providing an optimal viewing experience across desktop, tablet, and mobile devices.",
    image: "/images/digitalMarketingAgency.png",
    github: "https://github.com/rajnish612/Digital-Marketing-Agency",
    live: "https://digital-marketing-agency-xi.vercel.app/",
  },
];
const titanOne = Titan_One({
  weight: "400",
  subsets: ["latin-ext"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["devanagari"],
});
import { motion } from "motion/react";
const Projects = () => {
  return (
    <div id="projects" className="section-shell flex flex-col mt-20 px-4 py-16">
      {/* Section Header */}
      <div className="mx-auto w-full max-w-6xl mb-16">
        <div className="text-center mb-8">
          <h1
            style={titanOne.style}
            className="font-display readable-title text-5xl md:text-6xl font-black mb-4"
          >
            Featured Projects
          </h1>
          <p
            style={poppins.style}
            className="readable-body text-lg max-w-2xl mx-auto"
          >
            Explore my latest work showcasing full-stack development and modern
            technologies
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="h-1 w-24 rounded-full accent-gradient" />
          <div className="w-3 h-3 bg-teal-300 rounded-full" />
          <div className="h-1 w-24 rounded-full accent-gradient" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              whileInView={{ opacity: 1, y: 0 }}
              key={project.title}
              className="relative group"
            >
              <div className="glass-card relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                <div
                  className={`flex ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col gap-8 lg:gap-12 items-center`}
                >
                  <div className="flex-1 max-w-lg">
                    <div className="relative group">
                      <Card className="relative bg-slate-900/70 border border-white/15 shadow-md overflow-hidden">
                        <CardHeader className="pb-2 pt-4 px-6 flex flex-row items-center justify-between bg-slate-950/90 border-b border-white/10">
                          <h4
                            style={titanOne.style}
                            className="font-bold text-white text-xl"
                          >
                            {project.title}
                          </h4>
                          <div className="flex space-x-3">
                            <a
                              href={project.github}
                              className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="text-white" size={18} />
                            </a>
                            {project.live && (
                              <a
                                href={project.live}
                                className="p-2 bg-teal-500 hover:bg-teal-400 rounded-lg transition-colors cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FiExternalLink
                                  className="text-white"
                                  size={18}
                                />
                              </a>
                            )}
                          </div>
                        </CardHeader>
                        <CardBody className="px-6 pb-6 bg-slate-900/70">
                          <div className="relative overflow-hidden rounded-lg">
                            <Image
                              alt={`${project.title} preview`}
                              className="object-cover w-full h-64"
                              src={project.image}
                              width={400}
                              height={250}
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-1 h-8 bg-teal-300 rounded-full" />
                        <h2
                          style={titanOne.style}
                          className="text-3xl lg:text-4xl font-black text-white"
                        >
                          {project.title}
                        </h2>
                      </div>

                      <p
                        style={poppins.style}
                        className="text-slate-300 leading-relaxed text-lg"
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-slate-200 hover:bg-white text-slate-900 px-6 py-3 rounded-lg transition-colors font-medium"
                      >
                        <FaGithub size={18} />
                        <span>View Code</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-slate-900 px-6 py-3 rounded-lg transition-colors font-medium"
                        >
                          <FiExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

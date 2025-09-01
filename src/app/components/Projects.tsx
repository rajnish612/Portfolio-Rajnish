"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Poppins, Titan_One } from "next/font/google";
const projects = [
  {
    title: "Job Connect",
    description:
      "This is a full-stack MERN application that connects job seekers with recruiters. Job seekers can register, create detailed profiles with their skills and experience, and upload projects with GitHub or demo links to showcase their professional portfolio. Recruiters can browse developers, filter candidates by location, skills, and experience, and contact them directly via email or social links. The application supports pagination for large datasets and is built with React.js and Tailwind CSS on the frontend, Node.js and Express.js on the backend, MongoDB with Mongoose for the database, and JWT for authentication.",
    image: "/images/jobConnect.png",
    github: "https://github.com/rajnish612/JobConnect",
    live: "https://job-connect-liard.vercel.app/",
  },
  {
    title: "Chatting App",
    description:
      "I am building a full-featured chat web application from scratch that includes real-time messaging, user authentication, and voice/video calling. The app uses React.js with Tailwind CSS for a polished frontend, Node.js with GraphQL for backend functionality, MongoDB for data management, Socket.io for real-time interactions, and WebRTC for voice and video capabilities. Current efforts are focused on integrating video calling, enhancing the UI with responsive design, and optimizing overall performance for a faster and more engaging user experience.",
    image: "/images/Chatting website.png",
    github: "https://github.com/rajnish612/chatting-app",
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
  weight: ["100","200","300","400","500","600","700"],
  subsets: ["devanagari"],
});
import { motion } from "motion/react";
const Projects = () => {
  return (
    <div id="projects" className="flex flex-col mt-20 px-4 bg-gradient-to-b from-gray-50 to-white py-16">
      {/* Section Header */}
      <div className="mx-auto w-full max-w-6xl mb-16">
        <div className="text-center mb-8">
          <h1
            style={titanOne.style}
            className="text-5xl md:text-6xl font-black bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 text-transparent mb-4"
          >
            Featured Projects
          </h1>
          <p style={poppins.style} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my latest work showcasing full-stack development, modern UI/UX design, and cutting-edge technologies
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent to-blue-500" />
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <div className="h-0.5 w-24 bg-gradient-to-r from-purple-500 to-transparent" />
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
              
              <div className="relative bg-gradient-to-r from-indigo-50 via-white to-purple-50 border-2 border-slate-200 shadow-[0px_0px_60px_5px] shadow-blue-100 rounded-2xl p-8 backdrop-blur-sm">
                <div className={`flex ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8 lg:gap-12 items-center`}>
                  <div className="flex-1 max-w-lg">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      
                      <Card className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-0 shadow-2xl overflow-hidden">
                        <CardHeader className="pb-2 pt-4 px-6 flex flex-row items-center justify-between">
                          <h4
                            style={titanOne.style}
                            className="font-bold text-white text-xl"
                          >
                            {project.title}
                          </h4>
                          <div className="flex space-x-3">
                            <a 
                              href={project.github} 
                              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer group"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="text-white group-hover:scale-110 transition-transform" size={18} />
                            </a>
                            {project.live && (
                              <a 
                                href={project.live} 
                                className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors cursor-pointer group"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FiExternalLink className="text-white group-hover:scale-110 transition-transform" size={18} />
                              </a>
                            )}
                          </div>
                        </CardHeader>
                        <CardBody className="px-6 pb-6">
                          <div className="relative overflow-hidden rounded-xl">
                            <Image
                              alt={`${project.title} preview`}
                              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                              src={project.image}
                              width={400}
                              height={250}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                        <h2
                          style={titanOne.style}
                          className="text-3xl lg:text-4xl font-black text-gray-900"
                        >
                          {project.title}
                        </h2>
                      </div>
                      
                      <p 
                        style={poppins.style} 
                        className="text-gray-700 leading-relaxed text-lg"
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-colors font-medium group"
                      >
                        <FaGithub className="group-hover:scale-110 transition-transform" size={18} />
                        <span>View Code</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full transition-all font-medium group"
                        >
                          <FiExternalLink className="group-hover:scale-110 transition-transform" size={18} />
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

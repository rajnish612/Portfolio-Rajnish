"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Kranky, Titan_One, Viga } from "next/font/google";
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
  weight: ["400"],
  subsets: ["latin-ext"],
});
const kranky = Kranky({
  weight: ["400"],
  subsets: ["latin"],
});
const vigo = Viga({
  weight: "400",
  subsets: ["latin"],
});
import { motion } from "motion/react";
const Projects = () => {
  return (
    <div id="projects" className="flex flex-col mt-20 px-2 ">
      <div className="mx-auto w-[80%] font-medium text-slate-600  ">
        <div className="flex items-center px-5 space-x-5">
          <div className="h-[2px] w-full bg-[#415A77]" />
          <h1
            style={kranky.style}
            className="text-[#0D1B2A] text-center text-5xl mt-2"
          >
            Projects
          </h1>
          <div className="h-[2px] w-full  bg-[#415A77]" />
        </div>
      </div>
      {projects.map((project, idx) => {
        return (
          <motion.div
            initial={{ translateX: -200 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            whileInView={{ translateX: 0 }}
            key={project.title}
            className="flex justify-center shadow-blue-100  border-2 space-y-5 border-slate-200 shadow-[0px_0px_60px_5px] p-5 bg-gradient-to-r from-indigo-100 to-pink-100  rounded-2xl items-center mt-5 space-x-5 mx-auto flex-wrap"
          >
            <Card className="py-4  bg-gradient-to-r from-[#0D1B2A] to-[#0D1B2A]  ">
              <CardHeader className="pb-0 pt-2 px-4 space-x-2    flex flex-wrap items-center">
                <h4
                  style={kranky.style}
                  className="font-bold text-white text-large max-w-50"
                >
                  {project.title.toUpperCase()}
                </h4>
                <a href={project.github} className="ml-auto cursor-pointer">
                  <FaGithub color="white" size={20} />
                </a>
                {project.live && (
                  <a href={project.live} className="cursor-pointer">
                    <FiExternalLink color="white" size={20} />
                  </a>
                )}
              </CardHeader>
              <CardBody className="overflow-visible mx-auto py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={project.image}
                  width={270}
                />
              </CardBody>
            </Card>

            <div className="max-w-2xl">
              <h1
                style={titanOne.style}
                className="text-2xl text-[#0D1B2A] font-black"
              >
                {" "}
                {project.title.toUpperCase()}
              </h1>
              <span style={vigo.style} className="text-black  font-bold">
                {project.description}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects;

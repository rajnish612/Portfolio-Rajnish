"use client";
import React from "react";
import Image from "next/image";

import { FaCode } from "react-icons/fa";
import { Avatar } from "@heroui/react";
import { Poppins, Titan_One } from "next/font/google";
import { AnimatedTooltip } from "./ui/Animated-tooltip";
const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});
const poppins2 = Titan_One({
  weight: "400",
  subsets: ["latin-ext"],
});
const people = [
  {
    id: 1,
    name: "React js",

    image: "/images/atom.png",
  },
  {
    id: 2,
    name: "AI and Machine Learning",

    image: "/images/ai.png",
  },
  {
    id: 3,
    name: "Web development",

    image: "/images/internet.png",
  },
  {
    id: 4,
    name: "Deep Learning",

    image: "/images/deep-learning.png",
  },
  {
    id: 5,
    name: "App development",

    image: "/images/app-development.png",
  },
];

import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="   flex justify-center py-5 items-center h-full overflow-x-hidden  text-black  "
    >
      <div className="flex mt-30  justify-center  w-full  items-center ">
        <div className=" flex  flex-wrap   w-full   gap-20 justify-center   ">
          <div className=" max-w-4xl  px-3 lg:max-w-xl  flex flex-col items-center">
            <div className=" flex flex-col space-y-4  text-left   ">
              <span style={poppins2.style} className="font-black  text-3xl">
                {"Hi, I’m".split("").map((item, idx) => {
                  return (
                    <motion.span
                      key={item}
                      transition={{ delay: idx * 0.1, duration: 0.1 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      {item}
                    </motion.span>
                  );
                })}{" "}
              </span>
              <span
                style={poppins2.style}
                className="font-black  text-3xl text-black"
              >
                {"Rajnish Nath!".split("").map((item, idx) => {
                  return (
                    <motion.span
                      key={item}
                      transition={{ delay: idx * 0.1, duration: 0.1 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </span>

              <span
                style={poppins.style}
                className="text-[#1B263B]  font-light"
              >
                {"I’m a passionate full-stack developer and aspiring AI/ML engineer with expertise in React.js, React Native, Next.js, Node.js, TypeScript, Java, C, Python, and PostgreSQL. I have experience building modern, responsive web and mobile applications, and working with machine learning using Scikit-Learn and databases with Prisma ORM. I enjoy solving  complex problems, learning new technologies, and turning ideas into functional digital solutions. My goal is to continuously  grow as a developer and contribute to impactful projects that    make a difference."
                  .split("")
                  .map((item, idx) => {
                    return (
                      <motion.span
                        key={item}
                        transition={{ delay: idx * 0.005, duration: 0.1 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        {item}
                      </motion.span>
                    );
                  })}
              </span>
            </div>
            {/* <div className="flex gap-4 mt-5 flex-wrap items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Avatar
                  size="lg"
                  isBordered
                  color="default"
                  icon={<FaReact />}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Avatar
                  size="lg"
                  isBordered
                  color="primary"
                  icon={<TbBrandReactNative />}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Avatar
                  size="lg"
                  isBordered
                  color="secondary"
                  icon={<CgWebsite />}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Avatar size="lg" isBordered color="danger" icon={<IoApps />} />
              </motion.div>
            </div> */}

            <div className="flex mt-15 flex-row items-center  justify-center mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>
          </div>
          <div className="flex space-y-4 flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1 }}
              className="relative group"
            >
              <div className="relative flex bg-gradient-to-r px-6 py-3 from-white via-blue-50 to-purple-50 rounded-full shadow-xl border border-white/50 backdrop-blur-sm items-center space-x-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-50"></div>
                  <Avatar
                    isBordered
                    size="md"
                    className="w-10 h-10 relative bg-gradient-to-r from-blue-500 to-purple-500"
                    icon={<FaCode size={20} className="text-white" />}
                    color="primary"
                  />
                </div>

                <h1
                  style={poppins.style}
                  className="font-black text-2xl sm:text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 text-transparent drop-shadow-sm"
                >
                  Software Developer
                </h1>
              </div>
            </motion.div>
            <div className="relative group mt-3 cursor-pointer">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>

              <div className="relative h-80 w-80 sm:h-96 sm:w-96 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 z-10"></div>

                <Image
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="/images/image.jpeg"
                  alt="Rajnish Nath"
                  width={400}
                  height={400}
                  priority
                />
              </div>

              {/* Bottom accent */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={poppins.style}
              className="flex gap-4 mt-5 flex-wrap items-center"
            >
              <button
                style={poppins.style}
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#0D1B2A] rounded-full shadow-lg cursor-pointer hover:scale-[1.1] transition-transform shadow-indigo-400 p-3  text-[#E0E1DD]"
              >
                Get in touch
              </button>
              <button
                style={poppins.style}
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#415A77]  rounded-full cursor-pointer hover:scale-[1.1] transition-transform shadow-lg shadow-indigo-400 p-3 text-[#E0E1DD]"
              >
                Browse Projects
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

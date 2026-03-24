"use client";
import React from "react";
import Image from "next/image";

import { Avatar } from "@heroui/react";
import { Poppins, Titan_One } from "next/font/google";
const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});
const poppins2 = Titan_One({
  weight: "400",
  subsets: ["latin-ext"],
});

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
                      key={idx}
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
                {"Full-stack developer 🚀 | AI/ML & Deep Learning Enthusiast 🤖 | Computer Vision Explorer 👁️ | I'm a passionate developer with expertise in React.js, React Native, Next.js, Node.js, TypeScript, Java, C, Python, and PostgreSQL. I'm actively learning Machine Learning, Deep Learning, and Computer Vision to build intelligent applications. I enjoy solving complex problems and creating modern, responsive solutions. My goal is to grow as a developer and contribute to impactful AI-driven projects."
                  .split("")
                  .map((item, idx) => {
                    return (
                      <motion.span
                        key={idx}
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
          </div>

          <div className="flex space-y-4 flex-col items-center">
            <div className="relative group cursor-pointer mt-3">
              <div className="relative h-80 w-80 sm:h-96 sm:w-96 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">

                <Image
                  className="w-full h-full object-cover"
                  src="/images/image.png"
                  alt="Rajnish Nath"
                  width={400}
                  height={400}
                  priority
                />
              </div>
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
                className="bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors p-3 text-white font-medium"
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
                className="bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors p-3 text-white font-medium"
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

"use client";
import React from "react";
import Image from "next/image";

import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
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
                className="font-black  text-3xl text-[#415A77]"
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
            <div className="flex gap-4 mt-5 flex-wrap items-center">
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
            </div>
          </div>
          <div className="flex space-y-4 flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1 }}
              className="flex bg-gradient-to-r from-indigo-50 to-pink-100/50 rounded-full shadow-lg shadow-indigo-200 p-2 items-center space-x-3"
            >
              <h1
                style={poppins.style}
                className="font-black text-2xl sm:text-3xl md:text-4xl bg-clip-text w-fit bg-gradient-to-r from-black  via-black/50 to-blue-500 text-transparent "
              >
                {`Software Developer`}
              </h1>
              <Avatar
                isBordered
                size="sm"
                className="w-7 h-7"
                icon={<FaCode size={17} />}
                color="primary"
              />{" "}
              <span
                style={poppins.style}
                className="text-2xl sm:text-3xl md:text-4xl bg-clip-text w-fit bg-gradient-to-r from-indigo-500 to-red-500 text-transparent"
              >
                {" "}
                {""}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1 }}
              className="h-90 w-90 sm:h-100 sm:w-100 shadow-blue-300 border-3 border-slate-400 bg-amber-200  shadow-2xl rounded-full  overflow-hidden"
            >
              <Image
                className="ring-2 ring-[#0D1B2A] w-full h-full"
                src="/images/image.jpeg"
                alt="Rajnish"
                // width={200}
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </motion.div>
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
                className="bg-[#0D1B2A] shadow-lg cursor-pointer hover:scale-[1.1] transition-transform shadow-indigo-400 p-2 rounded-lg text-[#E0E1DD]"
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
                className="bg-[#415A77] cursor-pointer hover:scale-[1.1] transition-transform shadow-lg shadow-indigo-400 p-2 rounded-lg text-[#E0E1DD]"
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

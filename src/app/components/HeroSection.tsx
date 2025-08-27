"use client";
import React from "react";
import Image from "next/image";

import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa6";

import { IoApps } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { Avatar } from "@heroui/react";
import { Kranky, Titan_One, Poppins } from "next/font/google";
const kranky = Kranky({
  weight: ["400"],
  subsets: ["latin"],
});
const titanOne = Titan_One({
  weight: ["400"],
  subsets: ["latin-ext"],
});
const poppins = Poppins({
  weight: "500",
  subsets: ["devanagari"],
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
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}
            className="h-90 w-90 sm:h-100 sm:w-100 shadow-blue-200 border-5 bg-amber-200 border-blue-300 shadow-2xl rounded-full  overflow-hidden"
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
          <div className=" max-w-4xl  px-3 lg:max-w-xl  flex flex-col items-center">
            <div className=" flex flex-col space-y-4  text-left   ">
              <span style={titanOne.style} className="font-black  text-3xl">
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
                style={titanOne.style}
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
              <motion.h1
                initial={{ opacity: 0 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1 }}
                style={kranky.style}
                className="font-black text-4xl bg-gradient-to-r bg-clip-text from-[#212529] to-[#212529] text-transparent"
              >
                {"<Software Developer>"}
              </motion.h1>
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={kranky.style}
              className="flex gap-4 mt-5 flex-wrap items-center"
            >
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#0D1B2A] p-2 rounded-lg text-[#E0E1DD]"
              >
                Get in touch
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#415A77] p-2 rounded-lg text-[#E0E1DD]"
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

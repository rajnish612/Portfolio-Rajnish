"use client";
import React from "react";
import { Chip } from "@heroui/chip";
import { Poppins, Titan_One } from "next/font/google";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "C",
  "Python",
  "Java",
  "MongoDB",
  "PostgreSQL",
  "User Authentication and Authorization",
  "CRUD Operations",
  "React JS",
  "Next JS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Node JS",
  "Express JS",
  "GraphQL",
  "Prisma ORM",
  "REST APIs",
  "Web Development",
  "App Development",
  "TypeScript",
  "Scikit-Learn",
  "Machine Learning",
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
const Skills = () => {
  return (
    <div
      id="skills"
      style={poppins.style}
      className=" px-5  overflow-x-hidden mt-10 py-4 w-full flex-col   flex"
    >
      <div className="mx-auto w-[80%] font-medium text-slate-600  ">
        <div className="flex items-center px-5 space-x-5">
          <div className="h-[2px] w-full bg-[#415A77]" />
          <h1
            style={titanOne.style}
            className="text-[#0D1B2A] text-center text-5xl mt-2"
          >
            Skills
          </h1>
          <div className="h-[2px] w-full  bg-[#415A77]" />
        </div>
      </div>{" "}
      <div className="flex justify-center space-x-3 space-y-3 px-20  mt-5 items-center  flex-wrap">
        {skills.map((skill, idx) => {
          return (
            <motion.div
              style={poppins.style}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.05 * idx }}
              whileInView={{ opacity: 1 }}
              key={skill}
            >
              <Chip
                classNames={{
                  base: "bg-gradient-to-bl shadow-lg from-[#1B263B] to-[#0D1B2A] border-small border-white/50 shadow-blue-300",
                  content: "drop-shadow-xs shadow-black text-[#E0E1DD]",
                }}
                variant="shadow"
              >
                {skill}
              </Chip>
            </motion.div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Skills;

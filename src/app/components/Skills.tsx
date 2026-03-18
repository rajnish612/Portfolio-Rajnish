"use client";
import React from "react";
import { Chip } from "@heroui/chip";
import { Poppins, Titan_One } from "next/font/google";
import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiGit,
  SiPrisma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiPostman,
  SiJest,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillsData = [
  {
    category: "Frontend Technologies",
    skills: [
      { name: "React JS", icon: SiReact },
      { name: "Next JS", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node JS", icon: SiNodedotjs },
      { name: "Express JS", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Jest", icon: SiJest },
      { name: "Vercel", icon: SiVercel },
    ],
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

const Skills = () => {
  return (
    <div
      id="skills"
      style={poppins.style}
      className="px-5 overflow-x-hidden mt-10 py-16 w-full flex-col flex bg-white"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-6xl mb-16"
      >
        <div className="flex items-center px-5 space-x-5 mb-8">
          <div className="h-[2px] w-full bg-blue-600" />
          <h1
            style={titanOne.style}
            className="text-gray-900 text-center text-5xl md:text-6xl whitespace-nowrap"
          >
            Skills
          </h1>
          <div className="h-[2px] w-full bg-blue-600" />
        </div>
        <p
          style={poppins.style}
          className="text-center text-gray-700 text-lg max-w-2xl mx-auto"
        >
          Comprehensive skills across full-stack development and modern
          technologies
        </p>
      </motion.div>

      {/* Skills Categories Grid */}
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, groupIdx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 h-full hover:border-blue-600 shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Category Title */}
                  <h3
                    style={titanOne.style}
                    className="text-2xl font-bold text-gray-900 mb-5"
                  >
                    {skillGroup.category}
                  </h3>

                  {/* Skills Chips */}
                  <div className="space-y-3">
                    {skillGroup.skills.map((skill, skillIdx) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: groupIdx * 0.1 + skillIdx * 0.05,
                          }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 group/skill"
                        >
                          <IconComponent className="w-5 h-5 text-gray-700 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skill Level Summary */}
    </div>
  );
};

export default Skills;

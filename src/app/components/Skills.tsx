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
      className="section-shell px-5 overflow-x-hidden mt-10 py-16 w-full flex-col flex"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-6xl mb-16"
      >
        <div className="flex items-center px-5 space-x-5 mb-8">
          <div className="accent-gradient h-[2px] w-full" />
          <h1
            style={titanOne.style}
            className="font-display readable-title text-center text-5xl md:text-6xl whitespace-nowrap"
          >
            Skills
          </h1>
          <div className="accent-gradient h-[2px] w-full" />
        </div>
        <p
          style={poppins.style}
          className="readable-body text-center text-lg max-w-2xl mx-auto"
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
                <div className="glass-card relative rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1">
                  {/* Category Title */}
                  <h3
                    style={titanOne.style}
                    className="text-2xl font-bold text-white mb-5"
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
                          className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800/70 transition-all duration-200 group/skill"
                        >
                          <IconComponent className="w-5 h-5 text-teal-300 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-100">
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

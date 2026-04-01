"use client";
import React from "react";
import { Titan_One, Poppins } from "next/font/google";
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
  SiGithub,
  SiPrisma,
  SiPostman,
  SiDocker,
  SiRedis,
  SiJest,
  SiVite,
  SiCplusplus,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const titanOne = Titan_One({
  weight: "400",
  subsets: ["latin-ext"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const ToolsFrameworks = () => {
  const tools = [
    {
      category: "Frontend",
      tools: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite },
      ],
    },
    {
      category: "Backend",
      tools: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Python", icon: SiPython },
        { name: "Java", icon: FaJava },
        { name: "GraphQL", icon: SiGraphql },
        { name: "Docker", icon: SiDocker },
      ],
    },
    {
      category: "Database & ORM",
      tools: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },
    {
      category: "Tools & DevOps",
      tools: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "Jest", icon: SiJest },
        { name: "Vercel", icon: SiVercel },
      ],
    },
  ];

  return (
    <div id="tools" className="section-shell min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1
            style={titanOne.style}
            className="font-display text-5xl md:text-6xl font-black text-white mb-6"
          >
            Tools & Technologies
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-24 bg-blue-600 rounded-full" />
            <div className="w-3 h-3 bg-blue-600 rounded-full" />
            <div className="h-1 w-24 bg-blue-600 rounded-full" />
          </div>
          <p
            style={poppins.style}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            My comprehensive tech stack for building modern, scalable
            applications
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {tools.map((toolGroup, groupIdx) => (
            <motion.div
              key={toolGroup.category}
              initial={{ opacity: 0, x: groupIdx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
            >
              <div className="relative group">
                {/* Content */}
                <div className="glass-card relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                  {/* Category Header */}
                  <div className="mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-400 text-slate-900 mb-4`}
                    >
                      <span
                        style={titanOne.style}
                        className="text-lg font-bold"
                      >
                        {groupIdx + 1}
                      </span>
                    </div>
                    <h3
                      style={titanOne.style}
                      className="text-3xl font-bold text-white"
                    >
                      {toolGroup.category}
                    </h3>
                  </div>

                  {/* Tools Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {toolGroup.tools.map((tool, toolIdx) => {
                      const Icon = tool.icon;
                      return (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: groupIdx * 0.1 + toolIdx * 0.05,
                          }}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-200"
                        >
                          <div className="relative">
                            <div className="relative bg-slate-900/80 p-3 rounded-lg border border-white/15 hover:border-teal-300 transition-colors hover:shadow-md">
                              <Icon className="w-7 h-7 text-slate-100" />
                            </div>
                          </div>
                          <span
                            style={poppins.style}
                            className="text-sm font-medium text-slate-100 text-center"
                          >
                            {tool.name}
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
    </div>
  );
};

export default ToolsFrameworks;

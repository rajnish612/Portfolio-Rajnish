"use client";
import React from "react";
import { Kranky, Poppins, Staatliches } from "next/font/google";

const kranky = Kranky({
  weight: ["400"],
  subsets: ["latin"],
});

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin-ext"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});
import { motion } from "motion/react";

const Education = () => {
  return (
    <div id="education" className="section-shell min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1
            style={staatliches.style}
            className="font-display text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-300 to-amber-300 drop-shadow-lg mb-6"
          >
            EDUCATION
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-amber-300 mx-auto rounded-full mb-8" />
          <p
            style={poppins.style}
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            My academic journey has been focused on building a strong foundation
            in technology and computer applications
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-amber-300 rounded-full hidden lg:block" />

          <div className="space-y-16">
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-teal-400 to-amber-300 rounded-full border-4 border-white/50 shadow-lg z-10 hidden lg:block" />

              <div className="w-full lg:w-5/12 lg:pr-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  whileInView={{ opacity: 1 }}
                  className="glass-card rounded-3xl p-8"
                >
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold mb-6">
                    <div className="w-2 h-2 bg-white rounded-full mr-2" />
                    Currently Pursuing
                  </div>

                  <h3
                    style={staatliches.style}
                    className="text-3xl lg:text-4xl font-bold text-white mb-4"
                  >
                    Bachelor of Computer Applications
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span
                        style={poppins.style}
                        className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-amber-300"
                      >
                        Manipal University Jaipur (Online)
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-300 rounded-full" />
                      <span
                        style={poppins.style}
                        className="text-lg text-slate-300 font-medium"
                      >
                        Duration: 3 Years
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full" />
                      <span
                        style={poppins.style}
                        className="text-lg text-slate-300 font-medium"
                      >
                        Focus: Computer Applications & Technology
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4
                      style={poppins.style}
                      className="text-lg font-semibold text-white mb-3"
                    >
                      Key Areas of Study:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Artificial Intelligence and Machine Learning",
                        "Database Management",
                        "Web Development",
                        "Software Engineering",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-900/70 border border-white/15 rounded-full text-sm font-medium text-slate-200"
                          style={poppins.style}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="hidden lg:flex w-2/12 justify-center">
                <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-3 rounded-2xl shadow-xl">
                  <span style={kranky.style} className="text-lg font-bold">
                    2025 - Present
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-5/12" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-amber-300 to-teal-400 rounded-full border-4 border-white/50 shadow-lg z-10 hidden lg:block" />

              <div className="w-full lg:w-5/12" />

              <div className="hidden lg:flex w-2/12 justify-center">
                <div className="bg-gradient-to-r from-amber-400 to-teal-500 text-slate-900 px-6 py-3 rounded-2xl shadow-xl">
                  <span style={kranky.style} className="text-lg font-bold">
                    Completed
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-5/12 lg:pl-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  whileInView={{ opacity: 1 }}
                  className="glass-card rounded-3xl p-8"
                >
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold mb-6">
                    <div className="w-2 h-2 bg-white rounded-full mr-2" />
                    Completed
                  </div>

                  <h3
                    style={staatliches.style}
                    className="text-3xl lg:text-4xl font-bold text-white mb-4"
                  >
                    Schooling
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-300 rounded-full" />
                      <span
                        style={poppins.style}
                        className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-teal-200"
                      >
                        St. Xavier's HS School, Duliajan
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span
                        style={poppins.style}
                        className="text-lg text-slate-300 font-medium"
                      >
                        Location: Duliajan, Assam
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="glass-card rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <blockquote
              style={staatliches.style}
              className="text-2xl lg:text-3xl text-white font-medium italic mb-6"
            >
              "Education is the most powerful weapon which you can use to change
              the world."
            </blockquote>
            <cite
              style={poppins.style}
              className="text-lg text-slate-300 font-medium"
            >
              - Nelson Mandela
            </cite>

            <div className="mt-8 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-amber-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

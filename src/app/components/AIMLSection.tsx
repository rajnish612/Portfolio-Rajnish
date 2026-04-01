"use client";
import React from "react";
import { Titan_One, Poppins } from "next/font/google";
import { motion } from "motion/react";
import {
  SiPython,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
} from "react-icons/si";
import { Brain, Eye, Zap } from "lucide-react";

const titanOne = Titan_One({
  weight: "400",
  subsets: ["latin-ext"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const AIMLSection = () => {
  const categories = [
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Python" },
        { name: "Scikit-Learn" },
        { name: "Pandas" },
        { name: "NumPy" },
      ],
      description:
        "Building predictive models and data analysis pipelines using modern ML frameworks",
    },
    {
      title: "Deep Learning",
      icon: Zap,
      skills: [
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "Keras" },
        { name: "Neural Networks" },
      ],
      description:
        "Developing neural networks for complex pattern recognition and AI applications",
    },
    {
      title: "Computer Vision",
      icon: Eye,
      skills: [
        { name: "OpenCV" },
        { name: "Image Processing" },
        { name: "Object Detection" },
        { name: "CNN Models" },
      ],
      description:
        "Creating intelligent vision systems for image recognition and analysis",
    },
  ];

  return (
    <div
      id="aiml"
      className="section-shell min-h-screen py-20 px-4"
    >
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
            AI/ML & Computer Vision
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="accent-gradient h-1 w-24 rounded-full" />
            <div className="w-3 h-3 bg-teal-300 rounded-full" />
            <div className="accent-gradient h-1 w-24 rounded-full" />
          </div>
          <p
            style={poppins.style}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about exploring Artificial Intelligence, Machine
            Learning, Deep Learning, and Computer Vision technologies. Currently
            learning and building projects to master these paradigms.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="glass-card relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-teal-400 text-slate-900">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3
                        style={titanOne.style}
                        className="text-2xl font-bold text-white"
                      >
                        {category.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      style={poppins.style}
                      className="text-slate-300 text-sm mb-8 leading-relaxed"
                    >
                      {category.description}
                    </p>

                    {/* Skills Grid */}
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIdx) => {
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: idx * 0.15 + skillIdx * 0.08,
                            }}
                            className={`flex items-center gap-3 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800/70 transition-all duration-200`}
                          >
                            <span className="w-2 h-2 bg-teal-300 rounded-full" />
                            <span
                              style={poppins.style}
                              className={`font-medium text-sm text-slate-100`}
                            >
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learning Path Section */}
      </div>
    </div>
  );
};

export default AIMLSection;

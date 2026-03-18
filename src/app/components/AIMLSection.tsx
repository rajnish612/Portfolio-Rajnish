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
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-white via-slate-50 to-white"
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
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
          >
            AI/ML & Computer Vision
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-24 bg-blue-600 rounded-full" />
            <div className="w-3 h-3 bg-blue-600 rounded-full" />
            <div className="h-1 w-24 bg-blue-600 rounded-full" />
          </div>
          <p
            style={poppins.style}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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
                  <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 h-full shadow-md hover:shadow-lg hover:border-blue-600 transition-all duration-300">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-blue-600 text-white">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3
                        style={titanOne.style}
                        className="text-2xl font-bold text-gray-900"
                      >
                        {category.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      style={poppins.style}
                      className="text-gray-600 text-sm mb-8 leading-relaxed"
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
                            className={`flex items-center gap-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200`}
                          >
                            <span className="w-2 h-2 bg-blue-600 rounded-full" />
                            <span
                              style={poppins.style}
                              className={`font-medium text-sm text-gray-700`}
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

"use client";
import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "800",
  subsets: ["latin-ext"],
});
import { motion } from "motion/react";
const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      className={`w-full ${poppins.className} top-0 right-0 left-0 fixed z-20 text-gray-900 bg-white border-b border-gray-200 flex justify-end shadow-sm p-4`}
    >
      <div className="flex w-full text-gray-900 space-y-4 flex-col md:hidden items-end">
        <div className="flex flex-wrap justify-between w-full items-end h-10 mt-auto">
          <ul className="flex space-x-6">
            <a href="https://www.linkedin.com/in/rajnish-nath-45452b346/">
              <AiFillLinkedin
                color="#1f2937"
                className="cursor-pointer hover:text-blue-600 transition-colors"
                size={24}
              />
            </a>
            <a href="https://github.com/rajnish612">
              <FaGithub
                color="#1f2937"
                className="cursor-pointer hover:text-blue-600 transition-colors"
                size={24}
              />
            </a>

            <a href="https://www.instagram.com/_raj__nish__?igsh=ZjE0aWtjd2d5bXc3">
              <FaInstagram
                color="#1f2937"
                className="cursor-pointer hover:text-blue-600 transition-colors"
                size={24}
              />
            </a>
          </ul>
          <FaBars
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            size={28}
            color="#1f2937"
            className="transition-all"
          />
        </div>
        <div
          style={poppins.style}
          className={`flex ${
            mobileNavOpen ? "h-100 transition-height" : "h-0"
          } flex-col space-y-3 w-full text-center transition-height duration-300 overflow-hidden`}
        >
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
          >
            Home
          </button>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
          >
            Skills
          </button>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
          >
            Projects
          </button>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("education")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
          >
            Education
          </button>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("certifications")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
          >
            Certifications
          </button>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("tools")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
          >
            Tools
          </button>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("aiml")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
          >
            AI/ML
          </button>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
          >
            Contact
          </button>
        </div>
      </div>
      <ul className="hidden py-4 font-light md:flex w-fit items-center space-x-8">
        <li>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 cursor-pointer bg-transparent group flex flex-col justify-end hover:text-blue-600 transition-colors"
          >
            Skills
            <div className="h-0.5 w-0 bg-blue-600 group-hover:w-full rounded-full transition-all mr-auto" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 cursor-pointer bg-transparent group flex flex-col justify-end hover:text-blue-600 transition-colors"
          >
            Projects
            <div className="h-0.5 w-0 bg-blue-600 group-hover:w-full rounded-full transition-all mr-auto" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("education")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 cursor-pointer bg-transparent group flex flex-col justify-end hover:text-blue-600 transition-colors"
          >
            Education
            <div className="h-0.5 w-0 bg-blue-600 group-hover:w-full rounded-full transition-all mr-auto" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("tools")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 cursor-pointer bg-transparent group flex flex-col justify-end hover:text-blue-600 transition-colors"
          >
            Tools
            <div className="h-0.5 w-0 bg-blue-600 group-hover:w-full rounded-full transition-all mr-auto" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("aiml")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 cursor-pointer bg-transparent group flex flex-col justify-end hover:text-blue-600 transition-colors"
          >
            AI/ML
            <div className="h-0.5 w-0 bg-blue-600 group-hover:w-full rounded-full transition-all mr-auto" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-700 cursor-pointer bg-transparent group flex flex-col justify-end hover:text-blue-600 transition-colors"
          >
            Contact
            <div className="h-0.5 w-0 bg-blue-600 group-hover:w-full rounded-full transition-all mr-auto" />
          </button>
        </li>
        <li className="border-l border-gray-300 pl-8">
          <a href="https://www.linkedin.com/in/rajnish-nath-45452b346/">
            <AiFillLinkedin
              color="#1f2937"
              className="cursor-pointer hover:text-blue-600 transition-colors"
              size={24}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/rajnish612">
            <FaGithub
              color="#1f2937"
              className="cursor-pointer hover:text-blue-600 transition-colors"
              size={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_raj__nish__?igsh=ZjE0aWtjd2d5bXc3">
            <FaInstagram
              color="#1f2937"
              className="cursor-pointer hover:text-blue-600 transition-colors"
              size={24}
            />
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { Kranky, Titan_One } from "next/font/google";

const titanOne = Titan_One({
  weight: ["400"],
  subsets: ["latin-ext"],
});
const kranky = Kranky({
  weight: ["400"],
  subsets: ["latin"],
});
import { motion } from "motion/react";
const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      className={`w-full ${titanOne.className}  top-0 right-0 left-0   fixed z-20   text-black bg-black/90 backdrop-blur-sm flex justify-end shadow-lg p-4`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>
      <div className="flex w-full text-white space-y-4   flex-col md:hidden items-end">
        <div className="flex flex-wrap justify-between w-full items-end h-10  mt-auto">
          <ul className="flex space-x-8">
            <a href="https://www.linkedin.com/in/rajnish-nath-45452b346/">
              {" "}
              <AiFillLinkedin
                color="white"
                className="cursor-pointer hover:scale-[1.1] transition-all"
                size={30}
              />
            </a>
            <a href="https://github.com/rajnish612">
              {" "}
              <FaGithub
                color="white"
                className="cursor-pointer  hover:scale-[1.1] transition-all"
                size={30}
              />
            </a>

            <a href="https://www.instagram.com/_raj__nish__?igsh=ZjE0aWtjd2d5bXc3">
              {" "}
              <FaInstagram
                color="white"
                className="cursor-pointer  hover:scale-[1.1] transition-all"
                size={30}
              />
            </a>
          </ul>
          <FaBars
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            size={30}
            color="white"
            className={`${
              mobileNavOpen ? "-rotate-90   transition-all " : "rotate-0"
            } transition-all `}
          />
        </div>
        <div
          style={kranky.style}
          className={`flex ${
            mobileNavOpen ? "h-100 transition-height" : "h-0"
          } flex-col space-y-7 w-full text-center transition-height duration-300 overflow-hidden`}
        >
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className=""
          >
            Home
          </button>
          <div className="h-[2px] w-full bg-white" />
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className=""
          >
            Skills
          </button>
          <div className="h-[2px] w-full bg-white" />
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className=""
          >
            Projects
          </button>
          <div className="h-[2px] w-full bg-white" />
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("education")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className=""
          >
            Education
          </button>
          <div className="h-[2px] w-full bg-white" />
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className=""
          >
            Contact
          </button>
          <div className="h-[2px] w-full bg-white" />
        </div>
      </div>
      <ul className="hidden  py-4 font-light md:flex w-fit  flex-wrap items-center  space-x-7">
        <li>
          {" "}
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#F8F9FA] cursor-pointer bg-transparent group flex flex-col justify-end"
          >
            Skills
            <div className="h-1 w-0  bg-[#F8F9FA] group-hover:w-full rounded-full transition-width mr-auto" />
          </button>
        </li>
        <li>
          {" "}
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#F8F9FA] cursor-pointer bg-transparent group flex flex-col justify-end"
          >
            Projects
            <div className="h-1 w-0 bg-[#F8F9FA]  group-hover:w-full rounded-full transition-width mr-auto" />
          </button>
        </li>
        <li>
          {" "}
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("education")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#F8F9FA] cursor-pointer bg-transparent  group flex flex-col justify-end"
          >
            Education
            <div className="h-1 w-0 bg-[#F8F9FA] group-hover:w-full rounded-full transition-width mr-auto" />
          </button>
        </li>
        <li>
          {" "}
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#F8F9FA] cursor-pointer bg-transparent group flex flex-col justify-end"
          >
            Contact
            <div className="h-1 w-0  bg-[#F8F9FA] group-hover:w-full rounded-full transition-width mr-auto" />
          </button>
        </li>
        <li>
          {" "}
          <button
            onClick={() => {
              setMobileNavOpen(false);
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#F8F9FA] cursor-pointer bg-transparent group flex flex-col justify-end"
          >
            Home
            <div className="h-1 w-0 bg-[#F8F9FA] group-hover:w-full rounded-full transition-width mr-auto" />
          </button>
        </li>
        <li>
          {" "}
          <a href="https://www.linkedin.com/in/rajnish-nath-45452b346/">
            <AiFillLinkedin
              color="white"
              className="cursor-pointer hover:scale-[1.1] transition-all"
              size={30}
            />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/rajnish612">
            <FaGithub
              color="white"
              className="cursor-pointer  hover:scale-[1.1] transition-all"
              size={30}
            />
          </a>
        </li>

        <li>
          {" "}
          <a href="https://www.instagram.com/_raj__nish__?igsh=ZjE0aWtjd2d5bXc3">
            <FaInstagram
              color="white"
              className="cursor-pointer  hover:scale-[1.1] transition-all"
              size={30}
            />
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;

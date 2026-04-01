"use client";
import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "800",
  subsets: ["latin-ext"],
});
import { motion } from "motion/react";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = [
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Tools", id: "tools" },
    { label: "AI/ML", id: "aiml" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    setMobileNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7 }}
      animate={{ opacity: 1 }}
      className={`w-full ${poppins.className} top-0 right-0 left-0 fixed z-30 px-4 pt-4`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-slate-950/70 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <button
          onClick={() => scrollTo("home")}
          className="font-display text-left text-sm font-semibold tracking-[0.24em] text-teal-300"
        >
          RAJNISH NATH
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="text-sm text-slate-200 transition-colors hover:text-teal-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://www.linkedin.com/in/rajnish-nath-45452b346/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 p-2 text-slate-100 transition-colors hover:border-teal-300 hover:text-teal-300"
          >
            <AiFillLinkedin size={19} />
          </a>
          <a
            href="https://github.com/rajnish612"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 p-2 text-slate-100 transition-colors hover:border-teal-300 hover:text-teal-300"
          >
            <FaGithub size={19} />
          </a>
          <a
            href="https://www.instagram.com/_raj__nish__?igsh=ZjE0aWtjd2d5bXc3"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 p-2 text-slate-100 transition-colors hover:border-teal-300 hover:text-teal-300"
          >
            <FaInstagram size={19} />
          </a>
        </div>

        <button
          onClick={() => setMobileNavOpen((prev) => !prev)}
          className="md:hidden rounded-lg border border-white/20 p-2 text-slate-100"
        >
          {mobileNavOpen ? <FaXmark size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/15 bg-slate-950/85 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileNavOpen ? "max-h-[420px] p-4" : "max-h-0 p-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="rounded-xl px-3 py-2 text-left text-slate-200 transition-colors hover:bg-white/10 hover:text-teal-300"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

"use client";
import React from "react";
import Image from "next/image";

import { Poppins, Titan_One } from "next/font/google";
const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});
const poppins2 = Titan_One({
  weight: "400",
  subsets: ["latin-ext"],
});

import { motion } from "motion/react";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-x-hidden px-4 pb-16 pt-28"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-10 lg:flex-nowrap lg:justify-between">
        <div className="w-full max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 font-display text-2xl leading-tight text-white sm:text-3xl lg:text-4xl"
          >
            FULL-STACK DEVELOPER | AI, ML, DL & COMPUTER VISION
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={poppins.style}
            className="text-muted mt-7 max-w-2xl text-base leading-8 sm:text-lg"
          >
            I build scalable full-stack products using Next.js, Node.js,
            TypeScript, Python, and PostgreSQL. Alongside web engineering, I am
            deeply focused on Artificial Intelligence, Machine Learning, Deep
            Learning, and Computer Vision to develop practical, data-driven,
            real-world applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              "AI + Machine Learning",
              "Deep Learning",
              "Computer Vision",
            ].map(
              (item) => (
                <span
                  key={item}
                  className="glass-card rounded-full px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              style={poppins.style}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary-modern rounded-xl px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
            >
              Start a Conversation
            </button>
            <button
              style={poppins.style}
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary-modern rounded-xl px-6 py-3 font-semibold transition-colors hover:border-white/35"
            >
              View Projects
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card relative w-full max-w-md rounded-[2rem] p-5"
        >
          <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-amber-300/90" />
          <div className="overflow-hidden rounded-[1.5rem] border border-white/20">
            <Image
              className="h-[460px] w-full object-cover"
              src="/images/image.png"
              alt="Rajnish Nath"
              width={480}
              height={480}
              priority
            />
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3">
            <span className="text-xs uppercase tracking-[0.22em] text-teal-300">
              Available For Work
            </span>
            <span className="text-sm text-slate-200">2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

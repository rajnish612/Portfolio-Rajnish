"use client";
import React from "react";
import { Form, Input, Button } from "@heroui/react";
import { Poppins, Titan_One } from "next/font/google";
const kranky = Titan_One({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  const phone = "8638232686";
  
  function sendMessageOnWhatsApp(name: string, email: string, message: string) {
    const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "rajnishnath612@gmail.com",
      link: "mailto:rajnishnath612@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+91 8638232686",
      link: `https://wa.me/918638232686`,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Rajnish Nath",
      link: "https://www.linkedin.com/in/rajnish-nath-45452b346/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "rajnish612",
      link: "https://github.com/rajnish612",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@_raj__nish__",
      link: "https://www.instagram.com/_raj__nish__?igsh=ZjE0aWtjd2d5bXc3",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen py-20 px-4 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h1
          style={kranky.style}
          className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
        >
          Get In Touch
        </h1>

        <div className="p-8 bg-gray-50 border-2 border-gray-200 rounded-2xl shadow-md">
          <span
            style={poppins.style}
            className="font-medium text-gray-700 text-lg"
          >
            I’m always open to new opportunities, collaborations, and meaningful
            conversations. Whether you have a project in mind, want to discuss
            ideas, or just want to say hi, feel free to reach out. I’ll get back
            to you as soon as possible!
          </span>
        </div>
      </motion.div>

      <Form
        className="w-full max-w-lg space-y-4 mx-auto flex bg-white border-2 border-gray-200 shadow-md p-8 rounded-2xl flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget));

          sendMessageOnWhatsApp(
            JSON.stringify(data.name),
            JSON.stringify(data.email),
            JSON.stringify(data.message)
          );
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileInView={{ opacity: 1 }}
          className="flex space-y-2 flex-col w-full"
        >
          <span style={poppins.style} className="text-black">
            Your name
          </span>
          <Input
            isRequired
            errorMessage="Please enter your name"
            name="name"
            placeholder="Write your name"
            type="text"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileInView={{ opacity: 1 }}
          className="flex space-y-2 flex-col w-full"
        >
          <span style={poppins.style} className="text-black">
            Message
          </span>
          <Input
            isRequired
            errorMessage="Please write a message"
            name="message"
            placeholder="Write a message"
            type="text"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileInView={{ opacity: 1 }}
          className="flex space-y-2 flex-col w-full"
        >
          <span style={poppins.style} className="text-black">
            Email
          </span>
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileInView={{ opacity: 1 }}
          className="flex gap-2"
        >
          <Button
            style={kranky.style}
            className="bg-blue-600 text-white hover:bg-blue-700"
            type="submit"
          >
            Submit
          </Button>
          <Button
            style={kranky.style}
            className="bg-gray-200 text-gray-900 hover:bg-gray-300"
            type="reset"
            variant="flat"
          >
            Reset
          </Button>
        </motion.div>
      </Form>
    </div>
  );
};

export default Contact;

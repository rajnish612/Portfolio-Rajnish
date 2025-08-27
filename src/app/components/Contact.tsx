"use client";
import React from "react";
import { Form, Input, Button } from "@heroui/react";
import { Kranky, Poppins } from "next/font/google";
const kranky = Kranky({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
import { motion } from "motion/react";
const Contact = () => {
  const phone = "8638232686";
  function sendMessageOnWhatsApp(name: string, email: string, message: string) {
    const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank"); // Opens in new tab
  }

  return (
    <div
      id="contact"
      className="flex justify-evenly mt-5 space-x-3 space-y-10  flex-wrap py-5"
    >
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        whileInView={{ opacity: 1 }}
        className="max-w-2xl px-5 space-y-5 "
      >
        <h1
          style={kranky.style}
          className="font-black text-5xl bg-clip-text w-fit bg-gradient-to-r from-indigo-500 to-red-500 text-transparent"
        >
          CONTACT ME
        </h1>

        <div className="shadow-2xl p-4 bg-gradient-to-r shadow-blue-200 from-indigo-100/40 to-red-100/40 backdrop-blur-2xl border-2  rounded-lg">
          <span
            style={poppins.style}
            className="font-black text-black  text-2xl"
          >
            I’m always open to new opportunities, collaborations, and meaningful
            conversations. Whether you have a project in mind, want to discuss
            ideas, or just want to say hi, feel free to reach out. I’ll get back
            to you as soon as possible!
          </span>
        </div>
      </motion.div>

      <Form
        className="w-full max-w-lg shadow-blue-200 space-y-4 justify-center flex bg-gradient-to-tr shadow-lg  backdrop-blur-2xl from-indigo-100/40 to-red-100/40 p-4 rounded-lg flex-col gap-4"
      
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
            placeholder="Enter your username"
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
            placeholder="Enter your username"
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
            className="bg-[#0D1B2A] text-[#E0E1DD]"
            type="submit"
          >
            Submit
          </Button>
          <Button
            style={kranky.style}
            className="bg-gradient-to-r bg-red-200 text-black"
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

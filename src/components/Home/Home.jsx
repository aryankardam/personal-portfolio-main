import React from "react";
import { motion } from "framer-motion";
import animationData from "../../lotties/person-coding.json";
import Lottie from "react-lottie-player";
import LetsConnect from "../LetsConnect";

const Home = () => {
  const name = "Aryan Kardam".split("");

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between relative bg-black text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left: Text & Button */}
      {/* Left: Hero Content */}
      <motion.div
        className="z-10 px-4 md:w-1/2 flex flex-col justify-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Greeting */}
        <motion.p
          className="text-3xl md:text-4xl text-gray-300 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          <span className="inline-block">
            {name.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.09, delay: i * 0.05 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            ></motion.span>
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Software Engineer <span className="text-cyan-400">•</span> Full-Stack
          MERN Developer
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-8 max-w-xl">
          Building scalable web applications and production-ready backend
          systems using <span className="text-cyan-400 font-medium">React</span>
          , <span className="text-cyan-400 font-medium">Node.js</span>,{" "}
          <span className="text-cyan-400 font-medium">Express.js</span>,{" "}
          <span className="text-cyan-400 font-medium">MongoDB</span>, and{" "}
          <span className="text-cyan-400 font-medium">TypeScript</span>.
        </p>

        {/* Current Role */}
        <div className="mt-6 space-y-2">
          <p className="text-lg text-gray-300">
            <span className="font-semibold text-white">
              Software Engineer Intern
            </span>{" "}
            <span className="text-cyan-400">@ ORI (Oriserve)</span>
          </p>

          <p className="text-gray-400 text-lg">
            Recently graduated from
            <br />
            <span className="font-semibold text-white">
              Indian Institute of Information Technology (IIIT) Kottayam
            </span>
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3 mt-8">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "TypeScript",
            "Next.js",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* LetsConnect button aligned left */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex mt-10"
      >
        <LetsConnect />
      </motion.div>

      {/* Right: Lottie Animation */}
      <motion.div
        className="md:w-1/2 w-full flex items-center justify-center relative my-10 md:my-0"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 w-4/5 h-4/5">
          <Lottie
            loop
            play
            animationData={animationData}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="absolute bottom-10 right-10 w-1/2 h-1/2 rounded-full bg-white/10" />
      </motion.div>
    </motion.section>
  );
};

export default Home;

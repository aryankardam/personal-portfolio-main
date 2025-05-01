import React from "react";
import { motion } from "framer-motion";
import laptopImg from "../assets/about.png";
import { ImPointRight } from "react-icons/im";

const About = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Know Who <span className="text-blue-500">I Am</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I'm
            <span className="text-blue-500"> Aryan Kardam </span>from
            <span className="text-blue-500"> Saharanpur,India </span> 
            <br />
            — a passionate Frontend Developer and Electronics Enthusiast currently pursuing my <span className="text-blue-500">B.Tech in Electronics and Communication Engineering at IIIT Kottayam.</span>
            <br />
            I enjoy building interactive web applications, smart IoT devices, and anything that combines technology with creativity.
          </p>
          <p className="mt-4 text-gray-400">
          I’m currently in my 3rd year, serving as the Event Management Lead at the Trendles Club, and actively working on projects involving React, Arduino, ESP8266, and Machine Learning.
          </p>
          <br />
          <br />
          <p className="text-lg leading-relaxed text-gray-300">
          <span className="text-2xl"><b>Beyond the Code</b></span>
          <br />
          Outside of tech, I enjoy:
          </p>
          <ul className="flex flex-col flex-wrap gap-6 text-gray-300 mt-4">
            <li className="flex items-center gap-2">
              <ImPointRight className="text-blue-400" />
              Watching Movies and Series
            </li>
            <li className="flex items-center gap-2">
              <ImPointRight className="text-blue-400" />
              Travelling and Exploring New Places
            </li>
          </ul>
            
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/1297mZfmVQ9RvtNWKenyfFFowTcTaU5zm/view?usp=sharing"
              download
              className="inline-block ml-35 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 "
            >
              📄 Resume
            </a>
          </div>

        </div>
        <img
          src={laptopImg}
          className="rounded-2xl shadow-xl w-full"
          alt="About"
        />
      </div>
    </motion.section>
  );
};

export default About;

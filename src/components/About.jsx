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
            Know Who <span className="text-blue-500">I'M</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi Everyone, I am
            <span className="text-blue-500"> Aryan Kardam </span>from
            <span className="text-blue-500"> Saharanpur,India </span> .
            <br />
            A passionate frontend developer and electronics enthusiast from IIIT
            Kottayam.
            <br />I love building interactive web apps, smart IoT devices, and
            anything that involves a mix of code and creativity.
          </p>
          <p className="mt-4 text-gray-400">
            Currently a 3rd-year ECE student, Event Management Lead at Trendles
            Club, and actively working on projects involving React, Arduino,
            ESP8266, and Machine Learning.
          </p>
          <br />
          <br />
          <p className="text-lg leading-relaxed text-gray-300">
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="flex flex-col flex-wrap gap-6 text-gray-300 mt-4">
            <li className="flex items-center gap-2">
              <ImPointRight className="text-blue-400" />
              Watching Movies and Series
            </li>
            <li className="flex items-center gap-2">
              <ImPointRight className="text-blue-400" />
              Travelling
            </li>
          </ul>
            
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/1s1MuxT7BK_s59cUKiQEdivGFa8ZjzFel/view?usp=drivesdk"
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

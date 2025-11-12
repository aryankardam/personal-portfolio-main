import React from "react";
import { motion } from "framer-motion";
import laptopImg from "../assets/about.png";
import { ImPointRight } from "react-icons/im";

const About = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 py-12 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            💼 What I’m <span className="text-blue-500">Working On</span>
          </h2>

          <ul className="text-lg leading-relaxed text-gray-300 space-y-4 mt-4">
            <li>
              🛒 Developing
              <span className="text-blue-500"> StrengthLabz </span> – a secure
              and scalable MERN-based eCommerce platform with Razorpay integration,
              real-time cart updates, and admin dashboard.
            </li>
            <li>
              📤 Building
              <span className="text-blue-500"> PasteApp, </span> a real-time code
              sharing platform with Redux and React Router.
            </li>
            <li>
              🤝 Mentoring juniors in full stack web development bootcamps and project building.
            </li>
            <li>
              🎓 Exploring advanced certifications in
              <span className="text-blue-500"> React, Python, and Cloud Services.</span>
            </li>
          </ul>

          <h2 className="text-3xl mt-10">
            🎯 <span className="text-blue-500">Mission</span>
          </h2>
          <p className="mt-4 text-gray-400">
            My goal is to build impactful digital products that are not just
            functional but also smart. Whether it’s a seamless frontend UI or a
            sensor-driven robot, I thrive on merging software with electronics to
            solve real-world problems.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-10">
            <span className="text-2xl font-semibold">🔗 Beyond the Code</span><br />
            Outside of tech, I enjoy:
          </p>

          <ul className="flex flex-col gap-4 text-gray-300 mt-4">
            <li className="flex items-start gap-2">
              <ImPointRight className="text-blue-400 mt-1" />
              🎬 Love watching movies and web series
            </li>
            <li className="flex items-start gap-2">
              <ImPointRight className="text-blue-400 mt-1" />
              🌍 Avid traveler and explorer of new places
            </li>
            <li className="flex items-start gap-2">
              <ImPointRight className="text-blue-400 mt-1" />
              👥 Serving as the Event Management Lead at Trendles Club, IIIT Kottayam,
              organizing tech and cultural events with cross-functional teams
            </li>
          </ul>

          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/1R1zDIoRTQRohPXYzXCsw_nzGLrSGSSFx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
            >
              📄 Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center">
          <img
            src={laptopImg}
            alt="About"
            className="rounded-2xl shadow-xl max-w-sm md:max-w-md w-full object-contain"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;

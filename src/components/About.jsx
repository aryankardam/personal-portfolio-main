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
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            💼 What I’m <span className="text-blue-500">Working On</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            <ul className="flex flex-col flex-wrap gap-3 mt-2">
              <li>
                🛒 Developing{" "}
                <span className="text-blue-500"> StrengthLabz </span> – a secure
                and scalable MERN-based eCommerce platform with Razorpay
                integration, real-time cart updates, and admin dashboard
              </li>
              <li>
                📤 Building{" "}
                <span className="text-blue-500"> PasteApp, </span> a real-time
                code sharing platform with Redux and React Router
              </li>
              <li>
                🤝 Mentoring juniors in full stack web development bootcamps and
                project building
              </li>
              <li>
                🎓 Exploring advanced certifications in{" "}
                <span className="text-blue-500">React, Python, and Cloud Services</span>
              </li>
            </ul>

            <br />
            <h2 className="text-3xl">
              🎯 <span className="text-blue-500">Mission</span>
            </h2>
          </p>
          <p className="mt-4 text-gray-400">
            My goal is to build impactful digital products that are not just
            functional but also smart. Whether it’s a seamless frontend UI or a
            sensor-driven robot, I thrive on merging software with electronics
            to solve real-world problems.
          </p>
          <br />
          <br />
          <p className="text-lg leading-relaxed text-gray-300">
            <span className="text-2xl">
              <b>🔗 Beyond the Code</b>
            </span>
            <br />
            Outside of tech, I enjoy:
          </p>
          <ul className="flex flex-col flex-wrap gap-6 text-gray-300 mt-4">
            <li className="flex items-center gap-2">
              <ImPointRight className="text-blue-400" />
              🎬 Love watching movies and web series
            </li>
            <li className="flex items-center gap-2">
              <ImPointRight className="text-blue-400" />
              🌍 Avid traveler and explorer of new places
            </li>
            <li className="flex items-center gap-2">
              <ImPointRight className="text-blue-400" />
              👥 Serving as the Event Management Lead at Trendles Club, IIIT
              Kottayam, organizing tech and cultural events with cross-functional
              teams
            </li>
          </ul>

          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/1GSDOYO4xcid2hOzf4LWoZIl8itHyurmV/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
            >
              📄 Resume
            </a>
          </div>
        </div>

        <img
          src={laptopImg}
          alt="About"
          className="rounded-2xl shadow-xl w-full max-w-full md:scale-180"
          style={{ maxHeight: "500px", objectFit: "contain" }}
        />
      </div>
    </motion.section>
  );
};

export default About;

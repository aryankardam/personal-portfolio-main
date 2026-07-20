import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaGraduationCap,
} from "react-icons/fa";

// --- Import Project Images ---
import plantImg from "../assets/project-plant.jpg";
import digitImg from "../assets/project-digit.png";
import portfolioImg from "../assets/project-portfolio.jpg";
import robotImg from "../assets/robo.jpg";
import pasteAppImg from "../assets/pasteAppImg.png";
import calculatorImg from "../assets/calculatorImg.png";
import connect4Img from "../assets/connect4Img.png";
import cardMatchImg from "../assets/cardMatchImg.png";
import guessingGameImg from "../assets/guessingGameImg.png";
import keyLoggerImg from "../assets/keyLoggerImg.png";
import ticTacToeImg from "../assets/ticTacToeImg.png";
import quickSignImg from "../assets/quickSignImg.png";
import chessGameImg from "../assets/chessGameImg.png";
import strengthLabzImg from "../assets/strengthLabzImg.png";
import loginAuthImg from "../assets/loginAuthImg.png";
import ecommerceImg from "../assets/ecommerceImg.png";
import negamCareImg from "../assets/negamCareImg.jpg"

// --- Categorized Projects ---
const projects = {
  featured: [
{
  title: "NegamCare",

  tagline: "Healthcare Website | Stemz Healthcare",

  description:
    "Designed and developed the official NegamCare healthcare website as part of my Web Development Internship at Stemz Healthcare, delivering a responsive, user-centric experience while strengthening the company's online presence.",

  highlights: [
    "Internship Project at Stemz Healthcare",
    "Responsive Healthcare Website",
    "Modern React Architecture",
    "Reusable UI Components",
    "SEO & Performance Optimizations",
    "Improved User Experience"
  ],

  techStack: [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "React Router",
    "Framer Motion"
  ],

  category: "Internship Project",

  status: "Completed",

  image: negamCareImg,

  repo: "https://github.com/aryankardam/NegamCareSH",

  live: "https://negam-care-sh.vercel.app/",
},
    {
      title: "StrengthLabz",
      description:
        "A full-stack eCommerce platform built with the MERN stack featuring secure authentication, real-time cart updates, Razorpay payments, and an admin dashboard.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Razorpay",
        "JWT",
        "Socket.IO",
      ],
      image: strengthLabzImg,
      repo: "https://github.com/aryankardam/StrengthLabz",
      live: "https://strength-labz-git-main-aryan-kardams-projects.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion to showcase skills and projects.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      image: portfolioImg,
      repo: "https://github.com/aryankardam/personal-portfolio-main",
    },
    {
      title: "Chess Game",
      description:
        "A real-time multiplayer chess environment using Socket.IO and Chess.js with secure match management and synchronized gameplay.",
      techStack: [
        "Node.js",
        "Socket.IO",
        "Express.js",
        "Chess.js",
        "HTML",
        "CSS",
      ],
      image: chessGameImg,
      repo: "https://github.com/aryankardam/ChessGame",
    },
    {
      title: "PasteApp",
      description:
        "A responsive text/code sharing app built using React.js and Redux with seamless navigation and real-time state management.",
      techStack: ["React.js", "Redux", "Tailwind CSS", "React Router"],
      image: pasteAppImg,
      repo: "https://github.com/aryankardam/PasteApp",
      live: "https://note-paste-app-git-main-aryan-kardams-projects.vercel.app",
    },
  ],
  learning: [
    {
      title: "eCommerce Website",
      description:
        "An online store with product management, cart, checkout, and payments using MERN stack, JWT authentication, and Cloudinary image hosting.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
        "Razorpay",
      ],
      image: ecommerceImg,
      repo: "https://github.com/aryankardam/EcommerceWebsite",
    },
    {
      title: "Smart Plant Watering System",
      description:
        "An IoT-based plant watering system using ESP8266, DHT11, and Blynk app for real-time monitoring and remote control.",
      techStack: ["ESP8266", "DHT11", "Relay", "Blynk", "Arduino IDE"],
      image: plantImg,
      repo: "https://github.com/aryankardam/Smart-Plant-Watering-System",
    },
    {
      title: "Human-Following Robot",
      description:
        "An Arduino robot that uses ultrasonic and IR sensors to follow a human. Demonstrates automation and sensor integration.",
      techStack: [
        "Arduino Uno",
        "HC-SR04",
        "IR Sensors",
        "L293D Motor Driver",
        "Servo Motor",
      ],
      image: robotImg,
      repo: "https://github.com/aryankardam/human-following-robot",
    },
    {
      title: "Login and Authorization System",
      description:
        "A robust Node.js authentication system with JWT tokens, Bcrypt hashing, and role-based access control.",
      techStack: ["Node.js", "Express.js", "JWT", "Bcrypt.js", "MongoDB"],
      image: loginAuthImg,
      repo: "https://github.com/aryankardam/LoginAndRegistration",
    },
    {
      title: "Handwritten Digit Recognition",
      description:
        "A CNN model using Keras & TensorFlow trained on MNIST dataset for digit classification.",
      techStack: ["Python", "Keras", "TensorFlow", "OpenCV"],
      image: digitImg,
      repo: "https://github.com/aryankardam/Handwritten-Digit-Recognition",
    },
    {
      title: "Calculator",
      description:
        "A basic calculator built using React.js, capable of performing standard arithmetic operations with a responsive UI and clear display logic.",
      techStack: ["React.js", "JavaScript", "CSS"],
      image: calculatorImg,
      repo: "https://github.com/aryankardam/react-calculator",
      live: "https://react-calculator.vercel.app",
    },
    {
      title: "Card Matching Game",
      description:
        "A memory-based card matching game built using vanilla JavaScript. Players flip cards to find matching pairs, with smooth animations and a reset feature for replayability.",
      techStack: ["JavaScript", "HTML", "CSS"],
      image: cardMatchImg,
      repo: "https://github.com/aryankardam/card-matching-game",
      live: "https://card-matching-game.vercel.app",
    },
    {
      title: "Number Guessing Game",
      description:
        "A fun and interactive game where the player guesses a randomly generated number within a set range. Built with JavaScript, it includes feedback prompts, score tracking, and a reset feature.",
      techStack: ["JavaScript", "HTML", "CSS"],
      image: guessingGameImg,
      repo: "https://github.com/aryankardam/number-guessing-game",
      live: "https://number-guessing-game.vercel.app",
    },
    {
      title: "Key Logger",
      description:
        "A JavaScript-based key logger that captures and displays user keystrokes in real-time on the web page. Built for educational and debugging purposes, showcasing event handling and DOM manipulation.",
      techStack: ["JavaScript", "HTML", "CSS"],
      image: keyLoggerImg,
      repo: "https://github.com/aryankardam/key-logger",
      live: "https://key-logger-demo.vercel.app",
    },
    {
      title: "Connect 4 Game (Mini Web Game)",
      description:
        "A fun two-player Connect 4 game built using JavaScript, featuring win detection, animations, and responsive layout.",
      techStack: ["JavaScript", "HTML", "CSS"],
      image: connect4Img,
      repo: "https://github.com/aryankardam/Connenct-4-game",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A classic two-player Tic Tac Toe game built with JavaScript. Features a responsive grid, win/draw detection, and a reset option for continuous play.",
      techStack: ["JavaScript", "HTML", "CSS"],
      image: ticTacToeImg,
      repo: "https://github.com/aryankardam/tic-tac-toe",
      live: "https://tic-tac-toe-game.vercel.app",
    },
    {
      title: "Quick Sign",
      description:
        "A digital signature pad built using JavaScript that allows users to draw and save their signatures. Ideal for forms, verifications, and touch-screen interactions.",
      techStack: ["JavaScript", "HTML", "CSS"],
      image: quickSignImg,
      repo: "https://github.com/aryankardam/quicksign",
      live: "https://quick-sign.vercel.app",
    },
  ],
};

// --- Main Component ---
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const activeProjects = projects[activeCategory];

  return (
    <motion.section
      className="max-w-6xl mx-auto py-16 px-4 text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      {/* --- Heading --- */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-blue-500">My</span> Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my{" "}
          <span className="text-blue-400 font-semibold">featured work</span> and{" "}
          <span className="text-blue-400 font-semibold">
            learning experiments
          </span>{" "}
          — showcasing full-stack development, IoT systems, and creative coding
          projects.
        </p>
      </div>

      {/* --- Category Buttons --- */}
      <div className="flex justify-center gap-6 mb-10">
        {["featured", "learning"].map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === category
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            {category === "featured" ? (
              <>
                <FaStar className="text-yellow-400 text-base" />
                Featured Projects
              </>
            ) : (
              <>
                <FaGraduationCap className="text-blue-400 text-base" />
                Learning Projects
              </>
            )}
          </motion.button>
        ))}
      </div>

      {/* --- Project Grid --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activeProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-blue-600/30 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-4 items-center">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white text-lg"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white text-lg"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
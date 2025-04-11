import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Add your local images or URLs
import plantImg from '../assets/project-plant.jpg';
import digitImg from '../assets/project-digit.png';
import portfolioImg from '../assets/project-portfolio.jpg';
import robotImg from '../assets/robo.jpg';
import pasteAppImg from '../assets/pasteAppImg.png';
import calculatorImg from '../assets/calculatorImg.png';
import connect4Img from '../assets/connect4Img.png';
import cardMatchImg from '../assets/cardMatchImg.png';
import guessingGameImg from '../assets/guessingGameImg.png';
import keyLoggerImg from '../assets/keyLoggerImg.png';
import ticTacToeImg from '../assets/ticTacToeImg.png';
import quickSignImg from '../assets/quickSignImg.png';

const projects = [
  {
    title: 'Human-Following Robot',
    description:
      'A simple Arduino-based robot that uses ultrasonic and IR sensors to track and follow a human. It intelligently moves forward, stops, or moves backward based on distance and direction detection. Ideal for personal assistance and smart mobility applications.',
    techStack: ['Arduino Uno', 'Ultrasonic Sensor (HC-SR04)', 'IR Sensors', 'L293D Motor Driver', 'DC Motors', 'Servo Motor', 'Buzzer'],
    image: robotImg,
    repo: 'https://github.com/aryankardam/human-following-robot',
    live: 'google.com',
  },
  {
    title: 'PasteApp',
    description:
      'A lightweight web-based application for creating and sharing text snippets. Built with a clean UI and features seamless navigation and state management for an efficient user experience.',
    techStack: ['React.js', 'Redux', 'Tailwind CSS', 'React Router'],
    image: pasteAppImg,
    repo: 'https://github.com/aryankardam/PasteApp',
    live: 'https://note-paste-app-git-main-aryan-kardams-projects.vercel.app',
  },    
  {
    title: 'Smart Plant Watering System',
    description:
      'An IoT-based system using ESP8266, soil moisture sensor, DHT11, and Blynk for smart irrigation. Features remote control and real-time data.',
    techStack: ['ESP8266', 'DHT11', 'Relay', 'Blynk', 'Arduino IDE'],
    image: plantImg,
    repo: 'https://github.com/aryankardam/Smart-Plant-Watering-System',
    live: 'google.com',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This portfolio website built with React, Tailwind CSS, and Framer Motion to showcase skills, projects, and experience interactively.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: portfolioImg,
    repo: 'https://github.com/aryankardam/personal-portfolio-main',
    live: '',
  },
  {
    title: 'Calculator',
    description:
      'A basic calculator built using React.js, capable of performing standard arithmetic operations with a responsive UI and clear display logic.',
    techStack: ['React.js', 'JavaScript', 'CSS'],
    image: calculatorImg,
    repo: 'https://github.com/aryankardam/react-calculator',
    live: 'https://react-calculator.vercel.app',
  },
  {
    title: 'Connect 4 Game',
    description:
      'A classic two-player Connect 4 game built using vanilla JavaScript, HTML, and CSS. Features a dynamic game board, win detection logic, and interactive UI for an engaging experience.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    image: connect4Img,
    repo: 'https://github.com/aryankardam/Connenct-4-game',
    live: 'https://connect4game.vercel.app',
  },
  {
    title: 'Card Matching Game',
    description:
      'A memory-based card matching game built using vanilla JavaScript. Players flip cards to find matching pairs, with smooth animations and a reset feature for replayability.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    image: cardMatchImg,
    repo: 'https://github.com/aryankardam/card-matching-game',
    live: 'https://card-matching-game.vercel.app',
  },
  {
    title: 'Number Guessing Game',
    description:
      'A fun and interactive game where the player guesses a randomly generated number within a set range. Built with JavaScript, it includes feedback prompts, score tracking, and a reset feature.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    image: guessingGameImg,
    repo: 'https://github.com/aryankardam/number-guessing-game',
    live: 'https://number-guessing-game.vercel.app',
  },
  {
    title: 'Key Logger',
    description:
      'A JavaScript-based key logger that captures and displays user keystrokes in real-time on the web page. Built for educational and debugging purposes, showcasing event handling and DOM manipulation.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    image: keyLoggerImg,
    repo: 'https://github.com/aryankardam/key-logger',
    live: 'https://key-logger-demo.vercel.app',
  },          
  {
    title: 'Handwritten Digit Recognition',
    description:
      'A neural network model trained using TensorFlow and Keras to recognize digits from the MNIST dataset with high accuracy.',
    techStack: ['Python', 'Keras', 'TensorFlow', 'OpenCV'],
    image: digitImg,
    repo: 'https://github.com/aryankardam/Handwritten-Digit-Recognition',
    live: '',
  },
  {
    title: 'Tic Tac Toe',
    description:
      'A classic two-player Tic Tac Toe game built with JavaScript. Features a responsive grid, win/draw detection, and a reset option for continuous play.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    image: ticTacToeImg,
    repo: 'https://github.com/aryankardam/tic-tac-toe',
    live: 'https://tic-tac-toe-game.vercel.app',
  },
  {
    title: 'Quick Sign',
    description:
      'A digital signature pad built using JavaScript that allows users to draw and save their signatures. Ideal for forms, verifications, and touch-screen interactions.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    image: quickSignImg,
    repo: 'https://github.com/aryankardam/quicksign',
    live: 'https://quick-sign.vercel.app',
  },    
];

const Projects = () => {
  return (
    <motion.section
      className="max-w-6xl mx-auto py-16 px-4 text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-blue-500">My</span> Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{project.description}</p>
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
      </div>
    </motion.section>
  );
};

export default Projects;

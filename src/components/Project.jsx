import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Add your local images or URLs
import plantImg from '../assets/project-plant.jpg';
import digitImg from '../assets/project-digit.png';
import portfolioImg from '../assets/project-portfolio.jpg';

const projects = [
  {
    title: 'Smart Plant Watering System',
    description:
      'An IoT-based system using ESP8266, soil moisture sensor, DHT11, and Blynk for smart irrigation. Features remote control and real-time data.',
    techStack: ['ESP8266', 'DHT11', 'Relay', 'Blynk', 'Arduino IDE'],
    image: plantImg,
    repo: 'https://github.com/aryankardam/plant-watering-system',
    live: 'google.com',
  },
  {
    title: 'Handwritten Digit Recognition',
    description:
      'A neural network model trained using TensorFlow and Keras to recognize digits from the MNIST dataset with high accuracy.',
    techStack: ['Python', 'Keras', 'TensorFlow', 'OpenCV'],
    image: digitImg,
    repo: 'https://github.com/aryankardam/digit-recognition',
    live: '',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This portfolio website built with React, Tailwind CSS, and Framer Motion to showcase skills, projects, and experience interactively.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: portfolioImg,
    repo: 'https://github.com/aryankardam/portfolio',
    live: '',
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

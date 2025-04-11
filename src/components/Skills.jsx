import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLaptopCode,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiArduino,
  SiPython,
  SiMongodb,
  SiC,
  SiCplusplus,
} from 'react-icons/si';

const languages = [
  { icon: <SiC />, name: 'C' },
  { icon: <SiCplusplus />, name: 'C++' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <SiPython />, name: 'Python' },
];

const frameworks = [
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiMongodb />, name: 'MongoDB' },
];

const tools = [
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <SiArduino />, name: 'Arduino' },
  { icon: <FaLaptopCode />, name: 'MATLAB' }, // Placeholder icon
];

const Skills = () => {
  return (
    <motion.section
      className="max-w-5xl mx-auto py-16 px-4 text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">
        <span className="text-blue-500">Skills</span> & Experience
      </h2>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
        As a frontend developer and electronics enthusiast, I’ve built projects using modern tech like React, Tailwind CSS, ESP8266, and Arduino. Here’s what I work with:
      </p>

      <div className="space-y-12">
        {/* Programming Languages */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 inline-flex items-center justify-center gap-3">
            Programming <span className="text-blue-500">Languages</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-white rounded-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl text-blue-400 mb-2">{lang.icon}</div>
                <span className="text-sm text-gray-200">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frameworks and Libraries */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 inline-flex items-center justify-center gap-3">
            Frameworks / <span className="text-blue-500">Libraries</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {frameworks.map((fw, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-white rounded-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl text-blue-400 mb-2">{fw.icon}</div>
                <span className="text-sm text-gray-200">{fw.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 inline-flex items-center justify-center gap-3">
            <span className="text-blue-500">Tools</span> I Use
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-white rounded-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl text-blue-400 mb-2">{tool.icon}</div>
                <span className="text-sm text-gray-200">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
<div className="text-center mt-16 overflow-hidden">
  <h3 className="text-4xl font-semibold mb-4">
    <span className="text-blue-100">Experience</span>
  </h3>
  <div className="relative h-10 w-full overflow-hidden">
    <motion.div
      className="absolute whitespace-nowrap text-lg text-blue-400 font-medium"
      animate={{ x: ['100%', '-100%'] }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: 'linear',
      }}
    >
      Adding soon... &nbsp;  &nbsp; Adding soon... &nbsp;  &nbsp; Adding soon... 
    </motion.div>
  </div>
</div>

      </div>
    </motion.section>
  );
};

export default Skills;

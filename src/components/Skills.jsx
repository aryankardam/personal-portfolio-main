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
  FaBootstrap,
  FaLock,
  FaCode,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiArduino,
  SiPython,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiNextdotjs,
  SiRedux,
  SiReactrouter,
  SiFramer,
  SiExpress,
  SiPostman,
  SiRailway,
  SiRender,
  SiRazorpay,
  SiCloudinary,
  SiSocketdotio,
  SiJsonwebtokens,
} from 'react-icons/si';

const languages = [
  { icon: <SiC />, name: 'C' },
  { icon: <SiCplusplus />, name: 'C++' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <FaLaptopCode />, name: 'MATLAB' },
];

const frameworks = [
  { icon: <FaReact />, name: 'React.js' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <SiRedux />, name: 'Redux' },
  { icon: <SiReactrouter />, name: 'React Router' },
  { icon: <SiFramer />, name: 'Framer Motion' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaLock />, name: 'Bcrypt.js' },       // replaced SiBcrypt with FaLock
  { icon: <SiSocketdotio />, name: 'Socket.IO' },
  { icon: <SiJsonwebtokens />, name: 'JWT' },
  { icon: <FaCode />, name: 'REST APIs' },       // replaced SiRest with FaCode
  { icon: <SiMongodb />, name: 'Mongoose' },
];

const tools = [
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <SiPostman />, name: 'Postman' },
  { icon: <SiRailway />, name: 'Railway' },
  { icon: <SiRender />, name: 'Render' },
  { icon: <SiRazorpay />, name: 'Razorpay' },
  { icon: <SiCloudinary />, name: 'Cloudinary' },
  { icon: <SiArduino />, name: 'Arduino' },
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
        As a passionate frontend developer and electronics engineer, I specialize in building scalable and user-centric applications using modern technologies such as React.js, Tailwind CSS, Node.js, and Socket.IO. I also have hands-on experience with IoT devices using Arduino and ESP8266, integrating hardware and software to deliver innovative solutions. Below is an overview of my key skills and expertise:
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
      Yet to done... &nbsp;  &nbsp; Yet to done... &nbsp;  &nbsp; Yet to done... 
    </motion.div>
  </div>
</div>

      </div>
    </motion.section>
  );
};

export default Skills;

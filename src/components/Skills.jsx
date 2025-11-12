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
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
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
  { icon: <FaLock />, name: 'Bcrypt.js' },
  { icon: <SiSocketdotio />, name: 'Socket.IO' },
  { icon: <SiJsonwebtokens />, name: 'JWT' },
  { icon: <FaCode />, name: 'REST APIs' },
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

const experience = {
  company: 'ADM TutorX',
  role: 'Frontend Developer Intern',
  duration: 'Aug 2024 – Present',
  location: 'Remote',
  achievements: [
    'Engineered responsive and modular UI components using React.js and Tailwind CSS, improving load efficiency and user engagement',
    'Collaborated with backend engineers to integrate REST APIs, streamlining data rendering and dashboard performance',
    'Enhanced reusability and reduced code redundancy by 30% through optimized component architecture',
    'Participated in Agile sprints, code reviews, and product demos to ensure delivery alignment with project goals',
  ],
  skills: ['React.js', 'Tailwind CSS', 'REST APIs', 'GitHub', 'Team Collaboration'],
};

const Skills = () => {
  return (
    <div className="bg-black min-h-screen">
      <motion.section
        className="max-w-6xl mx-auto py-16 px-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Main Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Professional <span className="text-blue-500">Profile</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Full-Stack Developer | IoT Innovator 
          </p>
        </motion.div>

        {/* Professional Experience Section - Priority Position */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FaBriefcase className="text-blue-500 text-3xl" />
            <h2 className="text-4xl font-bold">
              Professional <span className="text-blue-500">Experience</span>
            </h2>
          </div>

          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm border-l-4 border-blue-500 rounded-lg p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            whileHover={{ scale: 1.01 }}
          >
            {/* Company and Role Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 pb-6 border-b border-gray-700">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{experience.role}</h3>
                <p className="text-2xl text-blue-400 font-semibold mb-4">{experience.company}</p>
              </div>
              <div className="flex flex-col gap-2 text-gray-300">
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg">
                  <FaCalendarAlt className="text-blue-400" />
                  <span className="font-medium">{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span className="font-medium">{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                Key Contributions & Impact
              </h4>
              <ul className="space-y-4">
                {experience.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-blue-400 text-xl mt-0.5 flex-shrink-0">•</span>
                    <span className="text-base">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-gray-200 mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">
              Technical <span className="text-blue-500">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Proficient in modern web technologies and development tools with hands-on experience in building scalable applications
            </p>
          </div>

          <div className="space-y-16">
            {/* Programming Languages */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-blue-500">01.</span> Programming Languages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-5 bg-gray-800/40 border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-gray-800/60 transition-all duration-300 group"
                    whileHover={{ scale: 1.08, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  >
                    <div className="text-5xl text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                      {lang.icon}
                    </div>
                    <span className="text-sm text-gray-300 font-medium">{lang.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Frameworks and Libraries */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-blue-500">02.</span> Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {frameworks.map((fw, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-5 bg-gray-800/40 border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-gray-800/60 transition-all duration-300 group"
                    whileHover={{ scale: 1.08, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.04 }}
                  >
                    <div className="text-5xl text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                      {fw.icon}
                    </div>
                    <span className="text-sm text-gray-300 font-medium text-center">{fw.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-blue-500">03.</span> Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-5 bg-gray-800/40 border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-gray-800/60 transition-all duration-300 group"
                    whileHover={{ scale: 1.08, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                  >
                    <div className="text-5xl text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                      {tool.icon}
                    </div>
                    <span className="text-sm text-gray-300 font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Skills;
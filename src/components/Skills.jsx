import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLock,
  FaCode,
} from "react-icons/fa";

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
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";

const languages = [
  { icon: <SiC />, name: "C" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python" },
];

const frontend = [
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiReactrouter />, name: "React Router" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
];

const backend = [
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMongodb />, name: "Mongoose" },
  { icon: <SiSocketdotio />, name: "Socket.IO" },
  { icon: <SiJsonwebtokens />, name: "JWT" },
  { icon: <FaLock />, name: "bcrypt" },
  { icon: <FaCode />, name: "REST API" },
];

const tools = [
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiGrafana />, name: "Grafana" },
  { icon: <SiPrometheus />, name: "Prometheus" },
  { icon: <SiCloudinary />, name: "Cloudinary" },
  { icon: <SiRazorpay />, name: "Razorpay" },
  { icon: <SiRailway />, name: "Railway" },
  { icon: <SiRender />, name: "Render" },
  { icon: <SiArduino />, name: "Arduino" },
];

const experience = [
  {
    company: "ORI (Oriserve)",
    role: "Software Engineer Intern",
    duration: "Mar 2026 – Present",
    location: "Noida, India",
    achievements: [
      "Debugged and resolved production backend issues across APIs, databases, and authentication systems.",
      "Performed Root Cause Analysis (RCA) by monitoring application logs and identifying system failures.",
      "Worked with Node.js, REST APIs, and MongoDB to troubleshoot backend services and production workflows.",
      "Collaborated with developers and project managers to deploy fixes and improve application stability.",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Debugging",
      "Root Cause Analysis",
      "Team Collaboration",
    ],
  },
  {
    company: "Stemz Healthcare Private Limited",
    role: "Web Development Intern",
    duration: "Dec 2025 – Feb 2026",
    location: "Gurgaon, India",
    achievements: [
      "Developed and optimized internal and public-facing web applications supporting business workflows.",
      "Built a production-ready contact and career portal using React (Vite), Node.js, and Express.",
      "Enhanced the company website by improving UI responsiveness and overall user experience.",
      "Collaborated with cross-functional teams to deliver scalable features aligned with business requirements.",
    ],
    skills: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "UI Optimization",
      "Team Collaboration",
    ],
  },
  {
    company: "ADM TutorX",
    role: "Frontend Developer Intern",
    duration: "Aug 2025 – Dec 2025",
    location: "Remote",
    achievements: [
      "Developed responsive and reusable UI components using React.js and Tailwind CSS.",
      "Integrated frontend modules with REST APIs for efficient data rendering and dashboard performance.",
      "Refactored component architecture, reducing code redundancy by 30% and improving maintainability.",
      "Collaborated with the development team to deliver responsive and user-centric web interfaces.",
    ],
    skills: [
      "React.js",
      "Tailwind CSS",
      "REST APIs",
      "GitHub",
      "Team Collaboration",
    ],
  },
];

const SkillSection = ({ title, items, cols = "lg:grid-cols-5" }) => (
  <div>
    <h3 className="text-2xl font-semibold mb-6">{title}</h3>

    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${cols} gap-4`}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          className="flex flex-col items-center justify-center p-5 bg-gray-800/40 border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-gray-800/60 transition-all duration-300 group"
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <div className="text-5xl text-blue-400 mb-3">{item.icon}</div>

          <span className="text-sm text-gray-300 font-medium text-center">
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

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
            Software Engineer | Full-Stack MERN Developer
          </p>
        </motion.div>

        {/* Professional Experience Section - Priority Position */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-4xl font-bold">
              Professional <span className="text-blue-500">Experience</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-2xl">
              Hands-on experience building production-ready applications,
              debugging backend systems, and delivering scalable full-stack
              solutions.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, expIndex) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: expIndex * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-[#111827] border border-gray-800 hover:border-blue-500/40 rounded-2xl p-7 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>

                    <p className="text-lg text-blue-400 font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-right text-gray-400 text-sm leading-6">
                    <p className="font-medium">{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                {/* Divider */}

                <div className="my-6 border-t border-gray-700/60"></div>

                {/* Achievements */}

                <ul className="space-y-4">
                  {exp.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex gap-4 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                    >
                      <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />

                      <span className="leading-7">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-8">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full border border-gray-700 bg-gray-900 text-gray-300 text-sm hover:border-blue-500 hover:text-blue-400 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
              {/* Proficient in modern web technologies and development tools with hands-on experience in building scalable applications */}
              Hands-on experience with modern frontend, backend, databases, and
              development tools used to build scalable web applications.
            </p>
          </div>

          <div className="space-y-16">
            <SkillSection
              title="Programming Languages"
              items={languages}
              cols="lg:grid-cols-4"
            />

            <SkillSection
              title="Frontend"
              items={frontend}
              cols="lg:grid-cols-4"
            />

            <SkillSection
              title="Backend"
              items={backend}
              cols="lg:grid-cols-4"
            />

            <SkillSection
              title="Tools & Platforms"
              items={tools}
              cols="lg:grid-cols-5"
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Skills;

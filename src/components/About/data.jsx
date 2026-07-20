import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaCode,
} from "react-icons/fa";

import { SiArduino } from "react-icons/si";

import {
  HiAcademicCap,
  HiBriefcase,
  HiGlobeAsiaAustralia,
  HiMapPin,
} from "react-icons/hi2";

export const intro = {
  title: "About Me",
  description: [
    "I'm a Software Engineer and recent Electronics & Communication Engineering graduate from the Indian Institute of Information Technology (IIIT) Kottayam.",

    "Through multiple software internships and real-world projects, I've built scalable MERN applications, contributed to production backend debugging, and developed modern user experiences.",

    "I enjoy solving engineering problems by building secure backend services, intuitive frontend applications, and reliable software products.",
  ],
};

export const expertise = [
  {
    icon: <FaReact />,
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    icon: <FaNodeJs />,
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "JWT Authentication",
    ],
  },

  {
    icon: <FaDatabase />,
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Razorpay",
    ],
  },

  {
    icon: <FaServer />,
    title: "Security",
    skills: [
      "JWT",
      "bcrypt",
      "Authentication",
    ],
  },

  {
    icon: <SiArduino />,
    title: "IoT",
    skills: [
      "Arduino",
      "ESP8266",
      "Automation",
    ],
  },
];

export const quickFacts = [
  {
    icon: <HiAcademicCap />,
    text: "IIIT Kottayam Graduate",
  },

  {
    icon: <HiBriefcase />,
    text: "3 Software Internships",
  },

  {
    icon: <FaCode />,
    text: "6+ Full-Stack Projects",
  },

  {
    icon: <HiGlobeAsiaAustralia />,
    text: "MERN Stack Developer",
  },

  {
    icon: <HiMapPin />,
    text: "Uttar Pradesh, India",
  },

  {
    icon: "🚀",
    text: "Open to Full-Time Opportunities",
  },
];

export const currentWork = [
  {
    title: "Software Engineer Intern @ ORI",
    description:
      "Working on production backend systems by debugging real-world issues, performing Root Cause Analysis (RCA), improving REST APIs, and contributing to application stability in a collaborative engineering environment.",
  },

  {
    title: "StrengthLabz",
    description:
      "Building a scalable MERN eCommerce platform with JWT authentication, Razorpay payment integration, Cloudinary media management, role-based authorization, and a modern React frontend.",
  },

  {
    title: "PasteApp",
    description:
      "Developing a modern text and code sharing platform using React, Redux Toolkit, React Router, and responsive UI principles with an emphasis on clean architecture and user experience.",
  },
];

export const beyondCode = [
  {
    title: "Continuous Learning",
    icon: "📚",
    description:
      "I enjoy exploring new technologies, software architecture, backend engineering, and best development practices to continuously improve as an engineer.",
  },

  {
    title: "Leadership",
    icon: "🚀",
    description:
      "Served as Event Management Lead at Trendles Club, IIIT Kottayam, coordinating technical and cultural events while collaborating with diverse teams.",
  },

  {
    title: "Exploration",
    icon: "🌍",
    description:
      "I enjoy travelling, discovering new places, and learning from different people and cultures beyond technology.",
  },

  {
    title: "Entertainment",
    icon: "🎬",
    description:
      "Watching movies and web series helps me relax, recharge, and maintain a healthy balance between work and personal life.",
  },
];
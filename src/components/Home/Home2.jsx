import React from "react";
import myImg from "../../assets/avatar.svg";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Home2 = () => {
  return (
    <section
      id="home-about"
      className="min-h-screen flex flex-col md:flex-row item-center justify-evenly bg-black text-gray-100"
    >
      {/* Text Section */}
      <div className="pt-24 pb-5 text-center md:text-left w-full md:w-8/12">
        <h1 className="text-4xl text-center">
          🚀 ABOUT  <span className="text-blue-500">ME</span>
        </h1>

        <p className="mt-8 text-[1.2em] leading-relaxed">
          I’m a final-year B.Tech student majoring in Electronics and Communication Engineering at IIIT Kottayam, with a strong passion for developing end-to-end web solutions and intelligent IoT systems.
          <br />
          <ul className="flex flex-col flex-wrap gap-4 mt-2">
            <li>
              💻 I build full-stack web apps using the MERN Stack {' '}
          <span className="text-blue-500 italic font-bold">(MongoDB, Express.js, React.js, Node.js)</span>
            </li>
            <li>
              🎯 I integrate real-time systems using{' '}
          <span className="text-blue-500 italic font-bold">Socket.IO</span>{' '}
          , secure APIs with{' '}
          <span className="text-blue-500 italic font-bold">JWT, </span>and handle cloud storage with{' '}
          <span className="text-blue-500 italic font-bold"> Cloudinary</span>
            </li>
            <li>
              ⚡ I develop interactive frontend interfaces using{' '}
          <span className="text-blue-500 italic font-bold">React.js, Tailwind CSS, Redux, and Framer Motion</span>.
            </li>
            <li>
              🤖 I create smart IoT devices using {' '}<span className="text-blue-500 italic font-bold">Arduino, ESP8266, sensors, </span> and automation logic
            </li>
            <li>
              🧠 I explore{' '}
          <span className="text-blue-500 italic font-bold">Machine Learning</span>concepts and apply them in practical projects
            </li>
          </ul>
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
          <NavLink
            to="/project"
            className="mb-4 sm:mb-0 bg-blue-500 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            View Projects
          </NavLink>
          <NavLink
            to="/contactMe"
            className="bg-transparent border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-blue-500/10"
          >
            Contact Me
          </NavLink>
        </div>

        {/* Social Links */}
        <div className="mt-12  md:text-center">
          <h2 className="text-2xl">FIND ME ON</h2>
          <p className="mt-2">
            Feel free to <span className="text-blue-500">connect</span> with me
          </p>
          <ul className="mt-4 flex justify-center md:justify-center space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/aryan-kardam-b94b16296"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black transition-transform hover:scale-110 hover:bg-[#0A66C2] hover:shadow-lg"
              >
                <FaLinkedinIn className="z-10 text-xl group-hover:text-white" />
                <span className="absolute inset-0 rounded-full bg-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aryan_kardam"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black transition-transform hover:scale-110 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-purple-500 hover:to-yellow-400 hover:shadow-lg"
              >
                <FaInstagram className="z-10 text-xl group-hover:text-white" />
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aryankardam"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-500 transition-transform hover:scale-110 hover:bg-purple-500 hover:shadow-lg"
              >
                <FaGithub className="z-10 text-xl group-hover:text-white" />
                <span className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Avatar Section */}
      <div className="w-full md:w-6/12 flex justify-center items-center mx-auto mt-8">
        <img src={myImg} alt="My Avatar" className="max-w-[200px] md:max-w-xs w-full h-auto rounded-full" />
      </div>

    </section>
  );
};

export default Home2;

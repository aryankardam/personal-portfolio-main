import React from "react";
import myImg from "../../assets/avatar.svg";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Home2 = () => {
  return (
    <section
      id="home-about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-evenly bg-black text-gray-100"
    >
      {/* Text Section */}
      <div className="pt-24 pb-5 text-center md:text-left w-full md:w-8/12">
        <h1 className="text-4xl">
          LET ME <span className="text-blue-500">INTRODUCE</span> MYSELF
        </h1>

        <p className="mt-8 text-[1.2em] leading-relaxed">
          I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          <br />
          <br />I am fluent in classics like{' '}
          <span className="text-blue-500 italic font-bold">C++, JavaScript</span>
          <br />
          <br />My fields of interest are building new{' '}
          <span className="text-blue-500 italic font-bold">Web Technologies and Products</span>{' '}
          and also in areas related to{' '}
          <span className="text-blue-500 italic font-bold">IoT</span> (Internet of Things).
          <br />
          <br />Whenever possible, I also apply my passion for developing products with modern JavaScript libraries and frameworks like{' '}
          <span className="text-blue-500 italic font-bold">React.js and Next.js</span>.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center justify-center md:justify-start">
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
        <div className="mt-12 text-center md:text-left">
          <h2 className="text-2xl">FIND ME ON</h2>
          <p className="mt-2">
            Feel free to <span className="text-blue-500">connect</span> with me
          </p>
          <ul className="mt-4 flex justify-center md:justify-start space-x-4">
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
      <div className="w-6/12 hidden md:flex justify-center">
        <img src={myImg} alt="My Avatar" className="max-w-xs" />
      </div>
    </section>
  );
};

export default Home2;

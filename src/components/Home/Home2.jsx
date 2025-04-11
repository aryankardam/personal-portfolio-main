import React from "react";
import myImg from "../../assets/avatar.svg";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home2 = () => {
  return (
    <section
      id="home-about"
      className="min-h-screen flex flex-col md:flex-row items-center place-content-evenly relative bg-black text-gray-100"
    >
      <div className="pt-24 pb-5 text-center w-full md:w-8/12 ">
        <h1 className="text-4xl">
          LET ME <span className="text-blue-500">INTRODUCE</span> MYSELF
        </h1>

        <div className="flex flex-row justify-between">
          <div className="flex justify-items-start">
            <p className="pt-[50px] text-left text-[1.2em]">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <span className="text-blue-500">
                <i>
                  <b>C++, Javascript .</b>
                </i>
              </span>
              <br />
              <br />
              My field of Interest's are building new
              <span className="text-blue-500">
                <i>
                  <b> Web Technologies and Products</b>
                </i>
              </span>
              and also in area related to
              <span className="text-blue-500">
                {" "}
                <i>
                  <b>IOT</b>
                </i>
              </span>{" "}
              (Internet Of Things) .
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with Modern Javascript Library and Frameworks
              <span className="text-blue-500">
                <i>
                  <b> React.js and Next.js</b>
                </i>
              </span>
            </p>
          </div>
          <div id="myAvtar" className="w-full md:w-4/12 flex flex-col ml-35">
            <div className="mb-10">
              <img src={myImg} alt="MyAvatar" />
            </div>
            <div className="flex justify-center space-x-4">
              <NavLink
                to="/project"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] "
              >
                View Projects
              </NavLink>

              <NavLink
                to="/contactMe"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </div>

        <div className="w-full md:w-full text-center pt-[25px]">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="text-blue-500">connect </span>with me
          </p>

          <ul className="flex relative pt-[15px] pl-0 justify-center flex-row m-auto">
            <li className="inline-block px-[15px]">
              <a
                href="https://www.linkedin.com/in/aryan-kardam-b94b16296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black transition-all duration-500 hover:bg-[#0A66C2] hover:shadow-[0_0_8px_#0A66C2]"
              >
                {/* Icon */}
                <FaLinkedinIn className="z-10 text-xl transition-colors duration-500 group-hover:text-white" />

                {/* Animated background circle */}
                <span className="absolute inset-0 rounded-full bg-[#0A66C2] scale-90 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_#0A66C2]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aryan_kardam?igsh=OXZtZ3o4enoyejJ1"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black transition-all duration-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-purple-500 hover:to-yellow-400 hover:shadow-[0_0_8px_rgba(236,72,153,0.7)]"
              >
                {/* Icon */}
                <FaInstagram className="z-10 text-xl transition-colors duration-500 group-hover:text-white" />

                {/* Animated background circle */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 scale-90 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.7)]" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aryankardam"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-500 transition-all duration-300 ml-3"
              >
                {/* Icon */}
                <FaGithub className="z-10 text-xl" />

                {/* Hover overlay */}
                <span className="absolute inset-0 rounded-full bg-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

                {/* Icon color on hover */}
                <FaGithub className="absolute z-20 text-xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home2;

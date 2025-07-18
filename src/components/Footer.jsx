import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/aryan.jpg'; // Replace with your image path

const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md text-white border-t border-white/10 px-6 py-10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Side - Info */}
        <div className="flex flex-col items-start gap-4">
          <div>
            <h3 className="text-2xl font-bold">Aryan Kardam</h3>
            <p className="text-gray-300 text-sm">
              Developer • ECE Student • Tech Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 text-xl text-gray-300">
            <a
              href="https://github.com/aryankardam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aryankardam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:aryankardam.dev@gmail.com"
              className="hover:text-white"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Resume Download */}
          <a
            href="https://drive.google.com/file/d/1GSDOYO4xcid2hOzf4LWoZIl8itHyurmV/view"
            download
            className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Aryan Kardam"
            className="w-24 h-24 rounded-full object-cover border border-white/20 shadow-lg"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Aryan Kardam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

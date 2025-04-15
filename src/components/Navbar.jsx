import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <NavLink
            to="/"
            className="font-mono text-xl font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Aryan<span className="text-blue-500">Kardam</span>
          </NavLink>

          {/* Hamburger / Close Button for Mobile */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer z-50"
            onClick={() => {
              console.log("Hamburger is clicked");
              setMenuOpen(prev => !prev);
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <NavLink
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills & Experience
            </NavLink>
            <NavLink
              to="/education"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Education
            </NavLink>
            <NavLink
              to="/project"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contactMe"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

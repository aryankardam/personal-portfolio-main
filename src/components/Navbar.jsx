import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink
            to="/"
            className="font-mono text-xl font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Aryan<span className="text-blue-500">Kardam</span>
          </NavLink>

          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white text-3xl flex items-center justify-center"
            onClick={() => {
              console.log("Hamburger is clicked");
              setMenuOpen(prev => !prev);
            }}
          >
            &#9776;
          </div>

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

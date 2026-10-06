import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope
} from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaUser /> },
    { path: '/skills', label: 'Skills & Experience', icon: <FaCode /> },
    { path: '/project', label: 'Projects', icon: <FaProjectDiagram /> },
    { path: '/education', label: 'Education', icon: <FaGraduationCap /> },
    { path: '/contactMe', label: 'Contact Me', icon: <FaEnvelope /> },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.95)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Brand */}
            <NavLink
              to="/"
              className="font-mono text-xl font-bold text-white hover:opacity-80 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Aryan<span className="text-blue-500">Kardam</span>
            </NavLink>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white text-2xl cursor-pointer z-[70] p-2 hover:text-blue-500 transition-colors active:scale-95"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(prev => !prev);
              }}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive
                        ? 'text-blue-500'
                        : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* ============================
                    INDUSTRY-GRADE RESUME BUTTON
                  ============================ */}
              <a
                href="https://drive.google.com/file/d/1ctILj-w3f1TxjQJZPYzdf9eUAO9_NL3s/view"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500 text-blue-400 hover:text-white 
                hover:bg-blue-600/20 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
              >
                <span className="text-sm font-medium">Resume</span>

                {/* Minimal download icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5l4.5-4.5m-4.5 4.5L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55] md:hidden animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-[65] md:hidden transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ maxWidth: '85vw' }}
      >
        {/* Sidebar Header */}
        <div className="bg-gray-900/50 border-b border-gray-700 p-6 flex justify-between items-center">
          <span className="font-mono text-lg font-bold text-white">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl p-2 hover:text-blue-500 transition-colors hover:rotate-90 duration-200"
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col pt-6 px-4 space-y-2 overflow-y-auto h-[calc(100%-150px)]">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 text-left text-base font-medium transition-all py-4 px-5 rounded-lg group ${
                  isActive
                    ? 'text-white bg-blue-600 shadow-lg shadow-blue-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`
              }
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <>
                <span className="text-xl text-blue-400 group-hover:text-blue-300">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </>
            </NavLink>
          ))}
        </div>

        {/* ============================
             MOBILE RESUME BUTTON
        ============================ */}
        <div className="p-6 border-t border-gray-700">
          <a
            href="https://drive.google.com/file/d/1ctILj-w3f1TxjQJZPYzdf9eUAO9_NL3s/view"
            target="_blank"
            className="block w-full text-center py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-md shadow-blue-600/20"
          >
            Resume
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in;
        }
      `}</style>
    </>
  );
};

export default Navbar;

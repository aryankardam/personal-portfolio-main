import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {

  const links = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/skills', 'Skills & Experience'],
    ['/education', 'Education'],
    ['/project', 'Projects'],
    ['/contactMe', 'Contact Me'],
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <button
        onClick={() => {
          console.log("Close button clicked");
          setMenuOpen(false);
        }}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center space-y-6">
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            className={`text-2xl font-semibold text-white my-4 hover:text-blue-400 transition-all duration-300`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
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

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/skills', label: 'Skills & Experience' },
              { to: '/education', label: 'Education' },
              { to: '/project', label: 'Projects' },
              { to: '/contactMe', label: 'Contact Me' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

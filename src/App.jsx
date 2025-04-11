import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import './index.css';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Home from './components/Home/Home';
import Home2 from './components/Home/Home2';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Project';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const Layout = ({ menuOpen, setMenuOpen }) => (
  <div className="min-h-screen bg-black text-gray-100 transition-opacity duration-700">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="pt-20 px-4">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen} />,
      children: [
        {
          index: true,
          element: (
            <>
              <Home />
              <Home2 />
              <About />
              <Skills />
              <Education />
              <Projects />
              <ContactMe />
            </>
          ),
        },
        { path: 'about', element: <About /> },
        { path: 'skills', element: <Skills /> },
        { path: 'project', element: <Projects/> },
        { path: 'education', element: <Education /> },
        { path: 'contactMe', element: <ContactMe /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ]);

  useEffect(() => {
    if (isLoaded && window.location.pathname === '/') {
      window.history.pushState({}, '', '/');
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && <RouterProvider router={router} />}
    </>
  );
}

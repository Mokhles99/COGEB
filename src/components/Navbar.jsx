import { useState, useEffect } from "react";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import logo from '../Assets/logosanitaire.png'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full">
    

      <div className={`transition-colors duration-300 ${scrolling ? 'bg-white bg-opacity-70 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        
      </div>
    </nav>
  );
};

export default Navbar;

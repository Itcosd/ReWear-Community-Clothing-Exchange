import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={showNavbar ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center text-[#f8f9fa] backdrop-blur-md bg-[#343a40]/80 shadow-md"
    >
      {/* Left: Nav links */}
      <div className="flex space-x-6 items-center text-[#dee2e6]">
        <Link to="/" className="hover:text-[#f8f9fa] transition">Home</Link>
        <Link to="/contact" className="hover:text-[#f8f9fa] transition">Contact Us</Link>
      </div>

      {/* Center: Search bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[40%]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md bg-[#495057] text-[#f8f9fa] placeholder-[#adb5bd] focus:outline-none focus:ring-2 focus:ring-[#adb5bd]"
        />
      </div>

      {/* Right: Sign Up button */}
      <div>
        <Link to="/login" className="mr-4">
          <button className="bg-[#dee2e6] text-[#212529] px-4 py-2 rounded-md hover:bg-[#ced4da] transition font-semibold">
            Sign In
          </button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;

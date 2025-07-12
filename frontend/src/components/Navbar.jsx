import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../features/authSlice";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(clearCredentials());
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={showNavbar ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-[#343a40]/80 shadow-md"
    >
      {/* Navbar Grid Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between md:grid md:grid-cols-3">
        {/* Left: Links */}
        <div className="hidden md:flex space-x-6 text-[#dee2e6]">
          <Link to="/" className="hover:text-[#f8f9fa] transition">
            Home
          </Link>
          <Link to="/contact" className="hover:text-[#f8f9fa] transition">
            Contact Us
          </Link>
        </div>

        {/* Center: Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md bg-[#495057] text-[#f8f9fa] placeholder-[#adb5bd] focus:outline-none focus:ring-2 focus:ring-[#adb5bd]"
          />
        </div>

        {/* Right: Auth + Mobile Menu Button */}
        <div className="flex justify-end items-center space-x-4">
          {user ? (
            <>
              <span className="text-[#f8f9fa]">Welcome, {user.username}</span>
              <button
                onClick={handleLogout}
                className="bg-[#dee2e6] text-[#212529] px-4 py-2 rounded-md hover:bg-[#ced4da] transition font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="mr-4">
              <button className="bg-[#dee2e6] text-[#212529] px-4 py-2 rounded-md hover:bg-[#ced4da] transition font-semibold">
                Sign In
              </button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-3xl text-[#f8f9fa] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mt-4 px-6 py-4 space-y-4 bg-[#343a40] text-[#f8f9fa] md:hidden shadow-lg rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md bg-[#495057] text-[#f8f9fa] placeholder-[#adb5bd] focus:outline-none focus:ring-2 focus:ring-[#adb5bd]"
          />
          <Link
            to="/"
            className="block hover:text-[#adb5bd]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="block hover:text-[#adb5bd]"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-[#dee2e6] text-[#212529] px-4 py-2 rounded-md hover:bg-[#ced4da] transition font-semibold">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

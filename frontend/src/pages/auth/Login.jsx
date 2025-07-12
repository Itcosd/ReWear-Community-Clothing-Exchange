import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212529] text-[#f8f9fa] px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-[#343a40] w-full max-w-md md:max-w-lg lg:max-w-md rounded-2xl shadow-2xl px-6 md:px-10 py-8 md:py-10 space-y-8"
      >
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">Welcome Back</h1>
          <p className="text-sm text-[#adb5bd]">Please log in to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-[#dee2e6]">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-[#495057] text-[#f8f9fa] placeholder-[#adb5bd] rounded-md border border-[#6c757d] focus:outline-none focus:ring-2 focus:ring-[#adb5bd]"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-[#dee2e6]">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-[#495057] text-[#f8f9fa] placeholder-[#adb5bd] rounded-md border border-[#6c757d] focus:outline-none focus:ring-2 focus:ring-[#adb5bd]"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full py-2 px-4 bg-[#dee2e6] text-[#212529] font-semibold rounded-md hover:bg-[#ced4da] transition"
          >
            Log In
          </motion.button>
        </form>

        {/* Footer Link */}
        <div className="text-center pt-4 text-sm text-[#adb5bd]">
          Don’t have an account?{' '}
          <Link to="/register" className="text-[#f8f9fa] underline hover:text-[#dee2e6] transition">
            Sign Up
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

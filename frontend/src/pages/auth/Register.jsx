import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/authSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [register] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register({ username, email, password }).unwrap();

      dispatch(setCredentials(response));
      navigate("/");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212529] text-[#f8f9fa] px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#343a40] w-full max-w-md rounded-2xl shadow-2xl px-6 py-8 space-y-8"
      >
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Create an Account</h2>
          <p className="text-sm text-[#adb5bd]">
            Join the community – it’s free!
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 bg-[#495057] text-[#f8f9fa] rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 bg-[#495057] text-[#f8f9fa] rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 bg-[#495057] text-[#f8f9fa] rounded-md"
          />
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full py-2 px-4 bg-[#dee2e6] text-[#212529] rounded-md"
          >
            Sign Up
          </motion.button>
        </form>

        <div className="text-center text-sm text-[#adb5bd]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#f8f9fa] underline">
            Log In
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;

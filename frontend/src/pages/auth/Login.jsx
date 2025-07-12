import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password }).unwrap();

      dispatch(setCredentials(response));
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
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
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-[#adb5bd]">
            Please log in to your account
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
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
            Log In
          </motion.button>
        </form>

        <div className="text-center text-sm text-[#adb5bd]">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#f8f9fa] underline">
            Sign Up
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

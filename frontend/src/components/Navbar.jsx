import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../features/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(clearCredentials());
    navigate("/login");
  };

  return (
    <nav className="flex justify-between bg-gray-800 text-white px-6 py-4">
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        {user ? (
          <div className="flex items-center space-x-3">
            <span>Hello, {user.username || "User"}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-green-500 px-3 py-1 rounded">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

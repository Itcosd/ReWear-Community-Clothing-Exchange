import React from "react";
import { Link } from "react-router-dom";
import { FaKey, FaGift, FaBoxOpen, FaHistory } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800">User Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your profile, points, and activity</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Reset Password Card */}
          <Link
            to="/reset-password"
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex items-center space-x-4"
          >
            <FaKey className="text-3xl text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Reset Password</h2>
              <p className="text-sm text-gray-500">Change your account credentials</p>
            </div>
          </Link>

          {/* Point Redemption Card */}
          <Link
            to="/points"
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex items-center space-x-4"
          >
            <FaGift className="text-3xl text-green-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Point Redemption</h2>
              <p className="text-sm text-gray-500">Use your earned points</p>
            </div>
          </Link>

          {/* Product List Card */}
          <Link
            to="/products"
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex items-center space-x-4"
          >
            <FaBoxOpen className="text-3xl text-purple-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Product List</h2>
              <p className="text-sm text-gray-500">View & manage your products</p>
            </div>
          </Link>

          {/* Transaction History Card */}
          <Link
            to="/transactions"
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex items-center space-x-4"
          >
            <FaHistory className="text-3xl text-yellow-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Transaction History</h2>
              <p className="text-sm text-gray-500">Track past exchanges</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

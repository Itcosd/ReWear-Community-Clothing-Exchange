import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("users");
  const location = useLocation(); // this goes inside your component


  return (
    <div className="min-h-screen m-15 bg-[#f8f9fa] text-[#212529]">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <nav className="flex gap-4">
            <Link
              to="/admin/users"
              className={`px-4 py-2 rounded-md font-medium transition ${
                location.pathname === "/admin/users"
                  ? "bg-[#343a40] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              Manage Users
            </Link>
            <Link
              to="/admin/orders"
              className={`px-4 py-2 rounded-md font-medium transition ${
                location.pathname === "/admin/orders"
                  ? "bg-[#343a40] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              Manage Orders
            </Link>
          </nav>
        </div>
      </header>

      {/* Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {activeTab === "users" && (
          <section>
            <h2 className="text-xl font-semibold mb-4">👥 Manage Users</h2>
            <p>This is where you can view, delete, or block users.</p>
            {/* Add user management logic/table here */}
          </section>
        )}
        {activeTab === "orders" && (
          <section>
            <h2 className="text-xl font-semibold mb-4">📦 Manage Orders</h2>
            <p>This is where you can view and update item swap orders.</p>
            {/* Add order management logic/table here */}
          </section>
        )}
        
      </main>
    </div>
  );
};

export default AdminPanel;

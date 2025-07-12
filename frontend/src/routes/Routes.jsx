// src/routes/Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// General Pages
import Home from "../pages/general/Home";
import ItemList from "../pages/general/ItemList";
import ItemDetail from "../pages/general/ItemDetail";
import AddItem from "../pages/general/AddItem";

// User Pages
import Dashboard from "../pages/user/Dashboard";

// Admin Pages
import AdminPanel from "../pages/admin/AdminPanel";

// Route Guards
import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<ItemList />} />
      <Route path="/item/:id" element={<ItemDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductPage />} />

      {/* Protected User Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

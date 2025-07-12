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
import ResetPassword from "../pages/user/ResetPassword";
import PointRedemption from "../pages/user/PointRedemption";
import ProductList from "../pages/user/ProductList";
import TransactionHistory from "../pages/user/TransactionHistory";

// Admin Pages
import AdminPanel from "../pages/admin/AdminPanel";

// Route Guards
import ProtectedRoute from "../components/ProtectedRoute";
import ProductPage from "../pages/ProductPage";
import ManageUser from "../pages/admin/ManageUser";
import ManageOrder from "../pages/admin/ManageOrder";
import ProductDetail from "../components/ProductDetails";

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
      <Route path="/products/:id" element={<ProductDetail />} />

      {/* Protected User Routes */}
      <Route>
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/points" element={<PointRedemption />} />
        <Route path="/user-products" element={<ProductList />} />
        <Route path="/transactions" element={<TransactionHistory />} />
      </Route>

      {/* Admin Routes */}
      <Route>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/users" element={<ManageUser />} />
        <Route path="/admin/orders" element={<ManageOrder />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

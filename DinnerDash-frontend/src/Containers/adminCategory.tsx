import React from "react";
import AdminOrderComponent from "../Components/adminOrder";
import { Link } from "react-router-dom";
import AdminNavBar from "../Components/adminNavbar";
import AdminCategoryCard from "../Components/adminCategoryCard";

const orders = [
  { id: "12345", status: "Pending" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  { id: "67890", status: "Shipped" },
  // Add more orders here
];

const AdminCategory = () => {
  return (
    <>
      <AdminNavBar />
      <h1 className="admin-category-title">Categories</h1>
      <div className="admin-category-container">
        <AdminCategoryCard />
        <AdminCategoryCard />
        <AdminCategoryCard />
        <AdminCategoryCard />
        <AdminCategoryCard />
        <AdminCategoryCard />
      </div>
    </>
  );
};

export default AdminCategory;

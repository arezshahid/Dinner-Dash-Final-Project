import React from "react";
import AdminOrderComponent from "../Components/adminOrder";
import { Link } from "react-router-dom";
import AdminNavBar from "../Components/adminNavbar";

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

const Admin = () => {
  return (
    <>
      <AdminNavBar />
      <div className="admin-order-flexbox">
        <h1>Orders</h1>
        <div className="admin-order-scrollable-container">
          {orders.map((order) => (
            <Link to={`/orders/${order.id}`} className="admin-order-link">
              <AdminOrderComponent
                key={order.id}
                orderId={order.id}
                status={order.status}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;

import React from "react";

interface AdminOrderProps {
  orderId: string;
  status: string;
}

const AdminOrderComponent: React.FC<AdminOrderProps> = ({
  orderId,
  status,
}) => {
  return (
    <div className="admin-order">
      <p className="admin-order-id">Order ID: {orderId}</p>
      <p className="admin-order-status">Status: {status}</p>
    </div>
  );
};

export default AdminOrderComponent;

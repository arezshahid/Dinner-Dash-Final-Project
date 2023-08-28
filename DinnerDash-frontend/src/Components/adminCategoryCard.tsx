import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

const AdminCategoryCard = () => {
  return (
    <Link to={`/${1}`} className="admin-category-link">
      <Card
        className="card-item"
        style={{
          width: "18rem",
        }}
      >
        <Card.Img variant="top" src={Logo} />
        <Card.Body>
          <Card.Title className="card-item-title">Category</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default AdminCategoryCard;

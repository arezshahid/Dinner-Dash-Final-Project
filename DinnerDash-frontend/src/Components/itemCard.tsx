import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Logo from "../Images/Logo.png";

const ItemCard = () => {
  return (
    <Card
      className="card-item"
      style={{
        width: "14rem",
      }}
    >
      <Card.Img variant="top" src={Logo} />
      <Card.Body>
        <Card.Title className="card-item-title">Card Title</Card.Title>
        <Card.Text className="card-item-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="card-item-footer">
          <div className="card-item-price">$10.00</div>
          <Button className="card-item-btn" variant="primary">
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;

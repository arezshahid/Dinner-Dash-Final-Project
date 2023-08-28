import { Container, Nav, Navbar, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import Logo from "../Images/Logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => {
    navigate(route);
  };

  let cartItemCount = 0;

  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand className="nav-brand">
          <img className="logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/menu")}>Menu</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Order Online</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </Nav>
          <div className="cart-icon-container">
            <button className="btn-cart-icon">
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
              <Badge className="bg-dark cart-badge">{cartItemCount}</Badge>
            </button>
          </div>
          <Button className="btn login-btn">Log In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

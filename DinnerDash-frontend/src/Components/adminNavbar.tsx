import { Container, Nav, Navbar, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Logo from "../Images/Logo.png";

const AdminNavBar = () => {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand className="admin-nav-brand">
          <img className="logo" src={Logo} alt="logo" />
          <p>ADMIN</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavigate("/admin")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/admin/item")}>
              Item
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/admin/category")}>
              Category
            </Nav.Link>
            <Nav.Link>Profile</Nav.Link>
          </Nav>
          <Button className="btn login-btn">Log Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavBar;

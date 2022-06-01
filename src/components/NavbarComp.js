import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import "./NavbarComp.css"


function NavbarComp() {
  return (
<div className="nav-container">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">The Food Company</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to={"/menu"}>Menu</Nav.Link>
      <Nav.Link as={Link} to={"/catering"}>Catering</Nav.Link>
      <NavDropdown title="Introductions" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to={"/MeetTheChef"}>Meet the Chef</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/shipping"}>Shipping</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/socials"}>Socials</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/contactus"}>Contact Us</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} as={Link} to={"/signin"}>
        Sign In
      </Nav.Link>
      <Nav.Link as={Link} to={"/cart"}>Cart</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  );
}

export default NavbarComp;
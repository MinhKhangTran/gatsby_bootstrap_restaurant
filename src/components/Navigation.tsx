import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand text-danger">
          미당
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-lg-items-center">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#menu">Menü</Nav.Link>
            <Nav.Link href="#gallery">Gallerie</Nav.Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
          <a className="btn btn-outline-danger" href="#contact">
            Contact
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

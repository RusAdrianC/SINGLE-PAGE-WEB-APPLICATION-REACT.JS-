import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-center"
      >
        <Nav>
          <Nav.Link className="navLink">
            <Link className="link" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="navLink">
            <Link className="link" to="/stiri">
              Stiri si noutati
            </Link>
          </Nav.Link>
          <Nav.Link className="navLink">
            <Link className="link" to="/educatie">
              Educatie
            </Link>
          </Nav.Link>
          <Nav.Link className="navLink">
            <Link className="link" to="/materiale">
              Materiale didactice
            </Link>
          </Nav.Link>
          <Nav.Link className="navLink">
            <Link className="link" to="/cercetare">
              Cercetare
            </Link>
          </Nav.Link>
          <Nav.Link className="navLink">
            <Link className="link" to="/personal">
              Personal
            </Link>
          </Nav.Link>
          <Nav.Link className="navLink">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenuBar;

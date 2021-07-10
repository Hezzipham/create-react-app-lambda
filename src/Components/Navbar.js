import React from 'react';
import '../App.css';
import * as ReactBootStrap from 'react-bootstrap';

function Navbar() {
  return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="/">Hezzi Pham</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="/service">Service</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/portfolio">Portfolio</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/resume">Resume</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/about">About Me</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/contact">Contact Me</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
  );
}
export default Navbar;
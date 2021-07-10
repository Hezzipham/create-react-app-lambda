import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';

function Navi() {
  return (
    <Navbar collapseOnSelect className="navbar" variant="dark" expand="md">
      <Container>
      <Navbar.Brand > <Link id="logo" to="/">Hezzi Pham</Link></Navbar.Brand >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav as="ul" className="ml-auto" >
          <Nav.Link as={Link} href="/service" to='/service' className="nav-link">Services</Nav.Link>
          <Nav.Link as={Link} href="/portfolio"to='/portfolio' className="nav-link">Portfolio</Nav.Link>   
          <Nav.Link as={Link} href="/about"to='/about' className="nav-link">About Me</Nav.Link>     
          <Nav.Link as={Link} href="/resume"to='/resume' className="nav-link">Resume</Nav.Link>    
          <Nav.Link as={Link} href="/contact" to="/contact" className="nav-link">Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse> 
      </Container>
  </Navbar>
  );
}
export default Navi;
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';

function Navi() {
  return (
    <Navbar className="navbar" variant="dark" expand="md">
      <Container>
      <Navbar.Brand herf='/'>Hezzi Pham</Navbar.Brand >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav as="ul" className="ml-auto" >
            <Nav.Item as="li">
                <Link to='/service' className="nav-link">Services</Link>    
            </Nav.Item>
            <Nav.Item as="li">
                <Link to='/portfolio' className="nav-link">Portfolio</Link>   
            </Nav.Item>
            <Nav.Item as="li">
                <Link to='/about' className="nav-link">About Me</Link>     
            </Nav.Item>
            <Nav.Item as="li">
                <Link to='/resume' className="nav-link">Resume</Link>    
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/contact" className="nav-link">Contact </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse> 
      </Container>
  </Navbar>
  );
}
export default Navi;
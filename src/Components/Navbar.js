import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

function Navbar() {
  return (
    <Navbar className="navbar" expand="md">
      <Navbar.Brand herf='/'>Hezzi Pham</Navbar.Brand >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav as="ul">
            <Nav.Item as="li">
                <Link to='/service' className="navtab">Services</Link>    
            </Nav.Item>
            <Nav.Item as="li">
                <Link to='/portfolio' className="navtab">Portfolio</Link>   
            </Nav.Item>
            <Nav.Item as="li">
                <Link to='/about' className="navtab">About Me</Link>     
            </Nav.Item>
            <Nav.Item as="li">
                <Link to='/resume' className="navtab">Resume</Link>    
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/contact" className="navtab">Contact </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse> 
  </Navbar>
  );
}
export default Navbar;
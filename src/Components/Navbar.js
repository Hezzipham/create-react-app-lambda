import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';

function Navi() {
  const [expanded, setExpanded] = useState(false);
  return (

    <Navbar expanded={expanded} className="navbar" variant="dark" expand="md">
      <Container>
      <Navbar.Brand > <Link id="logo" to="/">Hezzi Pham</Link></Navbar.Brand >
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav as="ul" className="ml-auto" >
                <Link onClick={() => setExpanded(false)} to='/about' className="nav-link">About Me</Link>    
                <Link onClick={() => setExpanded(false)} to='/portfolio' className="nav-link">Portfolio</Link>   
                <Link onClick={() => setExpanded(false)} to='/service' className="nav-link">Services</Link>   
                <Link onClick={() => setExpanded(false)} to='/resume' className="nav-link">Resume</Link>    
                <Link onClick={() => setExpanded(false)}to="/contact" className="nav-link">Contact </Link>
          </Nav>
        </Navbar.Collapse> 
      </Container>
  </Navbar>
  );
}
export default Navi;
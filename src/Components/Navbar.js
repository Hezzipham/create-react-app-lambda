import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';

function Navi() {
  const [expanded, setExpanded] = useState(false);
  return (

    <Navbar expanded={expanded} className="navbar" variant="dark" expand="md">
      <Container>
      <Navbar.Brand > <Link id="logo" to="/">Home</Link></Navbar.Brand >
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav as="ul" className="ml-auto" >
          <Nav.Link onClick={() => setExpanded(false)}>
                <Link to='/service' className="nav-link">Services</Link>    
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
                <Link to='/portfolio' className="nav-link">Portfolio</Link>   
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
                <Link to='/about' className="nav-link">About Me</Link>     
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
                <Link to='/resume' className="nav-link">Resume</Link>    
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
                <Link to="/contact" className="nav-link">Contact </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> 
      </Container>
  </Navbar>
  );
}
export default Navi;
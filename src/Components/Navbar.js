import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <div className="navbar"  >
            <a className="logo" href="/"><p>Logo</p></a>
            <ul className="navlist" >
                <li className="navtab"><a className="navlink" href="/service">Services</a></li>
                <li className="navtab"><a className="navlink" href="/portfolio">Portfolio</a></li> 
                <li className="navtab"><a className="navlink" href="/about">About Me</a></li>
                <li className="navtab"><a className="navlink" href="/resume">Resume</a></li>
                <li className="navtab"><a className="navlink" href="/contact">Contact</a></li>
            </ul> 
    </div>
  );
}
export default Navbar;
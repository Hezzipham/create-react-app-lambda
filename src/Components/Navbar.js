import React from 'react';
import '../App.css';
//import * as ReactBootStrap from 'react-bootstrap';

function Navbar() {
  return (
    <div className="navbar"  >
            <Link to='/'>
            <p>Logo</p>
            </Link>
            <ul className="navlist" >
            <Link to='/service'>
                <li className="navtab">Services</li>
            </Link>
            <Link to='/portfolio'>
                <li className="navtab">Portfolio</li> 
             </Link> 
             <Link to='/about'>
                <li className="navtab">About Me</li>
              </Link> 
              <Link to='/resume'>
                <li className="navtab">Resume</li>
               </Link>
               <Link to='/contact'>
                <li className="navtab">Contact</li>
              </Link>
            </ul> 
    </div>
    
  );
}
export default Navbar;
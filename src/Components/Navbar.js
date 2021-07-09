import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar"  >
            <Link to='/'>
            <a className="logo" href="/"><p>Logo</p></a>
            </Link>
            <ul className="navlist" >
            <Link to='/service'>
                <li className="navtab"><a className="navlink" >Services</a></li>
            </Link>
            <Link to='/portfolio'>
                <li className="navtab"><a className="navlink" >Portfolio</a></li> 
             </Link> 
             <Link to='/about'>
                <li className="navtab"><a className="navlink" >About Me</a></li>
              </Link> 
              <Link to='/resume'>
                <li className="navtab"><a className="navlink" >Resume</a></li>
               </Link>
               <Link to='/contact'>
                <li className="navtab"><a className="navlink" >Contact</a></li>
              </Link>
            </ul> 
    </div>
  );
}
export default Navbar;
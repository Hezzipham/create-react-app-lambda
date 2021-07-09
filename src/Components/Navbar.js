import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar"  >
            <Link to='/'>
            <button className="logo" >Logo</button>
            </Link>
            <ul className="navlist" >
            <Link to='/service'>
                <li className="navtab"><button className="navlink" >Services</button></li>
            </Link>
            <Link to='/portfolio'>
                <li className="navtab"><button className="navlink" >Portfolio</button></li> 
             </Link> 
             <Link to='/about'>
                <li className="navtab"><button className="navlink" >About Me</button></li>
              </Link> 
              <Link to='/resume'>
                <li className="navtab"><button className="navlink" >Resume</buton></li>
               </Link>
               <Link to='/contact'>
                <li className="navtab"><button className="navlink" >Contact</button></li>
              </Link>
            </ul> 
    </div>
  );
}
export default Navbar;
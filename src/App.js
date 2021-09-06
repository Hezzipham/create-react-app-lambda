import React from 'react';
import './App.css';
import Navi from './Components/Navbar';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Service from './Components/Service';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {FaGithub, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa'



function App() {
  return (
    <Router>
    <div className="App">
      <Navi />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/resume" component= {Resume} />
      <Route path="/contact" component={Contact} />
      </Switch>
    </div>
    <About />
    <Portfolio />
    </Router>
  );
}
// const Home = () => (
//   <div className="introimage">
//     <ul className="socialmedia">
//           <li><a target="_blank" rel='noreferrer noopener' href="https://www.linkedin.com/in/hezzi-pham/" ><FaLinkedinIn></FaLinkedinIn></a></li>
//           <li><a target="_blank" rel='noreferrer noopener' href="https://github.com/Hezzipham/" ><FaGithub></FaGithub></a></li>
//           <li><a target="_blank" rel='noreferrer noopener' href="https://twitter.com/HezziPham" ><FaTwitter></FaTwitter></a></li>
//           <li><a target="_blank" rel='noreferrer noopener' href="https://www.instagram.com/hezzipham" ><FaInstagram></FaInstagram></a></li>
//           <li><a target="_blank" rel='noreferrer noopener' href="https://www.facebook.com/hezzipham/" ><FaFacebookF></FaFacebookF></a></li>
//       </ul>
//   </div>
// );
export default App;

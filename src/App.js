import React from 'react';
import './App.css';
import Navi from './Components/Navbar';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Service from './Components/Service';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {FaGithub, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn} from 'react-icons/fa'



function App() {
  return (
    <Router>
    <div className="App">
      <Navi />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component= {Resume} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </Switch>
    </div>
    </Router>
  );
}
const Home = () => (
  <div className="introimage">
    <ul className="socialmedia">
          <li><a target="_blank" rel='noreferrer noopener' href="https://www.linkedin.com/in/hezzi-pham/" ><FaLinkedinIn></FaLinkedinIn></a></li>
          <li><a target="_blank" rel='noreferrer noopener' href="https://github.com/Hezzipham/" ><FaGithub></FaGithub></a></li>
          <li><a target="_blank" rel='noreferrer noopener' href="http://bit.ly/3qg3O13" ><FaYoutube></FaYoutube></a></li>
          <li><a target="_blank" rel='noreferrer noopener' href="https://www.instagram.com/hezzipham" ><FaInstagram></FaInstagram></a></li>
          <li><a target="_blank" rel='noreferrer noopener' href="https://www.facebook.com/hezzipham/" ><FaFacebookF></FaFacebookF></a></li>
      </ul>
  </div>
);
export default App;

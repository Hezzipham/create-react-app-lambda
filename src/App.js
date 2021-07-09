import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Service from './Components/Service';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
    <body className="App">
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component= {Resume} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </Switch>
    </body>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
export default App;

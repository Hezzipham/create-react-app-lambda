import React from 'react';
import '../App.css';
import {Container, Col, Row, Button} from 'react-bootstrap';
import {FaHtml5, FaJsSquare,FaWordpress, FaSass, FaPython, FaReact, FaBootstrap, FaDownload} from 'react-icons/fa'
import {SiTypescript,SiHugo, SiHeroku, SiNetlify, SiMysql, SiJquery} from 'react-icons/si'


function Resume() {
  return (
   <Container className="my-5">
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row className="super-dark-bg p-5 text-center text-light">
      <h1>Hezzi Pham</h1>
      <h3>Web Developer</h3>
      
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row className="resumbody p-5">
  <Col xs={12} md={4}>
  <h4>EXECUTIVE SUMMARY</h4>
  <hr></hr>
  <div>
  <p>Meticulous full stack web developer, dedicated to learn new technology and solve challenging problems with strong technical skills, proactive mindset and positive attitude. </p>
  </div>
  <h4>TECHNICAL SKILL</h4>
  <hr></hr>
  <div>
      <p><b> <span>HTML <FaHtml5></FaHtml5> |</span>
      <span> CSS <FaSass></FaSass> |</span>
      <span> JavaScript <FaJsSquare></FaJsSquare> |</span>
      <span> TypeScript <SiTypescript></SiTypescript> |</span> 
      <span> React <FaReact></FaReact> |</span>
      <span> Redux |</span>    
      <span> Python <FaPython></FaPython> |</span>  
      <span> SQL <SiMysql></SiMysql> |</span>  
      <span> Flask |</span>
      <span> Django |</span>   
      <span> Hugo <SiHugo></SiHugo> |</span>   
      <span> Heroku <SiHeroku></SiHeroku> |</span>   
      <span> Netlify <SiNetlify></SiNetlify> |</span>   
      <span> WordPress <FaWordpress></FaWordpress> |</span>
      <span> Bootstrap <FaBootstrap></FaBootstrap> |</span>
      <span> jQuery <SiJquery></SiJquery></span>
      </b></p>
    </div>
    <h4>CERTIFICATION</h4>
    <hr></hr>
    <div>
      <a target="_blank" rel='noreferrer noopener' href="https://www.udemy.com/certificate/UC-57e38dfa-54ed-425a-8afe-de0e47fa6008/"><h5>The Python Pro Bootcamp</h5></a>
      <a target="_blank" rel='noreferrer noopener' href="https://www.udemy.com/certificate/UC-d5333fa2-f6ae-41b8-af3b-34202ef978c6/"><h5>The Complete SQL Bootcamp</h5></a>
      <a target="_blank" rel='noreferrer noopener' href="https://www.udemy.com/certificate/UC-1624b478-ac31-41f2-acc4-5c5851e22d8a/"><h5>Understanding TypeScript</h5></a>
      <a target="_blank" rel='noreferrer noopener' href="https://www.freecodecamp.org/certification/fccc165c594-3b23-412c-84f6-e770f53864b5/javascript-algorithms-and-data-structures"><h5>JavaScript Algorithms and Data Structures</h5></a>
      <a target="_blank" rel='noreferrer noopener' href="https://www.freecodecamp.org/certification/fccc165c594-3b23-412c-84f6-e770f53864b5/front-end-libraries"><h5>Front End Libraries</h5></a>
      <a target="_blank" rel='noreferrer noopener' href="https://www.freecodecamp.org/certification/fccc165c594-3b23-412c-84f6-e770f53864b5/responsive-web-design"><h5>Responsive Web Design</h5></a>
      <a target="_blank" rel='noreferrer noopener' href="https://www.linkedin.com/learning/scrum-the-basics"><h5>Scrum: The Basics</h5></a>
      </div>
      <h4>INTEREST</h4>
      <hr></hr>
      <div>
            <li>Web Design</li>
            <li>Videography</li>
            <li>Animation</li>
            <li>Youtube Partner</li>
      </div>
    </Col>
    
    <Col xs={12} md={8}>
    <h4>PROFESSIONAL PROJECT</h4>
    <hr></hr>
    <div>
    <h5>Personal Website - <a target="_blank" rel="noreferrer noopener" href="https://github.com/Hezzipham/hezziwebsite">GitHub</a> | <a target="_blank" rel="noreferrer noopener" href="https://hezzipham.com/">Live</a></h5>
    <p>A website to display personal information, portfolio, and estimate services price quotation. Design with React, Bootstrap, SASS and using yarn package to deploy on Netlify </p>
    <h5>Libraryofgames.org - <a target="_blank" rel="noreferrer noopener" href="https://github.com/Hezzipham/library_of_game">GitHub</a> | <a target="_blank" rel="noreferrer noopener" href="https://libraryofgames.org/">Live</a></h5>
    <p>Python Flask app where people can upload, download books and log in to delete data. Using SQLite to store data, Flask WTF to build an interactive user interface.</p>
    <h5>Flight Deals - <a target="_blank" rel="noreferrer noopener" href="https://github.com/Hezzipham/Flight_Deals/">GitHub</a> </h5>
    <p>Python app using Kiwi Partners Tequila API to search for the best flight deals within 6 months. Use the Twilio API to automatically send an SMS with information to book the flight. </p>
    </div>
    <h4>EXPERIENCE</h4>
    <hr></hr>
    <div>
    <h5><a target="_blank" rel="noreferrer noopener" href="https://www.bunpeti.com/">Bun Pet Inc | Sep 2020 – Present</a></h5> 
    <p><b>Founder </b> Developed a website to create content about pet care,  recommending pet supplies,  which gain 3000 subscribers, create 80 youtube videos, gather and answer 5000 questions.   </p>
    <h5><a target="_blank" rel="noreferrer noopener" href="https://www.chienvu.com/">Domino Media | September 2017 – April 2020</a></h5>
     <p><b>Web Deverloper</b> Reinforced the brand by redesigning the company identity and build a bilingual portfolio website, attracts more than 2000 clients a year.</p>
    
    <h5><a target="_blank" rel="noreferrer noopener" href="http://dinodaycare.com">DINO Daycare & Preschool | April 2016 – July 2017</a></h5>
    <p><b>PR-Marketing Manager</b>Created and managed the Daycare’s website and social media platforms including Yelp, Facebook, Instagram with more than 5,000 website views and 25,000 followers within the first year.</p>
    </div>
    <h4>EDUCATION</h4>
      <hr></hr>
      <div>
            <h5><b>MBA</b> | California Baptist University, Riverside, CA</h5>
            <h5><b>BA</b> | FinanceFPT University School of Business, Hanoi, Vietnam</h5>   
              <li>Introduction to Informatics</li> 
              <li>Management Information Systems</li>
              <li>E-commerce</li>
      </div>
    </Col>
    
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
  <a rel="noreferrer noopener" href="images/HezziWDResume.pdf" download><Button variant="success" size="lg"><FaDownload></FaDownload> Download Resume</Button></a>
  </Row>
</Container>
  );
}
export default Resume;
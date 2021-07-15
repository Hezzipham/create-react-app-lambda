import React from 'react';
import '../App.css';
import {Container, Col, Row, Button} from 'react-bootstrap';



function Resume() {
  return (
   <Container className="resume">
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row className="resumtop">
      <h1>Hezzi Pham</h1>
      <h2>Web Developer</h2>
      
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row className="resumbody">
    
    <Col xs={12} md={8}>
    <h4>PROJECT</h4>
    <h5>Hezzipham.com - <a target="_blank" rel="noreferrer noopener" href="https://github.com/Hezzipham/hezziwebsite">GitHub</a> | <a target="_blank" rel="noreferrer noopener" href="https://hezzipham.com/">Live</a></h5>
    <p>Personal Website Using React, Bootstrap, Scss, React Router</p>
    <h5>Bunpeti.com - <a target="_blank" rel="noreferrer noopener" href="https://github.com/Hezzipham/bunpeti">GitHub</a> | <a target="_blank" rel="noreferrer noopener" href="https://bunpeti.com/">Live</a></h5>
    <p>Using HTML, CSS keyframe animation, JavaScript and  jQuery.</p>
    <h5>Dinodaycare.com - <a target="_blank" rel="noreferrer noopener" href="http://dinodaycare.com/">Live</a> </h5>
    <p>A preschool responsive website using WordPress, Linux Hosting with cPanel</p>
    <h5>Libraryofgames.org - <a target="_blank" rel="noreferrer noopener" href="https://github.com/Hezzipham/halloworld">GitHub</a> | <a target="_blank" rel="noreferrer noopener" href="https://libraryofgames.org/">Live</a></h5>
    <p>A nonprofit organization website to promote Vietnamese folk games, free hosting using GitHub and Netlify</p>
    <h4>EXPERIENCE</h4>
    <h5>Youtube.com - Bunpeti Channel | April 2020 – Present</h5>
    <p><b>Youtube partner </b> Content creator Research and create content for a pet rabbit channel.</p>
    <h5>ULTA Beauty | September 2018 – April 2020</h5>
     <p><b>Salon, Cosmetics & Fragrance Inc </b>Cosmetologist Perform beauty services which were rated 4.8/5 by more than 200 clients. Achieve the first runner selling Paul Mitchell Hair Products in Cumberland County after three months of working.</p>
    
    <h5>DINO Daycare & Preschool, San Diego, California|April 2016 – July 2017</h5>
    <p><b>Daycare Center, Internal Consultant </b>Created and managed the Daycare’s website and social media platforms including Yelp, Facebook, Instagram with more than 5,000 website views and 25,000 followers within the first year.</p>
    
    <h5>Good Samaritan Medical Dental Ministry, Riverside, CA| January 2016 - April 2016</h5>
    <p><b>Nonprofit Organization, Operation Volunteer </b>Researched and classified grant opportunities from potential foundation Coordinately planned and held fundraising events.</p>
    
    </Col>
    <Col xs={12} md={4}>
      <h4>CERTIFICATION</h4>
      <a target="_blank" rel='noreferrer noopener' href="https://www.freecodecamp.org/certification/fccc165c594-3b23-412c-84f6-e770f53864b5/responsive-web-design"><h5>Responsive Web Design</h5></a>
      <p> Freecodecamp.org</p>
      <a target="_blank" rel='noreferrer noopener' href="https://www.freecodecamp.org/certification/fccc165c594-3b23-412c-84f6-e770f53864b5/javascript-algorithms-and-data-structures"><h5>JavaScript Algorithms and Data Structures</h5></a>
      <p> Freecodecamp.org</p>
      <a target="_blank" rel='noreferrer noopener' href="https://www.freecodecamp.org/certification/fccc165c594-3b23-412c-84f6-e770f53864b5/front-end-libraries"><h5>Front End Libraries</h5></a>
      <p> Freecodecamp.org</p>
      <a target="_blank" rel='noreferrer noopener' href="https://www.udemy.com/certificate/UC-1624b478-ac31-41f2-acc4-5c5851e22d8a/"><h5>Understanding TypeScript</h5></a>
      <p> Udemy.com</p>
      <h4>TECHNICAL SKILL</h4>
      <p><b> <span>HTML  </span>
      <span> CSS  </span>
      <span> JavaScript  </span>
      <span> React  </span> 
      <span> Redux  </span> 
      <span> TypeScript  </span> 
      <span> Bootstrap  </span>
      <span> WordPress  </span></b></p>
      <h4>EDUCATION</h4>
            <h5>MBA</h5>
            <p><b>California Baptist University</b>,Riverside, CA</p>
        
            <h5>BA, Finance</h5>
            <p><b>FPT University School of Business,</b> Hanoi, Vietnam   
              <li>Introduction to Infomatics</li> 
              <li>Management Information Systems</li>
              <li>E-commerce</li> </p>
      <h4>INTEREST</h4>
            <li>Web Design</li>
            <li>Videography</li>
            <li>Animation</li>
            <li>Youtube Partner</li>
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Button variant="secondary" size="lg">Download Resume</Button>
  </Row>
</Container>
  );
}
export default Resume;
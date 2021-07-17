import React from 'react';
import '../App.css';
import {Container, Row, Col, Card} from 'react-bootstrap';

function About() {
  return (
    <Container className="about">
            <Row>
                <Col xs={12} md={6}>
                    <h2>Who Am I?</h2>
                    <p>My real name is Hien Thu Pham. Hien is a very popular name but I prefer mynick name "Hezzi" since it is more unique and I never have to be Hien A, B, C anymore haha </p>
                    <h3>My Background</h3>
                    <p><b>Business background:</b> I have earned a Finance Bachelor's Degree and an MBA, I also have a real estate license in North Carolina.</p>
                        <p><b>Expertise in the beauty industry:</b> I have been a licensing cosmetologist in California and working in customer service and retail for 5 years now.</p>
                        <p><b>Web Development:</b> I am working on coding skills and looking forward to becoming a full-time web developer.</p>
                    <h3>My Skills</h3>
                    <p>Besides business expertise including management, negotiation, problem-solving, financial analysis... I have been practicing technical coding skills such as Html, CSS, JavaScript, TypeScript, and React. </p>
                    <h3>My Interests</h3>
                    <p>Being a mom of two beautiful rabbits turns me into a pescatarian, and also a gardener. Besides that, I am passionate about photo and videography, which lead me to become a Youtube partner and I love sharing my life with people.</p>
                    <p><i>Please contact me if you see potential and want to hire me!</i></p>
                </Col>
                <Col xs={12} md={6} ><Card.Img  className="hezziphoto" src="images/about me.jpg" alt="hezzipham" /></Col>
              </Row>
    </Container>
  );
}
export default About;
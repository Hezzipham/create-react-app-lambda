import React from 'react';
import '../App.css';
import Recent from './Recent'
import {Container, Col, Row } from 'react-bootstrap';

import Otherproject from './OtherProjects'



function Portfolio() {
  return (
    <Container className="text-center my-5">
      <Row>
        <h1>PROFESSIONAL PROJECT</h1>
        <div>
        </div>  
      </Row>  
      <Row>
        <Col xs={12} md={9}><h2>Up and Running Website </h2>
        <Recent />
        </Col>
        <Col xs={12} md={3}>
          <h2>Other Projects</h2>
           <Otherproject />
           </Col>
      </Row>
    </Container>
  );
}
export default Portfolio;
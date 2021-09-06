import React from 'react';
import '../App.css';
import Recent from './Recent'
import {Container, Col, Row } from 'react-bootstrap';

import Otherproject from './OtherProjects'



function Portfolio() {
  return (
    <Container className="portfolio">
      <Row>
        <Col xs={12} md={9}><h2>Most Recent Projects</h2>
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
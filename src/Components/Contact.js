import React from 'react';
import '../App.css';
import {Button, Container, Form, Row, Col} from 'react-bootstrap';


function Contact() {
  return (
            <Container>
      <Row>
      <Col xs={12} md={2}>
      </Col >
        <Col xs={12} md={8}>
        <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="firstname"   placeholder="Enter Your First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="lastname" placeholder="Enter Your Last Name" />
                        </Form.Group>
                    </Row>
                        <Form.Group   className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: '100px' }} />                          
                        </Form.Group>
                        <Form.Group controlId="formFile">
                             <Form.Label>Share A File With Me</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>             
                    <Button variant="secondary">Send</Button>
        </Form>
    </Col>
   </Row>
</Container>
  );
}
export default Contact;
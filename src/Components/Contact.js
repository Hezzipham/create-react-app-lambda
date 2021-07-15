import React from 'react';
import '../App.css';
import {Container, Button, Form, Row, Col} from 'react-bootstrap';

function Contact() {
  return (
   <Container>
                    <h1 className="text-center">Contact Me</h1>
    <Form as="form" method="POST" data-netlify="true">
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
                    <Row className="mb-3">
                        <Col>
                           <fieldset>
                        <Form.Group>
                            <Form.Label>
                                You Are:
                            </Form.Label>
                            <Col>
                                <Form.Check
                                type="radio"
                                label="Recruiter"
                                name="youare"
                                id="Recruiter"
                                />
                                <Form.Check
                                type="radio"
                                label="Peer Developer"
                                name="youare"
                                id="Peer Developer"
                                />
                                <Form.Check
                                type="radio"
                                label="Friend"
                                name="youare"
                                id="Friend"
                                />
                                <Form.Check
                                type="radio"
                                label="Fan"
                                name="youare"
                                id="Fan"
                                />
                            </Col>
                        </Form.Group>
                         </fieldset>
                      </Col>
                      <Col>
                        <div data-netlify-recaptcha="true" ></div>
                      </Col>
                    </Row>
                   
                    <Button variant="secondary" type="submit">Send</Button>
    </Form>
   </Container>
  );
}
export default Contact;
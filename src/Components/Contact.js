import React from 'react';
import '../App.css';
import {Container, Button, Form, Row, Col} from 'react-bootstrap';

function Contact() {
  return (
        <div className="introimage">
        <Col>
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
                        
                      </Col>
                    </Row>
                   
                    <Button variant="secondary">Send</Button>
        </Form>
    </Col>
    <ul className="socialmedia">
          <li><a target="_blank" rel='noreferrer noopener' href="https://www.linkedin.com/in/hezzi-pham/" ><FaLinkedinIn></FaLinkedinIn></a></li>
          <li><a target="_blank" rel='noreferrer noopener' href="https://github.com/Hezzipham/" ><FaGithub></FaGithub></a></li>
          <li><a target="_blank" rel='noreferrer noopener' href="https://twitter.com/HezziPham" ><FaTwitter></FaTwitter></a></li>
          <li><a target="_blank" rel='noreferrer noopener' href="https://www.instagram.com/hezzipham" ><FaInstagram></FaInstagram></a></li>
          <li><a target="_blank" rel='noreferrer noopener' href="https://www.facebook.com/hezzipham/" ><FaFacebookF></FaFacebookF></a></li>
      </ul>
      
  </div>
  );
}
export default Contact;
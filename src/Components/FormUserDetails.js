import React, { Component } from 'react'
import '../App.css';
import {Container, Button, Form, Row, Col} from 'react-bootstrap';

export class FormUserDetails extends Component {
    continue(e){
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {value} = this.props;

        return (
            <Container>
                    <h1>Contact Me</h1>
                    <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="firstname"  onChange={this.handleChange} placeholder="Enter Your First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="lastname" onChange={this.handleChange} placeholder="Enter Your Last Name" />
                        </Form.Group>
                    </Row>
                        <Form.Group   className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" onChange={this.handleChange} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: '100px' }} />                          
                        </Form.Group>
                          <Form.Group controlId="formFile" className="mb-3">
                             <Form.Label>Share A File With Me</Form.Label>
                            <Form.Control type="file" />
                         </Form.Group>
                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                You Are My:
                            </Form.Label>
                            <Col sm={10}>
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
                    <Button variant="secondary" type="submit">Submit form</Button>
                    </Form>
            </Container>
        )
    }
}

export default FormUserDetails

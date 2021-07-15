import React, { Component } from 'react'
import '../App.css';
import FormUserDetails from './FormUserDetails';


export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state= {step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''};

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  nextStep (step) {
    this.setState ({
      step: step +1
    });
  }
  prevStep (step) {
    this.setState ({
      step: step -1
    });
  }
  //handle field change
  handleChange (e){
    this.setState({
      input: e.target.value
      });
    }
  render() {
    const {step} = this.state;
    const { firstName, lastName, email, occupation, city, bio}= this.state;
    const values = { firstName, lastName, email, occupation, city, bio}
    switch (step){
      case 1: return(
        <FormUserDetails 
        nextStep={this.nextStep}
        handleChange ={this.handleChange}
        values ={values }
        />
      )
      case 2: return(
        <h1> step 2</h1>
      )
      case 3: return(
        <h1>step 3</h1>
      )
      case 4: return(
        <h1>Success</h1>
      )
      default:
    }
   
  }
}



export default Contact;
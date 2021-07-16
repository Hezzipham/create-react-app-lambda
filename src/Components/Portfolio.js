import React, {useState} from 'react';
import '../App.css';
import {Container, Button, Card, } from 'react-bootstrap';
import {FaChevronLeft, FaChevronRight, FaRandom} from 'react-icons/fa'

const codepen = [
  {
    id: 1,
    cpname: "FCC Survey Form",
    cpuse: "Using HTML, CSS, jQuery",
    cplink: "https://codepen.io/hezzipham/pen/abNoOLP",
    cpimage: "./images/codepen1.jpg",
  },
  {
    id: 2,
    cpname: "JS Documentation",
    cpuse: "Using HTML, CSS, jQuery",
    cplink: "https://codepen.io/hezzipham/pen/ZEWEWWy",
    cpimage: "./images/codepen2.jpg",
  },
  {
    id: 3,
    cpname: "Tribute Page",
    cpuse: "Using HTML, CSS, jQuery",
    cplink: "https://codepen.io/hezzipham/pen/bGEXXwP",
    cpimage: "./images/codepen3.jpg",
  },
  {
    id: 4,
    cpname: "Random Quote Machine",
    cpuse: "Using React, HTML, CSS, jQuery",
    cplink: "https://codepen.io/hezzipham/pen/PozewyP",
    cpimage: "./images/codepen4.jpg",
  },
  {
    id: 5,
    cpname: "Landing Page",
    cpuse: "Using HTML, CSS, jQuery",
    cplink: "https://codepen.io/hezzipham/pen/dyMbmBR",
    cpimage: "./images/codepen5.jpg",
  },
  {
    id: 6,
    cpname: "Portfolio Page",
    cpuse: "Using W3 Library, HTML, CSS, jQuery",
    cplink: "https://quynhvu.netlify.app/",
    cpimage: "./images/codepen6.jpg",
  },
  {
    id: 7,
    cpname: "Domino Media",
    cpuse: "Using Bootstrap, HTML, CSS, jQuery",
    cplink: "https://codepen.io/hezzipham/pen/oNxNYPO",
    cpimage: "./images/codepen7.jpg",
  },
];

const Otherproject = () => {
  const [index, setIndex] = useState(0);
  const {cpname, cpuse, cplink,cpimage} = codepen[index % codepen.length];
  const nextCP = ()=>{
    setIndex((index)=>{
      let newIndex= index + 1;
      return newIndex;
    });
  };
  const prevCP = ()=>{
    setIndex((index)=>{
      let newIndex= index - 1;
      if (newIndex < 0){
        return newIndex = codepen.length -1; 
      }else{ return newIndex;
      }
      
    });
  };

  const randomCP =() =>{
    let randomIndex = Math.floor(Math.random() * codepen.length + 1);
    if(randomIndex === index){
      randomIndex = index + 1;  
    }
    setIndex(randomIndex);
    console.log(randomIndex);
  }
  return(
    <Card>
      <Card.Header as="h2"><a href={cplink} target="_blank" rel='noreferrer noopener'>{cpname}</a></Card.Header>
      <Card.Img variant="top" src={require('../images/codepen7.jpg').default} alt={cpname} />
      <Card.Text>{cpuse}</Card.Text>
      <Container>
        <Button variant="light" className ="prev" onClick={prevCP}><FaChevronLeft /></Button>
        <Button size="lg" variant="light"className ="random"><FaRandom onClick={randomCP}/></Button>
        <Button variant="light" className ="next" onClick={nextCP}><FaChevronRight /></Button> 
      </Container>
    </Card>
  )
}; 

function Portfolio() {
  return (
    <Container className="portfolio">
        <Otherproject />
      
    </Container>
  );
}
export default Portfolio;
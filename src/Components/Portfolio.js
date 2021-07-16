import React, {useState} from 'react';
import '../App.css';
import {Container} from 'react-bootstrap';
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
  }
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
      return newIndex;
    });
  };
  return(
    <article>
      <h3><a href={cplink} target="_blank" rel='noreferrer noopener'>{cpname}</a></h3>
      <div><img src={cpimage} alt={cpname}  /></div>
      <p>{cpuse}</p>
      <div className="button-container">
        <button className ="prev" onClick={prevCP}><FaChevronLeft /></button>
        <button className ="random"><FaRandom /></button>
        <button className ="next" onClick={nextCP}><FaChevronRight /></button> 
      </div>
    </article>
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
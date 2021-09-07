import React, {useState} from 'react';
import '../App.css';
import {Card, Container, Button, Col, Row } from 'react-bootstrap';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const recentProject = [
    {
        id: 1,
        pname: "Domino Media",
        puse: "Personal Website using React, React Router, Bootstrap, Sass, and netlify-lambda together in a Netlify Dev workflow. Implement react hooks to fetch data to build an e-commerce shopping cart and a  responsive portfolio.",
        plink: "https://chienvu.com/",
        pimage: "images/hezziwebsite.jpg",
        
      },
    {
        id: 2,
        pname: "Bunpeti.com",
        puse: "Using HTML, Sass, TypeScript and  jQuery to create fun animation, reponsive website to publicize Bunpeti youtube channel and display some affiliate marketing products.",
        plink: "https://bunpeti.com/",
        pimage: "images/bunpeti.jpg",
      },
      {
        id: 3,
        pname: "Dino Daycare & PreSchool",
        puse: "A preschool responsive website, where clients can fill in forms, chat support online, and navigate to different documentation. Using WordPress, Linux Hosting with cPanel",
        plink: "http://dinodaycare.com/",
        pimage: "images/dino.jpg",
      },
      {
        id: 4,
        pname: "Library Of Games",
        puse: "A nonprofit organization website to promote Vietnamese folk games. Using html5, CSS, vanilla JavaScript, and free hosting with GitHub and Netlify",
        plink: "https://libraryofgames.org/",
        pimage: "images/gameslibrary.jpg",
      },

];
function Recent(){
const [index, setIndex] = useState(0);
const{pname, puse,plink,pimage} = recentProject[index % recentProject.length];
const nextP =()=> {
    setIndex((index)=>{ let newIndex= index + 1;
    return newIndex; 
    });
};
const prevP =() =>{
    setIndex((index)=>{
        let newIndex = index -1;
        if(newIndex <0){
            return newIndex = recentProject.length -1;
        }else{ return newIndex}
    });
};
return(
<Container className="recent">
    <Row>
    <a target="_blank" rel='noreferrer noopener' href={plink}  ><h4>{pname}</h4>
    <p>{puse}</p></a>
    </Row>
    <Row>
    <Col xs={2} md={2}><Button variant="secondary" onClick={prevP}><FaChevronLeft/></Button></Col>
    <Col xs={8} md={8}><a target="_blank" rel='noreferrer noopener' href={plink}  >
    <Card.Img alt={pname} src={pimage} />
    </a></Col>
    <Col xs={2} md={2}><Button variant="secondary" onClick={nextP}><FaChevronRight/></Button></Col>
    </Row>
</Container>
)
}

export default Recent;
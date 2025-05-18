import React from 'react'
import image11 from '../../assest/Images/topwild.webp'
import { useContext } from 'react'
import { MyContext } from '../Context/Context'
import image1 from '../../assest/Images/Guindy.webp'
import image2 from '../../assest/Images/Anaimalai.webp'
import image3 from '../../assest/Images/gulf.jpeg'
import image4 from '../../assest/Images/Maura.webp'
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Topwildlife.css'
import { useNavigate } from 'react-router'
const Topwildlife = () => {
  const { inputComp } = useContext(MyContext);
  const{buttonComp}=useContext(MyContext);
  const navi=useNavigate();
const images = [
    { srce: image1,name:"Guindy National Park",about:"Living in its heart are a variety of species that are well protected and looked after. Guindy National Park is a wonder that Chennai has for the world.",path:'/Guindy'},
    { srce: image2,name:"Anaimalai Tiger Reserve",about:"What a majestic sight it will be, as you go deep into the jungle, hearing the mumbling growl of one of the most beautiful.",path:'/Anaimalai'},
    { srce: image3,name:"Gulf of Mannar Marine National Park",about:"There’s a world under the ocean, so breathtaking and so vivid; one that needs all of us to step up in order to be protected.",path:'/Gulf'},
    { srce: image4,name:"Mayura Thotam",about:"It’s a safe haven for beautiful species of wildlife and an awesome retreat for visitors who wish to see the grace of nature.",path:'/Mayy'},
  ];
  return (
    <>
      {inputComp}
      <div className='flexcontainerforpop'>
  {images.map((item) => (
    <div>
     <Card  style={{ width: '18rem', height:'30rem' }}>
     <img className="wildimg" src={item.srce}></img>
     <Card.Body>
       <Card.Title>{item.name}</Card.Title>
       <Card.Text>
        {item.about}
       </Card.Text>
       <Button variant="warning" onClick={()=>navi(item.path)}>Read More</Button>
     </Card.Body>
   </Card>
   </div>
  ))}
 </div>
            <div>{buttonComp}</div>
            
                </>
              );
            };
export default Topwildlife

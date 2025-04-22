import React, { useContext } from 'react';
import './TopHillstaions.css';
import image1 from '../../assest/Images//Hills.webp';
import { MyContext } from '../Context/Context';
import image01 from '../../assest/Images/Ootyhill.webp';
import image2 from '../../assest/Images/Pachamalai.webp';
import image3 from '../../assest/Images/valparai.webp';
import image4 from '../../assest/Images/Connor.webp';
import image5 from '../../assest/Images/Kodai2.webp';
import image6 from '../../assest/Images/Kolli.webp';
import image7 from '../../assest/Images/koluku2.jpeg';
import image8 from '../../assest/Images/Masinagudi.jpeg';
import image9 from '../../assest/Images/Megamalai.webp';
import image10 from '../../assest/Images/yercaud.jpg';
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const TopHillstations = () => {
  const { inputComp } = useContext(MyContext);
  const{buttonComp}=useContext(MyContext);

  const images = [
    { srce: image01,name:"Ooty",about:"She is charming, she is classy, she is unique – she is the Queen of Hill Stations in India.Udhagamandalam, popularly known as Ooty is a hill station that will surely mesmerise you with its beguiling beauty."},
    { srce: image2,name:"Pachamalai",about:"Amidst the verdant landscape of north-eastern Tamil Nadu lies a world of wonder and magic, where the green hills embrace the azure sky and the misty breeze carries with it a sense of freedom and tranquillity."},
    { srce: image3,name:"Valparai",about:"This beautiful, hilly hamlet of Valparai is the ultimate choice for those who wish to spend a quiet memorable time away from all the hustle. The lavish green spread, tea plantations and winding paths serve up a lot to explore."},
    { srce: image4,name:"Connor",about:"Seek out the beauty of nature at its very best at Coonoor, the second largest hill station in the Nilgiri hills. For trekkers and tourists, the place serves up a lot to explore. Blanketed by the green cover of Nilgiri hills, it packs an array of attractions."},
    { srce: image5,name:"Kodaikanal",about:"Hills and valleys filled with the enigmatic hug of mist, lush mountain ranges that offer a warm welcome to visitors, enjoyment and experiences that proffer beautiful memories for a lifetime – Kodaikanal is a wonder in ways much more than one." },
    { srce: image10,name:"Ercaud",about:"Nestled in the Shevaroys range of hills, Yercaud opens up a paradise of sights and things to explore. The origin of the place name sums up the main attractions; yeri means lake and forest means kaadu." },
    { srce: image6,name:"Kollimalai",about:"Gifted with pleasant weather throughout the year, Kolli hills is one of those round the season destinations in Tamil Nadu. Unique in landscape and attractions, it has a scenic beauty and has plenty to offer for the exploring travellers."},
    { srce: image7,name:"Kolukumalai",about:"Situated near Munnar is this world's highest tea plantation known as Kolukkumalai, a hamlet in Theni district in Tamil Nadu." },
    { srce: image8,name:"Masinagdi",about:"Masinagudi whispers the wild's secrets through rustling leaves and roaming beasts.A hidden gem where nature breathes and the soul finds peace."},
    { srce: image9,name:"Megamalai",about:"Marvel at the sky piercing mountains cloaked by clouds and carpeted by tea plantations at Meghamalai." }
  ];
  return (
    <>
       {inputComp}
      <div className='tenhills'>
        <img src={image1} alt='Top Hills' />
        <div className='tenhille'>
          <h3>Hills</h3>
        </div>
      </div>
    <div className='flexcontainerforpop'>
  {images.map((item) => (
    <div>
     <Card  style={{ width: '18rem', height:'30rem' }}>
     <img className="populartn" src={item.srce}></img>
     <Card.Body>
       <Card.Title>{item.name}</Card.Title>
       <Card.Text>
        {item.about}
       </Card.Text>
       <Button variant="warning">Read More</Button>
     </Card.Body>
   </Card>
   </div>
  ))}
 </div>
<div>{buttonComp}</div>


    </>
  );
};

export default TopHillstations;

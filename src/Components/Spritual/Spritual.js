import React from 'react'
import image1 from '../../assest/Images/Arun.webp'
import image2 from '../../assest/Images/thnj2.webp'
import image3 from '../../assest/Images/ram.webp'
import image4 from '../../assest/Images/velankani.jpg'
import image0 from '../../assest/Images/mosque.webp'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MyContext } from '../Context/Context';
import { useContext } from 'react'; 
const Spritual = () => {
  const { inputComp } = useContext(MyContext);
      const{buttonComp}=useContext(MyContext);
    const images = [
        { srce: image3,name:"Rameshwaram",about:"Here, hymns and chants fill the air, creating a mesmerizingly hallowed ambiance. As the sea waves rise, so do the emotions in the minds of millions of devotees. Rameswaram is a vibrant destination, so divine and so very poetic"},
        { srce: image1,name:"Arunachaleswarar Temple",about:"Nestled amidst the Tiruvannamalai Hill lies a majestic jewel of the ancient world, the Arunchalaeswarar Temple. "},
        { srce: image4,name:"Velanani Church",about:"Here is where the divinity of a holy shrine meets with the serenity of mother nature; and seamlessly gifts an experience of absolute joy and bliss to any traveller. Velankanni is an amazing destination for all kinds of visitors."},
        { srce: image0,name:"Thousand Lights Mosque",about:"According to a legend, the mosque got its name as in olden times thousand lamps were needed to illuminate the prayer hall."},
      ];
  return (
    <>
    {inputComp}
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
                
               </Card.Body>
             </Card>
             </div>
            ))}
           </div>
          <div>{buttonComp}</div>
          
    </>
  )
}

export default Spritual

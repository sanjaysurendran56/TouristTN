import React from 'react'
import Card from 'react-bootstrap/Card';
import { MyContext } from '../Context/Context';
import { useContext } from 'react'; 
import image2 from '../../assest/Images/path.webp'
import image1 from '../../assest/Images/kumbakonam.webp'
const Palaces = () => {
   const { inputComp } = useContext(MyContext);
      const{buttonComp}=useContext(MyContext);
    const images = [
        { srce: image1,name:"Kattabomman Memorial Fort, Panchalankurichi",about:"In the verdant countryside of Thoothukudi, there is a place that holds within its walls the echoes of a bygone era. A place where legends were born and the spirit of independence burned bright. This place is none other than the Kattabomman Memorial Fort, situated in the serene village of Panchalankurichi."},
        { srce: image2,name:"Padmanabhapuram Palace",about:"A mansion that tells many stories from the past – of kings, empires and royalty; flaunting its affluent beauty that boasts of the traditional Kerala architectural genre. Padmanabhapuram Palace will take you back in time and mesmerise any visitor with its quaint charm."},
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
export default Palaces

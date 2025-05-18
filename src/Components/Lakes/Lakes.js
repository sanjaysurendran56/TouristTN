import React from 'react' 
import image1 from '../../assest/Images/Avlake.webp'
import image2 from '../../assest/Images/kodailake.webp'
import image3 from '../../assest/Images/ootylake.webp'
import image0 from '../../assest/Images/Lakes.webp'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MyContext } from '../Context/Context';
import { useContext } from 'react'; 
import { useNavigate } from 'react-router'
const Lakes = () => {
  const { inputComp } = useContext(MyContext);
    const{buttonComp}=useContext(MyContext);
    const navi=useNavigate();
  const images = [
      { srce: image1,name:"Avlanche Lake",about:"The Avalanche Lake in Ooty has that and more to offer to travellers looking to be lost in the beauty of nature.",path:'/Avlanche'},
      { srce: image2,name:"Kodaikanal Lake",about:"The fame of Kodaikanal lake or Kodai lake has spread across states and it has become one of the favourite photographic spots and movie locations, even in Bollywood.",path:'/Kodaila'},
      { srce: image3,name:"OOty Lake",about:"The picturesque Ooty Lake, also known as the Ooty boat house, is a much sought-after tourist attraction located in the midst of serene greenery. The Ooty Lake is an artificially constructed lake, built by John Sullivan in 1824.",path:'/Ootyla'},
    ];
  return (
    <>
      {inputComp}
            <div className='tenhills'>
              <img src={image0} alt='Top Hills' />
              <div className='tenhille'>
                <h3>Lakes</h3>
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
             <Button variant="warning" onClick={()=>navi(item.path)}>Read More</Button>
           </Card.Body>
         </Card>
         </div>
        ))}
       </div>
      <div>{buttonComp}</div>
      
    </>
  )
}

export default Lakes

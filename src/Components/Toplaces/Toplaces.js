import React from 'react'
import './Toplaces.css'
import { FaLocationDot } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router';
import image1 from '../../assest/Images/Trave.png'
import image3 from '../../assest/Images/Ooty.webp'
import image5 from '../../assest/Images/Elephant.webp'
import image7 from '../../assest/Images/fallsstn.jpg'
import image10 from '../../assest/Images/Lakes.webp'
import image12 from '../../assest/Images/Spritual.webp'
import image20 from '../../assest/Images/kara.webp'
const Toplaces = () => {
  const navi=useNavigate();
  const hill=()=>{
    navi('/TopHillstations')
  }
  const wildlife=()=>{
    navi('/TopWildlife')
  }
  const Waterfall=()=>{
    navi('/Topwaterfalls')
  }
  const lakes=()=>{
    navi('/Toplakes')
  }
  const Spritual=()=>{
    navi('/Topspiritual')
  }
  const Palaces=()=>{
    navi('/Palaces');
  }
  return (
    <>
     <div className='top'>
        <center>
          <img src={image1}></img>
            <h4 style={{color:'darkmagenta'}}>Create lasting memories with your favorite people</h4>
             <h2>Find your best destinations</h2>
             </center>
             </div>

             <div className='flexcontainer'>
              <div className='carde'>
                <img src={image3}></img>
                <div className='contents'>
                  <h1>Hill Stations</h1>
                  <h1><FaLocationDot />10+Places</h1>
                <h1><Button onClick={()=>hill()} className="buttonsbest" variant="warning">View Places<FaArrowRight /></Button></h1>
                </div>
              </div>
              <div className='carde'>
                <img src={image5}></img>
                <div className='contents'>
                  <h1>Wildlife</h1>
                  <h1><FaLocationDot />10+Places</h1>
                  <h1><Button onClick={()=>wildlife()} className="buttonsbest" variant="warning">View Places<FaArrowRight /></Button></h1>
                </div>
              </div>
              <div className='carde'>
                <img src={image7}></img>
                <div className='contents'>
                  <h1>WaterFalls</h1>
                  <h1><FaLocationDot />10+Places</h1>
                  <h1><Button onClick={()=>Waterfall()} className="buttonsbest" variant="warning">View Places<FaArrowRight /></Button></h1>
                </div>
              </div>
              <div className='carde'>
                <img src={image10}></img>
                <div className='contents'>
                  <h1>Lakes</h1>
                  <h1><FaLocationDot />10+Places</h1>
                  <h1><Button onClick={()=>lakes()}className="buttonsbest" variant="warning">View Places<FaArrowRight /></Button></h1>
                </div>
              </div>
              <div className='carde'>
                <img src={image12}></img>
                <div className='contents'>
                  <h1>Spritual</h1>
                  <h1><FaLocationDot />10+Places</h1>
                  <h1><Button onClick={()=>Spritual()}className="buttonsbest" variant="warning">View Places<FaArrowRight /></Button></h1>
                </div>
              </div>
              <div className='carde'>
                <img src={image20}></img>
                <div className='contents'>
                  <h1>Palaces</h1>
                  <h1><FaLocationDot />10+Places</h1>
                  <h1><Button onClick={()=>Palaces()}className="buttonsbest" variant="warning">View Places<FaArrowRight /></Button></h1>
                </div>
              </div>
             </div>
      </>
        )
}

export default Toplaces

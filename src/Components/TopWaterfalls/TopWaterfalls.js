import React from 'react'
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { useContext } from 'react';
import { MyContext } from "../Context/Context";
import image1 from '../../assest/Images/cot.webp';
import image2 from '../../assest/Images/hokenakal.webp'
import image3 from '../../assest/Images/pykara.webp'
import image11 from '../../assest/Images/fallss.webp'
import './Topwater.css'
import { useNavigate } from 'react-router';
const TopWaterfalls = () => {
  const navi=useNavigate();
    const { inputComp } = useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
    const images = [
        { srce: image1,name:"Kutralam Water Falls",path:'/Kutralam'},
        { srce: image2,name:"Hogenakkal Water Falls",path:'/Hoke'},
        { srce: image3,name:"Pykara Water Falls",path:'/Pykra'},
      ];
  return (
    <div>
      {inputComp}
                  <div className='tenhills'>
                    <img src={image11} alt='Top Hills' />
                    <div className='tenhille'>
                      <h3>WaterFalls</h3>
                    </div>
                  </div>
                  <div className='flexcontainer'>
                    {images.map((item, i) => (
                      <div className='carde' key={i}>
                        <img src={item.srce} alt={`Hill ${i + 1}`} />
                        <div className='contents' key={i}>
                         <p> {item.name}</p>
                          <h4 onClick={()=>navi(item.path)}>Read More<FaPersonWalkingArrowRight className='iconhill'/></h4>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>{buttonComp}</div>
    </div>
  )
}

export default TopWaterfalls

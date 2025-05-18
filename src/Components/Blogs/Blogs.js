import React from 'react'
import './Blogs.css'
import image0 from '../../assest/Images/TrekTn.png'
import image1 from '../../assest/Images/EasyTrek.png'
import image2 from '../../assest/Images/mod.png'
import image3 from '../../assest/Images/tough.png'
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router'
const Blogs = () => {
  const navi=useNavigate();
  const Trek=()=>{
    navi('/TrekTn')
  }
 const images=[{srbc:image1 ,name:"Easy",name1:"10 Trails"},{srbc:image2,name:"Moderate" ,name1:"12 Trails"},{srbc:image3,name:"Tough",name1:"6 Trails"}]
  const Blo=()=>{
    return(
      <>
      <br></br>
      <br></br>
      <div className='tt'>
      <center>
      <img   src={image0}></img>
        </center>
        </div>
        <div className='treklevel'>
        {
          images.map((paramater)=>{
            return(
              <>
            
                  <div className='levels'>
                    <center>
                  <img src={paramater.srbc}></img>
                  <br></br>
                  <br></br>
                  <h2 onClick={()=>Trek()}>{paramater.name}<MdArrowOutward /></h2>
                  <br></br>
                  <h4>{paramater.name1}</h4>
                  </center>
                </div>
               
                </>
            )
          })

        }
        </div>
    </>
    )
  }
  return (
    <>
    <div className='Blogs'>
   <Blo />
      </div>
    </>
  )
}

export default Blogs

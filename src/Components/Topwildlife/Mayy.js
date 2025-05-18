import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useState } from 'react';
import { useContext } from 'react';
import './Wild.css'

const Connor = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="mayback">
      <center>
        <h1>Mayura Thottam</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Just like the enthralling grace of a dancing peacock, this locale is filled with natural beauty that will fill your mind with joy. It’s a safe haven for beautiful species of wildlife and an awesome retreat for visitors who wish to see the grace of nature.
    </p>
    <br></br>
    <p>Have you seen the graceful and joyous dance of a beautiful peacock that roams free in its natural habitat? If you haven’t, then Mayura Thottam is the place to be in. If you have already, still why not see it again. Very few treats match that stunning visual feast. After all, it is always a pleasure to see birds and animals live and thrive in their natural setting, deep within the heart of a jungle. That kind of an ambiance is what makes Mayura Thottam a blissful location to be in and spend time.  </p>
        <br></br>
        <p>With a cool and soothing climate almost all year round, Ooty welcomes tourists from far and wide. It’s not just about the mountains and hills, Ooty offers much more to discerning travellers who drive up the winding roads to reach the pinnacle. Lakes, gardens, parks, peaks, waterfalls and simply amazing accommodation options. No wonder Ooty is called the 'Switzerland of India', of such grandeur is the scenic beauty the destination is so well acclaimed for. If you would love to relax over a cup of tea, sitting back and gazing at the vastness of nature, Ooty is indeed the place to be. Besides that, the Nilgiri biosphere is rich in flora and fauna, allowing you to escape into the depths of mystic jungles and explore once-in-a-lifetime experiences. 
        </p>
        <br></br>
        <p>‘Mayura’ means peacock and ‘Thottam’ is garden. So here is a garden full of peacocks all set to welcome guests with its charming beauty. The national bird of India, peacocks are an important part of India’s history, culture and traditions. Thus it is only befitting to have a sanctuary where they can be protected from all kinds of external harms. This is exactly the crucia job that Mayura Thottam does very efficiently. Thousands of tourists flock annually to see and experience the compelling beauty of this amazing sanctuary. Spread over an area of 55 acres, Mayura Thottam is home to around 200 peacocks. Located 24 kms northwest of Thoothukudi, this sanctuary is indeed a picturesque garden filled with guava and coconut groves. Peacocks live here and breed, growing in numbers steadily. 
    </p>
        </div>
        </div>
        <div className="Timeandvehicle">
          <div>
          <h5 onClick={()=>{b(true); update(true);} }className={a===true?"linek":""}>How To Reach</h5>
          </div>
          <div>
          <h5 onClick={() => { b(false); update(false); }} className={a===false?"linek":""}>Best Time to Visit</h5>
          </div>
        </div>
        {vehitime?<div className="Travel">
            
            <div> <center><FaTrainSubway className="icon" />
            <p>Vanchi Maniyachchi station, about 12 km away</p></center></div>

           <div>
              <center><FaBus className="icon" />
            <p>Thoothukudi Airport, about 200 km away</p></center>
            </div>
            </div>:<>
            </>}
             {vehitime?<>
          </>:<div className="Travel">
            <div>
            <center><CiClock2 className="icon" />
          <p>Although Ooty can be visited and explored any time of the year, the best is the summer months between March and June.</p>
          </center></div>
            </div>}
             
            <div>
              {buttonComp}
            </div>
      
    </>
  )
}

export default Connor


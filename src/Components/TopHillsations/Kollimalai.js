import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import './Common.css'
import { useState } from 'react';
import { useContext } from 'react';

const Kollimalai = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="kolliback">
      <center>
        <h1>KolliHills</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Gifted with pleasant weather throughout the year, Kolli hills is one of those round the season destinations in Tamil Nadu. Unique in landscape and attractions, it has a scenic beauty and has plenty to offer for the exploring travellers.</p>
    <br></br>
    <p>You may want to spend more than a day to experience Kolli hills in the best way possible. Seated at an altitude of 1000-1300 metres above the sea level, Kolli hills are a delight for the trekkers and other tourists alike. It has an untamed charm and it would be an experience discovering the village life of tribal hamlets here. Get yourselves acquainted with distinct shades of culture and make new friends here. Agasagangai water waterfalls is the must visit spot here. This is also known as Kollimalai falls. You descend 1000 steps to experience the magic.  </p>
        <br></br>
       
        <br></br>
        <p>Don't miss the spectacular view from Selur viewpoint, one of the highest points in the hill. The road to Selur is graced by the scenic beauty featuring plantations, oak trees, orange trees and various tropical plants. You may love to explore the small, beautiful towns around the hills for shopping and to experience the local cuisine. 
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
            <div>
              <center><FaBus className="icon" />
            <p>1 Namakkal to Kolli Hills via Sendamangalam
2. Rasipuram to Kolli Hills via Kallappanaickenpatty
3. Salem to Kolli Hills via Mettala, Mullukurichi, Nariankadu -</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Salem Junction, about 88 km away</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Trichy Airport, about 133 km away</p></center></div>
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

export default Kollimalai
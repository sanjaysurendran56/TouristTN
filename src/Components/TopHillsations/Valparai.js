import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import './Common.css'
import { useState } from 'react';
import { useContext } from 'react';

const Valparai = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="valback">
      <center>
        <h1>Valparai</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>This beautiful, hilly hamlet of Valparai is the ultimate choice for those who wish to spend a quiet memorable time away from all the hustle. The lavish green spread, tea plantations and winding paths serve up a lot to explore.
    </p>
    <br></br>
    <p>Located at 3500 feet height from the sea level on the Anamalai mountain range of the Western Ghats, Valparai prides itself as one of the first choice tourist destinations. Even with its rustic charm, the place is well connected. Enjoy the drive to Valparai along the hairpin curves and marveling at the hilly ranges filled with greenery. Hemmed in by forests, the tea plantations and coffee estates at Valparai make for a spectacular sight. Halt for pictures of a lifetime, take a stroll along the plantations and relax yourself in the calmness of the place. Upper Sholayar Dam,Nirar Dam, Aliyar Dam, Monkey Falls , Balaji temple (Karimalai), Velankanni Church (Karimalai), Pancha Mugha Vinayagar Koil (Near Sholayar) are a few of the landmarks you would love to explore.  For trekkers, Valparai offers a unique experience. The Valparai range is also the habitat of Nilgiri Tahr.</p>
        <br></br>
        <p>Pay a visit to the Indira Gandhi Wildlife Sanctuary, which is one of the most famous attractions of Valparai.  Lion-tailed macaques, barking deer, wild boar, the Nilgiri and the common langur can be spotted here. Valparai is also a most loved place for bird watchers The Great Hornbill, the Malabar Pied Hornbill and the Grey Malabar Hornbill are often spotted here.
        </p>
        <br></br>
        <p>Head to Chinna Kallar and be awed at the mesmerizing beauty of nature. Blanketed by forest, a narrow, winding path leads to Chinnakallar falls.  Immerse yourself in the scenic splendor. This place owns the distinction of receiving the third highest rainfall. Cloaked in mist owing to the showers, Chinnakallar is blessed with greenery so appealing that you love to spend as much time as you can
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
            <p>Valparai New Bus Station, about 1 km away</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Pollachi Railway Station, about 64 km away</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Coimbatore International airport, about 119 km away</p></center></div>
          </div>:<>
            </>}
             {vehitime?<>
          </>:<div className="Travel">
            <div>
            <center><CiClock2 className="icon" />
          <p>December to January</p>
          </center></div>
            </div>}
             
            <div>
              {buttonComp}
            </div>
      
    </>
  )
}

export default Valparai


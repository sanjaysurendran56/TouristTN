import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import './Common.css'
import { useState } from 'react';
import { useContext } from 'react';

const Kodai = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="kodaiback">
      <center>
        <h1>Kodaikanal</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Hills and valleys filled with the enigmatic hug of mist, lush mountain ranges that offer a warm welcome to visitors, enjoyment and experiences that proffer beautiful memories for a lifetime – Kodaikanal is a wonder in ways much more than one.
    </p>
    <br></br>
    <p>If you’ve ever dreamt of being pampered by the lulling lullabies of Nature, and being embraced affectionately by the cool breeze that flows in from picturesque hill slopes, then Kodaikanal is indeed the place to be in to make those dreams come true. The scenic beauty of Kodaikanal never ceases to amaze travellers. </p>
        <br></br>
        <p>Referred to as the “Princess of Hills”, Kodaikanal is one of the most sought-after hill station destinations in Tamil Nadu and the whole of India. Located at about 7000 ft above the sea-level, Kodaikanal was established as a destination by British bureaucrats and Christian missionaries in the year of 1845. However, the earliest references to the stunning hill station can be found as early as the Sangam literature time. However the modern era of Kodaikanal began only after the British came in. It served as a summer retreat and a vacation spot for the colonial power. Ever since those days, Kodaikanal has been a popular choice among hill station lovers for a quick escape up the mountains. 
        </p>
        <br></br>
        <p>
The verdant hills, the cascading waterfalls, picturesque lakes, pristine countrysides – the reason why Kodaikanal has been popular among tourists are many. For a discerning traveller, the locale offers much to see, enjoy and experience. Plenty of activities await a visitor here. Boating, cycling, horse riding and trekking are some of the most common among them. One of the other spectacles of this region is the Kurinji flower that blooms only once in 12 years, making itself a unique spectacle to watch.
.
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
            <p>Kodaikanal Bus Stand, within the town itself.
Frequent bus services are available from Madurai Aarappalayam, Batlagundu, Palani, Oddanchatram, Kodai Road, and Dindigul.</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Palani Railway Station, 64 km away.
Kodai Road Station, 80 km away.
Regular train services from Madurai, Tiruchirappalli and Coimbatore.</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Madurai International Airport, about 115 km away.
Coimbatore International Airport, about 170 km away.</p></center></div>
          </div>:<>
            </>}
             {vehitime?<>
          </>:<div className="Travel">
            <div>
            <center><CiClock2 className="icon" />
          <p>Kodaikanal enjoys a cool and pleasant climate round the year. However, the best time to visit the hill station is from April to June when the weather is at its best.</p>
          </center></div>
            </div>}
             
            <div>
              {buttonComp}
            </div>
      
    </>
  )
}

export default Kodai


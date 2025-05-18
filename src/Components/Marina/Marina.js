import React from 'react'
import { useState } from 'react';
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useContext } from 'react';
import Userreview from '../Userreview/Userreview';
import './Marna.css'
const Marina = () => {
    const[a,b]=useState(true);
      const[vehitime,update]=useState(true);
      const{inputComp}=useContext(MyContext);
      const{buttonComp}=useContext(MyContext);
  return (
    <>
{inputComp}
<div className="backmarina">
  <center>
    <h1>Marina Beach</h1>
  </center>
</div>
 <div className="parakanya">
 <div className="aboutk">
<p>There are certain attractions that define a city in many unique ways; reflecting the essence, the character and the very soul of that destination. That is what Marina Beach is to Chennai – the city’s heart that reflects everything that is best about the city. 
</p>
<br></br>
<p>It’s a landmark that Chennai has been proudly showcasing before the world – the Marina Beach. A splendidly serene strip of coast along the Bay of Bengal, the Marina Beach is considered to be one of the finest beaches in India. No wonder the spot attracts thousands of visitors everyday from all parts of the world. The first choice of local people when it comes to spending a beautiful evening, Marina Beach is one of the largest urban beaches in the world. </p>
    <br></br>
    <p>Stretching across 13 kms from Fort St. George to the northern part of Besant Nagar, this beach was nothing but a stretch of mud before the construction of the Madras Port. The same was modified to form a promenade and was named the Madras Marina by the British. During the Indian freedom struggle, the Marina Beach was a centre for social gatherings and public events. With the passage of time, Marina Beach transformed itself into a locale of leisure and entertainment. It is estimated that over 30,000 people visit the beach everyday, making the entire 13 km stretch buzzing with life.
    </p>
    <br></br>
    <p>The views of the sea, the sand and the sunrise are ones to enjoy from Marina Beach. Though a popular beach destination, Marina beach isn’t considered safe to swim or host water sports due to the turbulent undercurrent. However, taking a stroll on the beach itself is an experience like few others. A 50 m high lighthouse on the beach offers a spectacular view of the city and surroundings.
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
        <p>Chennai Bus Stand, about 13 km away

</p></center>
        </div>
        <div> <center><FaTrainSubway className="icon" />
        <p>Chennai Central Station, about 4 km away</p></center></div>
        <div> <center><MdFlight className="icon" />
        <p>Chennai International Airport, about 18.9 km away</p></center></div>
      </div>:<>
        </>}
         {vehitime?<>
      </>:<div className="Travel">
        <div>
        <center><CiClock2 className="icon" />
      <p>The perfect time to experience Marina is from October to February as the weather would be cool and pleasant. Summers can be really hot as the destination has a tropical climate.</p>
      </center></div>
        </div>}
         
        <div>
          {buttonComp}
        </div>
      
    </>
  )
}

export default Marina

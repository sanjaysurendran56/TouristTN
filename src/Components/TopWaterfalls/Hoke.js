import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useState } from 'react';
import { useContext } from 'react';
import './Falls.css';

const Connor = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="hokeback">
      <center>
        <h1>Hokenakal Waterfalls</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Hogenakal translates as Smoky Rocks in Kannada. This waterfall situated on the border of Karnataka and in the district of Dharmapuri in Tamilnadu draws a good number of tourists for the splendid sights the place unravels.
    </p>
    <br></br>
    <p>A tranquil air pervades the locale and the waterfall originates from River Kaveri which gathers speed by mingling with other rivers at Hogenakkal. Myriad of streams gushing down the rocky terrain seem to emanate a smoky pattern and hence the name smoky rocks. The forceful current of water turns to a white frothing stream making it an enthralling sight for the tourists. Enjoy the coracle ride and drift along gently in the river. </p>
        <br></br>
       
        <p>The water falling at a high speed then merges into Mettur Stanley reservoir. The dam constructed in 1939 is used for irrigation and hydropower generation. It is one of those all season destinations where the magical experience of cascading water, the sound of the plummeting water and the steady current is unparallelled. Avail the transport facilities from Dharmapuri and Krishnagiri.
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
            <p>Dharmapuri Bus Stand and the Salem Bus Stand are the two nearest Bus Stations</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Dharmapuri Railway Station, about 48 km away</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Salem airport, about 80 km away</p></center></div>
          </div>:<>
            </>}
             {vehitime?<>
          </>:<div className="Travel">
            <div>
            <center><CiClock2 className="icon" />
          <p>October to February is the best time to watch the waterfall in its full glory</p>
          </center></div>
            </div>}
             
            <div>
              {buttonComp}
            </div>
      
    </>
  )
}

export default Connor


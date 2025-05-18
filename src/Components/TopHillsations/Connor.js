import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import './Common.css'
import { useState } from 'react';
import { useContext } from 'react';

const Connor = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="ootback">
      <center>
        <h1>Connor</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Seek out the beauty of nature at its very best at Coonoor, the second largest hill station in the Nilgiri hills. For trekkers and tourists, the place serves up a lot to explore. Blanketed by the green cover of Nilgiri hills, it packs an array of attractions. 
    </p>
    <br></br>
    <p>With its spellbinding set of viewpoints, sprawling hills , waterfalls and luxuriant greenery, Coonoor is your perfect getaway spot. Take a stroll along the tea plantations clouded in mist. Spend time in the valleys and near the waterfalls. Click some amazing pictures. Gear up for a memorable trekking experience. Cut your way through the hills and make it to the top to some of the most spectacular views. Drop by the town and discover artefacts and souvenirs. If you love birds, head to Sim's park, considered as one of the top attractions of Coonoor hills. Surprise yourself with the sight of bulbuls, babblers and robins. Listen carefully to the sounds of birds and if lucky, spot them just like that.</p>
        <br></br>
        <p>Named after J D Sim, a former secretary to the Government, Sim's park houses unique species of plants and shrubs as well. Plan your trip to witness the annual fruits and vegetable show held here. Notable landmarks include the Lamb's rock, Dolphin's nose, Catherine falls, law's  falls and droog fort. Trek your way to the top of Lamb's rock, it would tire you a bit, but the spectacular view is worth the effort.
        </p>
        <br></br>
        <p>If you are fit, go for it. Enjoy the beauty of sunrise and sunset at the Dolphin's nose viewpoint. Get the best view of Catherine Falls from here. Experience local shopping at Coonoor and walk home with some exquisite products. The train ride from Coonoor to Ooty is something you don't want to miss. Make sure you leave ample time to explore the best of Coonoor.
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
            <p>Coonoor Bus Stand</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Comibatore Railway Station, about 71 km away</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Coimbatore Airport, about 71 km away</p></center></div>
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


import React from 'react'
import './Dhanushkodi.css'
import { useState } from 'react';
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useContext } from 'react';   
const Dhanushkodi = () => {
    const[a,b]=useState(true);
      const[vehitime,update]=useState(true);
      const{inputComp}=useContext(MyContext);
      const{buttonComp}=useContext(MyContext);
  return (
    <>
    {inputComp}
<div className="backdhanush">
  <center>
    <h1 className='dh'>Dhanushkodi</h1>
  </center>
</div>
 <div className="parakanya">
 <div className="aboutk">
<p>The sun, the sands and the water – the finest beach experiences that allure a traveller are right here in Dhanushkodi. The vastness and the deepness of the blue sea is a sight to behold; and the endless fascinations on the shore are all to be experienced. 
</p>
<br></br>
<p>One of the most exotic adornments in the vast coastline of Tamil Nadu is the picturesque Dhanushkodi Beach. A highly popular tourism hotspot, Dhanushkodi Beach is visited by lakhs of tourists every year from all over the world. This pristine beach is surrounded by the Gulf of Mannar on one side and the Bay of Bengal on the other. Resting on the southern tip of Tamil Nadu, this amazing beach destination is a place rich in history, myths and beauty.
</p>
    <br></br>
    <p>The word Dhanushkodi means ‘Tip of the bow’. ‘Arichal Munai’ is the point at which the Indian Ocean meets the Bay of Bengal and the spot can be viewed from Dhanushkodi. It is believed that Lord Rama, from the Indian epic of Ramayana, pointed to the end of his bow and asked his troops to build a bridge across the ocean to reach the demon king Ravana’s Lanka. Ravana had abducted Rama’s wife Sita and Rama had to reach Lanka to rescue her. Thus this place occupies a significant and important position in Indian mythology and history.  
    </p>
    <br></br>
    <p>Extending up to 15 km in length, the Dhanushkodi Beach is one that often witnesses high tides. Despite this, the place is an ideal vacation spot for families, friends and solo travellers alike. The region also sees various migratory birds such as gulls and flamingos, adding to the natural bliss of the locale. 
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
        <p>Rameswaram Bus Stand, about 13 km away.</p></center>
        </div>
        <div> <center><FaTrainSubway className="icon" />
        <p>Rameswaram station, about 24 km away.</p></center></div>
        <div> <center><MdFlight className="icon" />
        <p>Madurai International Airport, about 191 km away.</p></center></div>
      </div>:<>
        </>}
         {vehitime?<>
      </>:<div className="Travel">
        <div>
        <center><CiClock2 className="icon" />
      <p>The perfect time to experience Dhanushkodi is from November to March as the weather would be cool and pleasant. Summers can be really hot as the destination has a tropical climate.</p>
      </center></div>
        </div>}
         
        <div>
          {buttonComp}
        </div>
      
    </>
  )
}

export default Dhanushkodi

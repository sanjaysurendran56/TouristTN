import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import './Common.css'
import { useState } from 'react';
import { useContext } from 'react';

const Koluku = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="kolukuback">
      <center>
        <h1>Kolukumalai</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Situated near Munnar is this world's highest tea plantation known as Kolukkumalai, a hamlet in Theni district in Tamil Nadu. 
    </p>
    <br></br>
    <p>If exhilarating views of distant mountains and an escape into the misty hills is what your heart desires, Kolukkumalai is a perfect weekend getaway. It is situated 7,130 ft above sea level and effortlessly takes a place in your heart with its most picturesque views of Nature. </p>
        <br></br>
        <p>The Kolukkumalai tea estate, which was started in the early 1900s, is located 35 km off Munnar. The tea here is produced through traditional methods in the factory, and is known for its freshness and desirable flavours.
        </p>
        <br></br>
        <p>The panoramic view from Kolukkumalai is a thing to be experienced especially during sunrise and sunset. Adventure lovers can also try hiking and camping in Kolukkumalai.

 
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
            <p>Theni Bus Stand, about 60 km away. Kolukkumalai is accessible only on a jeep from the main town.</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Madurai Station, about 144 km away.</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Madurai International Airport, about 151 km away.</p></center></div>
          </div>:<>
            </>}
             {vehitime?<>
          </>:<div className="Travel">
            <div>
            <center><CiClock2 className="icon" />
          <p>Even though the weather is great here throughout the year, the best time to visit Kolukkumalai is September - March.</p>
          </center></div>
            </div>}
             
            <div>
              {buttonComp}
            </div>
      
    </>
  )
}

export default Koluku


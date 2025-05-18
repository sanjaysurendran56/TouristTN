import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useState } from 'react';
import { useContext } from 'react';
import './Wild.css';

const Guindy = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="guindback">
      <center>
        <h1>Guindy Nature Park</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>In the heart of Chennai's bustling metropolitan life lies Guindy Nature Park, a serene escape to nature and wildlife. This restorative sanctuary offers a rare and refreshing opportunity to connect with the wonders of the wild, all within the city’s vibrant core.
    </p>
    <br></br>
    <p>With 1,000 birds, 500 animals, and approximately 1,000 reptiles, the park is a dynamic tapestry of wildlife, rich in colour and life. A standout feature within the park is the renowned Guindy Children's Park, a recognised zoo that brings the wonders of nature to visitors of all ages.  
        </p>
        <br></br>
        <p>The birdlife is equally impressive, with species like the Grey Pelican, Painted Stork, White Ibis, Grey Heron, Spoonbill, Night Heron, Bengal Vulture, Pigeon, Great Horned Owl, and Barn Owl. The reptile inhabitants include venomous snakes, crocodiles, and tortoises, making the park a rich, diverse sanctuary for wildlife enthusiasts. Beyond the animals, the park is also home to an impressive collection of 350 species of plants, many of which are endemic, further enriching its ecological diversity. A trip to Guindy Nature Park promises a day well spent.
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
            <p>Chennai Koyambedu Bus Stand, about 15 km away.</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Chennai Egmore station, about 9 km away</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Chennai International Airport, about 12.2 km away</p></center></div>
          </div>:<>
            </>}
             {vehitime?<>
          </>:<div className="Travel">
            <div>
            <center><CiClock2 className="icon" />
          <p>October to May</p>
          </center></div>
            </div>}
             
            <div>
              {buttonComp}
            </div>
      
    </>
  )
}

export default Guindy


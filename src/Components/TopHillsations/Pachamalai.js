import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import './Common.css'
import { useState } from 'react';
import { useContext } from 'react';

const Pachamalai= () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="pachback">
      <center>
        <h1>Pachamalai</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Amidst the verdant landscape of north-eastern Tamil Nadu lies a world of wonder and magic, where the green hills embrace the azure sky and the misty breeze carries with it a sense of freedom and tranquillity. Welcome to the Pachamalai Hills, a mystical and awe-inspiring mountain range located a mere 80 kilometres from the charming town of Tiruchirappalli.
    </p>
    <br></br>
    <p>The very name of these hills speaks of the incredible beauty that they possess. Pachai, meaning green, and Malai, meaning hill, together convey the essence of the lush greenery that carpets the landscape as far as the eye can see. Spread over a vast area of around 5,200 square miles, these hills are a treasure trove of exquisite natural beauty, spanning elevations from 1,770 to 4,620 feet. From its mountain streams to its sweeping vistas, there is much to explore and discover in Pachamalai.</p>
        <br></br>
        <p>There are a plethora of attractions in Pachamalai that are sure to leave you spellbound. From glistening waterfalls to serene hiking paths, there is something for everyone. The Koraiyar Falls, Mangalam Aruvi Falls, and Mayil Oothu Falls are some of the most popular waterfalls in the area. The water cascades down in a magnificent display of nature's power, creating a mesmerising sight to behold. 
        </p>
        <br></br>
        <p>For those who want to take a break from the hustle and bustle of city life, Pachamalai is the perfect weekend getaway. Whether you want to simply relax and soak in the tranquil surroundings or indulge in adventure and exploration, Pachamalai has something to offer everyone. The Pachamalai-Trichy region is a popular destination for tourists looking to escape the heat and experience the magic of the hills.
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
            <p>Pachamalai Hills can be reached by road from Chennai, Bangalore, and other major cities in Tamil Nadu. You can take a bus from Tiruchirappalli, which is the nearest major city to Pachamalai Hills.</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Tiruchirappalli Junction Railway Station, about 105 km away.</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Tiruchirappalli International Airport, about 106 km away.</p></center></div>
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

export default Pachamalai


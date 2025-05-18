import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useState } from 'react';
import { useContext } from 'react';
import './Lake.css'
const Connor = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="kodailake">
      <center>
        <h1>Kodaikanal Lake</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>The fame of Kodaikanal lake or Kodai lake has spread across states and it has become one of the favourite photographic spots and movie locations, even in Bollywood. There are resorts and hotels available around the lake where you can sit and enjoy the tranquillity of the lake and the enticing landscape around it.
 
    </p>
    <br></br>
    <p>The star-shaped artificial lake, with a depth of 3 meters, was built in 1863 under the stewardship of the Collector of Madurai, Sir Vere Henry Levinge. Known as the heart of Kodaikanal, this lake has been a much sought-after location for Bollywood movies. It is an ideal place for you to unwind and get rejuvenated. People can enjoy boating in the lake, either in normal or luxury boats. There are also rowing and pedalling boats. The first boat  was brought to the lake from Tuticorin.  There is also a Kodaikanal Boat Club.</p>
        <br></br>
        <p>The lake is rich in a variety of flora and fauna with different species of fish and aquatic plants. Kurinji or Strobilanthes cynthiana, which blooms once in 12 years, is found in the catchment area of Kodai Lake. Flower shows in summer are yet another attraction of the place. People cycle or go on horse rides around the lake. Tourists also have the option of taking bicycles on rent. There is ample space for parking near the lake. There are also recreational sports activities for children near the lake.
        </p>
        <br></br>
        <p>Shopping enthusiasts can shop at the local vendor shops, including Tibetan shops. Home-made chocolates, hot tea, snacks, and dresses are available. There are no entry fees to the lake. You can visit the place between 6.00 am and 5.00 pm, but the evening hours would be an ideal time. People also enjoy fishing in the lake. If you have a membership in the Boat Club, you can enjoy swimming in Kodai lake. 
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
Frequent bus services are available from Madurai Aarappalayam, Batlagundu, Palani, Oddanchatram, Kodai Road, and Dindigul</p></center>
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

export default Connor


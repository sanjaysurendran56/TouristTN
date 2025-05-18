import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import './Common.css'
import { useState } from 'react';
import { useContext } from 'react';

const Ercaud = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="earback">
      <center>
        <h1>Ercaud</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Nestled in the Shevaroys range of hills, Yercaud opens up a paradise of sights and things to explore. The origin of the place name sums up the main attractions; yeri means lake and forest means kaadu.
    </p>
    <br></br>
    <p>Yercaud has a lovely charm about it. Explore the enamouring landscapes, go boating in the lake, discover new paths during trekking, roam around the plantations and orchard. Drop by the botanical garden and stroll along to find out innumerable species of orchids. A blend of attractions at Yercaud makes it a hugely popular tourist spot. Take a 28 km drive from Salem and you reach Yercaud. No points for guessing, you start at the Yercaud botanical garden. Bask in the beauty and fragrance of colourful flowers and a myriad of plant species. 
</p>
        <br></br>
        <p>You can't miss out the famous Orchidarium at Botanical survey of India. Marvel at the sheer number of orchid species on display. If you feel like going by the lakeside, book a boat ride and enjoy the placid water. Get the sprawling view of the lake at its best. Sit on the lush green lawns and relax yourself. Explore the farming potential of Yercaud and it prides itself as the producer of crops like coffee, orange, jackfruit, guava, black pepper, and cardamom. 
        </p>
        <br></br>
        <p>There is so much more to explore at Yercaud like  Lady's Seat, Shevaroy Temple, Anna Park, Bears Cave,, Pagoda Point, Kiliyur Falls, and Arthur Seat. Sounds great right, plan your trip. If possible, partake of the spirit of the summer festival held in May and have fun. Do visit the Anna park near the lake, the flower show here is famous so schedule your trip accordingly.
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
            <p>Salem Bus Station, about 32 km away

Regular bus services are available between Yercaud and Salem, which is connected to Chennai, Madurai, Tiruchirappalli, Tiruvannamalai, Coimbatore.

</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Salem Junction, about 35 km away.</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Coimbatore airport, about 190 km away</p></center></div>
          </div>:<>
            </>}
             {vehitime?<>
          </>:<div className="Travel">
            <div>
            <center><CiClock2 className="icon" />
          <p>October - June</p>
          </center></div>
            </div>}
             
            <div>
              {buttonComp}
            </div>
      
    </>
  )
}

export default Ercaud


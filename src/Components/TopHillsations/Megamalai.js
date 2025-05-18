import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import './Common.css'
import { useState } from 'react';
import { useContext } from 'react';

const Megamalai = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="megback">
      <center>
        <h1>Megamalai</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Marvel at the sky piercing mountains cloaked by clouds and carpeted by tea plantations at Meghamalai. A quiet hilly village where you get to experience the quaint nature and the simple village life. Tour the hamlet, make new friends, taste the local cuisine and savour the unique landscapes of Meghamalai.
    </p>
    <br></br>
    <p>Meghamalai in Tamil translates as Paccha Kumachi ( Green hills ). Once you reach here after the riveting drive along the 18 hairpin bends, you will know how aptly it is named. Fog seems to be a perennial presence here. Experience the magic as it glides over the hills, blanketing the tea plantations and greeny ranges. Untouched by the spate of buildings, Meghamalai dabbles in a special charm. The ever pleasant weather, the quiet air and the spectacular sights make this place one of the most favored destinations. Notable landmarks here include the wildlife sanctuary, Meghamalai waterfalls, Suruli waterfalls, dams, Maharaja Mettu view point, tea, cardamom plantations and Vellimalai. </p>
        <br></br>
        <p>Enjoy the breathtaking view of Cumbum valley from Manalar dam and the panoramic view of beautiful hamlets. Do visit the Highway point dam and Suruli theertham. Stroll along the mist laden landscapes and head to the tea estate, coffee plantations and spice gardens.
        <br></br></p>
        <p>Meghamalai falls is a visual treat and no matter what the season is, water gushes forth unabated. It drops down in two separate places from Surulii theertham which originates from the hills. You also get to spot wild animals like elephants, gaur and spotted deer. Keep your cameras ready as a beautiful shot is just around the corner. Head to the Silver mountain located at 1650 metres above the sea level. One of the most enchanting places here, it is blessed with natural beauty and greenery. 
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
            <p>Nehru Ji Bus Stand, Chinnamanur, about 51 km away</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Madurai Railway Station, about 119 km away</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Madurai Airport, about 103 km away</p></center></div>
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

export default Megamalai


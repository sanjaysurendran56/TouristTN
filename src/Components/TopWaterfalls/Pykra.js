import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useState } from 'react';
import { useContext } from 'react';
import './Falls.css'
const Connor = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="pykback">
      <center>
        <h1>Pykra Waterfalls</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Winding through the slopes of the Nilgiri Hills is the majestic river of Pykara. With its majestic waterfalls and pristine reservoir lake, Pykara reveals its true beauty during the monsoon and winter months. Located just 20 km from Ooty town, Pykara is a perfect getaway destination for honeymooners, backpackers and families.
    </p>
    <br></br>
    <p>Originating from the heights of Mukurthi Hills, the Pykara river cuts through the misty heights of the Nilgiris and navigates itself to the rolling green hills and valleys, creating some of the most picturesque views in Ooty. Revered by the locals as a sacred river, the untouched landscapes carved by the Pykara offer an enchanting experience to a soul in search of tranquillity. As it traverses the steep slopes, Pykara transforms itself into graceful waterfalls. The atmosphere, enriched with the sweet lullaby of Pykara falls and cool mist rolling on and off the river, makes it an ideal spot for trekking and camping. Removed from the fatigue and noise of urban life, Pykara waterfalls and its surrounding woods beckon you to enjoy a refreshing weekend getaway.</p>
        <br></br>
        <p>As it enters the gentler slopes of the Nilgiris, Pykara paints picturesque landscapes against the backdrop of the rolling green hills and valleys. These grassy hills are home to the Todas, a Dravidian ethnic group living in the Nilgiris. Pykara, in the backdrop of the Toda hamlet and their traditional dwellings offer the trekkers a pristine and idyllic scenery.
        </p>
        <br></br>
        <p>Just 2 km from the waterfalls, the rolling waters of the Pykara turn into a serene blue reservoir. The view of the lapping waters of the Pykara lake bordered by tall pine trees against the background of green misty hills of the Nilgiris is truly enthralling. The impeccable views and the everlasting misty breeze from the lake fill the atmosphere with romance, making it a popular honeymoon destination. The lake has one of the best boating facilities in Ooty, with various options made available through the boathouse run by the Tamil Nadu Tourism Development Corporation. With its serene atmosphere, enticing views and boating facilities, Pykara Lake is the perfect destination in Ooty to spend a day with your family.
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
            <p>Udhagamandalam Central Bus Stand, about 22 km away</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Coimbatore Railway Station, 108 km away</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Coimbatore international Airport, about 108 km away</p></center></div>
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


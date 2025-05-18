import React from 'react'
import { useState } from 'react';
import { MyContext } from "../Context/Context";
import { useContext } from 'react'; 
import './Toy.css'
import { CiClock2 } from "react-icons/ci";
import { FaBus } from "react-icons/fa"
import { FaTrainSubway } from "react-icons/fa6";        
import { MdFlight } from "react-icons/md";  
const ToyTrain = () => {
    const[a,b]=useState(true);
          const[vehitime,update]=useState(true);
          const{inputComp}=useContext(MyContext);
          const{buttonComp}=useContext(MyContext);
  return (
    <>
    {inputComp}
    <div className="toy">
      <center>
        <h1 className='dh'>Ooty Toytarin</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>Imagine a picturesque landscape marked by green, rolling hills, mountains with flowing mists, and a metre-gauge railway line running through this tranquil countryside with a quaint blue train slowly chugging away. How often does one get a chance to hitch a trip on such a train traversing one of the most idyllic scenery? There is no better way to explore the rolling hills and pine forests of Ooty hill station than by taking the Nilgiri Mountain Railway – the blue toy train as it is fondly called. 
    </p>
    <br></br>
    <p>The railway line constructed in 1908 winds through the enchanting Ooty landscape covering a distance of 46 km with stations such as Mettupalayam, Wellington, Arvankadu, Ketti, Lovedale, Coonoor and Udagamandalam/Ooty(UAM). Recognizing the historical importance and heritage, Nilgiri Mountain Railway was declared a UNESCO World Heritage Site in 2005. The 4.5-hour leisurely train journey passes through 16 tunnels, 250 bridges and 208 curves while providing some impeccable views of places that are otherwise inaccessible. The train climbs an altitude of 2200 m above sea level to reach Ooty from Mettupalayam which is 330 m above the sea level.
    </p>
        <br></br>
        <p>One pair of trains operate services on this picturesque route offering first class, second class and unreserved seats.  Tickets are always in high demand as Ooty is a popular tourist destination. The schedule can be selected and the bookings made through the website of Indian Railways. Due to high demand tickets often need to be reserved two to three months in advance.</p>
        <br></br>
        <p>As an icon of the Queen of Hills herself and immortalised through countless movies, the little blue toy train is not an item to be missed  on the itinerary of any traveller to Tamil Nadu.
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
            <p>Udhagamandalam Central Bus Stand.</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Coimbatore Railway Station, about 87 km away. Another way to reach Ooty is to take the Toy Train from Mettupalayam via Coonoor.</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Coimbatore International Airport, about 88 km away.</p></center></div>
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

export default ToyTrain

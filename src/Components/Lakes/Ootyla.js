import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useState } from 'react';
import { useContext } from 'react';
import'./Lake.css';

const Connor = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="lakeinooty">
      <center>
        <h1>OotyLake</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>The picturesque Ooty Lake, also known as the Ooty boat house, is a much sought-after tourist attraction located in the midst of serene greenery. The Ooty Lake is an artificially constructed lake, built by John Sullivan in 1824.

    </p>
    <br></br>
    <p>Surrounded by the majestically-tall eucalyptus trees and dotted with green bushes along the shores, the Ooty Lake is an impressive spot in Nilgiris district. The Lake, spanning over 65 acres, was originally constructed for fishing.  It was later transformed into a tourist park when the Tamil Nadu Tourism Development Corporation took over it in 1973. </p>
        <br></br>
        <p>There are many fun activities that tourists can indulge in when they are at the Ooty Lake. Cycles are available for rent to ride around the Lake. Boating is another attraction.  A tranquil ride through the waters is an attractive pastime as it lets one take in the entire beauty of the Lake. Paddle boat-, motor boat- and rowing boat services are also available. The ride offers a view of the serene greenery around and also of the distant hills.  
        </p>
        <br></br>
        <p>There is also a garden, a mini train and an amusement park nearby. The amusement park has fun activities like a haunted house, a mirror house and horse riding, and ensures an exciting experience for children.
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
            <p>Ooty is well connected by various national and state highways. You could take buses from neighbouring districts or drive up the winding roads, which is an experience in itself.</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Another way to reach Ooty is to take the Toy Train from Mettupalayam via Coonoor. Coimbatore Railway Station is located about 87 km away.</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Coimbatore International Airport, about 88 km away</p></center></div>
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


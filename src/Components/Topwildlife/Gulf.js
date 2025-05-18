import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useState } from 'react';
import { useContext } from 'react';
import './Wild.css';

const Connor = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="gulfback">
      <center>
        <h1>Gulf of Mannar Marine National Park</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>There’s a world under the ocean, so breathtaking and so vivid; one that needs all of us to step up in order to be protected. Gulf of Mannar Marine National Park is all about preserving the rich biodiversity of the deep blue sea.
    </p>
    <br></br>
    <p>The Coromandel coast in India is one of the most bewitching coastal areas in the world. There’s a lot to see here and a whole lot more to dive into and experience for yourself. Of the lot, the Gulf of Mannar Marine National Park has a very significant position. The first marine biosphere reserve in South Asia, the Mannar marine park is also one of the richest regions on Earth in terms of biodiversity. 
</p>
        <br></br>
        <p>Comprising 21 islands in total, the Mannar marine park includes estuaries, beaches and mudflats that make this region amazingly beautiful. Also a part of this biosphere are marine components including algae communities, sea grasses, coral reefs, salt marshes and mangroves. Spread across an area of 560 sq.kms., the biosphere covers the coasts of Thoothukudi, Tirunelveli, Rameswaram and Kanyakumari. Home to an affluent diversity of aquatic plants and animals, the national park has identified the presence of around 3600 plant and animal species. These even include endangered species including the sea cow and 6 mangrove species. One can find five species of turtles and several other marine species like dolphins, whales, sea cucumber and dugongs. 

        </p>
        <br></br>
        <p>The national park also includes 11 species of seagrass and 117 species of hard coral. The coral reefs in this area are stunningly beautiful and have often been referred to as the ‘underwater tropical rainforest’. Given all this, there is no wonder this area is also a favourite among regional and international travellers. Glass bottom boats are employed to take tourists down to watch these breathtaking visuals.
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
            <p>Public access inside the Park is allowed only through glass-bottomed boat rides, which is available at Mandapam and Rameswaram.</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Madurai International Airport, about 150 km away.</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Madurai International Airport, about 150 km away.</p></center></div>
          </div>:<>
            </>}
             {vehitime?<>
          </>:<div className="Travel">
            <div>
            <center><CiClock2 className="icon" />
          <p>October to March</p>
          </center></div>
            </div>}
             
            <div>
              {buttonComp}
            </div>
      
    </>
  )
}

export default Connor


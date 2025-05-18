import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useState } from 'react';
import { useContext } from 'react';
import'./Wild.css';

const Connor = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="anaback">
      <center>
        <h1>Anaimalai</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>What a majestic sight it will be, as you go deep into the jungle, hearing the mumbling growl of one of the most beautiful beasts on the planet; and to see it walk past you, like the boss it really is.
    </p>
    <br></br>
    <p>Every forest has a soul. As you delve deep into it, what will greet you are mysterious trails and surprising tales. That is why you need to go deep into the heart and soul of Indira Gandhi National Sanctuary, locally known as Anamalai Tiger Reserve – a bewildering strip of splendid forest land that will fascinate you beyond limits. Here, you get to enjoy the opulence of Nature and the compelling beauty of wildlife, all in a single locale. Also known as Indira Gandhi Wildlife Sanctuary and National Park to honour the visit of the former Prime Minister of India Indira Gandhi, the Anamalai Sanctuary is situated in the Anamalai Hills of the Western Ghats. </p>
        <br></br>
        <p>As the name suggests, Anamalai Tiger Reserve is primarily a sanctuary for the preservation of tigers. However, the area is home to a wide variety of fauna and flora that attract tourists from far and wide. Some of the animal species excluding the Bengal Tiger here include Indian Elephant, Indian Leopard, Nilgiri Tahr, Lion-tailed Macaque, Gaur, Nilgiri Langur, Sambar Deer, Sloth Bear Malabar Spiny Dormouse and so on. The locale also hosts a number of bird species like Cormorant, Teal, Duck, Quail, Jungle Fowl, Hornbill, Asian Barbet, Hawk Eagle, Kingfisher and so goes the extensive list. Apart from these, amphibians and reptiles like snakes, lizards, frogs, turtles etc. are also commonly found in this region. Also, over 2000 plant species have been identified here, making the Reserve truly a blooming wonder. 

        </p>
        <br></br>
        <p>All this makes Anamalai one of the must-visit wildlife destinations in South India.
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
            <p>Pollachi Bus Stand, about 24 km away from Animal Tiger Reserve Entry Check Post.</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Pollachi Railway Station, about 25 km away from Anamalai Tiger Reserve Entry Check Post.</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Coimbatore International Airport, Peelamedu about 75 km away.</p></center></div>
          </div>:<>
            </>}
             {vehitime?<>
          </>:<div className="Travel">
            <div>
            <center><CiClock2 className="icon" />
          <p>December to April is considered the ideal time to visit Indira Gandhi National Sanctuary.</p>
          </center></div>
            </div>}
             
            <div>
              {buttonComp}
            </div>
      
    </>
  )
}

export default Connor


import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import { useState } from 'react';
import { useContext } from 'react';

const Connor = () => {
     const[a,b]=useState(true);
        const[vehitime,update]=useState(true);
        const{inputComp}=useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
  return (
    <>
 {inputComp}
    <div className="kutback">
      <center>
        <h1>Kutralam</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>You think of visiting a waterfall and you end up infront of nine magnificent walls, magical, right. Coutrallam waterfalls is a beautiful destination for the perfect getaway. 
    </p>
    <br></br>
    <p>Fed by the River Chittra, Manimutharu, Pachaiyar and Tamirabarani the waterfall cascades over 60m-92 m. Main Falls (Peraruvi), Small Falls (Chittaruvi), Chembakadevi (Shenbaga) Falls, Honey Falls (Thenaruvi), Five Falls (Aintharuvi), Tiger Falls (Puliaruvi), Old Coutrallam Falls (Pazhaya Courtallam), New Falls (Puthu Aruvi), Fruit Garden Falls or Orchard Falls (Pazhathotta Arvui) are the nine falls and each one offers a different experience in terms of volume and height.
</p>
        <br></br>
        <p>At a distance of 4 km from the main fall lies the honey falls. The enamouring view makes it the most appealing sight. You see water plummeting down from three sides. In case you have children with you, Tiger falls is the best place to be. Water spreads out in five directions at five falls. The odd falls is located at a distance of 10 km from the town. At a height of 200 feet, this is one of the least crowded falls.
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
            <p>Bus Services are available from Tirunelveli to Tenkasi and there after to Courtalam.
Courtalam Bus Station, about 1 km away
</p></center>
            </div>
            <div> <center><FaTrainSubway className="icon" />
            <p>Tenkasi Railway station, about 15 km away.</p></center></div>
            <div> <center><MdFlight className="icon" />
            <p>Thoothukudi Airport, about 12 km away</p></center></div>
          </div>:<>
            </>}
             {vehitime?<>
          </>:<div className="Travel">
            <div>
            <center><CiClock2 className="icon" />
          <p>Visit Coutralam during winter season to get the best experience. The best months to visit are July, September, October, November, January, February and March.</p>
          </center></div>
            </div>}
             
            <div>
              {buttonComp}
            </div>
      
    </>
  )
}

export default Connor


import React, { useContext } from 'react'
import { MyContext } from '../Context/Context'
import './Thanjai.css'
import { useState } from 'react'
import Userreview from '../Userreview/Userreview'
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";

const Thanjai = () => {
  const[a,b]=useState(true);
    const[vehitime,update]=useState(true);
    const{inputComp}=useContext(MyContext);
    const{buttonComp}=useContext(MyContext);
  return (
    <>
      {inputComp}
      <div className="backtnj">
  <center>
    <h1>Thanjai Periya Kovil</h1>
  </center>
</div>
 <div className="parakanya">
 <div className="aboutk">
<p>One of the largest temples in India, the Brihadeeswara Temple also known as Peruvudaiyar Kovil is located in Thanjavur. Dedicate to Lord Shiva represented as a huge ‘Lingam’, the temple was built around 1010 AD by the Chola king Rajaraja Chola I. Considered as one of the three ‘Great Living Chola Temples’ along with the Gangaikondacholeeswaram Temple and Airavastesvara Temple, the complex is also listed as a part of the UNESCO World Heritage Sites. 
</p>
<br></br>
<p>One of the main attractions of the temple is a big statue of Nandi, the sacred bull of Lord Shiva. 13 ft high and 16 ft wide, the statue is sculpted out of a single rock. Fortified walls rich in elaborate rock art works surround the temple and give a grand look to the entire complex. The main temple tower is 216 ft high and the tallest of its kind in the world. The complete structure of the temple is made out of granite. The main ‘Gopurams’ or gateways to the temple are splendid structures with detailed sculptures.  </p>
    <br></br>
    <p>
    The temple’s inscriptions and frescoes narrate the tale of the rise and decline of the city’s fortunes. The Shiva lingam or the idol is covered by the tower and is built with stones that are bonded without the use of mortar. Yet another wonder can be seen above - the stone at the top which weighs nearly 80 tons.   
    </p>
    <br></br>
    <p>The temple stands as a fitting example of the might and power of the Chola dynasty that once ruled over the region. It is believed that the construction of the massive temple complex took only 7 years for completion, which is a huge accomplishment considering the scale of the sculptures, art and the complex itself.
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
        <p>Thanjavur Bus Stand, about 1 km away.</p></center>
        </div>
        <div> <center><FaTrainSubway className="icon" />
        <p>Thanjavur Junction Railway Station, about 1.5 km away.</p></center></div>
        <div> <center><MdFlight className="icon" />
        <p>Tiruchirapalli International Airport, about 61 km away.</p></center></div>
      </div>:<>
        </>}
         {vehitime?<>
      </>:<div className="Travel">
        <div>
        <center><CiClock2 className="icon" />
      <p>November to February.</p>
      </center></div>
        </div>}
        <div>
          {buttonComp}
        </div>
    </>
  )
}

export default Thanjai

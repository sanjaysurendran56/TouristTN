import React, { useContext, useState } from "react";
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import './Kanya.css'
import Userreview from "../Userreview/Userreview";
const Kanya = () => {
  const[a,b]=useState(true);
  const[vehitime,update]=useState(true);
  const{inputComp}=useContext(MyContext);
  const{buttonComp}=useContext(MyContext);
  return (
    <>
      {inputComp}
<div className="backkanya">
  <center>
    <h1>KanyaKumari</h1>
  </center>
</div>
 <div className="parakanya">
 <div className="aboutk">
<p>Kanniyakumari is a special destination in many different ways. It is the southernmost tip of the mainland of India. Three major water bodies – the Arabian Sea, Bay of Bengal and the Indian Ocean – converge right here in Kanniyakumari. Such a geographically blessed destination is rare and these features make Kanniyakumari  one of the most visited places in India annually. 
</p>
<br></br>
<p>The place gets its name from the Hindu goddess Devi Kanniyakumari, who is considered to be the sister of Lord Krishna. When the Dutch East India Company conquered Portuguese Ceylon from the Portuguese East Indies, the name Kanniyakumari was shortened to Comorin. Eventually during the British regime in India, the destination began to be called Cape Comorin. Later, the Government of India renamed it as Kanniyakumari. </p>
    <br></br>
    <p>What Kanniyakumari offers to a passionate traveller are many spectacular joys. Of course being a coastal region Kanniyakumari has great beaches that are perfect to spend vacations at. Then there are spectacular monuments that remind you about the rich cultural heritage that Kanniyakumari has to offer. Then comes various temples, churches, waterfalls – all adding up to the stunning experiences that make Kanniyakumari a must-explore destination. Kanniyakumari is the only spot in India from where you can watch the spectacle of the sunset and the moonrise happening simultaneously on Full Moon days. It’s even grander during the day of ‘Chithra Pournami’ when the Sun and the Moon will appear facing each other in the same horizon.  
    </p>
    <br></br>
    <p>Two popular attractions of the region are the Vivekananda Rock Memorial and the Statue of Thiruvalluvar located side by side in the sea.
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
        <p>Buses ply from major cities like Thiruvananthapuram, Madurai, Coimbatore, Puducherry and Chennai to Kanyakumari Bus Stand, Puthugramam.
        Vadasery Bus Stand, Nagercoil, about 21 km away.</p></center>
        </div>
        <div> <center><FaTrainSubway className="icon" />
        <p>Kanyakumari Railway Station.
        Nagercoil Junction Railway Station, 17 km away.</p></center></div>
        <div> <center><MdFlight className="icon" />
        <p>The nearest International airport is Thiruvananthapuram International Airport which is 76 km from Kanyakumari.
        Madurai International Airport, about 240 km away.</p></center></div>
      </div>:<>
        </>}
         {vehitime?<>
      </>:<div className="Travel">
        <div>
        <center><CiClock2 className="icon" />
      <p>The perfect time to experience Kanyakumari is from November to March as the weather would be cool and pleasant. Summers can be really hot as the destination has a tropical climate.</p>
      </center></div>
        </div>}
         <center>
              <div className='defaultreview'>
              <h4>What people Think About <span>KanyaKumari</span></h4>
              </div>
              </center>
        <Userreview />
        <div>
          {buttonComp}
        </div>
    </>
  );
};

export default Kanya;

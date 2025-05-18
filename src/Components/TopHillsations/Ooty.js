import React, { useContext, useState } from "react";
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MyContext } from "../Context/Context";
import './Common.css'
const Ooty = () => {
    const[a,b]=useState(true);
    const[vehitime,update]=useState(true);
    const{inputComp}=useContext(MyContext);
    const{buttonComp}=useContext(MyContext);

  return (
    <>
    {inputComp}
    <div className="ootback">
      <center>
        <h1>Ooty</h1>
      </center>
    </div>
     <div className="parakanya">
     <div className="aboutk">
    <p>She is charming, she is classy, she is unique – she is the Queen of Hill Stations in India. Udhagamandalam, popularly known as Ooty is a hill station that will surely mesmerise you with its beguiling beauty. 
    </p>
    <br></br>
    <p>A chain of misty hills spread across a lush green carpet – with plenty to see, enjoy and experience. Ooty is much more than a visitor’s paradise. It lends a piece of itself to its guests that they will be thrilled to take back. One of the most beautiful hill stations in India, Ooty nestles in the Nilgiri district of Tamil Nadu. An erstwhile summer resort of the British Raj in India, Ooty has transformed over the years into one of the most sought-after tourism destinations in Tamil Nadu.  </p>
        <br></br>
        <p>With a cool and soothing climate almost all year round, Ooty welcomes tourists from far and wide. It’s not just about the mountains and hills, Ooty offers much more to discerning travellers who drive up the winding roads to reach the pinnacle. Lakes, gardens, parks, peaks, waterfalls and simply amazing accommodation options. No wonder Ooty is called the 'Switzerland of India', of such grandeur is the scenic beauty the destination is so well acclaimed for. If you would love to relax over a cup of tea, sitting back and gazing at the vastness of nature, Ooty is indeed the place to be. Besides that, the Nilgiri biosphere is rich in flora and fauna, allowing you to escape into the depths of mystic jungles and explore once-in-a-lifetime experiences. 
        </p>
        <br></br>
        <p>Also, you just can’t afford to miss the Toy Train ride from Mettupalayam to Ooty, which is the only daily operational meter-gauge, rack railway in India, providing you with mesmerising views of the Nilgiris.
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
      );
    };
export default Ooty

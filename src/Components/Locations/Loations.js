import React from 'react'
import './Locations.css'
import image1 from '../../assest/Images/Bio.png'
import image2 from '../../assest/Images/Nature.png'
import image3 from '../../assest/Images/Liveli.png'
import image4 from '../../assest/Images/lowcarbon.png'
const Loations = () => {
  return (
    <>
     <br></br>
        <center className='trail'>
            <h1>Beyond The Trail</h1>
        </center>
        <div className='trailtips'>
            <div>
                <center>
                <br></br>
                    <img src={image1}></img>
                    <br></br>
                    <br></br>
                    <h3>Biodiversity Conservation</h3>
                </center>
            </div>
            <div>
            <center>
            <br></br>
                    <img src={image2}></img>
                    <br></br>
                    <br></br>
                    <h3>Nature Education</h3>
                </center>
            </div>
            <div>
            <center>
                <br></br>
                    <img src={image3}></img>
                    <br></br>
                    <br></br>
                    <h3>Livelihood Improvement</h3>
                </center>
            </div>
            <div>
            <center>
            <br></br>
                    <img src={image4}></img>
                    <br></br>
                    <br></br>
                    <h3>Low Carbon</h3>
                </center>
            </div>
        </div>
    </>
  )
}

export default Loations

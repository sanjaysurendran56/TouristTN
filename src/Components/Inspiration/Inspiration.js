import React from 'react'
import './Inspiration.css'
import { SiComma } from "react-icons/si";
import image1 from '../../assest/Images/jove.webp'
const Inspiration = () => {
  return (
    <>
    <div className='inspire'>
        <center>
            <h1>Get Inspiration</h1>
            <br></br>
            <h1><SiComma /><SiComma /></h1>
            <br></br>
            <br></br>
        <div className='quotes'>
        <h2>"Traveling makes you realize how little you actually need to be happy. It teaches you to live in the moment and cherish experiences over things."</h2>
    </div>

    <div>
      <br></br>
      <br></br>
      <h2>Alexis Rose Alford</h2>
      <p>American adventure traveler and YouTuber.</p>
      <div className='alex'>
      <img src={image1}></img>
      </div>
      <br></br>
    </div>
    </center>
    </div>
    </>
  )
}

export default Inspiration

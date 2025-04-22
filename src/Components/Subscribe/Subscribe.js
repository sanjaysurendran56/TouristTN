import React from 'react'
import './Subscribe.css'
import Button from 'react-bootstrap/Button';
import { FaTelegramPlane } from "react-icons/fa";
const Subscribe = () => {
  return (
    <>
    <div className='subs'>
        <center>
            <h3>Subscribe Now</h3>
            <h1>Get the Latest News</h1>
            </center>
            <div className='main'>
              <input className='name' placeholder='Your name'></input>
              <input className='email' placeholder=' Your Mail'></input>
              <Button className="butto" variant="primary"><FaTelegramPlane /></Button>
            </div>
    </div>
    </>
  )
}

export default Subscribe

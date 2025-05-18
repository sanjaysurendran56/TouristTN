import React, { useState } from 'react'
import './Subscribe.css'
import Button from 'react-bootstrap/Button';
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from 'react-toastify';

const Subscribe = () => {
  const[namemail,setmail]=useState({name:'',email:''});
  const handlesubmit=(event)=>{
     const { name, value } = event.target;
    setmail((current)=>(
      {
        ...current,
        [name]:value
      }
    ))
  }
  console.log(namemail);
  const toasti=()=>{
    if(namemail.name && namemail.email){
      toast.success(`Thank You for subscribe,${namemail.name}!`,{position:"top-center",autoClose:2000})
    }
    else{
      toast.error("Please fill all the details",{position:"top-center",autoClose:2000})
    }
  }
  return (
    <>
    <div className='subs'>
        <center>
            <h3>Subscribe Now</h3>
            <h1>Get the Latest News</h1>
            </center>
            <div className='main'>
              <input className='name' placeholder='Your name' onChange={handlesubmit} name='name' value={namemail.name} required></input>
              <input className='email' placeholder=' Your Mail' onChange={handlesubmit} name="email" value={namemail.email} required></input>
              <Button className="butto" variant="primary" onClick={()=>toasti()}><FaTelegramPlane /></Button>
            </div>
    </div>
    </>
  )
}

export default Subscribe

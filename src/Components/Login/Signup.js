import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router'
import './Login.css'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { Mycontext2 } from '../../App'
 
const Signup = () => {
  const navi=useNavigate();
 
  const{setlogin}=useContext(Mycontext2);
    const[details,getdetails]=useState({mail:'',password:''})
      const handlesubmit=(event)=>{
        const{name,value}=event.target;
        getdetails((current)=>({
          ...current,
    [name]:value,
        }))
      }
      const subtofirebase=async(event)=>{
     event.preventDefault();
     try {
      await signInWithEmailAndPassword(auth, details.mail, details.password);
      
      toast.success(`Welcome Back!${details.mail}`,{ position: "top-center", autoClose: 3000 });
    
      setTimeout(() => {
        navi('/Virtual');
      }, 2000); // navigate after 3 seconds
      setlogin(true);
    } 
    catch (error) {
      toast.error(error.message, { position: "top-center", autoClose: 3000 });
    }
    

      }
  return (
    <>
    <form onSubmit={subtofirebase}>
       <div className='logone'>
        <div className='logtwo'>
          <h1>Login</h1>
        <input type='mail' onChange={handlesubmit} name="mail" placeholder='Email' value={details.mail}></input><br></br><br></br>
          <input type='password'  onChange={handlesubmit} name="password" placeholder='Password' value={details.password}></input>
          <br></br> 
          <Button variant="primary" type="submit">Login</Button>
          <br></br>
          <br></br>
          <p>
            Dont have an account?<Link className='linklog' to='/login'>Signup</Link>
          </p>
        </div>
        </div>
        </form>
    </>
  )
}

export default Signup

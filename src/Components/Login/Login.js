import React, { useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import { auth } from './Firebase';
import { database } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import{setDoc,doc} from "firebase/firestore"
import { toast } from 'react-toastify';
import { Link } from 'react-router';
const Login = () => {
  const [details, getdetails] = useState({ username: '', mail: '', password: '' });
  const handlesubmit = (event) => {
    const { name, value } = event.target;
    getdetails((current) => ({
      ...current,
      [name]: value,
    }));
  };
  const Firebase = async (event) => {
    event.preventDefault(); // prevents page reload
    try {
      await createUserWithEmailAndPassword(auth, details.mail, details.password);
      const user = auth.currentUser;
      console.log(user); // shows the newly created user
      console.log("Success");
  
      if (user) {
        await setDoc(doc(database, "Userdetails", user.uid), {
          mail: user.email,
          pass:details.password,
          name: details.username,
        });
      }
       toast.success("Signed Successfully",{position:"top-center",autoClose:2000})
    }
     catch (error) {
      console.log(error.message);
      toast.error(error.message,{position:"top-center",autoClose:2000})
    }
  };
  return (
    <>
    <form onSubmit={Firebase}>
      <div className='logone'>
        <div className='logtwo'>
          <h1>Sign Up</h1>
          <input
            type='text'
            placeholder='Name'
            onChange={handlesubmit}
            name="username"
            value={details.username} required
          /><br /><br />
          <input
            type='mail'
            placeholder='Email'
            onChange={handlesubmit}
            name="mail"
            value={details.mail}
          /><br /><br />

          <input
            type='password'
            placeholder='Password'
            onChange={handlesubmit}
            name="password"
            value={details.password}
          />
          {details.password&&details.password.length<6?<p style={{color:'white'}}>Password Must contain aleast 6 characters</p>:<br></br>}
          <Button variant="primary" type="submit">Sign Up</Button>
           <p>Already Registered?<Link className='linklog' to='/signup'>Login</Link></p>
        </div>
      </div>
      </form>
    </>
  );
};

export default Login;

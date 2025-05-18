import React, { useContext, useState } from 'react'
import { MyContext } from '../Context/Context'
import Alert from 'react-bootstrap/Alert';
import './Virtual.css'
import image1 from '../../assest/Images/Virtual Tnj.jpg'
import image2 from '../../assest/Images/Virtaul maha.jpg'
import image3 from '../../assest/Images/virtaul3.jpg'
import image4 from '../../assest/Images/virtaul4.jpg'
import image5 from '../../assest/Images/virtual5.jpg'
import { MdNotificationImportant } from "react-icons/md";
import { useNavigate } from 'react-router';
import { Mycontext2 } from '../../App';
const Virtual = () => {
  const { inputComp } = useContext(MyContext);
  const{logins}=useContext(Mycontext2);
  const images = [
    { srce: image1, name: "THANJAVUR - BIG TEMPLE Virtual Tour"},
    { srce: image2, name: "MAMALLAPURAM Virtual Tour" },
    { srce: image3, name: "AIRAVATESWARA TEMPLE Virtual Tour" },
    { srce: image4, name: "GANGAIKONDA CHOLAPURAM Virtual Tour" },
    { srce: image5, name: "NILGIRI MOUNTAIN RAILWAY Virtual Tour" },
  ];
  const navi=useNavigate();
  const log=()=>{
    navi('/Signup');
  }
  return (
    <>
      {inputComp}
      <center>
        <h1>UNESCO</h1>
      </center>
      {logins?<></>:
      <div style={{ maxWidth: '400px', margin: '0 auto'}}>
        <Alert variant="danger">
          Please! Login to see the places in your Home! Click here to{' '}
          <Alert.Link href="#" onClick={() =>log()}>
            Login
          </Alert.Link>
        </Alert>
      </div>
}
<div className="parent" style={logins? { filter: "blur(0px)" } : {}}>
        {images.map((vir, idx) => (
          <div className='child' key={idx}>
            <img src={vir.srce} alt={vir.name} />
            <p>{vir.name}</p>
            <div className='child1'>
              <p><MdNotificationImportant /> World Heritage site</p>
            </div>
          </div>
        ))}
      </div>
      <div className='link-section' style={logins? { filter: "blur(0px)" } : {filter: "blur(2px)"}}>
  <h2 style={{ textAlign: "center", marginTop: "30px" }}>Explore Virtual Tours:</h2>
  <div className='link-container'>
    <a href='https://www.tamilnadutourism.tn.gov.in/virtualtour-pkg/thanjavur/index.html' target='_blank' rel='noopener noreferrer'>Thanjai Periya Kovil</a>
    <a href='https://www.tamilnadutourism.tn.gov.in/virtualtour-pkg/mamallapuram/index.html' target='_blank' rel='noopener noreferrer'>Mahabalipuram</a>
    <a href='https://www.tamilnadutourism.tn.gov.in/virtualtour-pkg/darasuram/index.html' target='_blank' rel='noopener noreferrer'>Darasuram</a>
    <a href='https://www.tamilnadutourism.tn.gov.in/virtualtour-pkg/gangaikondacholapuram/index.html' target='_blank' rel='noopener noreferrer'>Gangaikondacholapuram</a>
    <a href='https://www.tamilnadutourism.tn.gov.in/virtualtour-pkg/nilgirimountainailway/index.html' target='_blank' rel='noopener noreferrer'>Nilgiri Mountain Railway</a>
  </div>
</div>

    </>
  );
};

export default Virtual;

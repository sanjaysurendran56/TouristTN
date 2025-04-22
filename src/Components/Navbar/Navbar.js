import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router';
import Image2 from '../../assest/Images/Thiruvallu.webp'
import Image3 from '../../assest/Images/Toytrain.webp'
import Image4 from '../../assest/Images/Tnjtemple.webp'
import Image5 from '../../assest/Images/chennai.webp'
import Image0 from '../../assest/Images/Rockfort.webp'
import Image6 from '../../assest/Images/Dhanushkodi.webp'
import './Nav.css'
import Home from '../../Pages/Home/Home';
const Navsi = () => {
  const [line, upadteline] = useState("None");
  const navi=useNavigate();
  const kanyakumari=()=>{
    navi('/Kanyakumari');
  }
  const Tnj=()=>{
    navi('/ThanjaiPeriyakovil');
  }
  const vir=()=>{
    navi('/Virtual')
  }
  const marina=()=>{
    navi('/Marina')
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3" id="top">
        <Container fluid>
          <Navbar.Brand href="#" id='name'>Explore TamilNadu</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
             <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Explore TamilNadu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5" id='ones'>
                <li  onClick={() => upadteline("Home")} className={line === "Home" ? "navact" : ""}>Home</li>
                <br></br>
                <li  onClick={() => upadteline("Destination")} className={line === "Destination" ? "navact" : ""}>Destination</li>
                <br></br>
                <li  onClick={() => {upadteline("About Us");vir();}}
 className={line === "About Us" ? "navact" : ""}>Virtual Tour</li>
                <br></br>
                <li  onClick={() => upadteline("Virtual")} className={line === "Virtual" ? "navact" : ""}>Add Review</li>
                <br></br>
                <li  onClick={() => upadteline("Contact")} className={line === "Contact" ? "navact" : ""}>Get Weather</li>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    <Carousel fade>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image0}
          alt="Zero slide"
        />
        <Carousel.Caption>
          <div className='slide'>
          <center>
          <h1>Welcome To TamilNadu</h1>
          <h2>Step into Tamil Nadu, where every journey unfolds a new story!</h2>
          </center>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='sliderhide'>
          <center>
          <h1>See India's first sea glass bridge.</h1>
          <h2>The Thiruvalluvar Statue in Kanniyakumari is not just a splendid work of art, it is a masterpiece for generations.</h2>
          <Button className="butt" variant="warning" onClick={()=>kanyakumari()}>Explore More<FaArrowRight /></Button>
          </center>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image4}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className='sliderhide'>
        <center>
          <h1>Explore the grandeur of Thanjai Periya Kovil.</h1>
          <h2>Thanjai Periya Kovil is not just a monumental marvel, it is a timeless masterpiece of Chola architecture that inspires awe for generations.</h2>
          <Button className="butt" variant="warning"  onClick={()=>Tnj()}>Explore More<FaArrowRight /></Button>
          </center>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image5}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className='sliderhide'>
        <center>
         <h1>Unwind at the iconic Marina Beach in Chennai.</h1>
         <h2>Explore Marina Beach, India’s longest urban shore, with golden sands, vibrant street life, and stunning sunsets in Chennai.</h2>
          <Button className="butt" variant="warning" onClick={()=>marina()}>Explore More<FaArrowRight /></Button>
          </center>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image6}
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <div className='sliderhide'>
        <center>
          <h1>Visit the last road of India at Dhanushkodi.</h1>
          <h2>Explore the serene beaches and rich history of this mystical ghost town at the edge of the Indian subcontinent.</h2>
          <Button className="butt" variant="warning">Explore More<FaArrowRight /></Button>
          </center>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Fifth slide"
        />
        <Carousel.Caption>
        <div className='sliderhide'>
        <center>
          <h1>Ride the iconic Ooty Toy Train through the Nilgiri Hills.</h1>
          <h2>Experience the charm of a scenic journey through lush forests, misty mountains, and picturesque landscapes on this UNESCO-listed heritage train.</h2>
          <Button className="butt" variant="warning">Explore More<FaArrowRight /></Button>
          </center>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='welcome'>
    <center>
<h1>Welcome to <span>Tamil Nadu!</span></h1>
<p>
"Discover Tamil Nadu, where every step reveals a timeless tale and every moment is a celebration of culture!"
</p>
<h1><span>Tamil Nadu</span> - where stories never end.</h1>
    </center>
    </div>
    <Home/>
    </>
  )
};
export default Navsi;

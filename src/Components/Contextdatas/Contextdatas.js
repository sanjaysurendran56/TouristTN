import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Subscribe from '../Subscribe/Subscribe';
import Last from '../Last/Last';
export const A = () => {
    const [line, upadteline] = useState("None");
    return(
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
                <li  onClick={() => upadteline("About Us")} className={line === "About Us" ? "navact" : ""}>Virtual Tour</li>
                <br></br>
                <li  onClick={() => upadteline("Virtual")} className={line === "Virtual" ? "navact" : ""}>Add Review</li>
                <br></br>
                <li  onClick={() => upadteline("Contact")} className={line === "Contact" ? "navact" : ""}>Get Weather</li>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
</>
    )
  };
  export const B = () => {
    return(
<>
<Subscribe />
<Last />
</>
    )
    
  };
  
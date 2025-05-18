import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../Context/Context'
import './AddReview.css'
import image1 from '../../assest/Images/rev1.png'
import image2 from '../../assest/Images/rev2.png'
import image3 from '../../assest/Images/rev3.png'
import Button from 'react-bootstrap/Button';
import { FiPlusCircle } from "react-icons/fi";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddReview = () => {
    const { inputComp } = useContext(MyContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {inputComp}
      <div className='Hii'>
        <center>
          <div className='revdiv'>
            <h1>Write a review, make someone's trip</h1>
            <br />
            <br />
            <h2>Stories like yours are what helps travellers have better trips. Share your experience and help out a fellow traveller!</h2>
          </div>
        </center>
        <br />
        <br />
        <div className='revflex'>
          <div><img src={image1} alt='review1' /></div>
          <div><img src={image2} alt='review2' /></div>
          <div><img src={image3} alt='review3' /></div>
        </div>
      </div>

      <div className='revman'>
        <h1>Why Review?</h1>
        <h2>Your opinion helps others make better choices.</h2>
        <h1>
          <Button variant="warning" onClick={handleShow}>
            Add Review <FiPlusCircle className='i' />
          </Button>
        </h1>
      </div>

      {/* Modal Component */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="Your name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
          <br></br>
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Place Name</InputGroup.Text>
        <Form.Control
          placeholder="Where you visited"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
          <textarea placeholder='Write your review here'>
          </textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddReview

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
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <center>
            <Col>
              <input className="namelog" type="text" placeholder='Name'></input>
            </Col>
            </center>
            </Row>
            <br></br>
            <Row>
            <center>
            <Col>
              <input className="namelog" type="text" placeholder='Mail'></input>
            </Col>
            </center>
            </Row>
            <br></br>
            <Row>
            <center>
            <Col>
              <input className="namelog" type="text" placeholder='Are you from'></input>
            </Col>
            </center>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Virtual = () => {
  const { inputComp } = useContext(MyContext);
  const [modalShow, setModalShow] = useState(false);

  const images = [
    { srce: image1, name: "THANJAVUR - BIG TEMPLE Virtual Tour" },
    { srce: image2, name: "MAMALLAPURAM Virtual Tour" },
    { srce: image3, name: "AIRAVATESWARA TEMPLE Virtual Tour" },
    { srce: image4, name: "GANGAIKONDA CHOLAPURAM Virtual Tour" },
    { srce: image5, name: "NILGIRI MOUNTAIN RAILWAY Virtual Tour" },
  ];

  return (
    <>
      {inputComp}
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Alert variant="danger">
          Please! Login to see the places in your Home! Click here to{' '}
          <Alert.Link href="#" onClick={() => {setModalShow(true); }}>
            Login
          </Alert.Link>
        </Alert>
      </div>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />

      <div className='parent'>
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
    </>
  );
};

export default Virtual;

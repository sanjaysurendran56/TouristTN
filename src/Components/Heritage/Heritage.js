import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router';
import './Heritage.css'
const Heritage = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="slideshow">
          <div className="s1">
          <h1>UNESCO</h1>
          <h2>Wonders</h2>
          </div>
          <div className="s2">
            <h2>Tamil Nadu, the cultural capital of India, boasts of five UNESCO World Heritage Sites which you should not miss</h2>
            <Button className="butt" variant="warning">Explore More<FaArrowRight /></Button>
          </div>
      </div>
    </div>
  )
}

export default Heritage

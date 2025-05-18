import React, { useContext, useState } from 'react';
import { MyContext } from "../Context/Context"; 
import './Trekareas.css';
import Table from 'react-bootstrap/Table';

const Trekareas = () => {
  const { inputComp } = useContext(MyContext);
  const { buttonComp } = useContext(MyContext);

  const [selectedLevel, setSelectedLevel] = useState(false,""); 

  const name = [
    { Hill: "Swamimalai Hill Trek, Yelagiri", level: "Easy", Distance: "3 km" },
    { Hill: "Kolukkumalai Sunrise Trek, Kottagudi", level: "Easy", Distance: "3 km" },
    { Hill: "Swamimalai Hill Trek, Yelagiri", level: "Easy", Distance: "6 km" },
    { Hill: "Swamimalai Hill Trek, Yelagiri", level: "Easy", Distance: "4 km" },
    { Hill: "Kookal Waterfalls Trek, Kookal", level: "Easy", Distance: "10 km" },
    { Hill: "Five Falls Trek, Kuttrallam", level: "Moderate", Distance: "3 km" },
    { Hill: "Parvathamalai, Parvathiamalai", level: "Hard", Distance: "13 km" }
  ];

  const filteredTreks = selectedLevel
    ? name.filter((trek) => trek.level === selectedLevel)
    : name; 
  return (
    <>
      {inputComp}

      <div className='Treklev'>
        <center>
          <br />
          <input
            type="radio"
            name="level"
            onClick={()=>setSelectedLevel("Easy",true)}
          /> Easy 
          <input
            type="radio"
            name="level"
            value="Moderate"
            onClick={()=>setSelectedLevel("Moderate")}
          /> Moderate 
          <input
            type="radio"
            name="level"
            value="Hard"
            onClick={()=>setSelectedLevel("Hard")}
          /> Hard
        </center>
      </div>

      <Table striped>
        <thead>
          <tr>
            <th>Trek Name</th>
            <th>Difficulty Level</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {filteredTreks.map((current, index) => (
            <tr key={index}>
              <td>{current.Hill}</td>
              <td>{current.level}</td>
              <td>{current.Distance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {buttonComp}
    </>
  );
};

export default Trekareas;

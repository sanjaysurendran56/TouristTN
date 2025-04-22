import './App.css';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import Navsi from './Components/Navbar/Navbar'
import Kanya from './Components/Kanya/Kanya'
import { MyContext } from './Components/Context/Context';
import { A,B } from './Components/Contextdatas/Contextdatas';
import TopHillstations from './Components/TopHillsations/TopHillstations';
import Topwildlife from './Components/Topwildlife/Topwildlife';
import TopWaterfalls from './Components/TopWaterfalls/TopWaterfalls'
import Thanjai from './Components/Thanjai/Thanjai';
import Virtual from './Components/Virtual/Virtual';
import Marina from './Components/Marina/Marina';
function App() {
  return (
    <div>
    <MyContext.Provider value={{ inputComp: <A />, buttonComp: <B /> }}>
     <Routes>
      <Route path='/' element={<Navsi />}></Route>
       <Route path='/Kanyakumari' element={<Kanya/>}></Route>
       <Route path='/TopHillstations' element={<TopHillstations/>}></Route>
       <Route path='/TopWildlife' element={<Topwildlife/>}></Route>
       <Route path='/Topwaterfalls' element={<TopWaterfalls />}></Route>
       <Route path='/ThanjaiPeriyakovil' element={<Thanjai />}></Route>
       <Route path='/Virtual' element={<Virtual />}></Route>
       <Route path='/Marina' element={<Marina />}></Route>
       </Routes>
       </MyContext.Provider>
    </div>
  );
}

export default App;

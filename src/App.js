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
import AddReview from './Components/AddReview/AddReview';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';
import Dhanushkodi from './Components/Dhanuskodi/Dhanushkodi';
import ToyTrain from './Components/Toy Train/Toy Train';
import Trekareas from './Components/Trekareas/Trekareas';
import Lakes from './Components/Lakes/Lakes';
import Pachamalai from './Components/TopHillsations/Pachamalai';
import Valparai from './Components/TopHillsations/Valparai';
import Connor from './Components/TopHillsations/Connor';
import Ooty from './Components/TopHillsations/Ooty';
import Spritual from './Components/Spritual/Spritual';
import Ercaud from './Components/TopHillsations/Ercaud';
import Megamalai from './Components/TopHillsations/Megamalai';
import Koluku from './Components/TopHillsations/Koluku';
import Kollimalai from './Components/TopHillsations/Kollimalai';
import Gulf from './Components/Topwildlife/Gulf';
import Mayy from './Components/Topwildlife/Mayy';
import Anamalai from './Components/Topwildlife/Anmalai'
import Guindy from './Components/Topwildlife/Guindy'
import Hoke from './Components/TopWaterfalls/Hoke';
import Pykra from './Components/TopWaterfalls/Pykra'
import Kutralam from './Components/TopWaterfalls/Kutralam'
import Avlanche from './Components/Lakes/Avlanche'
import Kodaila from './Components/Lakes/Kodaila'
import Ootyla from './Components/Lakes/Ootyla'
import Kodai from './Components/TopHillsations/Kodai';
import Palaces from './Components/Palaces/Palaces';
export const Mycontext2=createContext();
function App() {
  const[logins,setlogin]=useState(false);
  return (
    <div>
       <ToastContainer />
    <MyContext.Provider value={{ inputComp: <A />, buttonComp: <B />}}>
    <Mycontext2.Provider value={{logins,setlogin}}>
     <Routes>
      <Route path='/' element={<Navsi />}></Route>
       <Route path='/Kanyakumari' element={<Kanya/>}></Route>
       <Route path='/TopHillstations' element={<TopHillstations/>}></Route>
       <Route path='/TopWildlife' element={<Topwildlife/>}></Route>
       <Route path='/Topwaterfalls' element={<TopWaterfalls />}></Route>
       <Route path='/ThanjaiPeriyakovil' element={<Thanjai />}></Route>
       <Route path='/Virtual' element={<Virtual />}></Route>
       <Route path='/Marina' element={<Marina />}></Route>
       <Route path='/Review' element={<AddReview />}></Route>
       <Route path='/signup' element={<Signup />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/Dhanuskodi' element={<Dhanushkodi />}></Route>
       <Route path='/ToyTrain' element={<ToyTrain />}></Route>
       <Route path='/TrekTn' element={<Trekareas />}></Route>
       <Route path='/Toplakes' element={<Lakes />}></Route>
       <Route path='/Topspiritual' element={<Spritual />}></Route>
       <Route path='/Ooty' element={<Ooty />}></Route>
       <Route path='/Connor' element={<Connor />}></Route>
        <Route path='/Pachamalai' element={<Pachamalai />}></Route>
        <Route path='/valparai' element={<Valparai />}></Route>
        <Route path='/kodai' element={<Kodai />}></Route>
        <Route path ='/Ercaud' element={<Ercaud />}></Route>
        <Route path='/koluku' element={<Koluku />}></Route>
        <Route path='/Megamalai' element={<Megamalai />}></Route>
        <Route path='/Kolli' element={<Kollimalai/>}></Route>
        <Route path='/Kolukumalai' element={<Koluku />}></Route>
        <Route path='/Koluku' element={<Koluku />}></Route>
        <Route path='/Toplakes' element={<Lakes />}></Route>
        <Route path='/Gulf' element={<Gulf />}></Route>
        <Route path='/Mayy' element={<Mayy/>}></Route>
        <Route path='/Guindy' element={<Guindy />}></Route>
        <Route path='/Anaimalai' element={<Anamalai />}></Route>
        <Route path='/Hoke' element={<Hoke />}></Route>
        <Route path='/Kutralam' element={<Kutralam />}></Route>
        <Route path='/Pykra' element={<Pykra />}></Route>
        <Route path='/Kutralam' element={<Kutralam />}></Route>
        <Route path='/Avlanche' element={<Avlanche />}></Route>
        <Route path='/Kodaila' element={<Kodaila />}></Route>
        <Route path='/Ootyla' element={<Ootyla />}></Route>
        <Route path='/Palaces' element={<Palaces />}></Route>
       </Routes>
       </Mycontext2.Provider>
       </MyContext.Provider>
    </div>
  );
}

export default App;

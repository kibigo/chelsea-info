import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Fixtures from './Components/Fixtures'
import Players from './Components/Players';
import { useState } from 'react';
import Login from './Components/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] =useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setIsLoggedIn={setIsLoggedIn}/>
         <Routes>
            <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path='/fixtures' element={<Fixtures />} />
            <Route path='/players' element={<Players />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

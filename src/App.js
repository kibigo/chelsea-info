import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Fixtures from './Components/Fixtures'
import Players from './Components/Players';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/fixtures' element={<Fixtures />} />
            <Route path='/players' element={<Players />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

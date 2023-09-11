import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Fixtures from './Components/Fixtures'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/fixtures' element={<Fixtures />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

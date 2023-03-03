import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from '../src/pages/Home/Home'
import Login from '../src/pages/Login/Login'
import Register from '../src/pages/Register/Register'
import Booking from '../src/pages/BookingCar/BookingCar'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookingcar" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

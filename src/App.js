import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AddBus from './components/AddBus';
import BusDetails from './components/BusDetails';
import Navbar from './components/Navbar';
import './App.css';
import HomePage from './Homepage';

function App() {
 

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-bus" element={<AddBus />} />
          <Route path="/bus/:busId" element={<BusDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Register from './Pages/Register/Register';
const App = () => {
  return (
    <Router>
      <div>
       
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/login" element={<Register/>} />
        </Routes>
      </div>
      
    </Router>
    
  );
};

export default App;
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';

import About from './pages/About';

import Service from './pages/Service';

import Contact from './pages/Contact';

import Register from './pages/Register';

import Login from './pages/Login';

import Navbar from './components/Navbar';

import Error from './pages/Error';
import Footer from './components/footer/Footer';

const App = () => {
  return (
      <Router>
        <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
    </Router>
  
  )
}

export default App

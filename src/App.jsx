import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';  
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App; 
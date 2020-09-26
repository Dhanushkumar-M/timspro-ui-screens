import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage'

function App() {
  return (
    <>
    <Landingpage/>
    </>
  );
}

export default App;
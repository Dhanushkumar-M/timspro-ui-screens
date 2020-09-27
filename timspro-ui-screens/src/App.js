import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Students from './pages/Students';
import Admin from './pages/Admin';
import Exam from './pages/Exam';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/admin' component={Admin}/>
          <Route path='/home'  component={Home} />
          <Route path='/students' component={Students} />
          <Route path='/exam' component={Exam} />
          <Route path='/reports' component={Reports} />       
        </Switch>
      </Router>
    </>
  );
}

export default App;
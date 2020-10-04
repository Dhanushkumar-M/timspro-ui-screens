import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Reports from './components/pages/Reports';
import Students from './components/pages/Students';
import Admin from './components/pages/Admin';
import Exam from './components/pages/Exam';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Admin}/>
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
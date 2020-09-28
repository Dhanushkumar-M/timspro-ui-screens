import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import LpTopNav from './components/LpTopNav';
import Landingpage from './pages/Landingpage.jsx';
=======
import Home from './components/pages/Home';
import Reports from './components/pages/Reports';
import Students from './components/pages/Students';
import Admin from './components/pages/Admin';
import Exam from './components/pages/Exam';
>>>>>>> 1d4016d0f4074631ca4659486a107580be38d105

function App() {
  return (
    <>
<<<<<<< HEAD
    <Landingpage/>
=======
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
>>>>>>> 1d4016d0f4074631ca4659486a107580be38d105
    </>
  );
}

export default App;
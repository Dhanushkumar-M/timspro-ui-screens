import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Reports from './components/pages/Reports';
import Students from './components/pages/Students';
import Admin from './components/pages/Admin';
import Exam from './components/pages/Exam';
import Landingpage from './components/pages/Landingpage'
import Login from './components/pages/Login'

function App() {
  return (
    <>
    <Login/>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path='/admin' component={Admin}/>
          <Route path='/home'  component={Home} />
          <Route path='/students' component={Students} />
          <Route path='/exam' component={Exam} />
          <Route path='/reports' component={Reports} />       
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Problem from './components/Problem';
import Team from './components/Team';
import SignUp from './components/auth/SignUp';
import CustomeNavbar from './components/CustomNavbar';
import Solution from './components/Solution';
import Vision from './components/Vision';
import Values from './components/Values';
import Story from './components/Story';
import GetStarted from './components/GetStarted';




class App extends Component {

  render(){
  return (
    <div className="App">
      <Router>
        <div>
          <CustomeNavbar />
          <Route exact path='/' component = {Home} />
          <Route path='/problem' component = {Problem} />
          <Route path='/team' component = {Team} />
          <Route path ='/solution' component ={Solution} />
          <Route path='/getstarted' component = {GetStarted} />
          <Route path ='/vision' component ={Vision} />
          <Route path ='/values' component ={Values} />
          <Route path ='/story' component ={Story} />
        </div>
      </Router>
    </div>
  );
}

}

export default App;

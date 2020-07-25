import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search'
import Navbar from './components/Nav'
import Top from './pages/Top'
import Login from './pages/Login'


function App() {

  

  
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path ='/' component={Login}/>
            
          <Route exact path = '/search' component = {Search} />
           
          <Route exact path ='/saved' component = {Top} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

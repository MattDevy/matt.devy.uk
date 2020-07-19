import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Code from './components/Code'
import Contact from './components/Contact'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AppDrawerLeft from './components/AppDrawerLeft'

const App = () => {
  return (
    <div className="App">
      <body>
        <Router>
        <AppDrawerLeft />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/code'><Code /></Route>
          <Route path='/contact'><Contact /></Route>
        </Switch>
        </Router>
      </body>
    </div>
  )
}

export default App;

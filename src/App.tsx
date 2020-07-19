import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AppDrawerLeft from './components/AppDrawerLeft'

let App = () => {
  return (
    <div className="App">
      <body>
        <Router>
        <AppDrawerLeft />
        <Switch>
          <Route exact path='/'> Hello, World!</Route>
          <Route path='/about'> About me </Route>
          <Route path='/code'> Github </Route>
          <Route path='/contact'> Contact me </Route>
        </Switch>
        </Router>
      </body>
    </div>
  )
}

export default App;

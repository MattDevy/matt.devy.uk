import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Code from './components/Code'
import Contact from './components/Contact'

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ResponsiveDrawer from './components/ResponsiveDrawer'

const App = () => {
  return (
    <div className="App">
      <body>
        <Router basename='/'>
        <ResponsiveDrawer >
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/code'><Code /></Route>
          <Route path='/contact'><Contact /></Route>
        </Switch>
        </ResponsiveDrawer>
        </Router>
      </body>
    </div>
  )
}

export default App;

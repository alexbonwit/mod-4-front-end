import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './Login'
import Notes from './Notes'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Notes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from './Utilities-auth/PrivateRoute'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./Components/Login"

function App() {
  return (
    <div className="App">
      <Router/>
      <Login />
      {/* <PrivateRoute exact path= "/plants" component={} />  */}
      <Router/>
    </div>
  );// need to build component for user/plants page.
}

export default App;

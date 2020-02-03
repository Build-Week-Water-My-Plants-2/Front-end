import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from './Utilities-auth/PrivateRoute'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./Components/Login"
import Register from "./Components/Register"
import PlantPage from "./Components/PlantPage"
import Plants from './Components/Plants';

function App() {
  return (
    <Router>
      <div className="App">
          <nav>
            <Link to="/login">Login </Link>
            <Link to="/register">SignUp</Link>
            <Link to="/plants"> Protected Page</Link>

          </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={PlantPage} />
          <PrivateRoute exact path="/plants" component={Plants}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
          <Route  component={Login} />
        </Switch>
      </div>
    </Router>

  );// need to build component for user/plants page.
}

export default App;

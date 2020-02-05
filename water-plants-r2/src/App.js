import React, {useEffect} from 'react';
import {axiosWithAuth} from "./Utilities-auth/Auth"
import logo from './logo.svg';
import './App.css';
import PrivateRoute from './Utilities-auth/PrivateRoute'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login2 from "./Components/Login2"
import Register from "./Components/Register"
import PlantPage from "./Components/PlantPage"
import Plants from './Components/Plants';
import PlantForm from './Components/PlantForm'
import PlantCard from './Components/PlantCard'
// import updatePlantForm from './Components/updatePlantForm'
function App() {
  
  


  return (
    <Router>
      <div>
          <Route path="/login" component={Login2} />

      </div>
      <div className="App">
          <nav>
            <Link to="/login">Login </Link>
            <Link to="/register">SignUp</Link>
            <Link to="/plantcard">Plants</Link>
            <Link to="/plants"> My Plants</Link>
            <Link to="/plantform">Add New Plant</Link>
          </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={PlantPage} />
          <PrivateRoute exact path="/plants" component={Plants}/>
          <PrivateRoute exact path="/plantform" component={PlantForm}/>
          <PrivateRoute exact path="/plantcard" component={PlantCard}/>
          {/* <PrivateRoute exact path="/plantupdate" component={updatePlantForm} /> */}
          <Route path="/register" component={Register}/>
          {/* <Route  component={Login} /> */}
        </Switch>
      </div>
    </Router>

  );// need to build component for user/plants page.
}

export default App;

import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "./Utilities-auth/Auth"
import logo from './logo.svg';
import './App.css';
import PrivateRoute from './Utilities-auth/PrivateRoute'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./Components/Login"
import Register from "./Components/Register"
import PlantPage from "./Components/PlantPage"
import Plants from './Components/Plants';
import PlantForm from './Components/PlantForm'
import PlantCard from './Components/PlantCard'
import UpdatePlantForm from './Components/UpdatePlantForm'
// import updatePlantForm from './Components/updatePlantForm'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

function App() {
  
  const [userID, setUserID] = useState('');
 
  useEffect(()=>{
    console.log('userID', userID)
  }, [userID])
  

  return (
    <Router>
      <div className="App">  
     
          <nav className="navbar">
           <FontAwesomeIcon icon={faSeedling} /> 
          <h1>Planet Planners</h1>
            <Link to="/login">Login </Link>
            <Link to="/register">SignUp</Link>
            {/* <Link to="/plantcard">Plants</Link> */}
            <Link to="/users/1/plants"> My Plants</Link>
            <Link to="/plantform">Add New Plant</Link>
          </nav>
      
      

        <Switch>
          <PrivateRoute exact path="/protected" component={PlantPage} />
          <PrivateRoute exact path="/users/:id/plants" component={Plants}/>
          <Route exact path="/plantform" component={PlantForm}/>
          <PrivateRoute exact path="/plantcard" component={PlantCard}/>
          <Route exact path="/update-plant/:id" component={UpdatePlantForm} />
          {/* <PrivateRoute exact path="/plantupdate" component={updatePlantForm} /> */}
          <Route path="/register" component={Register}/>
          <Route  component={Login} />
          {/* <Route path="/login"  render={(props) => <Login {...props} setUserID={setUserID}  />}/> */}
      
        </Switch>
      
      </div>
    </Router>

  );// need to build component for user/plants page.
}

export default App;

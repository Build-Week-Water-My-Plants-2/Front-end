import React from "react";
import LoginForm from "./Components/LoginForm";
import { Switch, Route } from "react-router-dom";
import Plants from "./Components/Plants";
import SignUp from "./Components/SignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/plants">
          <Plants />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

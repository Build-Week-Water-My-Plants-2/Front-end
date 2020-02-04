import React from "react";
import LoginForm from "./Components/LoginForm";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

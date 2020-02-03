import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route>
        <LoginForm />
      </Route>
    </div>
  );
}

export default App;

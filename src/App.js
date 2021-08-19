import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <NavBar/>
        <Route exact path="/" component={Dashboard}/>
      </div>
    </Router>
  );
}

export default App;

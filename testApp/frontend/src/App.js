import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route default component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

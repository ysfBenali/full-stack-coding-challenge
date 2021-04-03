import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import AllComplaints from "./components/AllComplaints";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={AllComplaints} />
            <Route path="/all" component={AllComplaints} />
            <Route path="/login" component={Login} />
            <Route default component={NotFound} />
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

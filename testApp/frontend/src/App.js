import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import AllComplaints from "./components/AllComplaints";
import TopComplaints from "./components/TopComplaints";
import OpenComplaints from "./components/OpenComplaints";
import ClosedComplaints from "./components/ClosedComplaints";
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
            <Route path="/top" component={TopComplaints} />
            <Route path="/closed" component={ClosedComplaints} />
            <Route path="/open" component={OpenComplaints} />
            <Route path="/login" component={Login} />
            <Route default component={NotFound} />
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

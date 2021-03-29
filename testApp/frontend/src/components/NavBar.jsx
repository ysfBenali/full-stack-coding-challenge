import React from "react";
import { withRouter } from "react-router-dom";

const NavBar = ({ location }) => {
  return <div>{location.pathname !== "/login" ? <h2>NavBar</h2> : null}</div>;
};

export default withRouter(NavBar);

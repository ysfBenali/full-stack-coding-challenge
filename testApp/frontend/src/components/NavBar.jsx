import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";

const NavBar = ({ location }) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div>
      {location.pathname !== "/login" ? (
        <>
          <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 select-none">
            <div className="flex items-center flex-shrink-0 text-dark mr-8 py-3 tracking-wide">
              <span className="font-semibold text-2xl tracking-tight text-indigo-500">
                Dashboard
              </span>
            </div>
            <div className="block lg:hidden ">
              <button
                onClick={() => toggleExpansion(!isExpanded)}
                className="flex items-center px-3 py-2 border rounded border-indigo-500 text-indigo-500 focus:border-indigo-500 focus:outline-none"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className={`${
                isExpanded ? `block` : `hidden`
              } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
              <div className="text-md lg:flex-grow">
                <NavLink
                  onClick={() => toggleExpansion(!isExpanded)}
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-8 py-3 uppercase border-b-2 hover:border-indigo-500 hover:text-indigo-500 tracking-wide cursor-pointer"
                  to="/all"
                  activeClassName="border-indigo-500 text-indigo-500"
                >
                  All
                </NavLink>
                <NavLink
                  onClick={() => toggleExpansion(!isExpanded)}
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-8 py-3 uppercase border-b-2 hover:border-indigo-500 hover:text-indigo-500 tracking-wide cursor-pointer"
                  to="/top"
                  activeClassName="border-indigo-500 text-indigo-500"
                >
                  Top
                </NavLink>
                <NavLink
                  onClick={() => toggleExpansion(!isExpanded)}
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-8 py-3 uppercase border-b-2 hover:border-indigo-500 hover:text-indigo-500 tracking-wide cursor-pointer"
                  to="/open"
                  activeClassName="border-indigo-500 text-indigo-500"
                >
                  Open
                </NavLink>
                <NavLink
                  onClick={() => toggleExpansion(!isExpanded)}
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-8 py-3 uppercase border-b-2 hover:border-indigo-500 hover:text-indigo-500 tracking-wide cursor-pointer"
                  to="/closed"
                  activeClassName="border-indigo-500 text-indigo-500"
                >
                  Closed
                </NavLink>
              </div>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
};

export default withRouter(NavBar);

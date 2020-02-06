import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Actors from "./pages/Actors";
import Header from "./components/Header";

/**
 * Extracting out the routes in an array makes the code easily managable and understandable
 */
const RoutesList = [
  {
    path: "/",
    Component: Home
  },
  {
    path: "/movies",
    Component: Movies
  },
  {
    path: "/actors",
    Component: Actors
  }
];

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {RoutesList.map(({ path, Component }) => (
          <Route key={path} path={path} exact render={() => <Component />} />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;

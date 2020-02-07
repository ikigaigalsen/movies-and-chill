import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Header from "./components/Header";
import MovieDetails from "./pages/MovieDetail";
import PersonDetail from "./pages/PersonDetail";

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
    path: "/movies/:movieId",
    Component: MovieDetails
  },
  {
    path: "/people",
    Component: People
  },
  {
    path: "/people/:personId",
    Component: PersonDetail
  }
];

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {RoutesList.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            exact
            render={props => <Component {...props} />}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;

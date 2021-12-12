import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Redux Stuff
import { connect } from "react-redux";
import { fetchData } from "../actions/shared";

//CSS
import "../style.css";
//Pages
import {
  Login,
  Home,
  Leaderboard,
  Question,
  Add,
  NotFound,
  PrivateRoute
} from "../pages";

const App = ({ dispatch, state }) => {
  useEffect(() => {
    fetchData(dispatch);
  }, [state]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
          <PrivateRoute exact path="/add" component={Add} />
          <PrivateRoute exact path="/questions/:id" component={Question} />
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);

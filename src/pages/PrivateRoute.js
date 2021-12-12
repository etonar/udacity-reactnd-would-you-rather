import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  const location = useLocation();

  localStorage.setItem("lastPage", location.pathname);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = ({ userAuth }) => {
  return { loggedIn: userAuth !== null && userAuth !== "" };
};
export default connect(mapStateToProps)(PrivateRoute);

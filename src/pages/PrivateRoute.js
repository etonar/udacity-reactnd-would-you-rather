import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  const history = useHistory();
  useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
    });
  }, [history]);
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

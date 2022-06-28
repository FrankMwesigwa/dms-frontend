import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = JSON.parse(localStorage.getItem('user'));

  return (
    <Route
      {...rest}
      render={(props) =>
        token.accessToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
import { Redirect, Switch } from "react-router-dom";
import React from "react";
import PrivateRoute from "./components/PrivateRoute";

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Home = React.lazy(() => import("./pages/Home"));
const Transfer = React.lazy(() => import("./pages/Transfer"));

const Routing = () => {
  return (
    <React.Suspense fallback={null}>
      <Switch>
        <PrivateRoute
          path="/login"
          withoutUserDataComponent={<Login />}
          withUserDataComponent={<Redirect to="/" />}
        />
        <PrivateRoute
          path="/register"
          withoutUserDataComponent={<Register />}
          withUserDataComponent={<Redirect to="/" />}
        />
        <PrivateRoute
          path="/"
          withoutUserDataComponent={<Redirect to="/login" />}
          withUserDataComponent={<Home />}
        />
        <PrivateRoute
          path="/transfer"
          withoutUserDataComponent={<Redirect to="/login" />}
          withUserDataComponent={<Transfer />}
        />
      </Switch>
    </React.Suspense>
  );
};

export default Routing;

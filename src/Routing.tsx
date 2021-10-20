import { Switch } from "react-router-dom";
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
          exact
          path="/login"
          needAuthorised={false}
          renderComponent={Login}
        />
        <PrivateRoute
          exact
          path="/register"
          needAuthorised={false}
          renderComponent={Register}
        />
        <PrivateRoute exact path="/" needAuthorised renderComponent={Home} />
        <PrivateRoute
          exact
          path="/transfer"
          needAuthorised
          renderComponent={Transfer}
        />
      </Switch>
    </React.Suspense>
  );
};

export default Routing;

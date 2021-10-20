import { Redirect, Route, RouteProps } from "react-router-dom";
import React from "react";
import { getLocalUserData } from "../utils";

interface PrivateRouteProps extends RouteProps {
  needAuthorised: boolean;
  renderComponent: React.FC<any>;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  needAuthorised,
  renderComponent: RenderComponent,
  ...rest
}) => (
  <Route
    {...rest}
    path={path}
    render={() => {
      const userData = getLocalUserData();
      if (needAuthorised) {
        return !userData ? <Redirect to="/login" /> : <RenderComponent />;
      }
      return !!userData ? <Redirect to="/" /> : <RenderComponent />;
    }}
  />
);

export default PrivateRoute;

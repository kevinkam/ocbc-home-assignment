import { Route } from "react-router-dom";
import React from "react";
import { getLocalUserData } from "../utils";

interface PrivateRouteProps {
  path: string;
  withoutUserDataComponent: React.ReactElement;
  withUserDataComponent: React.ReactElement;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  withoutUserDataComponent,
  withUserDataComponent,
}) => (
  <Route
    exact
    path={path}
    render={() => {
      const userData = getLocalUserData();
      return !userData ? withoutUserDataComponent : withUserDataComponent;
    }}
  />
);

export default PrivateRoute;

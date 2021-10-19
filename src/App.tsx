import React from "react";
import AppContext from "./contexts/AppContext";
import { Route, Switch } from "react-router-dom";
import GlobalStyled from "./GlobalStyled";

const Login = React.lazy(() => import("./pages/Login"));

function App() {
  return (
    <AppContext>
      <>
        <GlobalStyled />
        <React.Suspense fallback={null}>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </React.Suspense>
      </>
    </AppContext>
  );
}

export default App;

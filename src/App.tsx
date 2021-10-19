import React from "react";
import AppContext from "./contexts/AppContext";
import GlobalStyled from "./GlobalStyled";
import Routing from "./Routing";

function App() {
  return (
    <AppContext>
      <>
        <GlobalStyled />
        <Routing />
      </>
    </AppContext>
  );
}

export default App;

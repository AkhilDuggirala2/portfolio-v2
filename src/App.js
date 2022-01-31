import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/main/Main";
import BackBody from "./Components/backBody/BackBody";
import ResponsiveMenu from "./Components/responsiveMenu/ResponsiveMenu";

function App() {
  return (
    <>
      <BackBody />
      <ResponsiveMenu />
      <Main />
    </>
  );
}

export default App;

import React from "react";
import { Main } from "./App.styles";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import DisplayAPI from "./components/DisplayAPI/DisplayAPI";

function App() {
  return (
    <Main>
      <GlobalStyle />
      <DisplayAPI />
    </Main>
  );
}

export default App;

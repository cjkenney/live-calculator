import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Calculator from "./components/Calculator";

const GlobalStyle = createGlobalStyle`
body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Helvetica';
}
`;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <Calculator />
      </StyledApp>
    );
  }
}

export default App;

import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Calculator from './components/Calculator';
import Feed from './components/Feed';

const GlobalStyle = createGlobalStyle`
body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Helvetica';
}
`;

const StyledApp = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: column;
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
        <Feed />
      </StyledApp>
    );
  }
}

export default App;

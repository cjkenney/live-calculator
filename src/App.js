import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Helvetica';
}
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
      </div>
    );
  }
}

export default App;

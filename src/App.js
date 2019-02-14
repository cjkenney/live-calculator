import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
      <div className="App">
        <GlobalStyle />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

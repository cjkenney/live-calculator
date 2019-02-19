import React, { Component } from 'react';
import styled from 'styled-components';
import * as math from 'mathjs';
import Button from './Button';
import ClearButton from './ClearButton';
import Input from './Input';
import { sendMessage } from '../socket';

const CalculatorWrapper = styled.div`
  width: 400px;
  height: 600px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

class Calculator extends Component {
  state = { input: '' };

  updateInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    let timestamp = new Date().toLocaleString();
    console.log(timestamp);

    console.log(JSON.stringify({ date: timestamp, message: this.state.input }));

    this.setState({ input: math.eval(this.state.input) });

    // send POST request to API
    fetch('https://pure-plateau-88745.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: timestamp,
        message: this.state.input + '=' + math.eval(this.state.input)
      })
    })
      .then(console.log('POSTed message'))
      .then(sendMessage());
  };

  render() {
    return (
      <CalculatorWrapper>
        <Input input={this.state.input} />
        <Row>
          <ClearButton handleClear={() => this.setState({ input: '' })}>
            AC
          </ClearButton>
          <Button />
          <Button />
          <Button handleClick={this.updateInput}>/</Button>
        </Row>
        <Row>
          <Button handleClick={this.updateInput}>7</Button>
          <Button handleClick={this.updateInput}>8</Button>
          <Button handleClick={this.updateInput}>9</Button>
          <Button operator handleClick={this.updateInput}>
            *
          </Button>
        </Row>
        <Row>
          <Button handleClick={this.updateInput}>4</Button>
          <Button handleClick={this.updateInput}>5</Button>
          <Button handleClick={this.updateInput}>6</Button>
          <Button operator handleClick={this.updateInput}>
            -
          </Button>
        </Row>
        <Row>
          <Button handleClick={this.updateInput}>1</Button>
          <Button handleClick={this.updateInput}>2</Button>
          <Button handleClick={this.updateInput}>3</Button>
          <Button operator handleClick={this.updateInput}>
            +
          </Button>
        </Row>
        <Row>
          <Button handleClick={this.updateInput}>0</Button>
          <Button />
          <Button />
          <Button handleClick={this.handleEqual} operator>
            =
          </Button>
        </Row>
      </CalculatorWrapper>
    );
  }
}

export default Calculator;

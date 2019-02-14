import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  height: 4em;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.operator ? '#fe9241' : '#e0e1e6')};
  color: ${props => (props.operator ? 'white' : '#888888')};
  outline: 1px solid #888888;
`;

const Button = props => (
  <StyledButton onClick={() => props.handleClick(props.children)}>
    {props.children}
  </StyledButton>
);

export default Button;

import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: black;
  color: white;
`;

const Input = props => <StyledInput>{props.input}</StyledInput>;

export default Input;

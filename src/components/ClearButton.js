import React from 'react';
import styled from 'styled-components';

const StyledClearButton = styled.div`
  height: 4em;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #e0e1e6;
  color: #888888;
  outline: 1px solid #888888;
`;

const ClearButton = props => (
  <StyledClearButton onClick={props.handleClear}>
    {props.children}
  </StyledClearButton>
);

export default ClearButton;

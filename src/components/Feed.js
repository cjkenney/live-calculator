import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFeed = styled.div`
  width: 100%;
  background-color: cadetblue;
`;

class Feed extends Component {
  render() {
    return <StyledFeed>This is the feed</StyledFeed>;
  }
}

export default Feed;

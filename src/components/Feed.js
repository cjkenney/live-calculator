import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFeed = styled.div`
  width: 100%;
  background-color: cadetblue;
`;

class Feed extends Component {
  state = { messages: '' };

  componentDidMount() {
    fetch('https://pure-plateau-88745.herokuapp.com/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);

        let feed = data.map((item, index) => {
          return (
            <p>
              {item.date} - {item.message}
            </p>
          );
        });
        this.setState({ messages: feed });
        console.log('state', this.state.messages);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <StyledFeed>This is the feed {this.state.messages}</StyledFeed>;
  }
}

export default Feed;

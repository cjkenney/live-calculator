import React, { Component } from 'react';
import styled from 'styled-components';
import openSocket from 'socket.io-client';

const socket = openSocket('https://pure-plateau-88745.herokuapp.com/');

const StyledFeed = styled.div`
  margin: 0 auto;
  background-color: cadetblue;
`;

class Feed extends Component {
  state = { messages: '' };

  refresh = () => {
    fetch('https://pure-plateau-88745.herokuapp.com/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let feed = data.map((item, index) => {
          return (
            <p key={index}>
              {item.date} | {item.message}
            </p>
          );
        });
        this.setState({ messages: feed });
      })
      .catch(err => {
        console.log(err);
      })
      .then(console.log('REFRESHED'));
  };

  componentDidMount() {
    this.refresh();

    socket.on('calculation', () => {
      this.refresh();
    });
  }

  render() {
    return <StyledFeed>{this.state.messages}</StyledFeed>;
  }
}

export default Feed;

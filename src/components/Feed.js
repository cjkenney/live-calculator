import React, { Component } from 'react';
import styled from 'styled-components';
import openSocket from 'socket.io-client';
// import { subscribeToFeed, receiveMessage } from '../socket';

const socket = openSocket('https://pure-plateau-88745.herokuapp.com/');

const StyledFeed = styled.div`
  width: 100%;
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
              {item.date} - {item.message}
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
    // fetch('http://localhost:4040/')
    //   .then(results => {
    //     return results.json();
    //   })
    //   .then(data => {
    //     let feed = data.map((item, index) => {
    //       return (
    //         <p key={index}>
    //           {item.date} - {item.message}
    //         </p>
    //       );
    //     });
    //     this.setState({ messages: feed });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    socket.on('calculation', () => {
      this.refresh();
    });
  }

  render() {
    return <StyledFeed>{this.state.messages}</StyledFeed>;
  }
}

export default Feed;

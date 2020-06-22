import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super(); // needed when using the extends keyword
    this.state = {
      count: 0,
    } 
  }

  render() {
    return (
      <div className="container"> 
        <div className="navbar"> Counter.js </div>
        <div className="Content">
           <h1> {this.state.count} </h1>
           <button type="button"> Increment </button>
           <button type="button"> Decrement </button>
        </div>
      </div>
    );
  };
}

// to be used in other files
export default Counter;
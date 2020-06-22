import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super(); // needed when using the extends keyword
    this.state = {
      count: 0,
    } 
  }

  // this is where our methods will live: below the constructor ALWAYS !
  // Note* arrow functions does all the lexical binding for us. If it wasn't an arrow function, 
  // then in the constructor we would have to create another property that
  // binds the method to the this context: 
  // ex this.increment = this.increment.bind(this);
  increment = () => {
     // setState comes with react; it's built-in already
     if(this.state.count < 20) {
       this.setState({count: this.state.count + 1});
     }
  }
  decrement = () => {
     if(this.state.count > 0) {
      this.setState({count: this.state.count - 1});
     }
  }

  render() {
    return (
      <div className="container"> 
        <div className="navbar"> Counter.js </div>
        <div className="Content">
           <h1> {this.state.count} </h1>
           <button type="button" onClick={this.increment}> Increment </button>
           <button type="button" onClick={this.decrement}> Decrement </button>
        </div>
      </div>
    );
  };
}

// to be used in other files
export default Counter;
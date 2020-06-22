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
     let buttons = Array.from(document.getElementsByTagName("button"));
     
     if(this.state.count < 20) {
       if(buttons[3].innerText === "Single Increment") {
         this.setState({count: this.state.count + 1});
       }
       else {
         if(this.state.count !== 19) {
           this.setState({count: this.state.count + 2});
         } 
       }
     }
  }
  decrement = () => {
    let buttons = Array.from(document.getElementsByTagName("button"));

     if(this.state.count > 0) {
       if(buttons[3].innerText === "Single Increment") {
         this.setState({count: this.state.count - 1});
       }
       else {
         if(this.state.count !== 1) {
          this.setState({count: this.state.count - 2});
         } 
       }
     }
  }
  clear = () => {
     this.setState({count: 0});
  }
  toggle = () => {
    let buttons = Array.from(document.getElementsByTagName('button'));
    
    if(buttons[3].textContent === "Single Increment") {
      buttons[3].textContent = "Double Increment";
    }
    else {
      buttons[3].textContent = "Single Increment";
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
           <button type="button" onClick={this.clear}> Clear </button>
           <button type="button" onClick={this.toggle}> Single Increment </button>
        </div>
      </div>
    );
  };
}

// to be used in other files
export default Counter;
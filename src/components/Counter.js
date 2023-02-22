import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  increase(){
    this.setState({counter : this.state.counter+1});
  }

  render() {
    return (
      <div>
        <h3>Current number is: {this.state.counter}</h3>
        <button onClick={ ()=> this.increase()}>Click Me!</button>
      </div>
    );
  }
}

export default Counter;

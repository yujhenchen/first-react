import { Component } from "react";

class ClassEvent extends Component {
  handleClick() {
    alert("class button is clicked");
  }
  render() {
    return (
      <div>
        This is a class based component
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default ClassEvent;

import { Component } from "react";

class Message extends Component {
  render() {
    return (
      <h1>
        This is a class component. It has message content{" "}
        {this.props.messageContent}, and the message code is:{" "}
        {this.props.messageCode}
      </h1>
    );
  }
}

export default Message;

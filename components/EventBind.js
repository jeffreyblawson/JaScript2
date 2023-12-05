import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "UNBIND THE!",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>BIND EVENT</button>
      </>
    );
  }
}

export default EventBind;

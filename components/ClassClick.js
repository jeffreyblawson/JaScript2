import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    alert("Class Button was clicked");
    console.log("Class was logged");
  }
  render() {
    return <button onClick={this.clickHandler}> Class Click </button>;
  }
}

export default ClassClick;

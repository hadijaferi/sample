import React, { Component } from "react";

class Test1 extends Component {
  render() {
    if (this.props.myname === "Ali") throw new Error("what?");
    return <div>{this.props.myname}</div>;
  }
}

export default Test1;

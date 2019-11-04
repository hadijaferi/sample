import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class Text3 extends Component {
  render() {
    return (
      <UserConsumer>
        {valueX => {
          return <p>{valueX}</p>;
        }}
      </UserConsumer>
    );
  }
}

export default Text3;

import React, { Component } from "react";
import desCounter from "./desCounter";
class DesCounterHover extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      counter: 1000
    };
  }
  // maghadirri k az hoc ersal mishe ro mishe ba props daryaft krd

  // desHandler = () => {
  //   const xx = this.state.counter;
  //   this.setState({ counter: xx - 1 });
  // };
  render() {
    return (
      <div>
        {/* vaghti mouse az ro h1 rad shd on function call mishe */}
        <h1
          style={{ backgroundColor: "red" }}
          onMouseOver={this.props.decrement}
        >
          Click :{this.props.counter}
        </h1>
      </div>
    );
  }
}
// meghdare dovom hm migire
export default desCounter(DesCounterHover, 50);

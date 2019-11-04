import React, { Component } from "react";
import desCounter from "./desCounter";

class DesCounterClick extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      counter: 1000
    };
  }
  //   desHandler = () => {
  //     this.setState(prevState => {
  //       return {
  //         counter: prevState.counter - 1
  //       };
  //     });
  //   };
  //   desHandler = () => {
  //     const xx = this.state.counter;
  //     this.setState({ counter: xx - 1 });
  //   };
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}>
          {this.props.myname} Click :{this.props.counter}
        </button>
      </div>
    );
  }
}

// meghdare dovom hm migire
export default desCounter(DesCounterClick, 12);

import React, { Component } from "react";

class User_1 extends Component {
  render() {
    console.log(this.props.match);

    return (
      <div>
        <p>User Number {this.props.match.params.id} </p>
        <button onClick={() => this.props.history.push("/home")}>Go</button>
      </div>
    );
  }
}
export default User_1;

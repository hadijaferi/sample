import React, { Component } from "react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  //   vase in k to constructor bind ro nnvisim az arow use mikoni
  shot = () => {
    alert("hi");
    this.setState({ favoritecolor: "yellow" });
    console.log("xx");
  };
  hadi = x => {
    this.setState({ favoritecolor: "blue" });

    console.log(x);
  };
  render() {
    let xx = "ali";
    return (
      <div>
        <button onClick={this.shot}> click</button>
        <button onClick={() => this.hadi(xx)}> click</button>
      </div>
    );
  }
}

export default Events;

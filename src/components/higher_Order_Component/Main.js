import React, { Component } from "react";
import DesCounterHover from "./DesCounterHover";
import DesCounterClick from "./DesCounterClick";

class Main extends Component {
  render() {
    return (
      <div>
        <DesCounterClick myname="jaferi" />
        <DesCounterHover />
      </div>
    );
  }
}

export default Main;

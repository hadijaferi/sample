import React, { Component } from "react";

class Error_Boundy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  //   in yki az lifesycle hashe  age eror vojod dashte bashe migire
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  //  ye lifesycle dgas k vaghti component b error mikhore va varede catch mishe
  componentDidCatch(error, info) {
    console.log(error, "******* Error ********");
    console.log(info, "********* info **********");
  }
  render() {
    if (this.state.hasError) {
      return <h1>Error Occurd</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default Error_Boundy;

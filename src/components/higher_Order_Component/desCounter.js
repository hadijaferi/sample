import React, { Component } from "react";
// HOC injas
// Hoc y component migire yeseri taghirat rodh mizane bad mide biroin

const desCounter = (WrappedComponent, number) => {
  class DesCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1000
      };
    }

    desHandler = () => {
      const xx = this.state.counter;
      this.setState({ counter: xx - number });
    };
    render() {
      return (
        <WrappedComponent
          name="hadi"
          counter={this.state.counter}
          decrement={() => this.desHandler()}
          //   har propsi k b in safe erja dade mishe b onvane propse khodet bdon va befres
          // masaln to Main age in khat paein ro nnvisim dg props hash ghabele dastres nis
          {...this.props}
        />
      );
    }
  }
  return DesCounter;
};

export default desCounter;

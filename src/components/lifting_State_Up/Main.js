import React, { Component } from "react";

// components
import TemprecherInput from "./TemprecherInput";
import * as myfunc from "./TryConvert";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { scale: "c", temp: "" };
  }

  handleChangeCelcius = temp => {
    this.setState({
      scale: "Celcius",
      temp: temp
    });
  };
  handleChangeFahrenhait = temp => {
    console.log(temp, "temp");

    this.setState({
      scale: "Fahrenhait",
      temp: temp
    });
  };
  render() {
    const Celcius =
      this.state.scale === "Fahrenhait"
        ? myfunc.tryConvert(this.state.temp, myfunc.toCelsius)
        : this.state.temp;
    const Fahrenhait =
      this.state.scale === "Celcius"
        ? myfunc.tryConvert(this.state.temp, myfunc.toFahrenheit)
        : this.state.temp;
    return (
      <div>
        <TemprecherInput
          tempreture={Celcius}
          label="Celcius"
          handleChange={this.handleChangeCelcius}
        />
        <TemprecherInput
          tempreture={Fahrenhait}
          label="Fahrenhait"
          handleChange={this.handleChangeFahrenhait}
        />
        <br />
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
class TemprecherInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = event => {
    this.props.handleChange(event.target.value);
  };
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type="text"
          value={this.props.tempreture}
          onChange={this.handleChange}
        />
        <br />
      </div>
    );
  }
}

export default TemprecherInput;

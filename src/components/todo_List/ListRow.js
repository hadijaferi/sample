import React, { Component } from "react";

class ListRow extends Component {
  render() {
    let x = {};
    if (this.props.checked == true) {
      x = {
        textDecoration: "line-through"
      };
    }
    return (
      <React.Fragment>
        <label style={x}>
          <input
            type="checkbox"
            checked={this.props.checked}
            onChange={() => this.props.handleCheckBoxChange(this.props.id)}
          />
          {this.props.content}
        </label>
        <br />
      </React.Fragment>
    );
  }
}

export default ListRow;

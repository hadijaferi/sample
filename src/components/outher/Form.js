import React, { Component } from "react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: "red",
      myName: "",
      chk: true,
      select: "",
      radioS: "",
      car: [
        { name: "Kia", year: 1993 },
        { name: "PK", year: 1993 },
        { name: "MVM", year: 1993 },
        { name: "BMW", year: 1993 },
        { name: "Ferari", year: 1993 },
        { name: "Perid", year: 1993 }
      ],
      Dr: [
        { name: "Doctor", value: 1 },
        { name: "Nurs", value: 2 },
        { name: "Sick", value: 3 }
      ]
    };
  }

  handleChange = e => {
    console.log(e.target, "E log****************");
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    });
  };
  componentDidUpdate() {
    // console.log(this.state.myName);
    console.log(this.state.chk);
    console.log(this.state.select);
    console.log(this.state.radioS);
  }
  _SelectOnchange = event => {
    this.setState({ select: event.target.value });
    const nameObject = this.state.car.find((ele, ind) => {
      return ele.name === event.target.value;
    });
    console.log(nameObject, "nameObject ***");
  };
  handleSubmit = event => {
    event.preventDefault();
    alert("cccccccccccccccc");
  };
  render() {
    return (
      // value name bayad ba value state yki bashe baraye hndlechange hamon
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="myName"
            onChange={e => this.handleChange(e)}
          />
          <br />
          <label>{this.state.name}</label>
          <input
            name="chk"
            type={"checkbox"}
            checked={this.state.chk}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <select onChange={event => this._SelectOnchange(event)}>
            <option></option>
            {this.state.car.map((ele, ind) => {
              return <option key={ind}>{ele.name}</option>;
            })}
          </select>
          <br />
          {this.state.Dr.map((ele, ind) => {
            return (
              <React.Fragment key={ind}>
                <label>{ele.name}</label>
                <input
                  type="radio"
                  value={ele.value}
                  name="radio"
                  onChange={event =>
                    this.setState({ radioS: event.target.value })
                  }
                />
              </React.Fragment>
            );
          })}
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Events;

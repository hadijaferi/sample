import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    // chanta ravesh has k in ravesh parini toye foucos hme value input ro mitonim har jaei bgirirm mese aln to buuton send
    this.inputRef = React.createRef();
  }
  //   vsghti page bala miad focus mishe ro input
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.clickHandler()}>Submit</button>
      </div>
    );
  }
}

export default RefDemo;

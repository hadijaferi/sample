import React, { Component } from "react";
import InputRef from "./InputRef";
class FocusInput extends Component {
  // mikhaim vaghti Button click shd input focus beshe
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  _handleClick = () => {
    // focusInput y function k onvar seda zade shde vli b vasile current mitonim bgirimesh
    console.log(this.componentRef.current);
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        {/* az tarigh in ref midhe b azaye copon
        
        
        ent input dasresi peida krd */}
        <InputRef ref={this.componentRef} />
        <button onClick={() => this._handleClick()}>Focus</button>
      </div>
    );
  }
}

export default FocusInput;

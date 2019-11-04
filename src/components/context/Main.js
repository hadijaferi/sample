import React, { Component } from "react";
import Text1 from "./Text1";
import { UserProvider } from "./UserContext";
class Main extends Component {
  render() {
    return (
      <UserProvider value="Jaferi">
        <Text1 />
      </UserProvider>
    );
  }
}

export default Main;

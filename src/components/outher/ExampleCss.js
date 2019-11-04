import React, { Component } from "react";
// vaghti injori import mikonim on style b kole page dade mishe  App.css baraye style haye koli hast
// import "./App.css";
// az module.css bata har ele use mikonim ba className
import styles from "./style.module.css";
// import "./mySass.scss";
class ExampleCss extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "blue",
          flex: 1,

          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p
          style={{
            color: "red",
            textAlign: "center"
          }}
        >
          Welcome
        </p>
        <br />
        <p className={styles.bigblue}>hadi jaferi</p>
      </div>
    );
  }
}

export default ExampleCss;

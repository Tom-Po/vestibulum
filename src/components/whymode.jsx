import React, { Component } from "react";
import ProgressWheel from "../components/progresswheel";

class Whymod extends Component {
  state = {};
  render() {
    return (
      <div className="modversus">
        <h1>Why modus versus?</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla alias,
          repellendus.
        </p>
        <div>
          <img src="" alt="" />
        </div>
        <div className="wheel-wrapper">
          <ProgressWheel />
          <ProgressWheel />
          <ProgressWheel />
          <ProgressWheel />
        </div>
      </div>
    );
  }
}

export default Whymod;

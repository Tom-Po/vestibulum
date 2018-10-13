import React, { Component } from "react";

class ProgressWheel extends Component {
  // state = {  }
  render() {
    return (
      <div className="meters">
        <svg viewBox="0 0.5 10 8">
          <path
            d="M2= 8 A 4 4 0 1 1 8 8"
            fill="none"
            strokeWidth="0.78"
            stroke="#E8F6FD"
          />
          <path
            className="loader"
            d="M2 8 A 4 4 0 1 1 8 8"
            fill="none"
            strokeWidth="0.78"
            stroke="#00ACEE"
          />
        </svg>
      </div>
    );
  }
}

export default ProgressWheel;

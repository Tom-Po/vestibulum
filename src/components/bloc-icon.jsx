import React, { Component } from "react";

class BlocIcon extends Component {
  state = {};
  render() {
    return (
      <div className="blocicon">
        <img src={this.props.icon} alt="" />
        <h3>{this.props.title}</h3>
        <p>{this.props.txt}</p>
        <button>read more</button>
      </div>
    );
  }
}

export default BlocIcon;

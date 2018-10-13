import React, { Component } from "react";
import Logo from "../img/logo.jpg";

class Header extends Component {
  // state = {  }
  render() {
    return (
      <div className="main-header">
        <a href="/">
          <img id="logo" src={Logo} alt="" />
        </a>
        <nav>
          <ul className="main-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;

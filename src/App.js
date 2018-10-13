import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Slider from "./components/slider";
import Services from "./components/services";
import Blocks from "./components/blocks";
import Whymod from "./components/whymode";

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Slider />
        <Services />
        <Blocks />
        <Whymod />
      </div>
    );
  }
}

export default App;

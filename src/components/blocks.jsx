import React, { Component } from "react";
import BlocIcon from "../components/bloc-icon";
import Proptypes from "prop-types";

import Icon1 from "../img/icon_1.png";
import Icon2 from "../img/icon_2.png";
import Icon3 from "../img/icon_3.png";
import Icon4 from "../img/icon_4.png";

let text =
  "Phasellus elementum scelerisque cursus. Aenean iaculis nulla nulla, non faucibus libero pretium quis. Morbi ut nulla id quam posuere egestas. ";

class Blocks extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="bloc-wrapper">
          <BlocIcon title="suspendisse" icon={Icon1} txt={text} />
          <BlocIcon title="maecenas" icon={Icon2} txt={text} />
          <BlocIcon title="aliquam" icon={Icon3} txt={text} />
          <BlocIcon title="habitasse" icon={Icon4} txt={text} />
        </div>
      </div>
    );
  }
}

export default Blocks;

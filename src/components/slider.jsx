import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Sliderimg from "../img/slider.jpg";
import Sliderimg2 from "../img/slider2.jpg";
import Sliderimg3 from "../img/slider3.jpg";
import Sliderimg4 from "../img/slider4.jpg";
import "../carousel.css";

// import Arrow from "../img/arrow-slider.png";

class Slider extends Component {
  // state = {  }

  render() {
    return (
      <div className="slider">
        <Carousel showStatus={false} showArrows={true}>
          <div>
            <img src={Sliderimg} />
            <h1>Vestibulum</h1>
            <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laboriosam dolore neque dignissimos debitis facere.
            </p>
          </div>

          <div>
            <img src={Sliderimg2} />
            <h1>Vestibulum</h1>
            <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laboriosam dolore neque dignissimos debitis facere.
            </p>
          </div>

          <div>
            <img src={Sliderimg3} />
            <h1>Vestibulum</h1>
            <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laboriosam dolore neque dignissimos debitis facere.
            </p>
          </div>

          <div>
            <img src={Sliderimg4} />
            <h1>Vestibulum</h1>
            <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laboriosam dolore neque dignissimos debitis facere.
            </p>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Slider;

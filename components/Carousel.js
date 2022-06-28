import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <br></br>
        <Carousel dynamicHeight>
          <div>
            <img src="/images/slide1.png" alt="image1" />
          </div>
          <div>
            <img src="/images/slide2.png" alt="image2" />
          </div>
        </Carousel>
      </div>
    );
  }
}

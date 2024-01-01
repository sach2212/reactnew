// import React, { Component } from 'react'
import React from "react";

import img3 from "../../assets/homebg6.jpg";
import img1 from "../../assets/homebg4-min.jpg";

import "./hero.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  // npm install react-slick slick-carousel
  // class Hero extends Component {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  return (
    <div>
      <Slider className="slider" {...settings}>
        <div className="slider_content">
          <div className="caption">
            <h1>welcome to matheran</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          <img
            style={{ background: "no-repeat" }}
            src={img1}
            className="myimage"
          />
        </div>

        <div className="slider_content">
          <div className="caption">
            <h1>welcome to matheran</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          <img
            style={{ background: "no-repeat" }}
            src={img3}
            className="myimage"
          />
        </div>

        {/* <div>
    <img style={{width:"100%", background:"no-repeat"}} src={img1} className='myimage' />
    <h1>welcome to matheran</h1>
      
      <div className="caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
    </div>
   */}
      </Slider>
    </div>
  );
}

export default Hero;

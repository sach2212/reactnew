// import React, { Component } from 'react'
import React from "react";

import img3 from "../../assets/homebg6.jpg";
import img1 from "../../assets/homebg4-min.jpg";
import swim from "../../assets/images/room1(1).jpeg";

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
            <h1>best budget resort in matheran</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="button">book now</button>
       
         
          </div>
          <img
            style={{ background: "no-repeat" }}
            src={img3}
            alt="d"
            className="myimage"
          />
        </div>

        
        <div className="slider_content">
          <div className="caption">
            <h1>Discover Matheran's Beauty with Hiltone </h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="button">book now</button>
       
         
          </div>
          <img
            style={{ background: "no-repeat" }}
            src={swim}
            alt="d"
            className="myimage"
          />
        </div>
        
        <div className="slider_content">
          <div className="caption">
            <h1>experience the glimpse of matheran at hillton</h1>
            <p>Discover the charm of Matheran with a memorable stay at Hilltone.</p>
            <button className="button">book now</button>
          </div>
          <img
            style={{ background: "no-repeat" }}
            src={img1}
            alt="d"
            className="myimage"
          />
        </div>

        
        
      
        
      </Slider>
    </div>
  );
}

export default Hero;

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
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider className="slider" {...settings}>
       
        
      <div className="slider_content">
          <div className="caption">
            <h1>best budget resort in matheran</h1>
            <p>Discover Blissful Retreats at Hiltone: Your Perfect Escape Awaits.</p>
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

          <h1> explore hillton property</h1>
            <p>Where Beauty Meets the Budget </p>
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
          <h1>Affordable Elegance at Hiltone </h1>
            <p>Beauty and Affordability Crafted in Every memories</p>
            
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

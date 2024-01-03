import React from "react";
import "./property.css";
import room from "./../../assets/images/room1.jpeg";
import room2 from "./../../assets/images/room2.jpeg";
import swim from "./../../assets/images/swim.jpeg";
import event from "./../../assets/images/event.jpeg";

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Property() {
  const settings = {
    dots: true,
    // className: "center",
    centermode: true,
    infinite: true,
    speed: 800,
    cssEase: "linear",
    centerpadding: "60px",
    slidesToShow: 2,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 762,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      }
    ]
  };
  return (
    <div className="property">
      <h1 className="heading">Property</h1>

      <div className="propcarousel">
 
        <Slider {...settings}>
          <div className="propimg">
            <img
              style={{ background: "no-repeat" }}
              src={event}
              className="myimage"
              alt="d"
            />
          </div>

          <div className="propimg">
            <img
              style={{ background: "no-repeat" }}
              src={room}
              className="myimage"
              alt="d"
            />
          </div>
          <div className="propimg">
            <img
              style={{ background: "no-repeat" }}
              src={swim}
              className="myimage"
              alt="d"
            />
          </div>
          <div className="propimg">
            <img
              style={{ background: "no-repeat" }}
              src={room2}
              className="myimage"
              alt="d"
            />
          </div>
        </Slider>
      </div>
      <button className="button">explore now</button>
    </div>
  );
}

export default Property;

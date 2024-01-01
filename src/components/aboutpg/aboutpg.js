
import React from "react";
import "./aboutpg.css";
import Navbar from "../navbar/Navbar";
import home from "./../../assets/homebg4-min.jpg";
function Aboutpg() {
  
  
  return (
    <div className="aboutpage"> 
    <Navbar></Navbar>
    <div className="aboutpg">
      
      <div className="maincontent">
        <h3 className="headings">about</h3>
        <p>
          At Hiltone New Hotel and Resort, we believe in crafting unforgettable
          experiences amidst the serene beauty of Matheran. Nestled in the heart
          of nature, our resort is a harmonious blend of luxury, comfort, and
          tranquility. Whether you are seeking a peaceful retreat or an
          adventurous getaway, Hiltone is your gateway to an enchanting stay.
        </p>
      </div>

      <div className="peacefull">
        <div className="p_content">
          <h3 className="headings">peacefull enviornment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            asperiores cum nemo cumque provident quas tempora maiores. Cum,
            suscipit ex.
          </p>

          <button className="button">know more</button>
        </div>

        <div className="p_img">
          <img src={home} alt="d" />
          <div className="media_c">
          <h3 className="headings">peacefull enviornment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            asperiores cum nemo cumque provident quas tempora maiores. Cum,
            suscipit ex.
          </p>

          <button className="button">know more</button>
        </div>
        </div>
      </div>

      <div className="peacefull">
        <div className="p_img">
          <img src={home} alt="d" />
        </div>

        <div className="p_content services">
          <h3 className="headings">services & facilities</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            asperiores cum nemo cumque provident quas tempora maiores. Cum,
            suscipit ex.
          </p>

          <button className="button">know more</button>
        </div>
      </div>

      <div className="peacefull services_P">
        <div className="p_content">
          <h3 className="headings">map & directions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            asperiores cum nemo cumque provident quas tempora maiores. Cum,
            suscipit ex.
          </p>
          <button className="button">know more</button>
        </div>

        <div className="p_img">
          <img src={home} alt="d" />

          <div className="media_c">
            <h3 className="headings">map& directions</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              asperiores cum nemo cumque provident quas tempora maiores. Cum,
              suscipit ex.
            </p>
            <button className="button">know more</button>
          </div>
        </div>
      </div>
    </div>
    </div>   
  );
}

export default Aboutpg;

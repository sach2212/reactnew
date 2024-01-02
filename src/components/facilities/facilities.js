import React from "react";
import "./facilities.css";
import room from "./../../assets/images/room1.jpeg";
import music from "./../../assets/bonefire.jpg";
import trekking from "./../../assets/trekking.jpg";
import bonefire from "./../../assets/tent.jpg";

function Facilities() {
  return (
    <div className="facilities">
      <h1 className="heading">   Facilities</h1>

      <div className="container">
        <div className="rooms">
          <div className="image">
            <img src={room} alt="d" className="img"></img>
            <div className="content">
              <h4>rooms</h4>
              <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dicta sunt facilis sit ab ex.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque eligendi voluptate inventore id dolores!
              
            </p>
            </div>
          </div>
        </div>

        <div className="music">
          <img src={music}  alt="d" className="img"></img>
          <div className="content">
            <h4>musical night</h4>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dicta sunt facilis sit ab ex.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque eligendi voluptate inventore id dolores!
             
            </p>
          </div>
        </div>

        <div className="forest">
          <img src={trekking} alt="d" className="img"></img>
          <div className="content">
            <h4>treking & camping</h4>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dicta sunt facilis sit ab ex.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque eligendi voluptate inventore id dolores!
             
            </p>
          </div>
        </div> 
        
          <div className="forest">
          <img src={bonefire} alt="d" className="img"></img>
          <div className="content">
            <h4>tent house</h4>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dicta sunt facilis sit ab ex.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque eligendi voluptate inventore id dolores!
             
            </p>
          </div>
        </div>
      </div>
      <button className="button">know more</button>
    </div>
  );
}

export default Facilities;

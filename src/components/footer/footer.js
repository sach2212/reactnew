import React from "react";
import "./footer.css";
 
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="menu">
          <h3> links</h3>
          <a href="home">home</a>
          <a href="property">property</a>
          <a href="contact">contact</a>
          <a href="about">about</a>
        </div>

        <div className="keywords">
          <h3>quick search</h3>
          <p>best hotels in matheran</p>
          <p>budget hotels in matheran</p>
          <p>cheap hotels in matheran</p>
          <p>best hotels in matheran</p>
        </div>
        <div className="keywords">
          <h3>contact</h3>
          <p>Hilltone Near Rugby Hotel Panorama </p>
          <p> matheran 410102</p>
          <p>9371692332 </p>
          <p>hamiltonresort@gmail.com </p>
        </div>
      </div>

      {/* <span>Copyright © 2023 hilltone resort Matheran | Designed & Developed by webzone</span> */}
    </div>
  );
}

export default Footer;

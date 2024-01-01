import React, { useState } from "react";
import "./propertypage.css";
import Navbar from "../navbar/Navbar.js";
import Fotter from "../footer/footer.js";
import imgs from "./../../assets/images/room1.jpeg";
import imgs1 from "./../../assets/images/room2.jpeg";

import { IoClose } from "react-icons/io5";

function Propertypage() {
  let data = [
    {
      id: 1,
      imgSrc: imgs,
    },
    {
      id: 1,
      imgSrc: imgs1,
    },
    {
      id: 3,
      imgSrc: imgs,
    },
    {
      id: 4,
      imgSrc: imgs,
    },
    {
      id: 5,
      imgSrc: imgs,
    },
    {
      id: 6,
      imgSrc: imgs,
    },
  ];

  const [model, setmodel] = useState(false);
  const [tempimgSrc, setimgSrc] = useState("");

  const getimg = (imgSrc) => {
    setimgSrc(imgSrc);
    setmodel(true);
  };

  return (
    <>
      <Navbar />
      <div className="galcontent">
        <h1 className="heading">gallery</h1>
        <p>
          Welcome to Hilltone Hotel – Discover comfort and affordability at its
          finest as we present ourselves as one of the best budget hotels in
          Matheran.  
          </p>
            <p> Whether you're a couple seeking a romantic escape or a
          family in search of a budget-friendly resort with a swimming pool,
          explore our gallery and witness the captivating beauty that defines our sanctuary in Matheran.
        </p>
      </div>

      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <IoClose onClick={() => setmodel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getimg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="" />
            </div>
          );
        })}
      </div>

      <Fotter />
    </>
  );
}

export default Propertypage;

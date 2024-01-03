import React, { useState } from "react";
import "./propertypage.css";
import Navbar from "../navbar/Navbar.js";
import Fotter from "../footer/footer.js";
import imgs from "./../../assets/images/room1.jpeg";
import dine from "./../../assets/images/dine.jpeg";
import room5 from "./../../assets/images/room5.jpeg";
import room6 from "./../../assets/images/room6.jpeg";

import toilet from "./../../assets/images/toilet.jpeg";
import tent1 from "./../../assets/images/tent1.avif";
import event from "./../../assets/images/event.jpeg";
import swim from "./../../assets/images/swim.jpeg"
import swim2 from "./../../assets/images/swim2.jpeg"

import { IoClose } from "react-icons/io5";

function Propertypage() {
  let data = [
    {
      id: 1,
      imgSrc: event,
    },
    {
      id: 2,
      imgSrc: room6,
    },
    {
      id: 3,
      imgSrc: swim,
    },
    {
      id: 4,
      imgSrc: dine,
    },
    {
      id: 5,
      imgSrc: toilet,
    },
    {
      id: 6,
      imgSrc: tent1,
    },
     {
      id: 7,
      imgSrc: room5,
    },
    {
      id: 8,
      imgSrc: swim2,
    },
    {
      id: 9,
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
    
    <div className='bigcont'>
      <Navbar>
      </Navbar>
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
        <img src={tempimgSrc} alt="s" />
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
    </div>
  );
}

export default Propertypage;

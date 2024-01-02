import React from "react";
import "./offer.css";

import wifiimg from "./../../assets/wifi (1).png";
import rooms from "./../../assets/bed.png";
import support from "./../../assets/support.png";
import swim from "./../../assets/swimming.png";

import bonefire from "./../../assets/bonfire.png";
import food from "./../../assets/restaurant.png";
import tent from "./../../assets/tent.png";
import forest from "./../../assets/forest.png";

function Offer() {
  return (
    <div className="offers">
      <div className="offer_cont">
        <div className="content">
          <div className="content-spanfont">
            <div className="content-span">
              <span>
                <img src={wifiimg} alt="d"  ></img>
                <h3>free wifi</h3>
                <p>
                  Relax without
                  sacrificing connectivity at Hilltone, where modern amenities
                  harmonize with the timeless allure of Matheran.
                </p>
              </span>

              <span>
                <img src={rooms} alt="d"></img>
                <h3>spacious rooms</h3>
                <p>
                  Hilltone offers a budget hotel in matheran for couples or
                  family and friends with the the perfect ambiance and comfort
                </p>
              </span>
              <span>
                <img src={support} alt="d"></img>
                <h3>customer service</h3>
                <p>
                  Whether you have special requests, need assistance with local
                  information our staff is here to make your stay seamless and
                  enjoyable.
                </p>
              </span>

              <span>
                <img src={bonefire} alt="d"></img>
                <h3>events</h3>
                <p>
                  Our bonfire facilities provide the perfect setting to gather
                  with friends and family, creating memorable moments under the
                  starlit sky.
                </p>
              </span>
            </div>

            <div className="content-span2">
              <span>
                <img src={swim} alt="d"></img>
                <h3>swimming pool</h3>
                <p>
                  Indulge in the ultimate luxury retreat at Hilltone – the best
                  resort in Matheran with a swimming pool,Hilltone offering a
                  serene escape amidst the natural beauty of Matheran
                </p>
              </span>

              <span>
                <img src={food} alt="d"></img>
                <h3>unlimitted buffet</h3>
                <p>
                  Savor the delight of an unlimited buffet experience at
                  Hilltone, your quintessential budget hotel in the Matheran,
                  where we prioritize hygiene quality in every culinary offering
                </p>
              </span>

              <span>
                <img src={tent} alt="d"></img>
                <h3>indoor-games</h3>
                <p>
                  At Hilltone, we've curated a distinctive camping experience
                  where the boundaries between indoor and outdoor living blur,
                  providing an immersive escape into the heart of Matheran's
                  natural splendor.
                </p>
              </span>

              <span>
                <img src={forest} alt="d"></img>
                <h3>forest</h3>
                <p>
                  Wake up to the symphony of birdsong and the gentle rustle of
                  leaves, as our resort seamlessly blends with the lush forest
                  surroundings. Each step into the forest area is an exploration
                  of nature's wonders
                </p>
              </span>
            </div>
          </div>

          <div className="button">
            <button className="button">know more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Offer;

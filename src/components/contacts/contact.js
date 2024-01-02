import React from "react";
import Navbar from "../navbar/Navbar.js";
import Fotter from "../footer/footer.js";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contactdata">
        <div className="contact-content">
          <h1>
            how to reach <span>hilltone</span>{" "}
          </h1>
        </div>
      </div>

      <div className="contactus">
        <h1 className="heading">contact us</h1>

        <div className="contact_box">
          <div className="contatc_box1">
            <div className="cont1">
              <h4> 1. train from dadar</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                assumenda minima ea amet itaque fugiat quas in delectus dolor
                quasi?
              </p>
            </div>

            <div className="cont1">
              <h4> 2. train from dadar</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                assumenda minima ea amet itaque fugiat quas in delectus dolor
                quasi?
              </p>
            </div>

            <div className="cont1">
              <h4>3. train from dadar</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                assumenda minima ea amet itaque fugiat quas in delectus dolor
                quasi?
              </p>
            </div>

            <div className="cont1">
              <h4>4. train from dadar</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                assumenda minima ea amet itaque fugiat quas in delectus dolor
                quasi?
              </p>
            </div>

            <div className="cont1">
              <h4>5. train from dadar</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                assumenda minima ea amet itaque fugiat quas in delectus dolor
                quasi?
              </p>
            </div>

            <div className="cont1">
              <h4>6. train from dadar</h4>
              <p>
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                assumenda minima ea amet itaque fugiat quas in delectus dolor
                quasi?
              </p>
            </div>
        
          </div>
          <button className="button">book a call now</button>

          <div className="contatc_box2">
            <div className="destination">
              <div>
                <iframe
                title="map"
                  width="100%"
                  height="500"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=HILLTONE,q=MATHERAN,%20MAHARASHTRA+(HILTONE%20RESORT%20AND%20VILLA)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fotter />
    </div>
  );
};

export default Contact;

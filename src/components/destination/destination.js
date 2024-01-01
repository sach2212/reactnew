import React from "react";
import "./destination.css";

function Destination() {
  return (
    <div className="destination">
      <h1 className="heading"> destination</h1>
      <div style={{width: "100%"}}>
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=HILLTONE,q=MATHERAN,%20MAHARASHTRA+(HILTONE%20RESORT%20AND%20VILLA)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          
        </iframe>
      </div>
    </div>
  );
}

export default Destination;

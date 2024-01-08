import React from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

// import './App.css';
import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/hero/Hero.js";
import Offer from "./components/offers/Offer.js";
import { About } from "./components/about/About.js";
import Facilities from "./components/facilities/facilities.js";
import Property from "./components/property/property.js";
import Destination from "./components/destination/destination.js";
import Booking from "./components/booking/booking.js";
import Footer from "./components/footer/footer.js";

function App() {
  return (
    <div>
      {/* Use Routes instead of Switch */}
      <Routes>
        {/* Your routes go here */}

        {/* <Navbar /> */}
        <Route path="/about" element={<About />} />
        <Route path="/property" element={<Property />} />
        <Route path="/contact" element={<Footer />} />
    
        <Route path="/" element={<Navbar />} />
            <Route path="/" element={<Offer />} />
      </Routes>
    </div>
  );
}

export default App;

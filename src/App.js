
 import Navbar from "./components/navbar/Navbar.js"
 
 
 // import './App.css';
import Hero from "./components/hero/Hero.js"
import Offer  from "./components/offers/Offer.js";
import { About  } from "./components/about/About.js";
import Facilities from "./components/facilities/facilities.js";
import Property from "./components/property/property.js"
import Destination from "./components/destination/destination.js"
import Booking from "./components/booking/booking.js"
import Footer from "./components/footer/footer.js"
 
import {Route} from "react-router-dom"
import {Routes} from "react-router-dom"
 
function App() {
  return (

    <div>
     
      <Navbar />  
      <Hero/>
      <About/>
      <Offer/>
     
      <Facilities/>
      <Property/>
      <Booking/>
      <Destination/>
      
    
      <Footer/>
   
      
      </div>


  );
}

export default App;

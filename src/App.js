

 import React from 'react';
import { Route, Switch } from 'react-router-dom';
 import { HashRouter as Router } from 'react-router-dom';

 // import './App.css';
 import Navbar from "./components/navbar/Navbar.js"
import Hero from "./components/hero/Hero.js"
import Offer  from "./components/offers/Offer.js";
import { About  } from "./components/about/About.js";
import Facilities from "./components/facilities/facilities.js";
import Property from "./components/property/property.js"
import Destination from "./components/destination/destination.js"
import Booking from "./components/booking/booking.js"
import Footer from "./components/footer/footer.js"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={Aboutpg} />
        <Route path="/property" component={Propertypage} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

 
 
// function App() {
//   return (
      
//     <div>
     
//       <Navbar />  
//       <Hero/>
//       <About/>
//       <Offer/>
     
//       <Facilities/>
//       <Property/>
//       <Booking/>
//       <Destination/>
      
    
//       <Footer/>
   
      
//       </div>


//   );
// }

export default App;

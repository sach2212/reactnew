import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
 
import './navbar.css'
import {useState} from "react";
import logo from "./../../assets/updt/upLOGO-HILLTONE-BLACK.png"
import { IoClose } from "react-icons/io5";

import { BrowserRouter as Router,  Link } from "react-router-dom"
// import { Link } from "react-router-dom"
function Navbar() {
  const [nav,setnav]= useState(false)
  const toogle =()=> setnav(!nav)
  
    return (
    <div className="navbar">

      <ul className="nav-menu">
     
        <li> <Link to= '/'> home</Link>  </li>
        <li> <Link  to= '/about'> about</Link>  </li>
   
        <div className="logo">
        
        <img src={logo} alt="des"></img>
                
        <div className="menu-btn"  onClick={toogle} >
        <RiMenu3Fill className="icon"/>
        
      </div>
      </div>
      <li> <Link to= '/property'> property</Link>  </li>
        <li> <Link to= '/contact'> contact</Link>  </li>
     
      </ul>

      

      <div className="overlay"></div>
      

      <div className={nav?'mobile_menu active' : 'mobile_menu'}>
      <IoClose onClick={ () => setnav(!nav)  }/>

        <ul className="mobile_ul">
        <li> <Link to= '/'> home</Link>  </li>
        <li> <Link to= '/about'> about</Link>  </li>
      
       <li> <Link to= '/property'> property</Link>  </li>
        <li> <Link to= '/contact'> contact</Link>  </li>

       
        </ul> 

      </div>



</div>
       

  );
}

export default Navbar;

import "./index.css"
import Connections from "../Connections"
import {Link } from "react-router-dom";
const Navbar=()=>{
  return(
    <div id="nav-holder">
    <nav id="topbar">
    <Link to="/">
    <div class="topbar-elements">
      <h2>HOME</h2>
    </div>
    </Link>
    <Link to="/resume">
    <div class="topbar-elements"> 
      <h2>RESUME</h2>
    </div>
    </Link>
    <Link to="/works">
    <div class="topbar-elements">
      <h2>WORKS</h2>
    </div>
    </Link>
    <Link to="/contact">
    <div class="topbar-elements">
      <h2>CONTACT</h2>
    </div>
    </Link>
    
  </nav>
   <Connections/>
  </div>
  )
}
export default Navbar;
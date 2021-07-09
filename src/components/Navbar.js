import React, { Component } from 'react';
import '../Style/navbar__.scss'
import Image from "../Image/logo.png"


 class Navbar extends Component {
  render() { 
    return (
      <div className="nav">
        <div className="btn-img">
         <div id="mainbox" onClick={openFunction} className="openbtn">&#9776;</div>
         <div className="picture"><img src={Image} alt="" /></div>
        </div>
         <div className="sidemenu" id="menu">
           <a href="#">Page1</a>
           <a href="#">Page2</a>
           <a href="#">Page3</a>
           <a href="#">Page4</a>
           <a href="#">Page5</a>
           <a href="#"  onClick={closeFunction} className="closebtn">&times;</a>
         </div>
        
      
      </div>
    )
  }
}




const openFunction = () =>{
        
        document.getElementById("menu").style.width="250px"
}
const closeFunction = () =>{
        document.getElementById("menu").style.width="0px"
}

export default Navbar;



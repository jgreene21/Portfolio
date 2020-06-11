import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom"; 
import Instagram from "./instagram.png";
import Linkedin from "./linkedin.png";
import Github from "./github.jpg";


const Navbar = () => (
  <>
  <div style={{marginTop: "30px", textAlign: "right", marginRight: "150px"}}>
    
  </div>
  <div style={{marginTop: "30px", textAlign: "right", marginRight: "100px"}}>
      <Image src= {Github} style={{height: "30px", width: "50px", marginBottom: "20px", marginRight: "-5px"}}
      href="https://github.com/jgreene21"/>
      <br/>
      <Image src= {Linkedin} style={{height: "25px", width: "35px", marginBottom: "20px"}}
      href="https://www.linkedin.com/in/julie-greene-slc/"/>
      <br/>
      <Image src= {Instagram} style={{height: "30px", width: "35px"}}
      href="https://www.instagram.com/julescgreene/"/>
  </div>
  </>
);

const style = {
  nav: {
      borderBottom: "none",
      boxShadow: "none",
  }
}


export default Navbar;
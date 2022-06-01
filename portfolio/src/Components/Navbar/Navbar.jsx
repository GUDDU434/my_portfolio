import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
// import {Link,Button,Element,} from 'react-scroll'

export const Navbar = ({handleabout,handleprojects,handlecontacts,handleprofile,handleskills}) => {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.logo}>
          <img className={styles.img} src={logo} alt="" />
        </div>
        <div className={styles.navContainer}>
          <div onClick={handleprofile}> Home</div>
          
          <div onClick={handleskills}>Skills</div>

          <div onClick={handleprojects}>Projects</div>
          
          <div onClick={handleabout}>About</div>

          <div onClick={handlecontacts}>Contact</div>
        </div>
      </div>
    </>
  );
};

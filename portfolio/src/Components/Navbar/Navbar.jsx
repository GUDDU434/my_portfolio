import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
// import {Link,Button,Element,} from 'react-scroll'

export const Navbar = ({handleabout,handleprojects,handlecontacts,handleprofile}) => {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.logo}>
          <img height={"90px"} src={logo} alt="" />
        </div>
        <div className={styles.navContainer}>
          <div onClick={handleprofile}> Profile</div>
          <div onClick={handleabout}>About</div>
          <div onClick={handleprojects}>Projects</div>
          <div onClick={handlecontacts}>Contacts</div>
        </div>
      </div>
    </>
  );
};

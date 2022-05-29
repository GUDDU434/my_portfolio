import React, { useRef } from "react";
import { About } from "../About/About";
import { Contacts } from "../contacts/Contacts";
import { Navbar } from "../Navbar/Navbar";
import { Profile } from "../Profile/Profile";
import { Projects } from "../projects/Projects";
import { Skills } from "../Skills/Skills";
import styles from "./Mainpage.module.css";

export const Mainpage = () => {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);
  const profile = useRef(null);

  const handleprofile = () => {
    window.scrollTo({
      top: profile.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleabout = () => {
    window.scrollTo({
      top: about.current.offsetTop,
      behavior: "smooth",
    });
  };
  const handleprojects = () => {
    window.scrollTo({
      top: projects.current.offsetTop,
      behavior: "smooth",
    });
  };
  const handlecontacts = () => {
    window.scrollTo({
      top: contacts.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.maindiv}>
      <Navbar
        handleabout={handleabout}
        handleprojects={handleprojects}
        handlecontacts={handlecontacts}
        handleprofile={handleprofile}
      />
      <div ref={profile}>
        <Profile />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={projects}>
        <Projects />
      </div>
      <div ref={contacts}>
        <Contacts />
      </div>
    </div>
  );
};

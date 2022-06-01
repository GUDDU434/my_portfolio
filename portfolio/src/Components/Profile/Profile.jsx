import React from "react";
import styles from "./Profile.module.css";
import profilepic from "../images/profilepic.jpg";

export const Profile = () => {
  const goto = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className={styles.profile}>
      <div className={styles.namediv}>
        <h1>
          HEY, MY NAME IS <br />
          <span id={styles.name}>GUDDU ALI</span>
        </h1>
        <p className={styles.title}>I AM A FULL STACK WEB DEVELOPER</p>
        <p className={styles.tagline}>
          I enjoy coding and devloping user centeric web aplication! <br /> Talk
          and discuss about new technology!
        </p>
        <div className={styles.buttondiv}>
          <button
            onClick={() =>
              goto(
                "https://drive.google.com/file/d/1FbxhZn7uVaJGnv-kp6xVJx98brM5HZlK/view?usp=sharing"
              )
            }
          >
            Resume
          </button>
          <button
            onClick={() =>
              goto("https://www.linkedin.com/in/guddu-ali-00697a119/")
            }
          >
            LinkedIn
          </button>
          <button onClick={() => goto("https://github.com/GUDDU434")}>
            GitHub
          </button>
        </div>
      </div>
      <div className={styles.profilepic}>
        {" "}
        <img src={profilepic} alt="" />
      </div>
    </div>
  );
};

import React from "react";
import styles from "./projects.module.css";
import pic1 from "../images/1.JPG";
import pic2 from "../images/2.JPG";
import pic3 from "../images/3.JPG";

export const Projects = () => {
  const handleclick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className={styles.pDiv}>
      <h1 id={styles.heading}>Projects</h1>
      <div className={styles.outer}>
        <div>
          <h1>KFC</h1>
          <img src={pic1} alt="" />

          <p className={styles.disc}>
            KFC (Kentucky Fried Chicken) is an American fast food restaurant
          </p>
          <div className={styles.tech1}>
            <h3>Tech Stack:</h3>
            <div className={styles.tech}>
              <p>ReactJS</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
          <div className={styles.repobtn}>
            <p
              onClick={() =>
                handleclick("https://github.com/CodEsHiVaz/kfc-clone-react")
              }
            >
              Repo
            </p>
            <p
              onClick={() =>
                handleclick("https://mellow-froyo-f88246.netlify.app/")
              }
            >
              Visit Deploy link
            </p>
          </div>
        </div>
        <div>
          <h1>MamaEarth</h1>
          <img src={pic2} alt="" />
          <p className={styles.disc}>
            Buy Mamaearth Chemical & Toxin Free Natural & Safe Skincare Products
            Online.
          </p>
          <div className={styles.tech1}>
            <h3>Tech Stack:</h3>
            <div className={styles.tech}>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>NodeJS</p>
            </div>
          </div>
          <div className={styles.repobtn}>
            <p
              onClick={() =>
                handleclick("https://github.com/Arfeen98/MamaEarthclone")
              }
            >
              Repo
            </p>
            <p
              onClick={() =>
                handleclick("https://calm-sawine-27b8ed.netlify.app/")
              }
            >
              Visit Deploy link
            </p>
          </div>
        </div>
        <div>
          <h1>Expedia</h1>
          <img src={pic3} alt="" />
          <p className={styles.disc}>An American travel booking website</p>
          <div className={styles.tech1}>
            <h3>Tech Stack:</h3>
            <div className={styles.tech}>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Nodejs</p>
            </div>
          </div>
          <div className={styles.repobtn}>
            <p
              onClick={() =>
                handleclick("https://github.com/GUDDU434/Expedia_CW_project")
              }
            >
              Repo
            </p>
            <p
              onClick={() =>
                handleclick(
                  "https://epic-babbage-48d7bc.netlify.app/index.html"
                )
              }
            >
              Visit Deploy link
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

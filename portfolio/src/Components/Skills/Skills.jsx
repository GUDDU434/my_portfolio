import React from 'react'
import styles from './skills.module.css'

export const Skills = () => {
  const click = (url)=>{
    window.open(url,"_blank")
  }
  return (
    <div className={styles.skilldiv}><h1>Skills and Frameworks</h1>
    
    <div className={styles.skouter}>
    <div className={styles.skf1}>
        <h1>Technical Skills</h1>
        <div onClick={()=>click("https://en.wikipedia.org/wiki/HTML")}>HTML</div>
        <div onClick={()=>click("https://www.w3schools.com/css/")}>CSS</div>
        <div onClick={()=>click("https://reactjs.org/")}>ReactJS</div>
        <div onClick={()=>click("https://redux.js.org/")}>RedusJS</div>
        <div onClick={()=>click("https://www.w3schools.com/js/")}>JavaScript</div>
        <div onClick={()=>click("https://nodejs.org/en/")}>Nodejs</div>
        <div onClick={()=>click("https://www.mongodb.com/")}>MongoDB</div>
    </div>
    <div className={styles.skf2}>
    <h1>Soft Skills</h1>
    <div>Inter personal Skill</div>
        <div>Problem Solving</div>
        <div>Creative Thinking</div>
        <div>Leadership Skills</div>
        <div>Time Management</div>
        <div> Team work</div>
    </div>
    </div>
    </div>
  )
}

import React from 'react'
import styles from './cont.module.css'
import git from '../images/git.png'

export const Contacts = () => {
  const click =(url)=>{
    window.open(url,"_blank")
  }
  const year = new Date().getFullYear()
  return (
    <div className={styles.contDiv}>
        <h1>Contact me:</h1>
        <div className={styles.mobile}>
            <p>Call : <span>+91 8169269136</span> </p>
            <p>Mail : <span>gudduali93@yahoo.com</span>  </p>
        </div>
        <div className={styles.logodiv}>
            <div 
            onClick={() =>
              click("https://www.linkedin.com/in/guddu-ali-00697a119/")
            }
            >
              <img height={"80px"}  src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png" alt="" />  </div>
            <div
            onClick={() =>
              click("https://github.com/GUDDU434")
            }
            ><img height={"60px"} style={{borderRadius:"5px",marginTop:"10px"}} src={git} alt="" /></div>
        </div>

        <div className={styles.copyright}><p>Design and devloped by Guddu Ali</p>
        <p>© {year} All copyright reserved.</p>
        </div>
    </div>
  )
}

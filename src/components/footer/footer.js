import React from "react";
import styles from "./footer.module.css"
import footerLogo from "../../assets/header1logo.jpg"
import gmaillogo from "../../assets/gmaillogo.jpg"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"


const Footer = () => {
    
    return (
        <div className={styles.footercontainer}>
            
            <div className={styles.col}>
                
                <img src={footerLogo} alt="footerLogo"></img>
                <div>
                <h3>comany name</h3>
               
                    <ul>
                        <li>address</li>
                        <li>email</li>
                    </ul>
               

                </div>
               
            </div>

            <div className={styles.col}>
                <div>
                    <a  href="https://github.com/AshfiM" target="__blank">
                    <img src={github} alt="fblogo"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/ashfimohamed/" target="__blank">
                    <img src={linkedin} alt="instalogo" ></img>
                    </a>
                    <a href="mailto:ashfimohamed@gmail.com">
                    <img src={gmaillogo} alt="gmailogo"></img>
                    </a>
      
                </div>
            </div>

            <div className={styles.col}>
               
            </div>

            <div className={styles.col}>
                
            </div>
        </div>
    )
}

export default Footer;
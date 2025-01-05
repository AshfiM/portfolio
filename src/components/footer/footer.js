import React from "react";
import styles from "../footer/footer.module.css"
import footerLogo from "/Users/ashfi/Desktop/react/react-components/src/assets/header1logo.jpg"
import fblogo from "/Users/ashfi/Desktop/react/react-components/src/assets/fblogo.png"
import instalogo from "/Users/ashfi/Desktop/react/react-components/src/assets/instalogo.png"
import gmaillogo from "/Users/ashfi/Desktop/react/react-components/src/assets/gmaillogo.jpg"

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
                    <img src={fblogo} alt="fblogo"></img>
                    <img src={instalogo} alt="instalogo" ></img>
                    <img src={gmaillogo} alt="gmailogo"></img>
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
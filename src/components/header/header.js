import React from "react"
import styles from "./headercss.module.css"
import { Link } from 'react-router-dom';
import Logo from "/Users/ashfi/Desktop/react/react-components/src/assets/header1logo.jpg"
import Background from "/Users/ashfi/Desktop/react/react-components/src/assets/header1background.jpg"

const Header = () => {
    return (
        <div className={styles.container}>

            <div className={styles.logobox}>
                
            </div>
            <div className={styles.linkbox}>
                <Link to="/page1" className={styles.link}>page1</Link>
                <Link to="/page2" className={styles.link}>page2 </Link>
                <Link to="/page3" className={styles.link}>page3</Link>
                
            </div>
            <div className={styles.buttonbox}>
                <button className={styles.button}>login</button>
                <button className={styles.button}>signup</button>

            </div>
           
        </div>
    )
}

export default Header;
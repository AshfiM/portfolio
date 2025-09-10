import React, { useState } from "react"
import styles from "./headercss.module.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/header1logo.jpg"
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>

            <div className={styles.logobox}>
                <img src={logo} alt="logo"></img>     
            </div>
            
            <div className={styles.linkbox}>
                <Link to="/aboutme" className={styles.link}>About Me</Link>
                <Link to="/skills" className={styles.link}>Skills</Link>
                <Link to="/projects" className={styles.link}>Projects</Link>
                <Link to="/contactme" className={styles.link}>Contact Me</Link>
                
            </div>
        
           
        </div>
    )
}

export default Header;
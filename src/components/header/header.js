import React, { useState, useRef, useEffect } from "react"
import styles from "./headercss.module.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/header1logo.jpg"
const Header = () => {
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);
    
    
    return (
        <div className={styles.container}>

            <div className={styles.logobox}>
                <img src={logo} alt="logo"></img>
            </div>

            <div className={styles.toggleButton} 
            onClick={() => { setVisible(!visible) }}
            ref={buttonRef}
            >
                
                            <span></span>
                            <span></span>
                            <span></span>
                
            </div>

               <div className={`${styles.linkbox} ${visible ? styles.showMenu: ""}`}
               ref={menuRef}
               >
                    <Link to="/aboutme" className={styles.link}>About Me</Link>
                    <Link to="/skills" className={styles.link}>Skills</Link>
                    <Link to="/projects" className={styles.link}>Projects</Link>
                    <Link to="/contactme" className={styles.link}>Contact Me</Link>
                </div>
           



        </div>
    )
}

export default Header;
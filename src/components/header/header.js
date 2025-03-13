import React from "react"
import styles from "./headercss.module.css"
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className={styles.container}>

            <div className={styles.logobox}>
                
            </div>
            <div className={styles.linkbox}>
                <Link to="/page1" className={styles.link}>About Me</Link>
                <Link to="/page2" className={styles.link}>page2 </Link>
                <Link to="/page3" className={styles.link}>page3</Link>
                
            </div>
        
           
        </div>
    )
}

export default Header;
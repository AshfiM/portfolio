import React from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import styles from "../routes/layout.module.css"

const LayoutWithHeader = () => 
    (
        <div className={styles.layout}>
            <Header/>
            <main className={styles.content}>
                <Outlet/>
                
            </main>
            
            <Footer/>
        </div>
    )


export default LayoutWithHeader;
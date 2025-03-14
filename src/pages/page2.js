import React from "react"
import styles from "./page2.module.css"
import DataBox from "../components/databox/databox"
import python from "../assets/python.png"
import c from "../assets/c.png"
import java from "../assets/java.png"
import mysql from "../assets/mysql.png"
import nodejs from "../assets/nodejs.png"
import reactlogo from "../assets/react.svg.png"
import flask from "../assets/flask.webp"

const Page2 = () => {

    const skills = [
        {heading:"Programming", images:[python, c, java], names:["Python", "C", "Java"]}, 
        {heading:"DataBase Management", images:[mysql], names:["MySQL"]},
        {heading:"FrontEnd Development", images:[reactlogo], names:["React.JS"]},
        {heading:"BackEnd Development", images:[nodejs, flask], names:["NodeJS", "Flask"]}
    ]
    const skillsSet = skills.map((skill, i) => {
        const heading = skill.heading;
        const images = skill.images
        const names = skill.names

        return (<div key={i} className={styles.skillbox}><DataBox heading={heading} images={images} names={names}/></div>)
    })
    
    return (
        <div className={styles.page2}>
           {skillsSet}
        </div>
    )
}

export default Page2;
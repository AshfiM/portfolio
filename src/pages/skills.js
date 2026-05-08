import React from "react"
import styles from "./skills.module.css"

import java from "../assets/java.png"
import mysql from "../assets/mysql.png"
import aws from "../assets/aws.png"
import git from "../assets/git.png"
import maven from "../assets/maven.svg"
import linux from "../assets/linux.png"
import docker from  "../assets/docker.png"
import springBoot from "../assets/springBoot.png"
const Skills = () => {

    const skills = [
            {heading:"Programming", items:[
                {"image":java, "name":"Java"}, 
                {"image":springBoot, "name":"Spring Boot"}]},
            {heading:"Cloud", items:[
                {"image":aws, "name":"AWS"}, 
                ]},
            {heading:"Database", items:[
                {"image":mysql, "name":"MySQL"}, 
                ]},
            {heading:"DevOps", items:[
                {"image":git, "name":"Git"}, 
                {"image":maven, "name":"Maven"},
                {"image":linux, "name":"Linux"}]},
            {heading:"Containerization", items:[
                {"image":docker, "name":"Docker"},
                ]
            },

        ]
    
    
    return (
        <div className={styles.skillsContainer}>
            {skills.map((skill, id) =>(
            <div className={styles.skillBox} key={id}>
                <div>
                    <div className={styles.skillNameCon}>
                        <h3>{skill.heading}</h3>
                    </div>
                    
                    {skill.items.map((item, itemId) => (<div key={itemId}>
                         <div className={styles.imgCon}>
                      <img src={item.image} alt={item.name} className={styles.skillImg}></img>  
                    </div>
                    <div className={styles.nameCon}>
                        <p>{item.name}</p>
                    </div>
                    </div>) )}
                   
                    
                </div>
            </div>))}
           
        </div>
    )
}

export default Skills;
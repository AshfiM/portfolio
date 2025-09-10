import React from "react";
import styles from "./project.module.css" 
const Project = (props) => {

    const description_list = props.desc
    const description = description_list.map((desc, i) => {
        return (<li key={i} className={styles.desc}>{desc}</li>)
    })
    return (
        <div className={styles.container}>
            <div className={styles.title}>
               <h4>{props.title}</h4>
            </div>

            <div className={styles.descritioncontainer}>
                <div className={styles.description}>
                 <ul>{description}</ul>
                </div>
            </div>

            <div>
                <hr/>
            </div>
        </div>
    )
}

export default Project;
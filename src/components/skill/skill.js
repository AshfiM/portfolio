import React from "react";
import styles from "./skill.module.css"
const Skill = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={styles.namecontainer}>
                <h4>{props.name}</h4>
            </div>
        </div>
    )
}

export default Skill;
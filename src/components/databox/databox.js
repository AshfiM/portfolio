import React from "react";
import styles from "./databox.module.css"
import Skill from "../skill/skill";

const DataBox = (props) => {

    const images = props.images//[python, c, java]
    const names = props.names//["python", "c", "java"]
    const data = images.map((image, i) => {
        return (<div key={i}><Skill  image={image} name={names[i]}/></div>)
    })

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                {props.heading}
            </div>
            <hr></hr>
            <div className={styles.data}>
               {data} 
            </div>
            
        </div>
    )
}

export default DataBox
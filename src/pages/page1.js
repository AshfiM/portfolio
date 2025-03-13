import React from "react"
import styles from "./page1.module.css"
import { Link } from "react-router-dom"
import Typing from "../components/type/typing"
import gmaillogo from "../assets/gmaillogo.jpg"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import profile from "../assets/profile.jpeg"
import { useState } from "react"

const Page1 = () => {
    
    const [index, setIndex] = useState(0)
    const sentances = ["Hi, I am Mohamed Ashfi", 'Computer Engineer']
    const [typedSentances, setTypedSentances] = useState([])

    const addSentance = () => {
        if (index < sentances.length) {
        setTypedSentances(prev => [...prev, sentances[index]])
        setIndex(prevIndex => prevIndex + 1)
        }
    }
    const intro = typedSentances.map((line, i) => {

            return (<p key={i}>{line}</p>)
        })

        return (
            <div className={styles.page1}>

                <div className={styles.introcontainer}>
                    <div className={styles.intro}>
                    {intro}
                    {index < sentances.length && (<Typing className={styles.introline} text={sentances[index]} onComplete={addSentance} maxCount={1}/>)} 
                    </div >
                    <div className={styles.summary}>
                       {index === sentances.length && (
                         <p>Motivated Computer Engineer with expertise in Python development, Web development and
                         a strong foundation in various programming languages and technologies. Proven track record
                         in developing robust applications tailored to current industry needs. Passionate about Cyber
                         Security, Web development and committed to continuous learning and adaptation in a rapidly
                         evolving field.</p>
                       )}
                    </div>
                    {index === sentances.length && (<div className={styles.linkcontainer}>
                        <Link to="/page2" className={styles.link}>Skills</Link>
                        <Link to="/page3" className={styles.link}>Projects</Link>

                    </div>)}
                    {index === sentances.length &&(<div className={styles.logocontainer}>
                    <div className={styles.logobox}>
                        
                        <a href="mailto:ashfimohamed@gmail.com" target="__blank">
                            <img src={gmaillogo} className={styles.logos} alt="mail"/>
                        </a>
                    </div>
                    <div className={styles.logobox}>
                        
                        <a href="https://www.linkedin.com/in/ashfimohamed/" target="__blank">
                        <img src={linkedin} className={styles.logos} alt="linkedin"/>
                        </a>
                    </div>
                    <div className={styles.logobox}>
                        
                        <a href="https://github.com/AshfiM" target="__blank">
                        <img src={github} className={styles.logos} alt="github"/>
                        </a>
                    </div>
                    </div>)}
                   </div>

                <div className={styles.imagecontainer}>
                    
                    <img src={profile} className={styles.profile} alt="profile"/>
                </div>
            </div>
        )
    }


export default Page1;
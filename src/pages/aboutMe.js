
import styles from "./aboutMe.module.css"
import { Link } from "react-router-dom"
import Typing from "../components/type/typing"
import profile from "../assets/profile.jpeg"
import { useState } from "react"

const AboutMe = () => {
    
    const [index, setIndex] = useState(0)
    const sentances = ["Hi, I am Mohamed Ashfi Uzama", 'Computer Engineer']
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
                       
                        <div>{intro}
                        {index < sentances.length && (<Typing className={styles.introline} text={sentances[index]} onComplete={addSentance} maxCount={1}/>)} 
                        

                        </div>
                        
                        
                    </div >
                    <div className={styles.summary}>
                       {index === sentances.length && (
                         <p>Passionate Computer Engineer with expertise in Python development, Web development and
                         a strong foundation in various programming languages and technologies. Proven track record
                         in developing robust applications tailored to current industry needs. Passionate about Cyber
                         Security, Web development and committed to continuous learning and adaptation in a rapidly
                         evolving field.</p>
                       )}
                    </div>
                    {index === sentances.length && (<div className={styles.linkcontainer}>
                        <Link to="/skills" className={styles.link}>Skills</Link>
                        <Link to="/projects" className={styles.link}>Projects</Link>

                    </div>)}
                    
                   
                   </div>

                  

                <div className={styles.imagecontainer}>
                    
                    <img src={profile} className={styles.profile} alt="profile"/>
                </div>
            </div>
        )
    }


export default AboutMe;
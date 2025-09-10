
import styles from "../pages/contactme.module.css"
import sideImage from "../../src/assets/header1logo.jpg"
import { useState } from "react"
const ContactMe = () => {

    const [formData, setFormData] = useState({
        fullname:"",
        email:"",
        message:""
    })
    
    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        alert("submitted")
        setFormData({fullname:"", email:"", message:""})
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.info}>
                <h1>
                    Connect With Me
                </h1>
                <h1>
                    Get In Touch
                </h1>
            </div>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={formData.fullname} onChange={handleChange} name="fullname" required ></input>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={formData.email} onChange={handleChange} name="email" required></input>
                    </div>
                    
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" value={formData.message} onChange={handleChange} name="message"required></textarea>
                    </div>
                    
                    <button type="submit" >
                        Send
                    </button>
                </fieldset>
            </form>
        <div className={styles.imgContainer}>
            <img src = {sideImage}/>
        </div>
        </div>
    )
}

export default ContactMe;
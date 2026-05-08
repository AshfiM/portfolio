
import styles from "../pages/contactme.module.css"
import sideImage from "../../src/assets/header1logo.jpg"
import { useState } from "react"
const ContactMe = () => {



  

    return (
        <div className={styles.formContainer}>
            <div className={styles.imgContainer}>
                <img src={sideImage} alt="i" />
            </div>
    
            <div className={styles.info}>
                <h1>
                    Connect With Me
                </h1>
                 <div>
                <div className={styles.contactInfo}>
                    <p>Name : Mohamed Ashfi Uzama</p>
                    <p>E-mail: ashfimohamed@gmail.com</p>
                    <p>LinkedIn: https://www.linkedin.com/in/ashfimohamed/</p>
                </div>
            </div>

            </div>
          
            {/*
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
                        <textarea id="message" value={formData.message} onChange={handleChange} name="message" required></textarea>
                    </div>

                    <button type="submit" >
                        Send
                    </button>
                </fieldset>
            </form>
             */}


        </div>
    )
}

export default ContactMe;
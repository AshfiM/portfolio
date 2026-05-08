
import styles from "../pages/contactme.module.css"
import sideImage from "../../src/assets/header1logo.jpg"
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
        

        </div>
    )
}

export default ContactMe;
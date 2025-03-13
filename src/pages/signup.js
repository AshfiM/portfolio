import React, {useState}from "react";
import { Link} from "react-router-dom";
import styles from "./login.module.css"
import Logo from "../assets//header1logo.jpg"

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("email", email, "\npassword", password)
        alert("signup")
    }

    return (
        <div>
            
            <div className={styles.rform}>
                <form onSubmit={handleSignup} className={styles.loginform}>

                    <div className={styles.usernamecontainer}>
                        <label>username</label>
                        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input>
                    </div>

                    <div className={styles.passwordcontainer}>
                        <label>password</label>
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>
                    </div>

                    <div className={styles.buttoncontainer}>
                        <button type="submit">signup</button>
                    </div>
                    <div className={styles.linkcontainer}>

                       
                       
                    </div>


                </form>


                <div className={styles.signupcolumn}>

                <div className={styles.logobox}>
                    <img src={Logo} alt="loginimage"></img>
                </div>
                    
                    <div className={styles.signup}>
                        <h1>welcome to signup</h1>
                        <h3>have an account</h3>
                        <Link to="/" className={styles.slink}>signin</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup;
import React, { useState } from "react";
import { Link} from "react-router-dom";
import styles from "./login.module.css"
import Logo from "../assets/header1logo.jpg"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ischecked, setischecked] = useState(false)
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("email", email,"\npassword", password,"\nremeberme", ischecked)
        alert("login")
    }
    return (
        <div>
            <div className={styles.rform}>
                
                <form onSubmit={handleLogin} className={styles.loginform}>
                    

                    <div className={styles.usernamecontainer}>
                        <label>username</label>
                        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input>
                    </div>

                    <div className={styles.passwordcontainer}>
                        <label>password</label>
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>
                    </div>

                    <div className={styles.buttoncontainer}>
                        <button type="submit">login</button>
                    </div>
                    <div className={styles.linkcontainer}>

                        <label className={styles.checkbox}><input type="checkbox" value={ischecked} onChange={(e)=> {setischecked(e.target.checked)}}></input>Remeber me</label>
                        <Link className={styles.rlink}>reset password</Link>
                    </div>


                </form>

                <div className={styles.signupcolumn}>
                <div className={styles.logobox}>
                    <img src={Logo} alt="loginimage"></img>
                </div>
                    
                    <div className={styles.signup}>
                        <h1>welcome to login</h1>
                        <h3>don't have an account</h3>
                        <Link to="/signup" className={styles.slink}>signup</Link>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default Login;
import React, { useState } from "react";
import styles from "../forms/forms.module.css"

const FormComp = () => {

    /// controlled form ; data gethered using states, in uncontrolled form, data gathered using useRef(null) by DOM 
    const [name, setName] = useState("");
    const [rate, setRate] = useState("10")
    const [comment, setComment] = useState("")
    // input type = "file" is uncontrolled component because it is readonly 
    const handleSubmit = (e) => {
        e.preventDefault(); // default behavior is get request to the root and page refresh 
        setName(""); // clear the input box after form submission
        console.log("form submitted");
    }

    const submitFeedback = () => {
        if (Number(rate) < 5 && rate.length < 10) {
            alert("please provide some details")
            return 
        }
        console.log(comment)
        setComment(" ")
        setRate("10")
        
    }
    return (
        <div>
            Form
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>personal info</legend>
                    <div className={styles.field}>
                        <label htmlFor="name">name: </label>
                        <input 
                        id="name" //connect label input, when label clicked input box focused
                        type="text" 
                        placeholder="name" 
                        name="name" // key in key-value pair when submitting form to the server
                        value={name}
                        onChange={e => setName(e.target.value)}
                        
                        ></input>
                    </div>
                    <button 
                    type="submit"
                    disabled={!name} // button disabled when name input box is empty
                    >submit</button>
                </fieldset>

                <fieldset>
                    <legend>account info</legend>
                    <div>
                        <label htmlFor="accountname">account name</label>
                        <input 
                        id="accountname"
                        type="text"
                        name="accountname"></input>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>feedback form</legend>
                    <label htmlFor="rate">rate {rate}</label>
                    <input
                    id="rate"
                    name="rate"
                    type="range"
                    min="0"
                    max="10"
                    value={rate}
                    onChange={e => setRate(e.target.value)}
                    >
                    </input>
                   <textarea value={comment} onChange={e => setComment(e.target.value)}>

                   </textarea>
                    <button onClick={submitFeedback} disabled={(Number(rate) < 5 && comment.length < 10)}>submit feedback</button>
                </fieldset>
            </form>
             
        </div>
    )
}

export default FormComp;
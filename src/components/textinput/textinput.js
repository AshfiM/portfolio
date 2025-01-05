import React, { useRef } from "react";

const TextInput = () => {
    const formInputRef = useRef(null);
    const focusInput = () => {
        formInputRef.current.focus();

     }
    return (
        <div>
            <div>
             <input ref={formInputRef} type="text"></input>
             <button  onClick={focusInput}>click to focus</button>
            </div>
        </div>
    )
}

export default TextInput;
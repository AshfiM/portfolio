import React, { Children, cloneElement } from "react";

const RadioButtonGroup = ({children}) => {
    const RadioButton = Children.map(children, (child) => {
        return cloneElement(child, {})
    })
    return (<div>{RadioButton}</div>)
    
}

export const RadioButton = () => {
    return (
        <label htmlFor="button1" >
            <input type="radio" />
            button1
        </label>
    )
}

export default RadioButtonGroup;

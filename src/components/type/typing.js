import { useEffect, useState } from "react"


const Typing = (props) => {
    
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    const displayText = props.text
    const onComplete = props.onComplete
    
    useEffect(() => {
        //if (index > props.maxCount) return;
        const timeOut = setTimeout(() => {
            if (text.length < displayText.length) {
                setText((prevText) => prevText + displayText[index]);
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                onComplete()
                setText("")
                setIndex(0)
            }  
        }, 100)
        

        return () => {clearTimeout(timeOut)}
    }, [text, index, displayText, onComplete]);

   
    

    return (text)
}

export default Typing;
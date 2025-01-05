import React, { useEffect, useState } from "react";


const MousePointLogger = ({render}) => {
    const [data, setData] = useState(0)

    
    // useEffect(() => {
    //     const interval = setInterval(()=> {
           
    //         setData((prevData) => prevData + 1)
    //     }, 1000)

    //     return () => (clearInterval(interval))
    // }, []);
    

    return render(data)
}

export default MousePointLogger;
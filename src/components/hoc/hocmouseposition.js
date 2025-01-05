import React, { useEffect, useState } from "react";

const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({
            x:0,
            y:0
        })
        const handleMousePositionChange = (e) => {
            setMousePosition({
                x:e.clientX,
                y:e.clientY
            })
        }
    
        useEffect(() => {
            window.addEventListener('mousemove', handleMousePositionChange)
    
            return () => {
                window.removeEventListener('mousemove', handleMousePositionChange);
            }
        }, []);
    
        return (<WrappedComponent {...props} mousePosition={mousePosition}/>)
    }

    
} 


const MousePointLogger = ({mousePosition}) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <div>
            {`mouse location ${mousePosition.x}, ${mousePosition.y}`}
        </div>
    )
}

const PointMouseTracker = withMousePosition(MousePointLogger)

export default PointMouseTracker;

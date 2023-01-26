import React from "react"

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        

        //This is a cleanup function as we had event listener on window object so even if
        //we toggle,it would still listen for event and give error .
        //So we want this event listener to be removed when this component is hidden or toggled.
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}

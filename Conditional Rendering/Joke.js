import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>

            {/* This is conditional rendering using && */}
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown?"Hide":"Show"} Punchline</button>
            <hr />
        </div>
    )
}


//The way && works is that it needs both conditions to be true then only it gets executed
//So the && checks the first condition if its false then it wont care about checking the second
//condition as it already knows its not going to executed.
//But if its true then it would go through the next condition
const cond1 = true
const cond2 = false
if(cond1 && console.log("Hello there")) {
    // this code will run
}

// Output:-"Hello there"
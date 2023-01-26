// import React from "react"

// export default function Joke(props) {
//     console.log(props.punchline)
//     return (
//         <div>
//             {props.setup && <h3>Setup: {props.setup}</h3>}
//             <p>Punchline: {props.punchline}</p>
//             <hr />
//         </div>
//     )
// }


import React from "react"

export default function Jokes(props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}
import React from "react"

export default function WithUseEffects()
{
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    console.log("Component rendered")


    
    // side effects
    React.useEffect(function() {
        console.log("Effect ran")
        // fetch("https://swapi.dev/api/people/1")
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }, [count])

    React.useEffect(function() {
        console.log("API ran")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => (setStarWarsData(data)))
    }, [])
    

    //when we click on next object it increment count by 1 which leads to state change
    //and then we render on statee change with parameter in url
    React.useEffect(function() {
        console.log("API with count ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => (setStarWarsData(data)))
    }, [count])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Next object</button>
        </div>
    )
}
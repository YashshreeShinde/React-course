import {useState} from "react"

//This code goes in infinite loop of re-rendering as we are setting the state means updation
//which makes component to re-render then it again re-renders and again fetch is called this 
//cycle continues.
export default function WithoutUseEffect()
{

    console.log("hi")
    const[starWarsData,starWarsSetData]=useState({})

    fetch("https://swapi.dev/api/people/1")
    .then(res=>res.json())
    .then(data=>(starWarsSetData(data)))

    return(
        <div>{JSON.stringify(starWarsData)}</div>
    )
}
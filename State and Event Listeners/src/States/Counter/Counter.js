import {useState} from "react"

export default function Counter() {

    const[count,setCount]=useState(0);

    // //Not a best practice but still look at it

    // function addCount()
    // {
    //     setCount(count+1) //always do this way

    //     //dont do setCount(count++) as this means count=count+1
    //     //And we should never modify state directly,its a strict NO
    //     //We dont want to change state through "=" (count=count+1) i.e assigning value through "= " is a NO
    //     //As we are given a function to assign/modify the state
    // }

    // function subtractCount()
    // {
    //     setCount(count-1)
    // }


    //Best practice
    //When we want to use our old state to determine our new state(value)
     
    //  if you ever need the old value of state
    //   to help you determine the new value of state,
    //   you should pass a callback function to your
    //   state setter function instead of using
    //   state directly. This callback function will
    //   receive the old value of state as its parameter,
    //   which you can then use to determine your new
    //   value of state.
     
    function addCount()
    {
        setCount( 
        function (prevCount)
        {
            return prevCount+1
        }
        )
    }

    function subtractCount()
    {
        setCount(prevcount=>prevcount-1)
    }


    return (
        <div className="counter">
            <button className="counter--minus"onClick={subtractCount}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={addCount}>+</button>
        </div>
    )
}
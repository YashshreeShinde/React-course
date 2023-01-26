import { useState } from "react"
import Count from "./Count"

export default function Counter() {

    const [count, setCount] = useState(0);


    function addCount() 
    {
        setCount(prevCount => prevCount + 1)
    }
    function subtractCount() 
    {
        const res=(prevCount)=>(prevCount-1)
        setCount(res)
    }

    console.log("Counter Component Rendered")

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtractCount}>–</button>
            {/* <div className="counter--count">
                <h1>{count}</h1>
            </div> */}
            {/* Instead of above lines we would use:- */}
            <Count number={count} />
            <button className="counter--plus" onClick={addCount}>+</button>
        </div>
    )
}
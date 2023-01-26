import {useState} from "react"

export default function Box(props)
{

    //This is known as derived states where we take props and use that props to set the initial value of the this state (child).So whatever changes we are making would be maintained by the state itself and not by parent component.This state in child component is known as Derived State.
    const [on,setOn]=useState(props.on)     //derived state(local state)

    const styles={
        backgroundColor:on?"black":"transparent"
    }

    function toggle()
    {
        setOn(prevState=>!prevState)
    }
    return(
        <div style={styles} className="box" onClick={toggle}></div>
    )
}
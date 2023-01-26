import {useState} from "react"

export default function Box1(props)
{

    const styles={
        backgroundColor:props.on?"black":"transparent"
    }
    

    return(                                  //We cant pass parameter directly on onClick
    // as if we write:-onClick={props.toggle(id)} its going to invoke as soon as this line is
    // parsed,so to pass parameter to the function we take another function and put the 
    //toggle inside it so we can pass the paramters

        <div style={styles} className="box" onClick={()=>props.toggle(props.id)}></div>
    )
}
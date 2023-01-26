

import boxes from "./BoxeArray"
import "./BoxStyles.css"
import {useState} from 'react'
import Box from "./Box(Derived State)"
import Box1 from "./Box(Using Parent state)"

export default function Boxes() {
    const [squares, setSquares] = useState(boxes)



    function toggle(id)
    {
        setSquares(prevState=>{
            return prevState.map((square)=>{
                return square.id===id?{...square,on:!square.on}:square
            })
        })
    }
    
    
    const squareElements = squares.map(square => (
        <>
        {/* <Box key={square.id} 
             on={square.on}
             id={square.id}
             handleClick={toggle}
        /> */}
        <Box1 key={square.id} 
        on={square.on}
        id={square.id}
        toggle={toggle}
        
   />
   </>
  
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}
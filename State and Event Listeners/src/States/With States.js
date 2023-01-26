//Thing array example
import {useState} from "react"

export default function WithStates()
{

const [things, setThings] = useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }
    
    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
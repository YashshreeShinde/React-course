//wont update the UI state when changes are made to the state(variable)
//As elements are pushed in the array still the state wont update
//React dont keep the track whether the variable values were changed and it need to re-render or not.




export default function WithoutStates()
{
const thingsArray = ["Thing 1", "Thing 2"]

function addItem() {
    const newThingText = `Thing ${thingsArray.length + 1}`
    thingsArray.push(newThingText)
    console.log(thingsArray)
}

const thingsElements = thingsArray.map(thing => <p>{thing}</p>)


return (
    <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElements}
    </div>
)
}
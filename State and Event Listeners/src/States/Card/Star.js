

export default function Star(props)
{
    const starIcon=props.isFilled?"star-filled.png" : "star-empty.png"

    //Place images in public folder only
    //Inspite placed in public folder can give direct path "./images"
    return(
        <img 
        src={`./images/${starIcon}`} 
        className="card--favorite"
         onClick={props.handleClick}
         />
    
    )
}
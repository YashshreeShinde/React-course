// We do this in case we need to reuse this component
export default function Count(props)
{
    console.log("Count Component Rendered")
    return(
        <div className="counter--count">
                <h1>{props.number}</h1>
        </div> 

    )
}
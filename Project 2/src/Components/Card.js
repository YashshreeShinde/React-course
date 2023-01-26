

//when we dont want to pass the props manually .
export default function Card(props) {
console.log(props.item)

    let badgeText
    if(props.item.openSpots===0)
        badgeText="SOLD OUT"
    else if(props.item.location==="Online")
        badgeText="ONLINE"

    const image=`../images/${props.item.coverImg}`
    return (
     
        <div className="card">
            {/* {props.item.openSpots===0 && <div className="card--openSpots">SOLD OUT</div>} */}
            {props.item.openSpots  && <div className="card--openSpots">{badgeText}</div>}
    
            <img src={image} className="card--image" />
            <div className="card--stats">
                <img src="../images/star 1.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}
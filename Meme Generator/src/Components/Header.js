
import logo from "../images/Troll Face.png"
export default function Headers()
{
    return(
        <header className="header">
        <img className="header-image" src={logo}/>
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-project">React Course-Project 3</h4>
        </header>
        
    )
}
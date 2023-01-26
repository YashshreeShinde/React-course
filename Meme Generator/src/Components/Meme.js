import memesData from "../memesData"
import {useState,useEffect} from "react"
import "../App.css"

export default function Meme()
{

    const[memeImage,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    });

    

    const [allMemes,setAllMemes]=useState(memesData);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])



    function getMemeImage()
    {
        let memesArray=allMemes
        let randomNumber=Math.floor(Math.random()*memesArray.length)
        const url=memesArray[randomNumber].url;
        setMeme((prevMeme)=>({
            ...prevMeme,
            randomImage:url
        }))
    }

    function handleChange(event)
    {
        const {name,value}=event.target
        setMeme((prevMeme)=>({
            ...prevMeme,
            [name]:value
        }))
       

    }


    return(
        <main>
            <div className="meme">
                <input type="text" placeholder="Top Text" className="form-input"
                 name="topText"
                 value={memeImage.topText}
                 onChange={handleChange}/>

                <input type="text" placeholder="Bottom Text" className="form-input"
                 name="bottomText"
                 value={memeImage.bottomText}
                 onChange={handleChange}/>

                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>

                <div className="meme">
                <img src={memeImage.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
            </div>
        </main>
    )
}
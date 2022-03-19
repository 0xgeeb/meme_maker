import React, {useEffect, useState} from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://everythingisviral.com/wp-content/uploads/2021/01/gigachad-meme-1024x652.png"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value 
            }
        })
    }

    return (
        <main>
            <div className="form" >
                <input 
                    type="text"
                    placeholder="top text"
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="bottom text" 
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    onClick={getMemeImage} 
                    className="form--button" 
                >
                    make a new mf meme
                </button>
            </div>
            <div className="meme" >
                <img className="meme--image" src={meme.randomImage} />
                <h2 className="meme--text--top">{meme.topText}</h2>
                <h2 className="meme--text--bottom" >{meme.bottomText}</h2>
            </div>
        </main>
    )
}
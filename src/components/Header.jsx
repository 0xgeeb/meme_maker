import React from "react"
import troll from ".././troll.png"

export default function Header() {
    return (
        <header className="header" >
            <img className="header--image" src={troll} />
            <h2 className="header--title" >meme_maker</h2>
            <h4 className="header--project" >React Course - Project 3</h4>
        </header>
    )
}
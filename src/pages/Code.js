import React from 'react'
import {Link} from "react-router-dom"


export default function Code() {
    return (
        <>
            <div>
                This is code page.
            </div>
            <div>
                <Link to="/meme/">
                    Dank memes
                </Link> 
                <br/>
                <Link to="/rainbow/">
                    Random Rainbows
                </Link> 
                <br/>
                <Link to="/form/">
                    Form
                </Link> 
            </div>
        </>
    )
}

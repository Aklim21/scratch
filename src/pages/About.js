import React from 'react'
import {Link} from "react-router-dom"


export default function About() {
    return (
        <div>
            This is about page.
            <div>
            <Link to="/">
                Go Home
            </Link>
            </div>
        </div>
    )
}

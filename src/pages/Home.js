import React from 'react'
import {Link} from "react-router-dom"


export default function Home() {
    return (
        <>
            <div>
                This is home page.
            </div>
            <div>
                <Link to="/code/">
                    Go code
                </Link> 
            </div>
        </>
    )
}

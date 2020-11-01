import React from 'react'
import {Link} from "react-router-dom"
import hello from "../images/hello.png"


export default function Home() {
    return (
        <h1 style = {{
            alignContent: "centre",
            paddingTop: "20px",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div>
                <img style={{width: "300"}} src={hello} alt='hello'/>
                <br/>
                This is home page.
            </div>
            <div>
                <Link to="/code/">
                    Go code
                </Link> 


            </div>
        </h1>
    )
}

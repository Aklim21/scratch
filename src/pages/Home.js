import React from 'react'
import {Link} from "react-router-dom"
import hello from "../images/hello.png"
import Button from "@material-ui/core/Button"


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
            <Button 
                href="code" 
                variant= 'contained'
                size= "large"    
            >
                Go to code
            </Button>
        </h1>
    )
}

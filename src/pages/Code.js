import React from 'react'
import Button from "@material-ui/core/Button"


export default function Code() {
    return (
        <>
            <div>
                This is code page.
            </div>
            <div>
                <Button 
                    href="meme" 
                    variant= 'contained'
                    size= "large"    
                >
                    Dank Memes
                </Button>
                <Button 
                    href="rainbow" 
                    variant= 'contained'
                    size= "large"    
                >
                    Random Rainbows
                </Button>
                <Button 
                    href="form" 
                    variant= 'contained'
                    size= "large"    
                >
                    Forms
                </Button>
            </div>

        </>
    )
}

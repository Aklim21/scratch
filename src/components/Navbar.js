import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <div>
                    AKJ Scratch 
                </div>
                <div className="nav-center">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        )
    }
}

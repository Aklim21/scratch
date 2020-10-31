import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

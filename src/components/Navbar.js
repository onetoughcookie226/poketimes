//functional component
import React from 'react'

const Navbar = () => {
    return (
        <div className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke times</a>
                <ul className="right">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>         
                </ul>
            </div>
        </div>
    )
}

export default Navbar
//functional component
import React from 'react';
import {Link, NavLink } from 'react-router-dom';
// import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke times</a>
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>         
                </ul>
            </div>
        </div>
    )
}

export default Navbar
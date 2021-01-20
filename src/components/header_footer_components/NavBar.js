import React from 'react';
import './NavBar.css';

const NavBar = () => {

    return(
        <header>
            <img src="/mwa.jpg" alt="MWA Auto Logo"/>
        <ul>
            <li className="navLink">
                <a href="/">Home</a>
            </li>
            <li className="navLink">
                <a href="/services">Services</a>
            </li>
            {/* <li className="navLink">
                <a href="/contact">Contact</a>
            </li> */}
        </ul>
        </header>
    )
}
export default NavBar;
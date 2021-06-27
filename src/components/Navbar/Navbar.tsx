import React, { useState } from 'react';
import './navbar.css'

export default function Navbar() {
    const [navTransparent, setNavTransparent] = useState(true);

    const scrollListener = () => {
        if(window.scrollY > (window.innerHeight / 2)) {
            setNavTransparent(false);
        } else {
            setNavTransparent(true);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return (
        <nav className={"navbar active navbar-light fixed-top" + (navTransparent ? ' bg-transparent' : '')}>
            <div className="container container-fluid mt-3">
                <a className="navbar-brand brand f-500" id="title" href="/">WebWeave</a>
            </div>
        </nav>
    )
}
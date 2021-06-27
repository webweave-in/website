import React from 'react';
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-light fixed-top bg-transparent">
            <div className="container container-fluid">
                <a className="navbar-brand brand f-1_5rem f-500" href="/">WebWeave</a>
            </div>
        </nav>
    )
}
import React from 'react';
import './footer.css'

export default function Footer() {
    return (
        <div className="footer container d-flex align-items-center justify-content-evenly">
            <a href="https://www.instagram.com/webweave.in/" className="iconlink"><i className="bi fs-4 bi-instagram"></i></a>
            <a href="https://www.facebook.com/webweave.in/" className="iconlink"><i className="bi fs-4 bi-facebook"></i></a>
            <a href="https://github.com/webweave-in" className="iconlink"><i className="bi fs-4 bi-github"></i></a>
            <a href="mailto:mail@webweave.in" className="iconlink"><i className="bi fs-4 bi-envelope-fill"></i></a>
        </div>
    )
}
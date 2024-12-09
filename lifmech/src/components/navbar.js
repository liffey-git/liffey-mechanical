import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {

    return (
        <div className="navContainer">
            <div className="navWrap">
                <Link to="/">
                    <div className="navLogo">

                    </div>
                </Link>
                <div className="navBtnWrap">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/team">Team</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
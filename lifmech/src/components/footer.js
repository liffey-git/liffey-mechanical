import React from 'react';
// import { NavLink } from 'react-router-dom';
import '../App.css';

function Footer() {

    return (
        <div className="footerContainer">
            <div className="footerWrap">
                <div className="footerLogo"></div>
                <div className="footerContent">
                    <div className="address"></div>
                    <div className="email"></div>
                    <div className="phone"></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
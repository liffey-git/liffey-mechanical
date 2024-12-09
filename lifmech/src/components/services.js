import React from 'react';
import ServiceCard from 'ServiceCard';
// import { NavLink } from 'react-router-dom';
import '../App.css';

function ServiceSec() {

    return (
        <div className="serviceContainer">
            <div className="serviceWrap">
                <div className="serviceHead"></div>
                <div className="serviceListWrap">
                    <ServiceCard/>
                </div>
            </div>
        </div>
    );
}

export default ServiceSec;
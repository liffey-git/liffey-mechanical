import React from 'react';
// import { NavLink } from 'react-router-dom';
import '../csApp.css';



function ComingSoon() {

    return (
        <div className='csBody'>
            <div className='csNav'>
                <div className='csLogoWrap'>
                    <img className='csLogo' src={"/comingSoon/LiffeyMechanical_Logo_Wht.png"} alt="Liffey Mechanical Logo"></img>
                </div>
                <div className='csBtnWrap'>
                    <a href="https://ca.linkedin.com/company/liffeymechanical" rel="noopener noreferrer">
                        <img className='csBtn' src={"/comingSoon/Linkedin_logo.png"} alt="LinkedIn"></img>
                    </a>
                    <a href="https://www.instagram.com/liffey.mechanical?igsh=eWNsNG9nMTE2YjBq" rel="noopener noreferrer">
                        <img className='csBtn' src={"/comingSoon/Instagram_Glyph_White.png"} alt="Instagram"></img>
                    </a>
                </div>
            </div>
            <div className='csContentWrap'>
                <div className='csContent'>
                    <img className='csLogoBig' src={"/comingSoon/lrgLogo.png"} alt="Liffey Mechanical Logo"></img>
                    <div className='csText csTextBig'>Webpage Under Construction</div>
                    <div className='csBarContainer'>
                        <i className='csProgBar'>Progress...</i>
                    </div>
                    <div className='csText csTextSm'>We're making improvements and will be done soon...</div>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;
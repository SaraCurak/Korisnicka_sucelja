import { useState, useEffect } from 'react';
import Image from 'next/image';
import logoSrc from '../public/images/logo.png'
import facebook from '../public/images/facebook.png'
import instagram from '../public/images/instagram.png'


const Footer = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <div className="footer">
            <hr className="footer-upper-hr"/>
            <div className="footer-menu">
                <div className="footer-menu-left">
                    <div className="footer-menu-container">
                        <span><a href="#"> prijava </a></span>
                        <span><a href="#"> instruktori  </a></span>
                        <span><a href="#"> uputstva </a></span>
                    </div>
                </div>
                <div className="footer-logo">
                    <a href="/">
                        <img src={logoSrc}/>
                    </a>
                </div>
                <div className="footer-menu-right">
                    <div className="footer-menu-container">
                        <span><a href="#"> faq </a></span>
                        <span><a href="#"> cjenik </a></span>
                        <span><a href="#"> kontakt </a></span>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <div className="footer-copyright">
                    &copy; inSTrukcije 2023
                </div>
            </div>
        </div>
    );
};

export default Footer;
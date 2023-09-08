import { useState, useEffect } from 'react';
import Image from 'next/image';
import logoSrc from '../public/images/logo5.png'
import facebook from '../public/images/facebook.png'
import instagram from '../public/images/instagram.png'
import Link from 'next/link';


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
                        <span><Link href="/"> Prijava </Link></span>
                        <span><Link href="/instruktori"> Instruktori  </Link></span>
                        <span><Link href="/uputstva"> Uputstva </Link></span>
                    </div>
                </div>
                <div className="footer-logo">
                    <Link href="/">
                        <img src={logoSrc.src}/>
                    </Link>
                </div>
                <div className="footer-menu-right">
                    <div className="footer-menu-container">
                        <span><Link href="/faq"> FAQ </Link></span>
                        <span><Link href="/cjenik"> Cjenik </Link></span>
                        <span><Link href="/kontakt"> Kontakt </Link></span>
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
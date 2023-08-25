
import { useState, useEffect } from 'react';
import Image from 'next/image';
import teacher from '../public/images/teacher.png'


const Layout = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
            <div className="home-hero">
                <img src={teacher.src} alt="teacher" />
                <div className="home-hero-content">
                    <div className="home-hero-text">
                    "Učenje nikada ne prestaje."
                    </div>
                    <div className="home-hero-button-container">
                            <a href="/shop">
                                <button className="button-full">
                                    <span> Rezerviraj termin </span>
                                </button>
                            </a>
                    </div>
                </div>
            </div>
            );
};
            
export default Layout;
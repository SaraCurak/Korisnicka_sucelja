
import { useState, useEffect } from 'react';
import Image from 'next/image';
import teacher2 from '../public/images/teacher2.png'
import paper2 from '../public/images/paper2.png'


const Cover = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
            <div className="home-hero">
                <div className="home-hero-elements">
                    <img src={teacher2.src} alt="teacher" />
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
            </div>
            );
};
            
export default Cover;
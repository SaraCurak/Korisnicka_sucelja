import { useState, useEffect } from 'react';
import Image from 'next/image';
import paper2 from '../public/images/paper2.png'

const Main = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <div className="ingredients-container">
        </div>
    );
};

export default Main;
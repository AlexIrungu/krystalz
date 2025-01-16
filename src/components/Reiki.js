import React, { useState } from 'react';
import reiki from './Luna/Reiki.jpg'
import reikihelp from './Luna/ReikiHelp.jpg'
import reikisession from './Luna/ReikiSession.jpg'


function Reiki() {
    const images = [
        reiki,
        reikihelp,
        reikisession
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <img src={images[currentIndex]} alt="Reiki" />
            <div>
                <button onClick={prevImage}>Prev</button>
                <button onClick={nextImage}>Next</button>
            </div>
            <div>
                <p>
                Reiki is a form of alternative therapy commonly referred to as energy healing. 
                It emerged in Japan in the late 1800s and is said to involve the transfer of universal energy from the practitioner's palms to their patient.
                </p>
                <ol>
                    <p>Reiki sessions can help in:</p>
                    <li>Reducing stress and promoting relaxation</li>
                    <li>Enhancing the body's natural healing abilities</li>
                    <li>Improving emotional and mental well-being</li>
                    <li>Providing a sense of peace and calm</li>
                </ol>

            </div>
        </div>
    );
}

export default Reiki;
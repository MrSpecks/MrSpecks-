import React, { useCallback, useState } from "react";
import MatrixRain from "@/components/MatrixRain"; 
import MatrixWordRain from "@/components/MatrixWordRain";

type LandingPageProps = {
    onSkip: () => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ onSkip }) => {
    const [fadeOut, setFadeOut] = useState(false);

    const handleSkip = () => {
        setFadeOut(true);
        setTimeout(() => {
            onSkip();
        }, 1000);
    };

    return (
        <div
            className={`w-full h-screen flex items-center justify-center 
                relative bg-white overflow-hidden transition-opacity duration-1000 
                ease-in-out ${fadeOut ? "opacity-0" : "opacity-100"
                }`}
        >
            <MatrixRain />
            <div className="absolute inset-0 z-5 pointer-events-none noise-overlay" />
            {/*<MatrixWordRain />*/}
            {/* Foreground Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r 
                from-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
                    Welcome to My Portfolio
                </h1>
                <p className="text-gray-700 mt-4 text-lg md:text-xl drop-shadow-lg">
                    Crafted with precision, built for impact.
                </p>
            </div>

            {/* Skip Button */}
            <button
                onClick={handleSkip}
                className="absolute top-6 right-6 px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition-colors z-10"
            >
                Skip
            </button>
        </div>
    );
};

export default LandingPage;
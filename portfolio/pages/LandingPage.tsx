import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import type { Engine } from "@tsparticles/engine";
import MatrixRain from "@/components/MatrixRain"; // Assuming you have a MatrixRain component

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
            className={`w-full h-screen flex items-center justify-center relative bg-white overflow-hidden transition-opacity duration-1000 ease-in-out ${fadeOut ? "opacity-0" : "opacity-100"
                }`}
        >
            {/* Foreground Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
                    Welcome to My Portfolio
                </h1>
                <p className="text-white mt-4 text-lg md:text-xl drop-shadow">
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
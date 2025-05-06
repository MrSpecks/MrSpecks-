import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import type { Engine } from "@tsparticles/engine";

type LandingPageProps = {
    onSkip: () => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ onSkip }) => {
    const [fadeOut, setFadeOut] = useState(false);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadEmittersPlugin(engine);
        await loadFull(engine);
    }, []);

    const handleSkip = () => {
        setFadeOut(true);
        setTimeout(() => {
            onSkip();
        }, 1000);
    };

    return (
        <div
            className={`relative w-full h-screen flex items-center justify-center transition-opacity duration-1000 ease-in-out ${fadeOut ? "opacity-0" : "opacity-100"
                }`}
        >
            {/* Ripple Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                className="absolute w-full h-full z-0"
                options={{
                    fullScreen: { enable: false },
                    background: { color: "#000" },
                    particles: {
                        number: { value: 0 },
                        size: {
                            value: 50,
                            animation: {
                                enable: true,
                                speed: 10,
                                startValue: "min",
                                destroy: "max",
                            },
                        },
                        move: {
                            enable: true,
                            speed: 5,
                            outModes: { default: "destroy" },
                        },
                        opacity: {
                            value: 0.3,
                            animation: {
                                enable: true,
                                speed: 1,
                                startValue: "max",
                                destroy: "min",
                            },
                        },
                        shape: { type: "circle" },
                        life: {
                            duration: {
                                value: 2,
                            },
                            count: 0,
                        },
                    },
                    emitters: {
                        direction: "none",
                        rate: {
                            delay: 0.25,
                            quantity: 1,
                        },
                        size: {
                            width: 0,
                            height: 0,
                        },
                        position: {
                            x: 50,
                            y: 50,
                        },
                    },
                }}
            />
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
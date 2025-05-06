import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";

type LandingPageProps = {
  onSkip: () => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ onSkip }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
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
      className={`w-full h-screen flex items-center justify-center relative 
        transition-opacity duration-1000 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
        <div className="absolute w-full h-full border-2 border-blue-500 rounded-lg shadow-lg overflow-hidden">
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        init={particlesInit}
        options={{
            fullScreen: false,
            background: {
              color: "#ff0000",
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#00bfff", // Soft water blue
              },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: true,
                  speed: 3,
                  size_min: 0.3,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out",
                },
                bounce: false,
              },
              shape: {
                type: "circle",
              },
              links: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                onClick: {
                  enable: false,
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 100,
                  size: 8,
                  duration: 2,
                  opacity: 0.5,
                },
              },
            },
          }}
          
          
      />
      </div>

      <div className="z-10 text-center px-4 relative">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
          Welcome to My Portfolio
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl drop-shadow">
          Crafted with precision, built for impact.
        </p>
      </div>

      <button
        onClick={handleSkip}
        aria-label="Skip landing screen"
        className="absolute top-6 right-6 px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition-colors"
      >
        Skip
      </button>
    </div>
  );
};

export default LandingPage;
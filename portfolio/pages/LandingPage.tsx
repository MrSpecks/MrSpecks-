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
      <Particles
        className="absolute w-full h-full z-0"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: "#000000",
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 800,
              },
            },
            size: {
              value: 2,
            },
            move: {
              enable: true,
              speed: 0.6,
              outModes: {
                default: "out",
              },
            },
            links: {
              enable: true,
              distance: 130,
              color: "#ffffff",
              opacity: 0.25,
              width: 1,
            },
            shape: {
              type: "circle",
            },
          },
        }}
      />

      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
          Welcome to My Portfolio
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl">
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
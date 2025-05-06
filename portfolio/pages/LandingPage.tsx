import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

type LandingPageProps = {
  onSkip: () => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ onSkip }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles engine loaded:", engine);
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
      className={`relative w-full h-screen flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
        <div style={{ border: "2px solid #00bfff", position:'absolute', inset: 0, zIndex: 1 }}>
      {/* Ripple Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        options={{
          fullScreen: false,
          background: {
            color: "#000000",
          },
          particles: {
            number: { value: 0 },
            color: { value: "#00bfff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.2,
              animation: {
                enable: true,
                speed: 0.5,
                startValue: "max",
                destroy: "min",
              },
            },
            size: {
              value: 80,
              animation: {
                enable: true,
                speed: 10,
                startValue: "min",
                destroy: "max",
              },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "destroy" },
            },
            life: {
              duration: {
                sync: true,
                value: 2,
              },
              count: 0,
            },
          },
          emitters: {
            direction: "none",
            rate: {
              delay: 0.5,
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
</div>
      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
          Welcome to My Portfolio
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl">
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
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["INNOVATE", "CREATE", "INSPIRE", "BUILD"];

const MatrixWordRain: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); // 3 seconds per word
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute w-full h-full flex items-center justify-center pointer-events-none select-none z-0">
      <AnimatePresence mode="wait">
        <motion.h2
          key={words[currentWordIndex]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 text-5xl font-semibold tracking-widest"
        >
          {words[currentWordIndex]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default MatrixWordRain;
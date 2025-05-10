/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Radar, Orbit, Satellite } from "lucide-react";

const icons = [Radar, Orbit, Satellite];
const DYNAMIC_ROTATION_INTERVAL = 10000; // 10 seconds

export default function Custom404() {
    const [currentIcon, setCurrentIcon] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIcon((prev) => (prev + 1) % icons.length);
        }, DYNAMIC_ROTATION_INTERVAL);
        return () => clearInterval(interval);
    }, []);

    const IconComponent = icons[currentIcon];

    return (
        <AnimatePresence mode="wait">
            <motion.main
                className="relative min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {/* Animated Icon Background */}
                <motion.div
                    className="absolute inset-0 flex justify-center items-center opacity-10 z-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                    <IconComponent className="w-[500px] h-[500px] text-indigo-300 dark:text-indigo-700" />
                </motion.div>

                {/* Foreground Content */}
                <div className="relative z-10">
                    {/* Floating 404 */}
                    <motion.h1
                        className="text-7xl font-black text-indigo-600 dark:text-indigo-400 drop-shadow-md"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: [0, -10, 0], opacity: 1 }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        404
                    </motion.h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
                        You've wandered off the grid. This page doesn't exist, or maybe it slipped
                        into hyperspace. Either way, let's get you back where the signal is strong.
                    </p>

                    {/* Navigation Links */}
                    <motion.div
                        className="mt-8 flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Link href="/" passHref>
                            <a className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded shadow transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                                Return Home
                            </a>
                        </Link>
                        <Link href="/projects" passHref>
                            <a className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded shadow transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                                Explore Projects
                            </a>
                        </Link>
                        <Link href="/blog" passHref>
                            <a className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded shadow transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                                Read My Blog
                            </a>
                        </Link>
                    </motion.div>
                </div>
                {/* Footer Element */}
                <motion.div
                    className="mt-12 text-sm text-gray-400 dark:text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    “You either return a Jedi or you stay lost in space.”
                </motion.div>
            </motion.main>
        </AnimatePresence>
    );
}
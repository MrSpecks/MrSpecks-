import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import Header from "./layout/Header";
import Footer from "./layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { resolvedTheme } = useTheme();
  const [cursorClass, setCursorClass] = useState('');

  useEffect(() => {
    setCursorClass(resolvedTheme === 'dark' ? 'cursor-red-saber' : 'cursor-blue-saber');
  }, [resolvedTheme]);

  return (
    <div className={`flex flex-col min-h-screen ${cursorClass}`}>
      <Header />
      <main className="flex-1 mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
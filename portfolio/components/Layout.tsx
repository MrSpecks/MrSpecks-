import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-6 max-w-6xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
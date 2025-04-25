import React from "react";
import Header from "./ayout/Header";
import Footer from "./layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="overflow-hidden">
      <main className="flex-1 px-4 py-6 max-w-6xl mx-auto">
        {children}
      </main>
      </div>
      <Footer />
    </div>
  )
}
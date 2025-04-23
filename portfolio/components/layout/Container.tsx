import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-8 max-w-screen-lg mx-auto">
      {children}
    </div>
  )
}
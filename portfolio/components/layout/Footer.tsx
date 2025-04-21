import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center py-4 text-sm text-gray-500 dark:text-gray-400 mt-10 border-t">
      <p>&copy; {new Date().getFullYear()} Kagiso Mfusi. All rights reserved.</p>
    </footer>
  );
}
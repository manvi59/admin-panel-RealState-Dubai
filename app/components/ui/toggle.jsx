"use client";
import { useState } from "react";
import Sidebar from "./sidebar"; // adjust the path if needed
import { Menu } from "lucide-react";

export default function toggleLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <main className="flex-1 p-6 md:ml-64">
        {/* Toggle button visible only on mobile */}
        <button  onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 mb-4 bg-blue-600 text-black rounded-lg shadow">
          <Menu size={100} />
        </button>

        {/* This will render the actual page content */}
        {children}
      </main>
    </div>
  );
}

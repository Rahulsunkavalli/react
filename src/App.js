import React from 'react';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-between">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-black/70 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-white">Apex Motors</h1>
        <nav className="space-x-4 text-sm">
          <a href="#home" className="hover:text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main id="home" className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl font-bold mb-4">Drive Your Dream Car</h2>
        <p className="text-lg text-gray-300 mb-6 max-w-xl">
          Premium car rental service delivering unmatched luxury and performance for automotive enthusiasts.
        </p>
        <button className="flex items-center bg-red-500 hover:bg-red-600 transition-colors text-white px-6 py-3 rounded-lg font-semibold">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </main>

      {/* Footer */}
      <footer id="contact" className="text-center py-4 text-sm text-gray-400 border-t border-gray-800">
        © 2025 Apex Motors. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

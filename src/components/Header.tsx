import { Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">East School</h1>
              <p className="text-sm text-gray-600">Excellence, Learning, Success</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-medium transition">
              About
            </button>
            <button onClick={() => scrollToSection('news')} className="text-gray-700 hover:text-blue-600 font-medium transition">
              News
            </button>
            <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-blue-600 font-medium transition">
              Events
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition">
              Contact
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
              About
            </button>
            <button onClick={() => scrollToSection('news')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
              News
            </button>
            <button onClick={() => scrollToSection('events')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
              Events
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

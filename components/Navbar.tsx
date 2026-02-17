
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 flex items-center justify-center ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-primary/20 h-16' : 'bg-transparent h-24'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">storm</span>
          <span className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase gold-gradient-text">Sucre</span>
        </div>
      </div>
    </nav>
  );
};

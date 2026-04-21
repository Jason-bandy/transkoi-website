'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('TransKoi');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e1a]/95' : 'bg-[#0a0e1a]/80'
      } backdrop-blur-xl border-b border-white/10`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-[5%]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            TransKoi
          </span>
        </a>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          <li>
            <button 
              onClick={() => handleClick('features')}
              className="text-gray-400 hover:text-white font-medium transition-colors relative group"
            >
              {t('nav.features')}
              <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all group-hover:w-full" />
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleClick('products')}
              className="text-gray-400 hover:text-white font-medium transition-colors relative group"
            >
              {t('nav.products')}
              <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all group-hover:w-full" />
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleClick('about')}
              className="text-gray-400 hover:text-white font-medium transition-colors relative group"
            >
              {t('nav.about')}
              <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all group-hover:w-full" />
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleClick('contact')}
              className="text-gray-400 hover:text-white font-medium transition-colors relative group"
            >
              {t('nav.contact')}
              <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all group-hover:w-full" />
            </button>
          </li>
        </ul>

        {/* CTA Button */}
        <button 
          onClick={() => handleClick('download')}
          className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(102,126,234,0.5)]"
        >
          {t('nav.download')}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}

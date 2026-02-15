import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Phone, Mail, GraduationCap } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { useMobileMenu } from '../context/MobileMenuContext';

const FormalHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openSearch } = useSearch();
  const { toggleMobileMenu } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // Hysteresis loop to prevent flickering
      // Only switch to scrolled (shrunk) state if user scrolls down past 100px
      // Only switch back to full state if user scrolls up past 50px
      setIsScrolled(prev => {
        if (!prev && currentScroll > 100) return true;
        if (prev && currentScroll < 50) return false;
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Sticky Header - Only visible on mobile */}
      <div className="lg:hidden sticky top-0 z-[100] w-full bg-white shadow-md flex flex-col h-[100px]">
        {/* Top Section - 70% Height - Crisp White */}
        <Link to="/" className="h-[70%] w-full bg-white flex items-center justify-center px-1 gap-1 border-b-[3px] border-[#FFA500]">
          {/* Logo - Round Shape */}
          <div className="flex-shrink-0 bg-white rounded-full p-1 h-11 w-11 flex items-center justify-center overflow-hidden">
            <img
              src="/logo.jpg"
              alt="PTSNSU Logo"
              className="h-full w-full object-contain"
              loading="eager"
              width="44"
              height="44"
              fetchPriority="high"
            />
          </div>
          {/* University Names - Centered */}
          <div className="flex flex-col justify-center items-center text-center min-w-0">
            <h1
              className="text-[#071133] font-bold text-[9px] leading-tight uppercase"
              style={{
                fontFamily: '"Noto Serif", serif',
                fontWeight: 700
              }}
            >
              PANDIT SHAMBHUNATH SHUKLA VISHWAVIDYALAYA, SHAHDOL (M.P.)
            </h1>
            <h2
              className="text-[#071133] font-bold text-[13px] leading-tight mt-2"
              style={{
                fontFamily: '"Noto Serif Devanagari", serif',
                fontWeight: 700
              }}
            >
              पंडित शंभूनाथ शुक्ला विश्वविद्यालय, शहडोल (म.प्र.)
            </h2>
          </div>
        </Link>

        {/* Bottom Section - 30% Height - Light Blue */}
        <div className="h-[30%] w-full bg-[#071133] flex items-center justify-between px-4">
          {/* Contact Info - Styled Icons */}
          <div className="flex items-center gap-2 xs:gap-4 w-full justify-start pl-2 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1 flex items-center justify-center shadow-sm">
                <Phone size={10} className="text-[#071133]" />
              </div>
              <span className="text-white text-[10px] font-semibold">07653-252525</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1 flex items-center justify-center shadow-sm">
                <Mail size={10} className="text-[#071133]" />
              </div>
              <span className="text-white text-[10px] font-semibold">info@ptsnsu.ac.in</span>
            </div>
          </div>


          {/* Search Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={openSearch}
              className="p-1 hover:bg-blue-900 rounded-md transition-colors flex-shrink-0"
              aria-label="Search"
            >
              <Search size={20} className="text-white" />
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="p-1 hover:bg-blue-900 rounded-md transition-colors flex-shrink-0"
              aria-label="Open Menu"
            >
              <Menu size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Header - Hidden on mobile */}
      <div
        className={`hidden lg:block w-full bg-white relative z-[60] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden ${isScrolled ? 'py-0' : ''
          }`}
      >
        {/* Panditji Image - Absolute Left of Viewport */}
        <div className="absolute left-[19px] top-1/2 -translate-y-1/2 z-20 flex items-end">
          <img
            src="/panditji.png"
            alt="Pandit Shambhunath Shukla"
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-[33px] lg:h-[40px]' : 'h-[75px] lg:h-[108px]'
              }`}
          />
          <div className={`flex flex-col justify-end text-left font-bold text-black transition-all duration-300 leading-tight whitespace-nowrap mb-1 ${isScrolled
            ? 'w-0 opacity-0 overflow-hidden ml-0'
            : 'w-auto opacity-100 ml-3'
            }`}>
            <div className="text-[10px] sm:text-[11px] lg:text-[12px]">पंडित शंभूनाथ शुक्ल</div>
            <div className="text-[10px] sm:text-[11px] lg:text-[12px]">18 दिसंबर 1903 - 1978</div>
          </div>
        </div>

        <div className={`w-full max-w-screen-xl mx-auto px-4 relative transition-all duration-300 flex items-center justify-center ${isScrolled ? 'py-0 min-h-[50px] lg:min-h-[60px]' : 'py-0 min-h-[80px] lg:min-h-[110px]'
          }`}>

          {/* Panditji Image and Info - Absolute Left */}

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">

            {/* Center: Logo + Text Content */}
            <Link to="/" className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'gap-2' : 'gap-3 md:gap-4'
              }`}>
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/logo.jpg"
                  alt="PTSNSU Logo"
                  loading="eager"
                  fetchPriority="high"
                  className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-6 lg:h-8' : 'h-12 lg:h-16'
                    }`}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center justify-center text-center space-y-1">
                {/* English Title - Cinzel Bold */}
                <h1
                  className={`font-bold tracking-wide uppercase leading-tight transition-all duration-300 ${isScrolled
                    ? 'text-xs sm:text-sm md:text-base lg:text-lg'
                    : 'text-base sm:text-lg md:text-xl lg:text-2xl'
                    }`}
                  style={{
                    fontFamily: '"Noto Serif", serif',
                    fontWeight: 700,
                    color: '#191970'
                  }}
                >
                  PANDIT SHAMBHUNATH SHUKLA VISHWAVIDYALAYA, SHAHDOL (M.P.)
                </h1>

                {/* Hindi Title - Noto Serif Devanagari - Hidden when scrolled */}
                {!isScrolled && (
                  <h2
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight mt-1 transition-all duration-300"
                    style={{
                      fontFamily: '"Noto Serif Devanagari", serif',
                      fontWeight: 700,
                      color: '#191970'
                    }}
                  >
                    पंडित शंभूनाथ शुक्ला विश्‍वविद्यालय, शहडोल (म.प्र.)
                  </h2>
                )}
              </div>


            </Link>

          </div>

          {/* Search Icon - Absolute Right */}
          {/* Search Icon - Absolute Right - Visible only when scrolled */}
          {/* Graduation Cap Watermark - Top Right Corner */}
          <div className="absolute -right-6 -top-6 opacity-[0.08] transform rotate-12 pointer-events-none hidden md:block overflow-visible z-0">
            <GraduationCap size={150} className="text-[#071133]" />
          </div>

          {/* Contact Info - Bottom Right - Visible only when NOT scrolled */}
          <div className={`absolute -right-10 bottom-0.5 flex items-center gap-2 transition-all duration-300 ${!isScrolled ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
            <a href="tel:+917052101786" className="flex items-center gap-1 group cursor-pointer">
              <div className="p-[3px] bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center">
                <Phone size={10} className="text-white" />
              </div>
              <span className="text-[10px] font-bold text-blue-600 group-hover:text-blue-800 transition-colors hidden xl:inline tracking-wide">+91 7052 101 786</span>
            </a>
            <a href="mailto:info@psnsu.ac.in" className="flex items-center gap-1 group cursor-pointer">
              <div className="p-[3px] bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center">
                <Mail size={10} className="text-white" />
              </div>
              <span className="text-[11px] font-bold text-blue-600 group-hover:text-blue-800 transition-colors hidden xl:inline tracking-wide">info@psnsu.ac.in</span>
            </a>
          </div>

          {/* Search Icon - Absolute Right - Visible only when scrolled */}
          <button
            onClick={openSearch}
            className={`absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 lg:gap-2 group cursor-pointer transition-all duration-300 ${isScrolled ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4'
              }`}
            aria-label="Search"
          >
            <div className="p-1.5 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors shadow-sm">
              <Search size={16} className="text-white group-hover:text-white transition-colors" />
            </div>
            <span className="text-xs text-blue-800 group-hover:text-blue-600 transition-colors tracking-wide font-semibold hidden lg:inline">Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FormalHeader;
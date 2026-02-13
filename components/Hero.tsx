import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "/10.jpg",
    title: "Research & Innovation",
    subtitle: "Hon'ble VC Prof. Ram Shankar on 77th Republic Day Celebration"
  },
  {
    image: "/8.jpg",
    title: "Expert Faculty",
    subtitle: "University Pride - Our Students at Smart India Hackathon 25' Grand Finale."
  },
  {
    image: "/9.jpg",
    title: "Academic Excellence",
    subtitle: "1st Runner Up at U.P Hackathon Defeating 23 IITs."
  },
  {
    image: "/11.jpg",
    title: "Student Mentorship",
    subtitle: "Personalized guidance and support to help every student achieve their full potential."
  },
  {
    image: "/12.jpg",
    title: "Global Perspective",
    subtitle: "Preparing students for a connected world through diverse learning experiences."
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [imageOrientations, setImageOrientations] = useState<Record<string, 'landscape' | 'portrait'>>({});
  const [isMobile, setIsMobile] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Ensure max 10 images (5 paired slides)
  const activeSlides = slides.slice(0, 10);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Construct pages logic
  const pages = React.useMemo(() => {
    if (activeSlides.length === 0) return [];

    if (isMobile) {
      return activeSlides.map(s => [s]);
    } else {
      const desktopPages = [];
      const count = Math.ceil(activeSlides.length / 2);
      for (let i = 0; i < count; i++) {
        let left = i * 2;
        let right = left + 1;

        // Handle odd number of slides: overlap the last slide logic
        if (right >= activeSlides.length && activeSlides.length > 1) {
          left = activeSlides.length - 2;
          right = activeSlides.length - 1;
        } else if (activeSlides.length === 1) {
          right = 0; // Duplicate for single image
        }

        const page = [activeSlides[left]];
        // Add right slide if it's different or explicit duplicate needed
        page.push(activeSlides[right]);

        desktopPages.push(page);
      }
      return desktopPages;
    }
  }, [activeSlides, isMobile]);

  // Append clone of first page for infinite loop
  const extendedPages = React.useMemo(() => {
    if (pages.length === 0) return [];
    return [...pages, pages[0]];
  }, [pages]);

  // Preload critical images
  useEffect(() => {
    const bgImg = new Image();
    bgImg.src = '/sliderbg.png';
    // Preload first page images
    if (pages.length > 0 && pages[0]) {
      pages[0].forEach(slide => {
        const img = new Image();
        img.src = slide.image;
      });
    }
  }, [pages]);

  const nextSlide = React.useCallback(() => {
    if (isResetting || pages.length === 0) return;
    setCurrent(prev => prev + 1);
  }, [isResetting, pages.length]);

  const prevSlide = React.useCallback(() => {
    if (isResetting || pages.length === 0) return;
    setCurrent(prev => (prev - 1 + pages.length) % pages.length); // Standard prev for now
  }, [isResetting, pages.length]);

  // Handle Loop Reset
  useEffect(() => {
    if (current === pages.length) {
      const timeout = setTimeout(() => {
        setIsResetting(true);
        setCurrent(0);
      }, 700); // Match transition duration
      return () => clearTimeout(timeout);
    }
  }, [current, pages.length]);

  // Clear Resetting State
  useEffect(() => {
    if (isResetting) {
      // Small delay to ensure render cycle with transition-none has hit
      const timeout = setTimeout(() => {
        setIsResetting(false);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isResetting]);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>, imgSrc: string) => {
    const img = e.currentTarget;
    const isPortrait = img.naturalHeight > img.naturalWidth;
    setImageOrientations(prev => ({
      ...prev,
      [imgSrc]: isPortrait ? 'portrait' : 'landscape'
    }));
  };

  return (
    <section className="relative w-full pt-1 pb-2 md:pt-2 md:pb-4 overflow-hidden bg-[url('/sliderbg.png')] bg-fixed bg-cover bg-center">
      {/* Dark Overlay for better contrast with Glass Effect */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Slider Container - Transparent so images slide over background */}
      <div className="relative w-full px-4 md:px-6 z-10">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Slider Track */}
          <div
            className={`flex transition-transform duration-700 ease-in-out ${isResetting ? 'transition-none' : ''}`}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {extendedPages.map((pageSlides, index) => {
              const leftSlide = pageSlides[0];
              const rightSlide = pageSlides[1]; // May be undefined in mobile if loop above changed (but my logic ensures arrays of 1)
              // Wait, mobile map is `[s]`. So pageSlides[1] is undefined. Correct.

              const isLeftPortrait = imageOrientations[leftSlide.image] === 'portrait';
              const isRightPortrait = rightSlide ? imageOrientations[rightSlide.image] === 'portrait' : false;

              return (
                <div key={index} className="flex-shrink-0 w-full">
                  {/* Split Layout - Single column on mobile, two columns on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[200px] md:min-h-[400px]">

                    {/* LEFT SIDE - Framed Image */}
                    <div className="relative bg-transparent p-1.5 md:p-2 flex items-center justify-center">
                      {/* Detailed Navy Blue Border Frame */}
                      <div className="relative w-full aspect-[16/10] rounded-2xl p-[2px] bg-[#001f3f] shadow-2xl">
                        {/* Inner White Border - Thinner for elegance */}
                        <div className="w-full h-full bg-[#E6D8B5] rounded-2xl p-1.5">
                          {/* Image Container */}
                          <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900 group">
                            {/* Blurred Background - Only for Portrait */}
                            {(isLeftPortrait || !imageOrientations[leftSlide.image]) && (
                              <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <img
                                  src={leftSlide.image}
                                  alt=""
                                  aria-hidden="true"
                                  className="w-full h-full object-cover blur-xl opacity-50 scale-110"
                                />
                              </div>
                            )}

                            {/* Main Image */}
                            <img
                              src={leftSlide.image}
                              alt={leftSlide.title}
                              onLoad={(e) => handleImageLoad(e, leftSlide.image)}
                              loading="eager"
                              decoding="auto"
                              fetchPriority="high"
                              className={`relative z-10 w-full h-full transition-transform duration-700 group-hover:scale-105 ${isLeftPortrait ? 'object-contain' : 'object-cover'}`}
                            />
                            {/* Overlay Description */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm z-20 rounded-b-xl">
                              <p className="text-white text-sm md:text-base font-medium text-center truncate">
                                {leftSlide.subtitle.length > 75 ? `${leftSlide.subtitle.substring(0, 75)}...` : leftSlide.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT SIDE - Framed Image - Hidden on mobile */}
                    <div className="hidden md:block relative bg-transparent p-1.5 md:p-2 md:flex items-center justify-center">
                      {rightSlide && (
                        <div className="relative w-full aspect-[16/10] rounded-2xl p-[2px] bg-[#001f3f] shadow-2xl">
                          {/* Inner White Border - Thinner for elegance */}
                          <div className="w-full h-full bg-[#E6D8B5] rounded-2xl p-1.5">
                            {/* Image Container */}
                            <div className="w-full h-full rounded-xl overflow-hidden bg-gray-900 relative group">
                              {/* Blurred Background - Only for Portrait */}
                              {(isRightPortrait || !imageOrientations[rightSlide.image]) && (
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                  <img
                                    src={rightSlide.image}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-full h-full object-cover blur-xl opacity-50 scale-110"
                                  />
                                </div>
                              )}

                              {/* Main Image */}
                              <img
                                src={rightSlide.image}
                                alt={rightSlide.title}
                                onLoad={(e) => handleImageLoad(e, rightSlide.image)}
                                loading="eager"
                                decoding="auto"
                                fetchPriority="high"
                                className={`relative z-10 w-full h-full transition-transform duration-700 group-hover:scale-105 ${isRightPortrait ? 'object-contain' : 'object-cover'}`}
                              />
                              {/* Overlay Description */}
                              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm z-20 rounded-b-xl">
                                <p className="text-white text-sm md:text-base font-medium text-center truncate">
                                  {rightSlide.subtitle.length > 75 ? `${rightSlide.subtitle.substring(0, 75)}...` : rightSlide.subtitle}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-8 md:left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 md:right-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
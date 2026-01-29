import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "/8.jpg",
    title: "Expert Faculty",
    subtitle: "P.T.S.N.S, Shahdol Students at Smart India Hackathon 2025 Grand Finale."
  },
  {
    image: "/9.jpg",
    title: "Academic Excellence",
    subtitle: "1st Runner Up at U.P Hackathon 2025"
  },
  {
    image: "/10.jpg",
    title: "Research & Innovation",
    subtitle: "Pioneering research initiatives that contribute to societal growth and development."
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

  // Ensure max 10 images (5 paired slides)
  const activeSlides = slides.slice(0, 10);
  const numSlides = Math.ceil(activeSlides.length / 2);

  // Preload critical images for instant display
  useEffect(() => {
    // Preload background image
    const bgImg = new Image();
    bgImg.src = '/sliderbg.png';

    // Preload first slide images (left and right)
    if (activeSlides.length > 0) {
      const firstImg = new Image();
      firstImg.src = activeSlides[0].image;

      if (activeSlides.length > 1) {
        const secondImg = new Image();
        secondImg.src = activeSlides[1].image;
      }
    }
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % numSlides);
    }, 7000);
    return () => clearInterval(timer);
  }, [numSlides]);

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
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Slider Container - Transparent so images slide over background */}
      <div className="relative w-full px-4 md:px-6 z-10">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: numSlides }).map((_, index) => {
              // Calculate indices for the pair
              let leftIndex = index * 2;
              let rightIndex = leftIndex + 1;

              // Handle odd number of slides: overlap the last slide
              if (rightIndex >= activeSlides.length && activeSlides.length > 1) {
                leftIndex = activeSlides.length - 2;
                rightIndex = activeSlides.length - 1;
              } else if (activeSlides.length === 1) {
                // Determine behavior for single image (duplicate it)
                rightIndex = 0;
              }

              const leftSlide = activeSlides[leftIndex];
              const rightSlide = activeSlides[rightIndex] || activeSlides[0];

              const isLeftPortrait = imageOrientations[leftSlide.image] === 'portrait';
              const isRightPortrait = imageOrientations[rightSlide.image] === 'portrait';

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
                      {/* Detailed Navy Blue Border Frame */}
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + numSlides) % numSlides)}
          className="absolute left-8 md:left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % numSlides)}
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
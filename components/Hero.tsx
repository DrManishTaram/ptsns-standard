import React, { useState, useEffect } from 'react';

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

  // Ensure max 10 images (5 paired slides)
  const activeSlides = slides.slice(0, 10);
  const numSlides = Math.ceil(activeSlides.length / 2);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % numSlides);
    }, 7000);
    return () => clearInterval(timer);
  }, [numSlides]);

  return (
    <section className="relative w-full pt-2 pb-3 md:pt-[35px] md:pb-10 overflow-hidden bg-[url('/sliderbg.png')] bg-fixed bg-cover bg-center">
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

              return (
                <div key={index} className="flex-shrink-0 w-full">
                  {/* Split Layout - Single column on mobile, two columns on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[200px] md:min-h-[360px]">

                    {/* LEFT SIDE - Framed Image */}
                    <div className="relative bg-transparent p-1.5 md:p-2 flex items-center justify-center">
                      {/* Detailed Navy Blue Border Frame */}
                      <div className="relative w-full aspect-[16/9] rounded-2xl p-[2px] bg-[#001f3f] shadow-2xl">
                        {/* Inner White Border - Thinner for elegance */}
                        <div className="w-full h-full bg-white rounded-2xl p-1.5">
                          {/* Image Container */}
                          <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900 group">
                            {/* Blurred Background to fill space */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                              <img
                                src={leftSlide.image}
                                alt=""
                                aria-hidden="true"
                                loading={index === 0 ? "eager" : "lazy"}
                                className="w-full h-full object-cover blur-md opacity-40 scale-110"
                              />
                            </div>

                            {/* Main Image */}
                            <img
                              src={leftSlide.image}
                              alt={leftSlide.title}
                              loading={index === 0 ? "eager" : "lazy"}
                              decoding={index === 0 ? "auto" : "async"}
                              {...(index === 0 ? { fetchPriority: "high" } : {})}
                              className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Description */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm z-20">
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
                      <div className="relative w-full aspect-[16/9] rounded-2xl p-[2px] bg-[#001f3f] shadow-2xl">
                        {/* Inner White Border - Thinner for elegance */}
                        <div className="w-full h-full bg-white rounded-2xl p-1.5">
                          {/* Image Container */}
                          <div className="w-full h-full rounded-xl overflow-hidden bg-gray-900 relative group">
                            {/* Blurred Background to fill space */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                              <img
                                src={rightSlide.image}
                                alt=""
                                aria-hidden="true"
                                className="w-full h-full object-cover blur-md opacity-40 scale-110"
                              />
                            </div>

                            {/* Main Image */}
                            <img
                              src={rightSlide.image}
                              alt={rightSlide.title}
                              loading={index === 0 ? "eager" : "lazy"}
                              {...(index === 0 ? { fetchPriority: "high" } : {})}
                              className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Description */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm z-20">
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

        {/* Dot Indicators */}
        <div className="absolute -bottom-5 md:-bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3 items-center justify-center">
          {Array.from({ length: Math.ceil(slides.slice(0, 10).length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full border-2 border-white/80 shadow-sm ${index === current
                ? 'bg-white w-10 h-2'
                : 'bg-white/70 hover:bg-white w-2 h-2'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
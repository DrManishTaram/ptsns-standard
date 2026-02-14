import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Arunendra Shukla",
    dept: "Department of English",
    image: "https://picsum.photos/150/150?random=11",
    quote: "The English Department isn't just about reading books—it's about reading the world. Every classroom feels like a portal into ideas, voices, and histories that have shaped human thought. Discussions here are intense, transformative, and often beautifully chaotic. It's an experience that lingers far beyond the page."
  },
  {
    id: 2,
    name: "Priya Patel",
    dept: "Computer Science",
    image: "https://picsum.photos/150/150?random=12",
    quote: "The practical exposure at the labs here is unmatched. The faculty doesn't just teach coding; they teach us how to solve real-world problems. The collaborative environment has helped me launch two startups before graduation."
  },
  {
    id: 3,
    name: "Rahul Sharma",
    dept: "Business Administration",
    image: "https://picsum.photos/150/150?random=13",
    quote: "Leadership isn't taught in a day, but this university cultivates it every single day. From organizing cultural fests to managing campus initiatives, I've grown more outside the classroom than I ever expected."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run effect when index changes to avoid stale closures if relying on prev state internally in next() - wait, next uses functional update, so simple dependency or no dependency with robust function is fine. But putting next in dependency or just interval is better.
  // Actually, next() is defined inside component, so it changes every render.
  // Better to use functional update in setScroll which next() does.
  // Let's just put the interval effect.

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-gradient-to-b from-turmeric-50 to-white">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-4 rounded-full bg-turmeric-50 border border-turmeric-100 text-turmeric-600 font-bold tracking-widest uppercase text-xs mb-4 shadow-sm">
            Student & Alumni Voices
          </span>
          <h2 className="text-4xl font-serif font-bold text-earth-900">
            What Our <span className="text-turmeric-600 border-b-4 border-turmeric-600">Community</span> Says
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover what our students and alumni have to say about their experiences at Pandit Shambhu Nath Shukla Vishwavidyalaya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-turmeric-500 text-white p-4 rounded-full shadow-lg">
              <Quote size={24} fill="white" />
            </div>

            <div className="mt-6 overflow-hidden">
              <div
                className="flex flex-nowrap transition-transform duration-700 ease-in-out will-change-transform"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4 flex flex-col items-center">
                    <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed mb-8 text-center min-h-[8rem] flex items-center justify-center">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex flex-col items-center justify-center">
                      <div className="w-20 h-20 p-1 bg-gradient-to-br from-turmeric-400 to-forest-800 rounded-full mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover border-4 border-white"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-earth-900">{testimonial.name}</h4>
                      <p className="text-turmeric-600 font-medium text-sm">{testimonial.dept}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white text-earth-800 p-3 rounded-full shadow-lg hover:bg-turmeric-600 hover:text-white transition-colors hidden md:block" // Hidden on mobile
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white text-earth-800 p-3 rounded-full shadow-lg hover:bg-turmeric-600 hover:text-white transition-colors hidden md:block" // Hidden on mobile
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-between w-full absolute top-1/2 -translate-y-1/2 left-0 px-2 pointer-events-none">
            <button onClick={prev} className="pointer-events-auto bg-white/80 p-2 rounded-full shadow-md text-earth-900"><ChevronLeft size={20} /></button>
            <button onClick={next} className="pointer-events-auto bg-white/80 p-2 rounded-full shadow-md text-earth-900"><ChevronRight size={20} /></button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-turmeric-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
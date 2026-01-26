import React, { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, Award, GraduationCap } from 'lucide-react';

// Animated Counter Component
const Counter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLHeadingElement>(null);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Reset and start animation
          if (timerRef.current) clearInterval(timerRef.current);

          let start = 0;
          const increment = end / (duration / 16); // 60fps

          timerRef.current = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              if (timerRef.current) clearInterval(timerRef.current);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        } else {
          // Reset when out of view
          if (timerRef.current) clearInterval(timerRef.current);
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const StatItem: React.FC<{ icon: React.ReactNode; count: number; suffix: string; label: string; delay: string }> = ({ icon, count, suffix, label, delay }) => (
  <div className={`flex flex-col items-center justify-center p-2 md:p-8 group relative animate-fade-up`} style={{ animationDelay: delay }}>
    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
    {/* Icon Container - Hidden on mobile, Order 1 on Desktop */}
    <div className="hidden md:flex mb-6 p-5 bg-gradient-to-br from-white/10 to-white/5 rounded-full text-turmeric-400 group-hover:bg-turmeric-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 shadow-lg border border-white/10 order-1">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 36 })}
    </div>
    {/* Number - Order 1 on Mobile, Order 2 on Desktop */}
    <h3 className="text-4xl md:text-5xl font-bold text-white mb-1 md:mb-3 font-serif flex items-baseline order-1 md:order-2">
      <Counter end={count} suffix={suffix} />
    </h3>
    {/* Label - Order 2 on Mobile, Order 3 on Desktop */}
    <p className="text-turmeric-100 font-bold tracking-widest uppercase text-[10px] md:text-xs relative z-10 order-2 md:order-3">
      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-turmeric-500 inline-block rounded-full mr-2"></span>
      {label}
    </p>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="py-10 md:py-12 sm:py-16 md:py-24 relative overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/10.jpg')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <StatItem icon={<Users />} count={5000} suffix="+" label="Students Enrolled" delay="0s" />
          <StatItem icon={<BookOpen />} count={120} suffix="+" label="Courses Offered" delay="0.1s" />
          <StatItem icon={<Award />} count={50} suffix="+" label="Awards Won" delay="0.2s" />
          <StatItem icon={<GraduationCap />} count={15000} suffix="+" label="Alumni Network" delay="0.3s" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const PopupBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Only show if on homepage
        if (location.pathname === '/') {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [location.pathname]);

    if (!isVisible) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden relative animate-zoom-in">
                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                {/* Header - 20% height representation */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-32 flex items-center justify-center relative">
                    <h2 className="text-2xl font-bold text-white tracking-wide">Important Notice</h2>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col items-center text-center space-y-4">
                    {/* Logo */}
                    <div className="w-20 h-20 mb-2">
                        <img
                            src="/logo.jpg"
                            alt="University Logo"
                            className="w-full h-full object-contain drop-shadow-md"
                        />
                    </div>

                    {/* Heading */}
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        Adjunct Faculty – प्राणीशास्त्र विभाग
                    </h3>

                    {/* Description - 4 lines of text, font size 12 */}
                    <p className="text-[12px] text-gray-600 leading-relaxed text-justify px-4">
                        Applications are invited for the position of Adjunct Faculty in the Department of Zoology.
                        Interested candidates with relevant expertise and qualifications are requested to submit
                        their applications by the due date. Please visit the university website for detailed
                        eligibility criteria and application procedures.
                    </p>

                    {/* Optional Action Button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="mt-4 px-6 py-2 bg-blue-700 text-white text-sm font-semibold rounded hover:bg-blue-800 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default PopupBanner;

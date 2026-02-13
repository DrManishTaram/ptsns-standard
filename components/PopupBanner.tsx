import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

interface Notice {
    id: number;
    title: string;
    heading: string;
    description: string;
    image: string;
}

const notices: Notice[] = [
    {
        id: 1,
        title: "IMPORTANT NOTICE",
        heading: "Adjunct Faculty – प्राणीशास्त्र विभाग",
        description: "Applications are invited for the position of Adjunct Faculty in the Department of Zoology. Interested candidates with relevant expertise and qualifications are requested to submit their applications by the due date. Please visit the university website for detailed eligibility criteria and application procedures.",
        image: "/logo.jpg"
    },
    {
        id: 2,
        title: "IMPORTANT NOTICE",
        heading: "5th Convocation Ceremony",
        description: "Information regarding submission of online degree form, please submit your forms on or before 17-02-2026 till 12:00 AM.",
        image: "/logo.jpg"
    }
];

const PopupBanner: React.FC = () => {
    const [visibleNotices, setVisibleNotices] = useState<Notice[]>([]);
    const [isMounted, setIsMounted] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Only show if on homepage
        if (location.pathname === '/') {
            const timer = setTimeout(() => {
                setVisibleNotices(notices); // Load all notices
                setIsMounted(true);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setVisibleNotices([]);
            setIsMounted(false);
        }
    }, [location.pathname]);

    const handleClose = () => {
        // Remove the first notice (FIFO) or last notice (LIFO)?
        // User asked: "behind banner will only be visible when front one is closed"
        // This implies stacking. If we render the *last* item as top, we remove the last item.
        // Let's treat the array as a stack: render the last item.
        setVisibleNotices(prev => prev.slice(0, -1));
    };

    if (!isMounted || visibleNotices.length === 0) return null;

    // Get the current notice to display (top of the stack)
    const currentNotice = visibleNotices[visibleNotices.length - 1];

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
            {/* We key by ID to ensure React treats them as different instances for animation if we wanted independent animations, 
                but keeping the container static and changing content is smoother for "perfectly overlapping" feel. 
                However, to re-trigger 'animate-zoom-in', we can use the key on the inner div. */}
            <div
                key={currentNotice.id}
                className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden relative animate-zoom-in"
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                {/* Header - 20% height representation */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-32 flex items-center justify-center relative">
                    <h2 className="text-2xl font-bold text-white tracking-wide">{currentNotice.title}</h2>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col items-center text-center space-y-4">
                    {/* Logo */}
                    <div className="w-20 h-20 mb-2">
                        <img
                            src={currentNotice.image}
                            alt="University Logo"
                            className="w-full h-full object-contain drop-shadow-md"
                        />
                    </div>

                    {/* Heading */}
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {currentNotice.heading}
                    </h3>

                    {/* Description - 4 lines of text, font size 12 */}
                    <p className="text-[12px] text-gray-600 leading-relaxed text-justify px-4">
                        {currentNotice.description}
                    </p>

                    {/* Optional Action Button */}
                    <button
                        onClick={handleClose}
                        className="mt-4 px-6 py-2 bg-blue-700 text-white text-sm font-semibold rounded hover:bg-blue-800 transition-colors"
                    >
                        Close
                    </button>

                    {/* Pagination/Stack Indicator (Optional but helpful) */}
                    {visibleNotices.length > 1 && (
                        <p className="text-[10px] text-gray-400 mt-2">
                            {visibleNotices.length} notices remaining
                        </p>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default PopupBanner;

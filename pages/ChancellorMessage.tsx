import React from 'react';
import { Quote, CheckCircle, ArrowRight, User, Mail, Phone } from 'lucide-react';

const ChancellorMessage: React.FC = () => {
    return (
        <div className="min-h-screen bg-stone-50 animate-fade-in-up">

            {/* Page Header */}
            <div className="bg-earth-900 text-white relative py-10 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Chancellor's Message</h1>
                    <div className="flex justify-center gap-2 text-turmeric-400 text-sm font-bold uppercase tracking-widest">
                        <span>Administration</span>
                        <span>•</span>
                        <span>Leadership</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar / Profile Card */}
                    <div className="w-full lg:w-1/3 order-1">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24 border border-gray-100">
                            <div className="h-32 bg-gradient-to-r from-turmeric-600 to-turmeric-500 relative">
                                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 p-1.5 bg-white rounded-full">
                                    <img
                                        src="/chancellor.jpg"
                                        alt="Hon'ble Governor Shri Mangubhai Patel"
                                        className="w-32 h-32 rounded-full object-cover object-top border-4 border-white shadow-lg"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Mangubhai+Patel&background=random&size=200';
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="pt-20 pb-8 px-6 text-center">
                                <h3 className="text-2xl font-serif font-bold text-earth-900">Shri Mangubhai Patel</h3>
                                <p className="text-base font-serif font-bold text-earth-800 mt-1">श्री मंगुभाई पटेल</p>
                                <p className="text-turmeric-600 font-bold text-xs uppercase tracking-wide mt-2">Hon'ble Governor of Madhya Pradesh</p>
                                <p className="text-turmeric-600 font-bold text-xs uppercase tracking-wide">मध्य प्रदेश के माननीय राज्यपाल</p>
                                
                                <p className="text-gray-500 text-sm mt-4 italic">"Education is the most powerful weapon which you can use to change the world."</p>

                                <div className="mt-8 space-y-4 text-left border-t border-gray-100 pt-6">
                                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                                        <span className="p-2 bg-stone-100 rounded-full text-turmeric-600"><Mail size={16} /></span>
                                        <a href="mailto:governor@mp.gov.in" className="hover:text-turmeric-600 transition-colors">governor@mp.gov.in</a>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                                        <span className="p-2 bg-stone-100 rounded-full text-turmeric-600"><Phone size={16} /></span>
                                        <span>+91 755 1234567</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <a href="http://governor.mp.gov.in/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-earth-900 text-white rounded-lg font-bold hover:bg-turmeric-600 transition-colors shadow-lg">
                                        Visit Raj Bhavan Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content: Message */}
                    <div className="w-full lg:w-2/3 order-2">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 relative">
                            <Quote className="absolute top-8 left-8 text-turmeric-100 w-20 h-20 -z-0" />

                            <div className="relative z-10">
                                <h2 className="text-3xl font-serif font-bold text-earth-900 mb-6">Message from the Chancellor</h2>

                                <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
                                    <p className="mb-4">
                                        <strong>Dear Students, Faculty, and Staff,</strong>
                                    </p>
                                    <p className="mb-6">
                                        It gives me great pride to address the vibrant community of Pandit Shambhunath Shukla University. Education acts as the cornerstone of any progressive society, and universities are the temples where the future of our nation is forged. As we stride forward, our collective goal must be to cultivate an environment that nurtures creativity, innovation, and ethical leadership.
                                    </p>
                                    <p className="mb-6">
                                        Madhya Pradesh has always been a land of rich cultural heritage and intellectual prowess. Our university plays a pivotal role in upholding these traditions while embracing the advancements of the modern world. Specifically, in alignment with the <strong>National Education Policy (NEP) 2020</strong>, we are committed to providing holistic, multidisciplinary, and value-based education.
                                    </p>
                                    <p className="mb-6">
                                        My vision for this university is to become a global hub of learning where:
                                    </p>
                                    <ul className="space-y-3 pl-4 mb-8">
                                        {[
                                            "Knowledge serves as a tool for social empowerment and nation-building.",
                                            "Research addresses local challenges with global perspectives.",
                                            "Students are equipped not just with degrees, but with character and capability.",
                                            "The campus fosters unity, discipline, and a spirit of service."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="text-turmeric-500 w-5 h-5 flex-shrink-0 mt-1" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p>
                                        I urge every student to dream big and work tirelessly towards achieving those dreams. Let us work together to make Pandit Shambhunath Shukla University a center of excellence that the entire nation looks up to.
                                    </p>
                                    <p className="mt-4 font-bold text-earth-900">
                                        Jai Hind!
                                    </p>
                                </div>

                                <div className="mt-12 flex items-end justify-between border-t border-gray-100 pt-8">
                                    <div>
                                        <h4 className="font-serif font-bold text-lg text-earth-900">Shri Mangubhai Patel</h4>
                                        <p className="font-serif font-bold text-md text-earth-800">श्री मंगुभाई पटेल</p>
                                        <p className="text-sm text-gray-500 mt-1">Hon'ble Governor of Madhya Pradesh & Chancellor</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Emblem_of_India.svg" alt="Emblem" className="h-16 opacity-20 grayscale" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <a href="/vision-mission" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                                <span className="font-bold text-earth-900 group-hover:text-turmeric-600 transition-colors">University Vision</span>
                                <ArrowRight className="text-gray-300 group-hover:text-turmeric-600 transition-colors" size={20} />
                            </a>
                            <a href="/vc-message" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                                <span className="font-bold text-earth-900 group-hover:text-turmeric-600 transition-colors">Vice Chancellor's Message</span>
                                <ArrowRight className="text-gray-300 group-hover:text-turmeric-600 transition-colors" size={20} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChancellorMessage;

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Mail, Phone, Heart, Users, Shield, Target, Award } from 'lucide-react';

const DSWPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">

            {/* Hero Section */}
            <div className="relative bg-[#071133] text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>

                <div className="container mx-auto px-4 py-16 relative z-10 text-center">
                    <div className="flex justify-center items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <span>Administration</span>
                        <ChevronRight size={12} />
                        <span>DSW</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
                        Office of the Dean of Student Welfare
                    </h1>
                    <p className="text-lg font-light text-blue-100/80 max-w-2xl mx-auto">
                        Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)
                    </p>
                </div>
            </div>

            {/* Main Content */}
             <div className="container mx-auto px-4 py-12 -mt-12 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Dean Profile */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                             <div className="h-24 bg-gradient-to-r from-[#071133] to-[#1a2b5e]"></div>
                             
                             <div className="px-8 pb-8 text-center bg-white -mt-12 relative z-10">
                                <div className="w-40 h-40 mx-auto rounded-full p-1 bg-white mb-4 shadow-lg">
                                    <img 
                                        src="/Adminstration/pramod-pandey.jpg" 
                                        alt="Prof. Pramod Kumar Pandey" 
                                        className="w-full h-full rounded-full object-cover border-4 border-white"
                                    />
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Prof. Pramod Kumar Pandey</h2>
                                <p className="text-blue-600 font-bold uppercase text-xs tracking-wider mb-6">Dean, Student Welfare</p>
                                
                                <div className="space-y-4 text-left bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                    <a href="tel:+919424774332" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Phone size={16} />
                                        </div>
                                        <span className="text-gray-600 font-medium text-sm group-hover:text-blue-600">+91-9424774332</span>
                                    </a>
                                    <a href="mailto:pramodpandeyphys@gmail.com" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Mail size={16} />
                                        </div>
                                        <span className="text-gray-600 font-medium text-sm group-hover:text-blue-600 break-all">pramodpandeyphys@gmail.com</span>
                                    </a>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Right Column: Mission, Vision, Overview */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Overview Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                             <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <Users size={24} />
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-[#071133]">Overview</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                The Office of the Dean of Student Welfare (DSW) acts as a bridge between the students and the university administration. We are dedicated to creating a supportive and enriching environment that fosters the intellectual, social, and emotional growth of every student. From cultural activities to grievance redressal, the DSW office is the primary support system for the student community.
                            </p>
                        </div>

                        {/* Mission & Vision Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Mission */}
                            <div className="bg-gradient-to-br from-[#071133] to-[#1a2b5e] text-white rounded-2xl shadow-lg p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Target size={100} />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                            <Target size={24} className="text-amber-400" />
                                        </div>
                                        <h3 className="text-xl font-bold">Our Mission</h3>
                                    </div>
                                    <p className="text-blue-100 leading-relaxed">
                                        To ensure holistic growth and welfare of students by facilitating access to support systems, extracurricular engagement, and student-centric development.
                                    </p>
                                </div>
                            </div>

                            {/* Vision */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                                <div className="absolute top-0 right-0 p-4 text-emerald-50 group-hover:text-emerald-100 transition-colors">
                                    <Shield size={100} />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                            <Shield size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        To create a vibrant, inclusive, and safe campus environment where students can thrive academically, socially, and emotionally with dignity and opportunity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Core Functions / What We Do */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Heart className="text-red-500" /> Key Focus Areas
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Student Grievance Redressal",
                                    "Cultural & Literary Activities",
                                    "Scholarships & Financial Aid",
                                    "Student Union Activities",
                                    "Hostel & Mess Supervision",
                                    "Mental Health & Counseling"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DSWPage;

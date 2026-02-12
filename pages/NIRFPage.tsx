import React from 'react';
import { Download, GraduationCap, FileText, BookOpen, TrendingUp, Award, Users, Globe, Mail, Info } from 'lucide-react';

const NIRFPage: React.FC = () => {
    const handleDownloadPDF = () => {
        const link = document.createElement('a');
        link.href = '/PTSNS_NIRF_2025-26.pdf';
        link.download = 'PTSNS_NIRF_2025-26.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-turmeric-100 selection:text-earth-900 overflow-x-hidden">

            {/* ============================================
          HERO SECTION
          ============================================ */}
            <section className="relative pt-8 pb-12 overflow-hidden bg-white">

                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-100/40 rounded-full blur-[120px] mix-blend-multiply animate-float"></div>
                    <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] bg-rose-100/40 rounded-full blur-[100px] mix-blend-multiply animate-float delay-1000"></div>
                    <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-slate-100/50 rounded-full blur-[130px] mix-blend-multiply animate-float delay-2000"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                        {/* NIRF Badge - Responsive sizing */}
                        <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/60 border-2 border-blue-400 mb-2 sm:mb-3 animate-fade-in-up shadow-md backdrop-blur-sm">
                            <Award size={10} className="text-blue-600 sm:hidden" />
                            <Award size={12} className="text-blue-600 hidden sm:block" />
                            <span className="text-xs sm:text-sm md:text-base font-bold text-blue-700">National Institutional Ranking Framework</span>
                        </div>


                        {/* Main Heading - Responsive sizing and wrapping */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-relaxed animate-fade-in-up delay-100 mb-2 flex items-center gap-2 sm:gap-3 justify-center flex-wrap py-3 sm:py-4 pb-4 sm:pb-5 min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turmeric-600 to-forest-500 inline-block pb-2">
                                NIRF Rankings
                            </span>
                            <span className="text-turmeric-600">&</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turmeric-600 to-forest-500 inline-block pb-2">
                                Participation Status
                            </span>
                        </h1>

                        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed mb-4 sm:mb-6 animate-fade-in-up delay-200 px-4 sm:px-0">
                            Pandit Shambhunath Shukla University's commitment to excellence, transparency, and academic integrity through NIRF participation
                        </p>

                        {/* CTA Buttons - Stack on mobile */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-300 mb-8 sm:mb-10 w-full sm:w-auto px-4 sm:px-0">
                            <button
                                onClick={() => document.getElementById('disciplines')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-earth-900 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-slate-200 text-sm w-full sm:w-auto"
                            >
                                Explore Our Rankings
                            </button>
                            <button
                                onClick={handleDownloadPDF}
                                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 justify-center text-sm w-full sm:w-auto"
                            >
                                <Download size={18} />
                                Download Data
                            </button>
                        </div>


                        {/* Statistics Cards - Mobile responsive */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl w-full animate-fade-in-up delay-400 px-2 sm:px-0">
                            {[
                                { label: "Disciplines", value: "23", icon: BookOpen, color: "from-blue-500 to-indigo-500", bgColor: "bg-blue-50/50" },
                                { label: "Years Participating", value: "8+", icon: TrendingUp, color: "from-purple-500 to-pink-500", bgColor: "bg-purple-50/50" },
                                { label: "Data Categories", value: "7", icon: FileText, color: "from-indigo-500 to-blue-500", bgColor: "bg-indigo-50/50" },
                                { label: "Latest Report", value: "2025-2026", icon: Award, color: "from-rose-500 to-pink-500", bgColor: "bg-rose-50/50" }
                            ].map((stat, i) => (
                                <div key={i} className={`group ${stat.bgColor} backdrop-blur-sm border border-gray-100 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl text-center`}>
                                    <div className={`mb-2 sm:mb-3 inline-flex p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-md`}>
                                        <stat.icon size={20} strokeWidth={2} className="sm:hidden" />
                                        <stat.icon size={22} strokeWidth={2} className="hidden sm:block md:hidden" />
                                        <stat.icon size={24} strokeWidth={2} className="hidden md:block" />
                                    </div>
                                    <div className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-earth-900 mb-1 sm:mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider leading-tight">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ============================================
          NIRF DISCIPLINES & DATA ACCESS - TWO COLUMN SECTION
          ============================================ */}
            <section id="disciplines" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/40 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100/40 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    {/* Two Column Grid - Stack on mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">

                        {/* LEFT COLUMN - Our Disciplines */}
                        <div className="text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-50 border border-purple-200 mb-3 sm:mb-4 backdrop-blur-sm">
                                <GraduationCap size={12} className="text-purple-600 sm:hidden" />
                                <GraduationCap size={14} className="text-purple-600 hidden sm:block" />
                                <span className="text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wide">Our Disciplines</span>
                            </div>

                            {/* Gradient Heading */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-3 sm:mb-4">
                                NIRF Participating Disciplines
                            </h2>

                            <p className="text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                                Pandit Shambhunath Shukla University participates in NIRF across five key disciplines along with overall ranking
                            </p>

                            {/* Discipline Card with Gradient Top Border */}
                            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl sm:rounded-3xl mb-4 sm:mb-6">
                                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6">
                                    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3 sm:gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-md">
                                            <GraduationCap size={20} strokeWidth={2} className="sm:hidden" />
                                            <GraduationCap size={24} strokeWidth={2} className="hidden sm:block" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base sm:text-lg font-bold text-earth-900 mb-1">PTSNS Overall</h3>
                                            <p className="text-slate-600 text-xs leading-relaxed">
                                                Comprehensive institutional ranking covering all academic parameters
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Callout */}
                            <div className="bg-turmeric-50 border-l-4 border-turmeric-500 rounded-r-2xl p-4 flex items-start gap-3">
                                <Info size={18} className="text-turmeric-600 flex-shrink-0 mt-0.5" />
                                <p className="text-slate-700 text-xs">
                                    All discipline data is available for <span className="font-bold text-turmeric-700">open view</span> of all stakeholders
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - Data Access */}
                        <div className="text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 border border-blue-200 mb-3 sm:mb-4 backdrop-blur-sm">
                                <Download size={12} className="text-blue-600 sm:hidden" />
                                <Download size={14} className="text-blue-600 hidden sm:block" />
                                <span className="text-[10px] sm:text-xs font-bold text-blue-700 uppercase tracking-wide">Data Access</span>
                            </div>

                            {/* Gradient Heading */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                                View & Download NIRF Data
                            </h2>

                            <p className="text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                                Access detailed data on all NIRF parameters for each discipline. Transparent and open for all stakeholders.
                            </p>

                            {/* Download Card */}
                            <div className="bg-white backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 mb-4 sm:mb-6">
                                <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
                                    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-3 sm:gap-4 flex-1 w-full sm:w-auto">
                                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-md">
                                            <FileText size={20} strokeWidth={2} className="sm:hidden" />
                                            <FileText size={24} strokeWidth={2} className="hidden sm:block" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-earth-900 mb-1">PTSNS Overall</h3>
                                            <p className="text-slate-600 text-xs">Complete institutional data</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleDownloadPDF}
                                        className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center gap-2 text-xs w-full sm:w-auto justify-center"
                                    >
                                        <Download size={16} />
                                        Download
                                    </button>
                                </div>
                            </div>

                            {/* Info Box */}
                            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4">
                                <div className="flex items-start gap-3">
                                    <FileText size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-earth-900 mb-1 text-xs">Comprehensive Data Available</h4>
                                        <p className="text-slate-600 text-xs leading-relaxed">
                                            All data files contain detailed information as per NIRF parameters and are available in PDF format for download and verification.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          ABOUT NIRF SECTION
          ============================================ */}
            <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">

                {/* Corner Decorations */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px]"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-turmeric-50 border border-turmeric-200 mb-3 sm:mb-4 backdrop-blur-sm">
                            <Award size={12} className="text-turmeric-600 sm:hidden" />
                            <Award size={14} className="text-turmeric-600 hidden sm:block" />
                            <span className="text-[10px] sm:text-xs font-bold text-turmeric-700 uppercase tracking-wide">About NIRF</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4 px-4 sm:px-0">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                National Institutional Ranking Framework
                            </span>
                        </h2>

                        <p className="text-sm sm:text-base text-slate-700 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                            The NIRF was approved by MHRD and launched by the Honourable Minister of Human Resource Development on <span className="font-bold text-earth-900">29th September 2015</span>.
                        </p>

                        {/* Information Box */}
                        <div className="bg-slate-50 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-lg text-left">
                            <div className="border-l-4 border-turmeric-500 pl-6">
                                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                                    This framework outlines a methodology to rank institutions across the country. The methodology draws from the overall recommendations and broad understanding arrived at by a Core Committee set up by MHRD, to identify the broad parameters for ranking various universities and institutions.
                                </p>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="font-bold text-slate-600">Source:</span>
                                    <a
                                        href="https://www.nirfindia.org/About"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-turmeric-600 hover:text-turmeric-700 font-semibold hover:underline"
                                    >
                                        www.nirfindia.org/About
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          RANKING PARAMETERS SECTION
          ============================================ */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                Ranking Parameters
                            </span>
                        </h2>

                        {/* Parameters Grid - Responsive */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                            {[
                                {
                                    title: "Teaching, Learning & Resources",
                                    description: "Faculty quality, learning resources, and infrastructure",
                                    icon: BookOpen,
                                    color: "from-blue-500 to-indigo-500"
                                },
                                {
                                    title: "Research & Professional Practice",
                                    description: "Publications, patents, and research funding",
                                    icon: TrendingUp,
                                    color: "from-pink-500 to-rose-500"
                                },
                                {
                                    title: "Graduation Outcomes",
                                    description: "Placement, higher studies, and entrepreneurship",
                                    icon: Award,
                                    color: "from-purple-500 to-indigo-500"
                                },
                                {
                                    title: "Outreach & Inclusivity",
                                    description: "Regional and gender diversity initiatives",
                                    icon: Users,
                                    color: "from-indigo-500 to-blue-500"
                                },
                                {
                                    title: "Perception",
                                    description: "Reputation among academic peers and employers",
                                    icon: Globe,
                                    color: "from-rose-500 to-pink-500"
                                }
                            ].map((param, i) => (
                                <div key={i} className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center sm:text-left">
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${param.color} flex items-center justify-center text-white mb-4 sm:mb-5 shadow-md mx-auto sm:mx-0`}>
                                        <param.icon size={24} strokeWidth={2} className="sm:hidden" />
                                        <param.icon size={28} strokeWidth={2} className="hidden sm:block" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-earth-900 mb-2">
                                        {param.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                                        {param.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          SHARE YOUR FEEDBACK SECTION
          ============================================ */}
            <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100/30 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-[120px]"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-rose-50 border border-rose-200 mb-3 sm:mb-4 backdrop-blur-sm">
                            <Mail size={12} className="text-rose-600 sm:hidden" />
                            <Mail size={14} className="text-rose-600 hidden sm:block" />
                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wide">Your Voice Matters</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4 px-4 sm:px-0">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                                Share Your Feedback
                            </span>
                        </h2>

                        <p className="text-sm sm:text-base text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                            We value your opinion on our NIRF data. Help us improve transparency and data quality.
                        </p>

                        {/* Feedback Card */}
                        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 shadow-2xl">

                            {/* Email Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-lg">
                                <Mail size={32} className="text-purple-600" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Send Us Your Feedback
                            </h3>

                            <p className="text-white/90 text-sm mb-8 max-w-2xl mx-auto leading-relaxed">
                                You can give your opinion/feedback on our NIRF data through email. We appreciate your valuable input in helping us maintain data accuracy.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="mailto:ptsnsunivers ity@gmail.com?subject=PTSNS NIRF Feedback"
                                    className="px-7 py-3 bg-white text-purple-600 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 text-sm"
                                >
                                    <Mail size={18} />
                                    ptsnsunivers ity@gmail.com
                                </a>
                                <div className="text-white/80 text-xs">
                                    Subject: <span className="font-bold text-white">"PTSNS NIRF Feedback"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default NIRFPage;

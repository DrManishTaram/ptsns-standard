import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Mail, Phone, ExternalLink, Award, BookOpen, Users, Landmark, Quote } from 'lucide-react';

const ChancellorProfile: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero Header with Image */}
            <div className="relative bg-[#071133] text-white overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('/sliderbg.png')", backgroundSize: 'cover' }}></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>

                <div className="container mx-auto px-4 relative z-20">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs text-blue-300 font-medium uppercase tracking-wider pt-6 pb-4">
                        <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home size={12} /> Home
                        </Link>
                        <ChevronRight size={12} />
                        <span className="text-white/50">Administration</span>
                        <ChevronRight size={12} />
                        <span className="text-white/50">Governance</span>
                        <ChevronRight size={12} />
                        <span className="text-white">Chancellor</span>
                    </div>

                    {/* Profile Hero */}
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10 pb-20 pt-4">
                        {/* Photo */}
                        <div className="relative flex-shrink-0">
                            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-white">
                                <img
                                    src="/chancellor.jpg"
                                    alt="Hon'ble Chancellor Shri Mangubhai Patel"
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Mangubhai+Patel&background=1e3a5f&color=fff&size=400';
                                    }}
                                />
                            </div>
                            {/* Status Badge */}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                                In Office
                            </div>
                        </div>

                        {/* Info */}
                        <div className="text-center md:text-left pb-2">
                            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em] mb-2">Hon'ble Chancellor</p>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                                Shri Mangubhai Patel
                            </h1>
                            <h2 className="text-xl md:text-2xl font-serif text-white/70 mt-1" style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
                                श्री मंगुभाई पटेल
                            </h2>
                            <p className="text-blue-200/80 text-sm mt-3 max-w-lg">
                                Hon'ble Governor of Madhya Pradesh & Chancellor of all State Universities
                            </p>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10">
                                    <Landmark size={12} /> Governor of M.P.
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10">
                                    <Award size={12} /> Chancellor
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 -mt-8 relative z-20 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Sidebar - Contact & Quick Info */}
                    <div className="lg:col-span-1 order-2 lg:order-1 space-y-6">

                        {/* Contact Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-[#071133] to-[#0c2157] px-6 py-4">
                                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Contact Information</h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <a href="mailto:governor@mp.gov.in" className="flex items-center gap-3 text-gray-600 text-sm hover:text-blue-600 transition-colors group">
                                    <span className="p-2.5 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Mail size={16} />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">Email</p>
                                        <p className="font-medium">governor@mp.gov.in</p>
                                    </div>
                                </a>
                                <a href="tel:+917554923300" className="flex items-center gap-3 text-gray-600 text-sm hover:text-blue-600 transition-colors group">
                                    <span className="p-2.5 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Phone size={16} />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">Phone</p>
                                        <p className="font-medium">+91 755 4923300</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Facts */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-bold text-earth-900 text-sm uppercase tracking-wider mb-4">Quick Facts</h3>
                            <div className="space-y-3">
                                {[
                                    { label: 'Designation', value: 'Governor of Madhya Pradesh' },
                                    { label: 'Role', value: 'Chancellor, State Universities' },
                                    { label: 'Office', value: 'Raj Bhavan, Bhopal' },
                                ].map((fact, idx) => (
                                    <div key={idx} className="flex justify-between items-start border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{fact.label}</span>
                                        <span className="text-sm text-earth-900 font-semibold text-right max-w-[55%]">{fact.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* External Link */}
                        <a
                            href="http://rajbhavan.mp.gov.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-gradient-to-r from-[#071133] to-[#0c2157] text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div>
                                <p className="font-bold text-sm">Raj Bhavan Website</p>
                                <p className="text-blue-200 text-xs mt-0.5">Official Governor's Portal</p>
                            </div>
                            <ExternalLink size={18} className="text-blue-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>

                        {/* Related Governance Links */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-bold text-earth-900 text-sm uppercase tracking-wider mb-4">Governance</h3>
                            <div className="space-y-2">
                                {[
                                    { name: 'Vice-Chancellor', href: '/vc' },
                                    { name: 'Registrar', href: '/registrar' },
                                    { name: 'Executive Council', href: '/executive-council' },
                                    { name: 'Finance Officer', href: '/finance-officer' },
                                ].map((link, idx) => (
                                    <Link key={idx} to={link.href} className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors group font-medium">
                                        {link.name}
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-2 order-1 lg:order-2 space-y-8">

                        {/* About Section */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                                    <Users size={20} />
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-earth-900">About the Chancellor</h2>
                            </div>
                            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    <strong>Shri Mangubhai Chhaganbhai Patel</strong> is the Hon'ble Governor of Madhya Pradesh and serves as the Chancellor of all State Universities, including Pandit Shambhunath Shukla Vishwavidyalaya, Shahdol.
                                </p>
                                <p>
                                    As a dedicated public servant and leader, Shri Patel brings vast experience in governance and administration. He has been instrumental in advancing educational initiatives across the state, ensuring that universities maintain the highest standards of academic excellence and contribute meaningfully to nation-building.
                                </p>
                                <p>
                                    Under his chancellorship, the university has made significant strides in implementing the <strong>National Education Policy (NEP) 2020</strong>, fostering research, and creating opportunities for students from diverse backgrounds.
                                </p>
                            </div>
                        </div>

                        {/* Vision Section */}
                        <div className="bg-gradient-to-br from-[#071133] to-[#0c2157] rounded-2xl shadow-lg p-8 md:p-10 text-white relative overflow-hidden">
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote size={80} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-white/10 rounded-xl">
                                        <BookOpen size={20} />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold">Chancellor's Vision</h2>
                                </div>
                                <blockquote className="text-lg md:text-xl font-serif italic text-blue-100 leading-relaxed mb-6">
                                    "Education is the most powerful weapon which you can use to change the world. Our universities must be the breeding ground for innovation, character, and national pride."
                                </blockquote>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                    {[
                                        { icon: '🎓', title: 'Academic Excellence', desc: 'Ensuring world-class education standards' },
                                        { icon: '🔬', title: 'Research & Innovation', desc: 'Fostering cutting-edge research' },
                                        { icon: '🤝', title: 'Inclusive Growth', desc: 'Education accessible to all sections' },
                                        { icon: '🌐', title: 'Global Outlook', desc: 'International collaborations & exposure' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                            <span className="text-2xl mb-2 block">{item.icon}</span>
                                            <h4 className="font-bold text-sm">{item.title}</h4>
                                            <p className="text-blue-200 text-xs mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Role & Responsibilities */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
                                    <Award size={20} />
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-earth-900">Role & Responsibilities</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>As the Chancellor of Pandit Shambhunath Shukla Vishwavidyalaya, the Hon'ble Governor plays a pivotal role in:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                    {[
                                        'Presiding over Convocation ceremonies',
                                        'Appointing the Vice-Chancellor',
                                        'Approving university statutes & ordinances',
                                        'Ensuring academic governance standards',
                                        'Overseeing university administration',
                                        'Guiding policy-level decisions',
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                                {idx + 1}
                                            </div>
                                            <span className="text-sm font-medium text-earth-800">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA - Read Message */}
                        <Link
                            to="/chancellor-message"
                            className="flex items-center justify-between bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div>
                                <p className="font-bold text-lg">Read Chancellor's Message</p>
                                <p className="text-amber-100 text-sm mt-0.5">A message to the university community →</p>
                            </div>
                            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChancellorProfile;

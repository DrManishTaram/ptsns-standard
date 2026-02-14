import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Mail, Phone, ExternalLink, Award, BookOpen, Users, FileText, Quote, Briefcase, Star, Coins, Calculator, TrendingUp } from 'lucide-react';

const FinanceOfficerProfile: React.FC = () => {
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
                        <span className="text-white">Finance Officer</span>
                    </div>

                    {/* Profile Hero */}
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10 pb-20 pt-4">
                        {/* Photo */}
                        <div className="relative flex-shrink-0">
                            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-white">
                                <img
                                    src="/Adminstration/finance-officer.jpg"
                                    alt="Finance Officer Mr. Rammilan Singh"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            {/* Status Badge */}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                                In Office
                            </div>
                        </div>

                        {/* Info */}
                        <div className="text-center md:text-left pb-2">
                            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em] mb-2">Finance Officer</p>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                                Mr. Rammilan Singh
                            </h1>
                            <h2 className="text-xl md:text-2xl font-serif text-white/70 mt-1" style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
                                श्री राममिलन सिंह
                            </h2>
                            <p className="text-blue-200/80 text-sm mt-3 max-w-lg">
                                Finance Officer, Pandit Shambhunath Shukla Vishwavidyalaya, Shahdol (M.P.)
                            </p>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10">
                                    <Coins size={12} /> Finance
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10">
                                    <Calculator size={12} /> Accounts
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
                                <a href="mailto:fo@ptsnsu.ac.in" className="flex items-center gap-3 text-gray-600 text-sm hover:text-blue-600 transition-colors group">
                                    <span className="p-2.5 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Mail size={16} />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">Email</p>
                                        <p className="font-medium">fo@ptsnsu.ac.in</p>
                                    </div>
                                </a>
                                <a href="tel:+919009256288" className="flex items-center gap-3 text-gray-600 text-sm hover:text-blue-600 transition-colors group">
                                    <span className="p-2.5 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Phone size={16} />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">Phone</p>
                                        <p className="font-medium">+91 9009256288</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    <span className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                                        <Home size={16} />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">Office Address</p>
                                        <p className="font-medium">Ground Floor, Admin Block, Nawalpur Campus</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Facts */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-bold text-earth-900 text-sm uppercase tracking-wider mb-4">Quick Facts</h3>
                            <div className="space-y-3">
                                {[
                                    { label: 'Designation', value: 'Finance Officer' },
                                    { label: 'Role', value: 'Financial Administration' },
                                    { label: 'Joining Year', value: '2024' },
                                    { label: 'Focus', value: 'Accounts & Budget' },
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
                            href="https://ptsnsu.ac.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-gradient-to-r from-[#071133] to-[#0c2157] text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div>
                                <p className="font-bold text-sm">University Portal</p>
                                <p className="text-blue-200 text-xs mt-0.5">Financial Services</p>
                            </div>
                            <ExternalLink size={18} className="text-blue-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>

                        {/* Related Governance Links */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-bold text-earth-900 text-sm uppercase tracking-wider mb-4">Governance</h3>
                            <div className="space-y-2">
                                {[
                                    { name: 'Chancellor', href: '/chancellor' },
                                    { name: 'Vice-Chancellor', href: '/vc' },
                                    { name: 'Registrar', href: '/registrar' },
                                    { name: 'Executive Council', href: '/executive-council' },
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
                                <h2 className="text-2xl font-serif font-bold text-earth-900">About the Finance Officer</h2>
                            </div>
                            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    <strong>Mr. Rammilan Singh</strong> serves as the Finance Officer of Pandit Shambhunath Shukla Vishwavidyalaya, Shahdol (M.P.). He is responsible for managing the financial resources of the university, ensuring fiscal discipline, and overseeing all accounting operations.
                                </p>
                                <p>
                                    Since joining the university in 2024, Mr. Singh has focused on streamlining financial processes, enhancing transparency in fund utilization, and modernizing the university's financial management systems. His expertise ensures that the university's development projects and academic initiatives are supported by sound financial planning.
                                </p>
                                <p>
                                    He plays a key role in budget preparation, grant management, and ensuring compliance with government financial rules and regulations.
                                </p>
                            </div>
                        </div>

                        {/* Role & Responsibilities */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
                                    <TrendingUp size={20} />
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-earth-900">Key Responsibilities</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>The Finance Officer is the custodian of the university's finances and is responsible for:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                    {[
                                        'Preparation of Annual Budget',
                                        'Management of University Funds',
                                        'Internal Audit & Compliance',
                                        'Grant & Project Financial Management',
                                        'Salary & Pension Administration',
                                        'Financial Planning for Development',
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                                            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                                {idx + 1}
                                            </div>
                                            <span className="text-sm font-medium text-earth-800">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Finance Dept Stats */}
                        <div className="bg-gradient-to-br from-[#071133] to-[#0c2157] rounded-2xl shadow-lg p-8 md:p-10 text-white relative overflow-hidden">
                             <div className="absolute top-6 right-6 opacity-10">
                                <Coins size={80} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-white/10 rounded-xl">
                                        <Calculator size={20} />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold">Finance Department</h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-6">
                                    Ensuring financial stability and growth for the university through prudent management and strategic planning.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                                    {[
                                        { label: 'Budget/Year', value: 'Strategic' },
                                        { label: 'Audits', value: 'Regular' },
                                        { label: 'Operations', value: 'Efficient' },
                                    ].map((stat, idx) => (
                                        <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                                            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                                            <p className="text-blue-200 text-xs uppercase tracking-wide">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanceOfficerProfile;

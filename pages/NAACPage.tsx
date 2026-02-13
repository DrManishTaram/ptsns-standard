import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X, FileText, Download, Image, BookOpen, Users, Building, Award, Lightbulb, Shield, TrendingUp } from 'lucide-react';

interface SubCriterion {
    id: string;
    title: string;
    content?: string;
}

interface Criterion {
    id: string;
    title: string;
    icon: React.ElementType;
    subCriteria: SubCriterion[];
}

const NAACPage: React.FC = () => {
    const [activeCriterion, setActiveCriterion] = useState<string>('dashboard');
    const [expandedCriteria, setExpandedCriteria] = useState<Set<string>>(new Set());
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const expandedItemRef = useRef<HTMLDivElement>(null);

    const criteria: Criterion[] = [
        {
            id: 'criterion1',
            title: 'Criterion I: Curricular Aspects',
            icon: BookOpen,
            subCriteria: [
                { id: '1.1', title: '1.1 Curriculum Design & Development' },
                { id: '1.2', title: '1.2 Academic Flexibility' },
                { id: '1.3', title: '1.3 Curriculum Enrichment' },
                { id: '1.4', title: '1.4 Feedback System' },
            ]
        },
        {
            id: 'criterion2',
            title: 'Criterion II: Teaching-Learning & Evaluation',
            icon: Users,
            subCriteria: [
                { id: '2.1', title: '2.1 Student Enrollment and Profile' },
                { id: '2.2', title: '2.2 Catering to Student Diversity' },
                { id: '2.3', title: '2.3 Teaching-Learning Process' },
                { id: '2.4', title: '2.4 Teacher Profile and Quality' },
                { id: '2.5', title: '2.5 Evaluation Process and Reforms' },
                { id: '2.6', title: '2.6 Student Performance and Learning Outcomes' },
            ]
        },
        {
            id: 'criterion3',
            title: 'Criterion III: Research & Innovation',
            icon: Lightbulb,
            subCriteria: [
                { id: '3.1', title: '3.1 Research Funding' },
                { id: '3.2', title: '3.2 Publications' },
                { id: '3.3', title: '3.3 Extension Activities' },
                { id: '3.4', title: '3.4 Collaborations' },
            ]
        },
        {
            id: 'criterion4',
            title: 'Criterion IV: Infrastructure & Learning Resources',
            icon: Building,
            subCriteria: [
                { id: '4.1', title: '4.1 Physical Facilities' },
                { id: '4.2', title: '4.2 Library as a Learning Resource' },
                { id: '4.3', title: '4.3 IT Infrastructure' },
                { id: '4.4', title: '4.4 Maintenance of Campus Facilities' },
            ]
        },
        {
            id: 'criterion5',
            title: 'Criterion V: Student Support & Progression',
            icon: TrendingUp,
            subCriteria: [
                { id: '5.1', title: '5.1 Student Support' },
                { id: '5.2', title: '5.2 Student Progression' },
                { id: '5.3', title: '5.3 Student Participation and Activities' },
                { id: '5.4', title: '5.4 Alumni Engagement' },
            ]
        },
        {
            id: 'criterion6',
            title: 'Criterion VI: Governance, Leadership & Management',
            icon: Shield,
            subCriteria: [
                { id: '6.1', title: '6.1 Institutional Vision and Leadership' },
                { id: '6.2', title: '6.2 Strategy Development and Deployment' },
                { id: '6.3', title: '6.3 Faculty Empowerment Strategies' },
                { id: '6.4', title: '6.4 Financial Management and Resource Mobilization' },
                { id: '6.5', title: '6.5 Internal Quality Assurance System' },
            ]
        },
        {
            id: 'criterion7',
            title: 'Criterion VII: Institutional Values & Best Practices',
            icon: Award,
            subCriteria: [
                { id: '7.1', title: '7.1 Institutional Values and Social Responsibilities' },
                { id: '7.2', title: '7.2 Best Practices' },
                { id: '7.3', title: '7.3 Institutional Distinctiveness' },
            ]
        },
    ];

    // Auto-center expanded menu in sidebar
    useEffect(() => {
        if (expandedItemRef.current && scrollContainerRef.current && expandedCriteria.size > 0) {
            const container = scrollContainerRef.current;
            const expandedElement = expandedItemRef.current;

            // Calculate the position to center the expanded item
            const containerHeight = container.clientHeight;
            const elementTop = expandedElement.offsetTop;
            const elementHeight = expandedElement.clientHeight;

            // Scroll to center the expanded item
            const scrollTo = elementTop - (containerHeight / 2) + (elementHeight / 2);
            container.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        }
    }, [expandedCriteria]);

    const toggleCriterion = (criterionId: string) => {
        // If clicking on already expanded criterion, close it
        if (expandedCriteria.has(criterionId)) {
            setExpandedCriteria(new Set());
        } else {
            // Close all others and open only this one
            setExpandedCriteria(new Set([criterionId]));
        }
    };

    const handleMenuClick = (id: string) => {
        setActiveCriterion(id);
        setMobileMenuOpen(false);

        // Collapse all if dashboard is clicked
        if (id === 'dashboard') {
            setExpandedCriteria(new Set());
            return;
        }


        // Auto-expand if it's a main criterion
        const isMainCriterion = criteria.some(c => c.id === id);
        if (isMainCriterion) {
            // If clicking on already expanded and active criterion, collapse it
            if (expandedCriteria.has(id) && activeCriterion === id) {
                setExpandedCriteria(new Set());
            } else {
                // Close all others and open only this one
                setExpandedCriteria(new Set([id]));
            }
            return;
        }

        // Ensure parent is expanded if it's a sub-criterion (close all others, open only parent)
        const parentCriterion = criteria.find(c => c.subCriteria.some(sub => sub.id === id));
        if (parentCriterion) {
            setExpandedCriteria(new Set([parentCriterion.id]));
        }
    };

    // Check if current view is a parent criterion (intermediate view)
    const isParentCriterion = (id: string) => criteria.some(c => c.id === id);

    const renderSidebar = () => (
        <div className="h-full flex flex-col text-blue-600 bg-white border-r border-white">
            {/* Sidebar Header - Matches Mobile Navbar (Gray-100 BG, Black Text) */}
            <div className="h-[120px] flex flex-col justify-center p-4 border-b border-white bg-[#cfecf7] shadow-sm z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Award className="text-blue-600" size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold font-serif tracking-wide text-black">PTSNS UNIVERSITY</h2>
                        <p className="text-slate-600 text-sm uppercase tracking-wider font-semibold">NAAC ACCREDITATION PORTAL</p>
                    </div>
                </div>
            </div>

            {/* Scrollable Menu */}
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto naac-scrollbar px-3 pb-3 pt-6 space-y-1">
                {/* Dashboard */}
                <button
                    onClick={() => handleMenuClick('dashboard')}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 group ${activeCriterion === 'dashboard'
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200 font-bold'
                        : 'text-blue-600 hover:bg-blue-600 hover:text-white font-medium'
                        }`}
                >
                    <FileText size={16} />
                    <span className="text-sm">Dashboard</span>
                    {activeCriterion === 'dashboard' && <ChevronRight size={14} className="ml-auto" />}
                </button>

                {/* Criteria */}
                {criteria.map((criterion) => {
                    const Icon = criterion.icon;
                    const isExpanded = expandedCriteria.has(criterion.id);
                    const isActive = activeCriterion === criterion.id || criterion.subCriteria.some(sub => sub.id === activeCriterion);

                    return (
                        <div
                            key={criterion.id}
                            ref={isExpanded ? expandedItemRef : null}
                            className="rounded-lg overflow-hidden transition-all duration-300"
                        >
                            {/* Main Criterion - Split Interaction */}
                            <div className={`flex items-center w-full transition-colors group ${isActive ? 'bg-blue-600 shadow-md shadow-blue-200' : 'hover:bg-blue-600'}`}>
                                {/* Name - Navigates to Criterion View */}
                                <button
                                    onClick={() => handleMenuClick(criterion.id)}
                                    className={`flex-1 flex items-center gap-3 px-3 py-2 text-left ${isActive ? 'text-white font-bold' : 'text-blue-600 group-hover:text-white font-medium'}`}
                                >
                                    <Icon size={16} className={isActive ? 'text-white' : 'opacity-80 group-hover:text-white'} />
                                    <span className="text-xs sm:text-sm">{criterion.title.split(':')[0]}</span>
                                </button>

                                {/* Chevron - Toggles Expansion */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); toggleCriterion(criterion.id); }}
                                    className={`p-2 transition-colors ${isActive ? 'text-white hover:text-blue-100' : 'text-blue-400 group-hover:text-white'}`}
                                >
                                    {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                </button>
                            </div>

                            {/* Sub-criteria */}
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="bg-gray-50 py-2 border-l-2 border-blue-100 ml-4 my-1 rounded-r-lg">
                                    {criterion.subCriteria.map((sub) => (
                                        <button
                                            key={sub.id}
                                            onClick={() => handleMenuClick(sub.id)}
                                            className={`w-full text-left pl-8 pr-4 py-2 text-xs sm:text-sm transition-all ${activeCriterion === sub.id
                                                ? 'text-blue-700 font-bold bg-blue-100/50'
                                                : 'text-blue-500 hover:text-blue-700 hover:bg-blue-50'
                                                }`}
                                        >
                                            {sub.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Decoration - Matches Mobile Navbar Style */}
            {/* <div className="p-3 border-t border-gray-200 bg-gray-100 z-10">
                <p className="text-[10px] text-black font-medium text-center">
                    &copy; 2026 PTSNS University
                </p>
            </div> */}
        </div>
    );

    const renderContent = () => {
        // --- VIEW 1: DASHBOARD ---
        if (activeCriterion === 'dashboard') {
            return (
                <div className="h-full flex flex-col animate-fade-in relative">
                    {/* Header - Sticky & Styled */}
                    <div className="sticky top-0 z-20 bg-[#cfecf7] h-[120px] flex flex-col justify-center px-4 pt-2 pb-4 border-b border-white shadow-sm items-center">
                        <h1 className="text-xl sm:text-4xl font-serif font-bold text-earth-900 mb-1 text-center">NAAC Dashboard</h1>
                        <p className="text-slate-500 text-[10px] sm:text-sm text-center">
                            Welcome to the NAAC Accreditation Portal. Select a criterion to view details.
                        </p>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-4 flex-1 overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {criteria.map((criterion, index) => {
                                const Icon = criterion.icon;
                                return (
                                    <div
                                        key={criterion.id}
                                        className="group bg-white border border-gray-100 rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
                                        onClick={() => handleMenuClick(criterion.id)}
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-[80px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                                        <div className="relative z-10 flex items-start gap-4">
                                            {/* Updated Styling: Default Blue, Hover Crimson Red (Rose-500) */}
                                            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex-shrink-0 flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300 shadow-md">
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-earth-900 mb-0.5 text-xs sm:text-sm group-hover:text-rose-600 transition-colors leading-tight">{criterion.title}</h3>
                                                <p className="text-[10px] text-slate-500 font-medium">{criterion.subCriteria.length} Sub-criteria</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        }

        // Parent Criterion View (Intermediate) or Sub-Criterion View (Leaf)
        const selectedParent = criteria.find(c => c.id === activeCriterion);

        // --- VIEW 2: PARENT CRITERION (Sub-criteria Grid) ---
        if (selectedParent) {
            return (
                <div className="h-full flex flex-col animate-fade-in relative">
                    {/* Header - Sticky & Styled */}
                    <div className="sticky top-0 z-20 bg-[#cfecf7] h-[120px] flex flex-col justify-center px-4 pt-1 pb-4 border-b border-white shadow-sm items-start">
                        <button
                            onClick={() => handleMenuClick('dashboard')}
                            className="flex items-center gap-1 text-[10px] sm:text-sm font-medium text-blue-600 hover:text-rose-600 mb-1 transition-colors uppercase tracking-wider underline"
                        >
                            <ChevronDown className="rotate-90" size={14} /> Back to Dashboard
                        </button>

                        <div className="flex items-center gap-2 sm:gap-3 justify-center w-full">
                            <div className="p-1 sm:p-1.5 bg-blue-100 text-blue-700 rounded-lg">
                                {React.createElement(selectedParent.icon, { size: 20 })}
                            </div>
                            <h1 className="text-xl sm:text-4xl font-serif font-bold text-earth-900 leading-tight text-center">
                                {selectedParent.title}
                            </h1>
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-4 flex-1 overflow-y-auto">
                        <p className="text-slate-600 mb-4 text-xs sm:text-sm">
                            Overview of {selectedParent.title}. Select a sub-criterion below to view specific documents and data.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {selectedParent.subCriteria.map((sub, idx) => (
                                <div
                                    key={sub.id}
                                    onClick={() => handleMenuClick(sub.id)}
                                    className="group relative bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md hover:border-green-200 transition-all duration-300 cursor-pointer overflow-hidden flex items-start gap-4"
                                >
                                    {/* Green Icon - Parent Icon */}
                                    <div className="w-10 h-10 rounded-lg bg-green-600 text-white flex-shrink-0 flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300 shadow-md">
                                        {React.createElement(selectedParent.icon, { size: 20 })}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-earth-900 mb-0.5 text-xs sm:text-sm group-hover:text-emerald-700 transition-colors leading-tight">
                                            {sub.title.split(' ').slice(1).join(' ')}
                                        </h3>
                                        <p className="text-[10px] text-slate-500 font-medium">Sub-criterion {sub.id}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }

        // --- VIEW 3: SUB-CRITERION (Content) ---
        const parentOfSub = criteria.find(c => c.subCriteria.some(s => s.id === activeCriterion));
        const selectedSub = parentOfSub?.subCriteria.find(s => s.id === activeCriterion);

        if (selectedSub && parentOfSub) {
            return (
                <div className="h-full flex flex-col animate-fade-in relative">
                    {/* Header - Sticky & Styled */}
                    <div className="sticky top-0 z-20 bg-[#cfecf7] h-[120px] flex flex-col justify-center px-4 pt-1 pb-4 border-b border-white shadow-sm items-start">
                        <button
                            onClick={() => handleMenuClick(parentOfSub.id)}
                            className="flex items-center gap-1 text-[10px] sm:text-sm font-medium text-blue-600 hover:text-rose-600 mb-1 transition-colors uppercase tracking-wider underline"
                        >
                            <ChevronDown className="rotate-90" size={14} /> Back to {parentOfSub.title.split(':')[0]}
                        </button>

                        <h1 className="text-xl sm:text-4xl font-serif font-bold text-earth-900 leading-tight text-center w-full">
                            {selectedSub.title}
                        </h1>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-4 flex-1 overflow-y-auto">
                        <div className="prose prose-slate max-w-none flex-grow">
                            <p className="text-slate-600 mb-6 leading-relaxed text-xs sm:text-sm">
                                Detailed documentation, reports, and evidence for <span className="font-semibold text-earth-800">{selectedSub.title}</span> will be displayed here.
                                This section serves as a repository for all verification data.
                            </p>

                            {/* Placeholder content cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 hover:border-blue-200 transition-colors">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                                            <FileText size={20} />
                                        </div>
                                        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Verified</span>
                                    </div>
                                    <h3 className="font-bold text-earth-900 mb-1 text-sm">SSR Report 2024-25</h3>
                                    <p className="text-[10px] text-slate-500 mb-3">Self Study Report verified by IQAC</p>
                                    <div className="flex justify-end">
                                        <button className="w-32 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-200">
                                            <Download size={14} />
                                            Download PDF
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 hover:border-pink-200 transition-colors">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-pink-600">
                                            <Image size={20} />
                                        </div>
                                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Gallery</span>
                                    </div>
                                    <h3 className="font-bold text-earth-900 mb-1 text-sm">Event Evidence</h3>
                                    <p className="text-[10px] text-slate-500 mb-3">Geotagged photos and event logs</p>
                                    <div className="flex justify-end">
                                        <button className="w-32 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-200">
                                            <Image size={14} />
                                            View Gallery
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <section className="min-h-screen bg-slate-50 py-2 md:py-4 relative overflow-hidden animate-fade-in-up" id="naac-portal">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10"></div>



            {/* Main Container - 95% Width */}
            <div className="w-[95%] mx-auto relative z-10">
                <div className="bg-white rounded-[1rem] shadow-xl overflow-hidden border border-gray-100 h-[85vh] lg:h-auto lg:aspect-[3.0] lg:min-h-[480px] flex flex-col lg:flex-row">

                    <aside
                        className={`
                            hidden lg:block
                            w-[25%] bg-white border-r border-gray-200
                            relative overflow-hidden
                        `}
                    >
                        {/* Texture Overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                        {/* Mobile Close Button */}
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="lg:hidden absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative z-10 h-full">
                            {renderSidebar()}
                        </div>
                    </aside>



                    {/* Right Content Area */}
                    <main className="flex-1 bg-white relative">
                        {/* Custom Separator Line (Optional visual separation, though bg distinction is enough) */}
                        <div className="hidden lg:block absolute left-0 top-12 bottom-12 w-px bg-gray-100"></div>

                        <div className="h-full overflow-hidden">
                            {renderContent()}
                        </div>
                    </main>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style>{`
                /* Smooth scroll behavior for auto-centering */
                .naac-scrollbar {
                    scroll-behavior: smooth;
                    overflow-y: auto !important;
                }
                .naac-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .naac-scrollbar::-webkit-scrollbar-track {
                    background-color: #dbeafe !important;
                    border-radius: 10px;
                    margin: 4px;
                }
                .naac-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #2563eb !important;
                    border-radius: 10px;
                    border: 1px solid #1d4ed8;
                }
                .naac-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #1d4ed8 !important;
                }
            `}</style>
        </section>
    );
};

export default NAACPage;

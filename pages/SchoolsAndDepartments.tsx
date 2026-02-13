import React, { useState } from 'react';
import { 
  Beaker, 
  Code, 
  Calculator, 
  Zap, 
  Dna, 
  Leaf, 
  Globe, 
  BookOpen, 
  Music, 
  Landmark, 
  Scale, 
  Users, 
  Heart, 
  Award, 
  Briefcase, 
  TrendingUp, 
  Search,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Define types for our data structure
type Department = {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  link: string;
  badge?: string; // Added badge property
};

type School = {
  id: string;
  title: string;
  description: string;
  color: string;
  departments: Department[];
};

const SchoolsAndDepartments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');

  // Data for Schools and Departments
  const schools: School[] = [
    {
      id: 'sciences',
      title: 'School of Sciences',
      description: 'Fostering scientific inquiry and innovation through cutting-edge research and education.',
      color: 'from-blue-500 to-cyan-500',
      departments: [
        { 
          id: 'cs', 
          name: 'Computer Science', 
          icon: Code, 
          description: 'Leading the way in innovation, software engineering, and computational research.', 
          link: '/department/computer-science',
          badge: 'Center of Excellence' 
        },
        { id: 'agriculture', name: 'Agriculture', icon: Leaf, description: 'Sustainable farming and agricultural sciences.', link: '/department/agriculture' },
        { id: 'biotech', name: 'Biotech', icon: Dna, description: 'Applied biology and genetic engineering.', link: '/department/biotech' },
        { id: 'botany', name: 'Botany', icon: Leaf, description: 'Study of plant life and ecology.', link: '/department/botany' },
        { id: 'chemistry', name: 'Chemistry', icon: Beaker, description: 'Chemical sciences and research.', link: '/department/chemistry' },
        { id: 'fisheries', name: 'Fisheries', icon: Zap, description: 'Aquatic life and sustainable fisheries management.', link: '/department/fisheries' },
        { id: 'maths', name: 'Maths', icon: Calculator, description: 'Pure and applied mathematics.', link: '/department/mathematics' },
        { id: 'physics', name: 'Physics', icon: Zap, description: 'Fundamental laws of matter and energy.', link: '/department/physics' },
        { id: 'zoology', name: 'Zoology', icon: Dna, description: 'Animal biology and physiology.', link: '/department/zoology' },
      ]
    },
    {
      id: 'commerce',
      title: 'School of Commerce & Management',
      description: 'Developing future leaders in business, economics, and administration.',
      color: 'from-amber-500 to-orange-500',
      departments: [
        { id: 'commerce', name: 'Commerce', icon: TrendingUp, description: 'Business, trade, and financial studies.', link: '/department/commerce' },
        { id: 'mba', name: 'MBA', icon: Briefcase, description: 'Master of Business Administration.', link: '/department/mba' },
      ]
    },
    {
      id: 'arts',
      title: 'School of Arts & Humanities',
      description: 'Exploring human culture, history, and creative expression.',
      color: 'from-rose-500 to-pink-500',
      departments: [
        { id: 'economics', name: 'Economics', icon: TrendingUp, description: 'Analysis of production, distribution, and consumption.', link: '/department/economics' },
        { id: 'english', name: 'English', icon: BookOpen, description: 'English literature and linguistics.', link: '/department/english' },
        { id: 'geography', name: 'Geography', icon: Globe, description: 'Study of places and relationships between people and environments.', link: '/department/geography' },
        { id: 'hindi', name: 'Hindi', icon: BookOpen, description: 'Hindi literature and language studies.', link: '/department/hindi' },
        { id: 'history', name: 'History', icon: Landmark, description: 'Study of past events and civilizations.', link: '/department/history' },
        { id: 'music', name: 'Music', icon: Music, description: 'Musical theory, composition, and performance.', link: '/department/music' },
        { id: 'polsci', name: 'Political Science', icon: Landmark, description: 'Systems of governance and political analysis.', link: '/department/political-science' },
        { id: 'sanskrit', name: 'Sanskrit', icon: BookOpen, description: 'Ancient Indian language and literature.', link: '/department/sanskrit' },
        { id: 'sociology', name: 'Sociology', icon: Users, description: 'Study of social life, change, and causes of human behavior.', link: '/department/sociology' },
      ]
    },
    {
      id: 'law',
      title: 'School of Law',
      description: 'Upholding justice and understanding the legal framework of society.',
      color: 'from-purple-600 to-indigo-600',
      departments: [
        { id: 'llm', name: 'LLM', icon: Scale, description: 'Master of Laws and advanced legal studies.', link: '/department/llm' },
      ]
    },
    {
      id: 'social',
      title: 'School of Social Sciences',
      description: 'Empowering communities and fostering social change.',
      color: 'from-emerald-500 to-teal-500',
      departments: [
        { id: 'msw', name: 'MSW', icon: Heart, description: 'Master of Social Work and community development.', link: '/department/msw' },
      ]
    },
    {
      id: 'sports',
      title: 'Sports & Physical Education',
      description: 'Promoting physical fitness, sportsmanship, and holistic health.',
      color: 'from-red-500 to-orange-500',
      departments: [
        { id: 'sports', name: 'Sports', icon: Award, description: 'Physical education and sports science.', link: '/department/sports' },
      ]
    }
  ];

  // Helper to filter departments based on search
  const filteredSchools = schools.map(school => ({
    ...school,
    departments: school.departments.filter(dept => 
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      school.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(school => school.departments.length > 0);

  // Tabs for schools
  const tabItems = [
    { id: 'all', label: 'All Schools' },
    ...schools.map(s => ({ id: s.id, label: s.title }))
  ];

  const displaySchools = activeTab === 'all' 
    ? filteredSchools 
    : filteredSchools.filter(s => s.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="relative pt-10 pb-8 overflow-hidden bg-[#071133] text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold tracking-wider mb-2 border border-blue-500/30">
            ACADEMIC EXCELLENCE
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 tracking-tight">
            Schools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Departments</span>
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover our diverse range of academic disciplines, led by expert faculty and designed to foster innovation, critical thinking, and career success.
          </p>
        </div>
      </section>

      {/* ============================================
          SEARCH & FILTER SECTION
      ============================================ */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50 focus:bg-white transition-all"
              />
            </div>

            {/* Desktop Tabs */}
            <div className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
              {tabItems.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id 
                    ? 'bg-[#071133] text-white shadow-lg shadow-blue-900/20' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Mobile Dropdown for filtered view */}
             <div className="lg:hidden w-full">
               <select 
                 value={activeTab} 
                 onChange={(e) => setActiveTab(e.target.value)}
                 className="w-full p-2 rounded-lg border border-gray-300 bg-white"
               >
                 {tabItems.map(tab => (
                   <option key={tab.id} value={tab.id}>{tab.label}</option>
                 ))}
               </select>
             </div>

          </div>
        </div>
      </section>

      {/* ============================================
          CONTENT SECTION
      ============================================ */}
      <section className="py-12 bg-slate-50 min-h-[60vh]">
        <div className="container mx-auto px-4">
          
          {displaySchools.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white rounded-full p-6 inline-flex mb-4 shadow-sm text-gray-300">
                <Search size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-700">No departments found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search terms.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-6 text-blue-600 font-medium hover:underline"
              >
                Clear Search
              </button>
            </div>
          ) : (
            displaySchools.map(school => (
              <div key={school.id} className="mb-16 last:mb-0 animate-fade-in-up">
                
                {/* School Header */}
                <div className="mb-8 pl-4 border-l-4 border-blue-600">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#071133] flex items-center gap-3">
                    {school.title}
                  </h2>
                  <p className="text-gray-600 mt-2 text-lg">{school.description}</p>
                </div>

                {/* Departments Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {school.departments.map(dept => (
                    <div 
                      key={dept.id} 
                      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2 border border-slate-100"
                    >
                      {/* Gradient Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${school.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Top Accent Line */}
                      <div className={`h-1.5 w-full bg-gradient-to-r ${school.color}`}></div>

                      {/* Large Faded Icon Background */}
                      <div className="absolute -right-6 -bottom-6 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform group-hover:scale-110">
                        <dept.icon size={160} strokeWidth={0.5} className="fill-current text-slate-100/50" />
                      </div>

                      <div className="p-7 flex-grow flex flex-col relative z-10">
                        
                        {/* Header Section */}
                        <div className="flex justify-between items-start mb-6">
                           {/* Icon Box */}
                           <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${school.color} p-0.5 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                                <dept.icon className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300" size={26} strokeWidth={1.5} />
                              </div>
                           </div>

                           {/* Badge */}
                           {dept.badge && (
                              <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-200 shadow-sm flex items-center gap-1 animate-pulse">
                                <Award size={12} />
                                {dept.badge}
                              </span>
                           )}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-purple-600 transition-all font-sans tracking-tight">
                          {dept.name}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
                          {dept.description}
                        </p>
                        
                        {/* Spacer */}
                        <div className="mt-auto"></div>

                        {/* Interactive Footer */}
                        <div className="pt-2">
                           <Link 
                            to={dept.link} 
                            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-all group/link"
                           >
                            <span className="border-b-2 border-transparent group-hover:border-blue-600 transition-all">View Department</span>
                            <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-blue-600 flex items-center justify-center transition-all group-hover:translate-x-1">
                               <ArrowRight size={12} className="text-slate-400 group-hover:text-white transition-colors" />
                            </div>
                           </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}

        </div>
      </section>

    </div>
  );
};

export default SchoolsAndDepartments;


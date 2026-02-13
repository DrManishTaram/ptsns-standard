import React, { useState, useEffect, useCallback } from 'react';
import { Phone, Mail, Search, ChevronRight, ExternalLink, FileText, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

// Search Index - Define all searchable content
// Search Index - Define all searchable content
interface SearchResult {
  title: string;
  description: string;
  type: 'page' | 'section' | 'document';
  path?: string; // For page navigation
  sectionId?: string; // For scrolling to section
  keywords: string[];
  content?: string; // For broad full-text search simulation
}

const searchIndex: SearchResult[] = [
  // Core Pages
  { title: 'Home', description: 'University homepage', type: 'page', path: '/', keywords: ['home', 'main', 'homepage', 'landing'] },
  { title: 'About Us', description: 'Learn about our university', type: 'page', path: '/about', keywords: ['about', 'university', 'profile', 'information'] },
  { title: 'University Overview', description: 'Overview of the university', type: 'page', path: '/overview', keywords: ['overview', 'about', 'introduction'] },
  { title: 'Vision & Mission', description: 'Our vision and mission statements', type: 'page', path: '/vision-mission', keywords: ['vision', 'mission', 'goals', 'objectives', 'values'] },
  { title: 'History & Heritage', description: 'University history and heritage', type: 'page', path: '/history', keywords: ['history', 'heritage', 'background', 'establishment', 'past'] },
  { title: 'University Kulgeet', description: 'University anthem', type: 'page', path: '/kulgeet', keywords: ['kulgeet', 'anthem', 'song', 'multimedia'] },
  { title: 'Virtual Tour', description: 'Virtual tour of the campus', type: 'page', path: '/virtual-tour', keywords: ['virtual', 'tour', 'subtitles', 'campus', 'view'] },

  // Leadership & Administration
  { title: "Chancellor's Message", description: 'Message from the Chancellor', type: 'page', path: '/chancellor-message', keywords: ['chancellor', 'message', 'leadership', 'governor'] },
  { title: "Vice Chancellor's Message", description: 'Message from the Vice Chancellor', type: 'page', path: '/vc-message', keywords: ['vice chancellor', 'vc', 'message', 'leadership'] },
  { title: 'Office of The Registrar', description: 'Registrar office and administration', type: 'page', path: '/registrar', keywords: ['registrar', 'administration', 'office', 'admin'] },
  { title: 'Executive Council', description: 'Executive council members', type: 'page', path: '/executive-council', keywords: ['executive', 'council', 'members', 'governance'] },
  { title: 'Finance Officer', description: 'Finance office and details', type: 'page', path: '/finance-officer', keywords: ['finance', 'officer', 'accounts', 'money'] },
  { title: 'Examination Controller', description: 'Examination controller and department', type: 'page', path: '/exam-controller', keywords: ['exam', 'controller', 'examination', 'results'] },
  { title: 'Act, Statutes & Ordinances', description: 'University legal documents', type: 'page', path: '/act-statutes', keywords: ['act', 'statutes', 'ordinances', 'legal', 'rules', 'regulations'] },

  // Academics
  { title: 'Schools & Departments', description: 'List of schools and departments', type: 'page', path: '/schools-departments', keywords: ['schools', 'departments', 'faculties', 'academic', 'units'] },
  { title: 'Academic Programs', description: 'Programs and courses offered', type: 'page', path: '/programs', keywords: ['programs', 'courses', 'degrees', 'ug', 'pg', 'phd'] },
  { title: 'Syllabus (NEP)', description: 'Syllabus as per National Education Policy', type: 'page', path: '/syllabus', keywords: ['syllabus', 'nep', 'curriculum', 'coursework'] },
  { title: 'Academic Calendar', description: 'Yearly academic schedule', type: 'page', path: '/calendar', keywords: ['calendar', 'schedule', 'dates', 'events', 'academic'] },
  { title: 'Indian Knowledge System', description: 'IKS initiatives', type: 'page', path: '/iks', keywords: ['iks', 'indian', 'knowledge', 'system', 'tradition'] },

  // Research
  { title: 'PhD Programs', description: 'Doctoral research programs', type: 'page', path: '/phd', keywords: ['phd', 'research', 'doctorate', 'doctoral'] },
  { title: 'Research & Development', description: 'R&D activities and centers', type: 'page', path: '/research-development', keywords: ['research', 'development', 'r&d', 'projects'] },
  { title: 'Projects & Grants', description: 'Funded projects and grants', type: 'page', path: '/projects-grants', keywords: ['projects', 'grants', 'funding', 'sponsored'] },
  { title: 'Consultancy Services', description: 'University consultancy services', type: 'page', path: '/consultancy', keywords: ['consultancy', 'services', 'industry', 'collaboration'] },
  { title: 'Patent Cell', description: 'Intellectual Property and Patents', type: 'page', path: '/patent-cell', keywords: ['patent', 'ipR', 'intellectual', 'property'] },

  // Admissions
  { title: 'Admission Notification', description: 'Latest admission updates', type: 'page', path: '/admission-notification', keywords: ['admission', 'notification', 'apply', 'enrollment'] },
  { title: 'Entrance Exam 2025', description: 'Entrance examination details', type: 'page', path: '/entrance-exam', keywords: ['entrance', 'exam', 'test', 'cuet', 'admission'] },
  { title: 'International Students', description: 'Information for international applicants', type: 'page', path: '/international-students', keywords: ['international', 'foreign', 'students', 'global'] },
  { title: 'Fee Structure', description: 'Tuition and other fees', type: 'page', path: '/fees', keywords: ['fee', 'structure', 'tuition', 'cost', 'payment'] },
  { title: 'Fee Refund Policy', description: 'Policy on fee refunds', type: 'page', path: '/fee-refund', keywords: ['refund', 'policy', 'return', 'money'] },
  { title: 'Scholarships', description: 'Financial aid and scholarships', type: 'page', path: '/scholarships', keywords: ['scholarship', 'financial', 'aid', 'support', 'bursary'] },

  // Facilities & Campus
  { title: 'Central Library', description: 'Library resources and services', type: 'page', path: '/library', keywords: ['library', 'books', 'journals', 'reading', 'resources'] },
  { title: 'Hostel & Campus Life', description: 'Accommodation and verified living', type: 'page', path: '/hostel', keywords: ['hostel', 'accommodation', 'residence', 'living'] },
  { title: 'Sports Facilities', description: 'Sports and athletic facilities', type: 'page', path: '/sports', keywords: ['sports', 'games', 'gym', 'stadium', 'athletics'] },
  { title: 'Review Infrastructure', description: 'Campus infrastructure details', type: 'page', path: '/campus', keywords: ['campus', 'infrastructure', 'buildings', 'facilities'] },
  { title: 'IQAC Cell', description: 'Internal Quality Assurance Cell', type: 'page', path: '/iqac', keywords: ['iqac', 'quality', 'assurance', 'cell'] },
  { title: 'MOU & Collaborations', description: 'Partnerships and MOUs', type: 'page', path: '/mou', keywords: ['mou', 'collaboration', 'partnerships', 'tie-ups'] },

  // Student Zone
  { title: 'Student Portal', description: 'Login and services for students', type: 'page', path: '/student-portal', keywords: ['student', 'portal', 'login', 'dashboard'] },
  { title: 'University Clubs', description: 'Student clubs and societies', type: 'page', path: '/clubs', keywords: ['clubs', 'societies', 'activities', 'student', 'life'] },
  { title: 'Club Culture', description: 'Vibrant club culture events', type: 'page', path: '/club-culture', keywords: ['club', 'culture', 'events', 'activities'] },
  { title: 'NCC & NSS', description: 'National Cadet Corps & Service Scheme', type: 'page', path: '/ncc-nss', keywords: ['ncc', 'nss', 'cadet', 'service', 'volunteers'] },
  { title: 'Placement Cell', description: 'Career services and placements', type: 'page', path: '/placements', keywords: ['placement', 'jobs', 'careers', 'recruitment', 'internships'] },
  { title: 'Student Grievance', description: 'Grievance redressal mechanism', type: 'page', path: '/grievance', keywords: ['grievance', 'complaint', 'redressal', 'support'] },
  { title: 'Anti-Ragging Cell', description: 'Anti-ragging measures', type: 'page', path: '/anti-ragging', keywords: ['anti', 'ragging', 'safety', 'security'] },
  { title: 'Convocation', description: 'Convocation ceremony details', type: 'page', path: '/convocation', keywords: ['convocation', 'graduation', 'ceremony', 'degree'] },

  // Important Info & Rankings
  {
    title: 'NAAC Accreditation',
    description: 'NAAC accreditation details, criteria, and reports',
    type: 'page',
    path: '/naac',
    keywords: ['naac', 'accreditation', 'grade', 'quality', 'assessment', 'ssr', 'self study report'],
    content: 'Criterion I: Curricular Aspects, Curriculum Design & Development, Academic Flexibility, Curriculum Enrichment, Feedback System. Criterion II: Teaching-Learning & Evaluation, Student Enrollment and Profile, Catering to Student Diversity, Teaching-Learning Process, Teacher Profile and Quality, Evaluation Process and Reforms, Student Performance and Learning Outcomes. Criterion III: Research & Innovation, Research Funding, Publications, Extension Activities, Collaborations. Criterion IV: Infrastructure & Learning Resources, Physical Facilities, Library as a Learning Resource, IT Infrastructure, Maintenance of Campus Facilities. Criterion V: Student Support & Progression, Student Support, Student Progression, Student Participation and Activities, Alumni Engagement. Criterion VI: Governance, Leadership & Management, Institutional Vision and Leadership, Strategy Development and Deployment, Faculty Empowerment Strategies, Financial Management and Resource Mobilization, Internal Quality Assurance System. Criterion VII: Institutional Values & Best Practices, Institutional Values and Social Responsibilities, Best Practices, Institutional Distinctiveness. Dashboard, Verified, Gallery.'
  },
  { title: 'NIRF Ranking', description: 'NIRF ranking data', type: 'page', path: '/nirf', keywords: ['nirf', 'ranking', 'national', 'framework'] },
  { title: 'Tender Notices', description: 'Procurement and tenders', type: 'page', path: '/tenders', keywords: ['tender', 'procurement', 'bids', 'notices'] },
  { title: 'Job Openings', description: 'Careers at the university', type: 'page', path: '/jobs', keywords: ['jobs', 'careers', 'vacancies', 'recruitment', 'faculty'] },
  { title: 'RTI Cell', description: 'Right to Information', type: 'page', path: '/rti', keywords: ['rti', 'right', 'information', 'transparency'] },
  { title: 'Downloads & Forms', description: 'Forms and documents', type: 'page', path: '/downloads', keywords: ['downloads', 'forms', 'documents', 'pdf'] },
  { title: 'Contact Us', description: 'Get in touch', type: 'page', path: '/contact', keywords: ['contact', 'address', 'phone', 'email', 'map'] },
  { title: 'Media Gallery', description: 'Photos and videos of events', type: 'page', path: '/gallery', keywords: ['media', 'gallery', 'photos', 'images', 'videos', 'events'] },

  // Achievements
  {
    title: 'AI Hackathon Winners',
    description: 'Anukalp Dwivedi & Sourabh Majhi - 2nd Place at Smart India Hackathon',
    type: 'page',
    path: '/achievements/ai-hackathon',
    keywords: ['hackathon', 'projects', 'achievement', 'students', 'ai', 'winner', 'anukalp', 'dwivedi', 'sourabh', 'majhi', 'iit', 'smart', 'india']
  },
  {
    title: 'Research Excellence',
    description: 'Dr. Anjali Sharma - Published in Nature Journal',
    type: 'section',
    sectionId: 'achievements',
    keywords: ['research', 'nature', 'journal', 'anjali', 'sharma', 'renewable', 'energy', 'science']
  },
  {
    title: 'Sports Achievements',
    description: 'Rohan Singh - Gold Medal in Archery',
    type: 'section',
    sectionId: 'achievements',
    keywords: ['sports', 'archery', 'rohan', 'singh', 'gold', 'medal', 'championship']
  },
  {
    title: 'Lifetime Achievement',
    description: 'Prof. R.K. Mishra - Botany Contribution',
    type: 'section',
    sectionId: 'achievements',
    keywords: ['lifetime', 'achievement', 'award', 'mishra', 'botany', 'science']
  },

  // Key People (from Testimonials & Leadership)
  {
    title: 'Prof. Ram Shankar',
    description: 'Hon\'ble Vice Chancellor',
    type: 'page',
    path: '/vc-message',
    keywords: ['vc', 'vice', 'chancellor', 'ram', 'shankar', 'professor', 'leader']
  },
  {
    title: 'Arunendra Shukla',
    description: 'Department of English - Student Voice',
    type: 'section',
    sectionId: 'testimonials',
    keywords: ['arunendra', 'shukla', 'english', 'student', 'testimonial']
  },
  {
    title: 'Priya Patel',
    description: 'Computer Science - Student Voice',
    type: 'section',
    sectionId: 'testimonials',
    keywords: ['priya', 'patel', 'computer', 'science', 'cs', 'student', 'testimonial', 'startup']
  },
  {
    title: 'Rahul Sharma',
    description: 'Business Administration - Student Voice',
    type: 'section',
    sectionId: 'testimonials',
    keywords: ['rahul', 'sharma', 'business', 'administration', 'mba', 'bba', 'student', 'testimonial']
  },

  // Initiatives & Apps
  {
    title: 'Abhilekh App',
    description: 'AI-Powered File Tracking System',
    type: 'section',
    sectionId: 'initiatives',
    keywords: ['abhilekh', 'app', 'file', 'tracking', 'governance', 'digital', 'ai']
  },
  {
    title: 'Aarogyam App',
    description: 'Health & Wellness Platform',
    type: 'section',
    sectionId: 'initiatives',
    keywords: ['aarogyam', 'app', 'health', 'wellness', 'medical', 'digital']
  },

  // Locations
  {
    title: 'Campus Location',
    description: 'Nawalpur, Near Sarfa Dam Road, Shahdol',
    type: 'page',
    path: '/contact',
    keywords: ['location', 'address', 'map', 'nawalpur', 'sarfa', 'dam', 'shahdol', 'campus']
  },

  // Key People (Footer & Administration)
  {
    title: 'Dr. Manish Taram',
    description: 'Coordinator, AI Club & Assistant Professor (C.S Dept)',
    type: 'section',
    sectionId: 'footer',
    keywords: ['manish', 'taram', 'coordinator', 'ai', 'club', 'cs', 'computer', 'science', 'faculty', 'developer']
  },
  {
    title: 'Dr. Shubham Yadav',
    description: 'Website In-Charge',
    type: 'section',
    sectionId: 'footer',
    keywords: ['shubham', 'yadav', 'website', 'charge', 'admin', 'faculty']
  },
  {
    title: 'Website Development Team',
    description: 'Designed & Developed by AI Club (C.S Dept)',
    type: 'section',
    sectionId: 'footer',
    keywords: ['website', 'team', 'developer', 'design', 'ai', 'club', 'anukalp', 'manish', 'taram']
  },

  // Contact & Support (Footer)
  {
    title: 'Registrar Contact',
    description: 'registrar@psnsu.ac.in',
    type: 'page',
    path: '/contact',
    keywords: ['registrar', 'email', 'contact', 'support', 'administration']
  },
  {
    title: 'General Enquiry',
    description: 'info@psnsu.ac.in / +91 7052 101 786',
    type: 'page',
    path: '/contact',
    keywords: ['info', 'email', 'phone', 'contact', 'enquiry', 'help', 'support']
  },

  // Generic Sections (for homepage scrolling)
  { title: 'Hero Section', description: 'Main banner and introduction', type: 'section', sectionId: 'hero', keywords: ['banner', 'introduction', 'welcome', 'home'] },
  { title: 'Features & Highlights', description: 'University key features', type: 'section', sectionId: 'features', keywords: ['features', 'highlights', 'benefits'] },
  { title: 'Notices Board', description: 'Latest circulars and news', type: 'page', path: '/notices', keywords: ['notice', 'notices', 'circular', 'announcement', 'news'] },
];

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const { isSearchOpen, setIsSearchOpen, openSearch, closeSearch } = useSearch();
  const [isScreenReaderOn, setIsScreenReaderOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Screen Reader Logic using Web Speech API
  const speak = useCallback((text: string) => {
    if (!isScreenReaderOn || !text.trim()) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN'; // Indian English
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  }, [isScreenReaderOn]);

  useEffect(() => {
    if (!isScreenReaderOn) {
      window.speechSynthesis.cancel();
      return;
    }

    const activationMsg = new SpeechSynthesisUtterance("Screen reader activated. Hover over any element to hear it.");
    activationMsg.lang = 'en-IN';
    window.speechSynthesis.speak(activationMsg);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let text = '';

      if (target.getAttribute('aria-label')) {
        text = target.getAttribute('aria-label') || '';
      } else if (target.tagName === 'IMG' && (target as HTMLImageElement).alt) {
        text = `Image: ${(target as HTMLImageElement).alt}`;
      } else if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        text = target.innerText || target.getAttribute('title') || '';
        if (target.tagName === 'A') text = `Link: ${text}`;
        if (target.tagName === 'BUTTON') text = `Button: ${text}`;
      } else if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(target.tagName)) {
        text = `Heading: ${target.innerText}`;
      } else if (['P', 'SPAN', 'LI', 'LABEL'].includes(target.tagName) && target.innerText) {
        text = target.innerText;
      } else if (target.tagName === 'INPUT') {
        const input = target as HTMLInputElement;
        text = `Input field: ${input.placeholder || input.name || 'text input'}`;
      }

      if (text && text.length < 300) {
        speak(text);
      }
    };

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      const text = target.getAttribute('aria-label') || target.innerText || '';
      if (text) speak(text);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('focusin', handleFocus);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('focusin', handleFocus);
      window.speechSynthesis.cancel();
    };
  }, [isScreenReaderOn, speak]);

  const toggleScreenReader = () => {
    setIsScreenReaderOn(prev => !prev);
  };

  // Search function
  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchIndex.filter(item => {
      // Robust searching: Check title, description, keywords, AND content
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery)) ||
        (item.content && item.content.toLowerCase().includes(lowerQuery))
      );
    });

    setSearchResults(results);
  }, []);

  // Handle search on query change
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, performSearch]);

  // Reset search when closed
  useEffect(() => {
    if (!isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isSearchOpen]);

  const handleResultClick = (result: SearchResult) => {
    closeSearch();
    setSearchQuery('');
    setSearchResults([]);

    const targetPath = result.path || '/';

    if (result.type === 'section' && result.sectionId) {
      navigate(`${targetPath}#${result.sectionId}`);
    } else {
      navigate(targetPath);
    }
  };

  return (
    <>
      <div id="topbar" className="relative bg-white text-gray-800 text-xs sm:text-sm block h-auto md:h-12 font-medium z-[110] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] border-b border-gray-400 hidden md:block">
        <div className="w-full px-2 sm:px-3 lg:px-4 flex h-full justify-between items-center relative py-1.5 sm:py-2 md:py-0">

          <div className="relative z-10 flex items-center h-full pl-1 gap-1 w-full md:w-auto">
            <div className="flex items-center gap-1">
              <span className="text-blue-600 font-bold uppercase tracking-wide text-[10px] sm:text-[11px]">Shahdol District</span>
            </div>
            <div className="h-4 w-px bg-gray-300 mx-1"></div>
            <div className="flex items-center gap-1">
              <img src="/topbar/gihaldi.png" alt="G.I Tag Haldi" className="h-[25px] w-auto object-contain" loading="eager" fetchPriority="high" />
              <span className="text-blue-600 font-bold uppercase tracking-wide text-[10px] sm:text-[11px]">G.I Tag for Haldi</span>
            </div>
            <div className="h-4 w-px bg-gray-300 mx-1"></div>
            <div className="flex items-center gap-1">
              <img src="/topbar/tribal.png" alt="Tribal Heritage" className="h-[70px] w-auto object-contain" loading="eager" fetchPriority="high" />
              <span className="text-blue-600 font-bold uppercase tracking-wide text-[10px] sm:text-[11px]">Tribal Heritage</span>
              <img src="/tiger.png" alt="Tiger" className="h-[75px] w-auto object-contain" loading="eager" fetchPriority="high" />
            </div>
          </div>

          <div className="relative z-10 hidden md:flex items-center gap-3 lg:gap-5 pl-4">
            <button
              onClick={toggleScreenReader}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-full border transition-all duration-300 ${isScreenReaderOn
                ? 'bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/30'
                : 'border-blue-500 text-blue-600 hover:bg-blue-50'
                }`}
              title={isScreenReaderOn ? "Turn Off Screen Reader" : "Turn On Screen Reader"}
              aria-label={isScreenReaderOn ? "Screen Reader is On. Click to turn off." : "Screen Reader is Off. Click to turn on."}
            >
              <Volume2 size={13} className="lg:size-[14px]" />
              <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-wide hidden lg:inline">
                Screen Reader
              </span>
            </button>

            <div className="flex items-center gap-1 lg:gap-1.5 mr-1.5 lg:mr-2 border-r border-gray-200 pr-3 lg:pr-4 h-7">
              <button
                onClick={() => document.documentElement.style.fontSize = '90%'}
                className="w-5 lg:w-6 h-5 lg:h-6 flex items-center justify-center rounded-full border border-blue-500 text-blue-600 text-[8px] lg:text-[9px] font-bold hover:bg-blue-50 transition-colors uppercase"
                title="Decrease Font Size"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => document.documentElement.style.fontSize = '100%'}
                className="w-5 lg:w-6 h-5 lg:h-6 flex items-center justify-center rounded-full border border-blue-500 text-blue-600 text-[8px] lg:text-[10px] font-bold hover:bg-blue-50 transition-colors uppercase"
                title="Default Font Size"
                aria-label="Reset font size to default"
              >
                A
              </button>
              <button
                onClick={() => document.documentElement.style.fontSize = '110%'}
                className="w-5 lg:w-6 h-5 lg:h-6 flex items-center justify-center rounded-full border border-blue-500 text-blue-600 text-[10px] lg:text-[11px] font-bold hover:bg-blue-50 transition-colors uppercase"
                title="Increase Font Size"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>



            <button
              onClick={openSearch}
              className="flex items-center gap-2 group cursor-pointer transition-all border border-[#DC143C] rounded-full px-1 py-1 pr-3 hover:bg-red-50"
            >
              <div className="p-1 bg-[#DC143C] rounded-full group-hover:bg-[#B01030] transition-colors shadow-sm">
                <Search size={12} className="lg:size-[13px] text-white group-hover:text-white transition-colors" />
              </div>
              <span className="text-[9px] lg:text-[10px] text-[#DC143C] group-hover:text-[#B01030] transition-colors tracking-wide font-bold uppercase hidden xl:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[200]"
          onClick={closeSearch}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-96 bg-white shadow-2xl z-[201] transform transition-transform duration-300 ease-in-out ${isSearchOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-50">
            <h3 className="text-lg font-bold text-blue-900">Search PT.S.N.S Website</h3>
            <button
              onClick={closeSearch}
              className="p-2 rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Close search"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="p-4 pb-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter keywords to search..."
                className="flex-1 px-4 py-2 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Search
              </button>
            </div>
            <p className="text-blue-600 text-sm font-medium mt-2">Enter a keyword to start searching</p>
          </div>

          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-3">
              <h4 className="text-sm font-semibold text-gray-700">Results</h4>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="flex-1 px-4 pb-4 overflow-y-auto">
              {searchQuery && (
                searchResults.length > 0 ? (
                  <div className="space-y-2">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result)}
                        className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                      >
                        <div className="flex items-start gap-2">
                          {result.type === 'page' ? (
                            <ExternalLink size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <FileText size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1 min-w-0">
                            <h5 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                              {result.title}
                            </h5>
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                              {result.description}
                            </p>
                            <span className="text-xs text-blue-600 mt-1 inline-block">
                              {result.type === 'page' ? 'Go to page' : 'Scroll to section'} →
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No results found for "{searchQuery}"</p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
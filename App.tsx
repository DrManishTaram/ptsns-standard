import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import FormalHeader from './components/FormalHeader';
import Navbar from './components/Navbar';
import AnnouncementBanner from './components/AnnouncementBanner';
import PopupBanner from './components/PopupBanner';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Loader from './components/Loader';
import { SearchProvider } from './context/SearchContext';
import { MobileMenuProvider } from './context/MobileMenuContext';
import Home from './pages/Home';
const UniversityOverview = lazy(() => import('./pages/UniversityOverview'));

// Lazy load other page components for better performance
const About = lazy(() => import('./pages/About'));
const GenericPage = lazy(() => import('./pages/GenericPage'));
const VCMessage = lazy(() => import('./pages/VCMessage'));
const ChancellorMessage = lazy(() => import('./pages/ChancellorMessage'));
const AdmissionNotification = lazy(() => import('./pages/AdmissionNotification'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AIHackathonAchievement = lazy(() => import('./pages/AIHackathonAchievement'));
const ClubCulturePage = lazy(() => import('./pages/ClubCulturePage'));
const ClubDetailsPage = lazy(() => import('./pages/ClubDetailsPage'));
const EventGalleryPage = lazy(() => import('./pages/EventGalleryPage'));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'));
const NIRFPage = lazy(() => import('./pages/NIRFPage'));
const NAACPage = lazy(() => import('./pages/NAACPage'));
const SchoolsAndDepartments = lazy(() => import('./pages/SchoolsAndDepartments'));
const DepartmentPage = lazy(() => import('./pages/DepartmentPage'));

// Component to scroll to top on every route change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure content is rendered
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Wrapper component to control Chatbot visibility based on route
const ChatbotWrapper: React.FC = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return <Chatbot isHomePage={isHomePage} />;
};

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <MobileMenuProvider>
      <SearchProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col font-sans text-earth-800 relative">
            <ChatbotWrapper />
            <TopBar />
            <div className="sticky top-0 z-[100]">
              <FormalHeader />
              <Navbar />
              <AnnouncementBanner />
            </div>
            <PopupBanner />

            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-turmeric-600"></div></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                {/* The University */}
                <Route path="/overview" element={<UniversityOverview />} />
                <Route path="/history" element={<GenericPage title="History & Heritage" category="The University" />} />
                <Route path="/vision-mission" element={<GenericPage title="Vision & Mission" category="The University" />} />
                <Route path="/kulgeet" element={<GenericPage title="University Kulgeet" category="The University" />} />
                <Route path="/virtual-tour" element={<GenericPage title="Virtual Tour" category="The University" />} />
                <Route path="/chancellor-message" element={<ChancellorMessage />} />
                <Route path="/vc-message" element={<VCMessage />} />
                <Route path="/registrar" element={<GenericPage title="Office of The Registrar" category="Administration" />} />
                <Route path="/executive-council" element={<GenericPage title="Executive Council" category="Administration" />} />
                <Route path="/finance-officer" element={<GenericPage title="Finance Officer" category="Administration" />} />
                <Route path="/exam-controller" element={<GenericPage title="Examination Controller" category="Administration" />} />
                <Route path="/act-statutes" element={<GenericPage title="Act, Statutes & Ordinances" category="Official" />} />

                {/* Academics */}
                <Route path="/schools-departments" element={<SchoolsAndDepartments />} />
                <Route path="/department/:id" element={<DepartmentPage />} />
                <Route path="/programs" element={<GenericPage title="Academic Programs" category="Academics" />} />
                <Route path="/syllabus" element={<GenericPage title="Syllabus (NEP)" category="Academics" />} />
                <Route path="/calendar" element={<GenericPage title="Academic Calendar" category="Academics" />} />
                <Route path="/iks" element={<GenericPage title="Indian Knowledge System" category="Academics" />} />
                <Route path="/phd" element={<GenericPage title="PhD Programs" category="Research" />} />
                <Route path="/research-development" element={<GenericPage title="Research & Development" category="Research" />} />
                <Route path="/projects-grants" element={<GenericPage title="Projects & Grants" category="Research" />} />
                <Route path="/consultancy" element={<GenericPage title="Consultancy Services" category="Research" />} />
                <Route path="/patent-cell" element={<GenericPage title="Patent Cell" category="Research" />} />
                <Route path="/library" element={<GenericPage title="Central Library" category="Facilities" />} />
                <Route path="/iqac" element={<GenericPage title="IQAC Cell" category="Facilities" />} />
                <Route path="/mou" element={<GenericPage title="MOU & Collaborations" category="Facilities" />} />

                {/* Admissions */}
                <Route path="/admission-notification" element={<AdmissionNotification />} />
                <Route path="/entrance-exam" element={<GenericPage title="Entrance Exam 2025" category="Admissions" />} />
                <Route path="/international-students" element={<GenericPage title="International Students" category="Admissions" />} />
                <Route path="/fees" element={<GenericPage title="Fee Structure" category="Admissions" />} />
                <Route path="/fee-refund" element={<GenericPage title="Fee Refund Policy" category="Admissions" />} />
                <Route path="/scholarships" element={<GenericPage title="Scholarships & Financial Aid" category="Admissions" />} />

                {/* Student Zone */}
                <Route path="/hostel" element={<GenericPage title="Hostel & Campus Life" category="Student Zone" />} />
                <Route path="/sports" element={<GenericPage title="Sports Facilities" category="Student Zone" />} />
                <Route path="/clubs" element={<GenericPage title="University Clubs" category="Student Zone" />} />
                <Route path="/ncc-nss" element={<GenericPage title="NCC & NSS" category="Student Zone" />} />
                <Route path="/student-portal" element={<GenericPage title="Student Portal" category="Student Zone" />} />
                <Route path="/placements" element={<GenericPage title="Placement Cell" category="Student Zone" />} />
                <Route path="/grievance" element={<GenericPage title="Student Grievance Redressal" category="Student Zone" />} />
                <Route path="/anti-ragging" element={<GenericPage title="Anti-Ragging Cell" category="Student Zone" />} />
                <Route path="/convocation" element={<GenericPage title="Convocation" category="Student Zone" />} />

                {/* Info Desk */}
                <Route path="/tenders" element={<GenericPage title="Tender Notices" category="Info Desk" />} />
                <Route path="/jobs" element={<GenericPage title="Job Openings" category="Info Desk" />} />
                <Route path="/rti" element={<GenericPage title="RTI Cell" category="Info Desk" />} />
                <Route path="/downloads" element={<GenericPage title="Downloads & Forms" category="Info Desk" />} />
                <Route path="/contact" element={<GenericPage title="Contact Us" category="Info Desk" />} />
                <Route path="/media" element={<GenericPage title="Media Gallery" category="Info Desk" />} />

                {/* Achievement Stories */}
                <Route path="/achievements/ai-hackathon" element={<AIHackathonAchievement />} />

                {/* Student Life */}
                <Route path="/club-culture" element={<ClubCulturePage />} />
                <Route path="/club/:id" element={<ClubDetailsPage />} />

                {/* Event Gallery */}
                <Route path="/gallery" element={<EventGalleryPage />} />
                <Route path="/gallery/:eventId" element={<EventDetailPage />} />

                {/* NIRF Page */}
                <Route path="/nirf" element={<NIRFPage />} />

                {/* NAAC Page */}
                <Route path="/naac" element={<NAACPage />} />

                {/* Catch all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

            <Footer />
          </div>
        </Router>
      </SearchProvider>
    </MobileMenuProvider>
  );
};

export default App;
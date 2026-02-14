import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Mail, Calendar, BookOpen, Quote, X, GraduationCap } from 'lucide-react';

interface Dean {
  id: string;
  name: string;
  faculty: string;
  designation: string;
  department: string;
  appointedDate: string;
  since: string;
  email: string;
  image: string;
  message?: string;
  fullMessage?: string;
}

const deans: Dean[] = [
  {
    id: 'social-sciences',
    name: "Prof. Sunita Wathrey",
    faculty: "Faculty of Social Sciences",
    designation: "Professor",
    department: "Economics and Geography",
    appointedDate: "04/02/2025",
    since: "04/02/2025",
    email: "Sunita.wathrey@gmail.com",
    image: "/Adminstration/sunita-wathrey.jpg",
  },
  {
    id: 'commerce',
    name: "Prof. Praveen Kumar Sharma",
    faculty: "Faculty of Commerce",
    designation: "Professor",
    department: "Physical science, Life science",
    appointedDate: "04-02-2025",
    since: "04-02-2025",
    email: "praveenkumarsharma52@gmail.com",
    image: "/Adminstration/praveen-sharma.png",
    message: "Welcome to the Department of Commerce...",
    fullMessage: "Welcome to the Department of Commerce at Pandit Shambhu Nath Shukla Vishwavidyalaya! Our department is dedicated to nurturing future business leaders, entrepreneurs, and financial experts by providing a curriculum that blends theoretical knowledge with practical skills. We strive to create an environment that encourages innovation and ethical business practices."
  },
  {
    id: 'science',
    name: "Prof. Praveen Kumar Sharma",
    faculty: "Faculty of Science",
    designation: "Professor",
    department: "Physical science, Life science",
    appointedDate: "12-07-2024",
    since: "12-07-2024",
    email: "praveenkumarsharma52@gmail.com",
    image: "/Adminstration/praveen-sharma.png",
    message: "Welcome to the Faculty of Science...",
    fullMessage: "Welcome to the Faculty of Science at Pandit Shambhu Nath Shukla Vishwavidyalaya! Our faculty is dedicated to fostering innovation, critical thinking, and research excellence. We provide a dynamic learning environment where students can explore the wonders of science and contribute to solving global challenges."
  }
];

const DeansOfFaculty: React.FC = () => {
  const [selectedDean, setSelectedDean] = useState<Dean | null>(null);

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
             <span>Academics</span>
             <ChevronRight size={12} />
             <span>Leadership</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
            Deans of Faculty
          </h1>
          <p className="text-lg font-light text-blue-100/80 max-w-2xl mx-auto">
            Meeting the academic leaders shaping the future of Pandit Shambhu Nath Shukla Vishwavidyalaya.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-12 relative z-20">
        
        {/* Roles & Responsibilities - Compact Version */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-12 max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-[#071133] mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-amber-500" />
                Key Responsibilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {[
                "Overseeing academic planning",
                "Curriculum implementation",
                "Research promotion",
                "Quality teaching assurance",
                "Faculty supervision",
                "Student grievance redressal"
              ].map((role, idx) => (
                <div key={idx} className="flex gap-2 items-center text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <span>{role}</span>
                </div>
              ))}
            </div>
        </div>

        {/* Deans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {deans.map((dean, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col overflow-hidden">
                
                {/* Card Header & Image */}
                <div className="relative h-24 bg-gradient-to-r from-[#071133] to-[#1a2b5e]">
                    <div className="absolute -bottom-10 left-6">
                        <div className="w-20 h-20 rounded-xl border-4 border-white shadow-lg overflow-hidden bg-white">
                            <img src={dean.image} alt={dean.name} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Card Body */}
                <div className="pt-12 px-6 pb-6 flex-grow flex flex-col">
                    <div className="mb-4">
                        <span className="inline-block px-2 py-1 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-2">
                            {dean.faculty}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#071133] transition-colors">{dean.name}</h3>
                        <p className="text-sm text-gray-500 font-medium">{dean.designation}</p>
                    </div>

                    <div className="space-y-2.5 text-sm text-gray-600 mb-6 border-t border-grat-50 pt-4">
                        <div className="flex items-start gap-2">
                            <BookOpen size={14} className="mt-0.5 text-amber-500 flex-shrink-0" />
                            <span className="line-clamp-2">{dean.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-amber-500 flex-shrink-0" />
                            <span>Since: {dean.since}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={14} className="text-amber-500 flex-shrink-0" />
                            <a href={`mailto:${dean.email}`} className="hover:text-blue-600 truncate">{dean.email}</a>
                        </div>
                    </div>

                    <div className="mt-auto">
                         {dean.message ? (
                            <button 
                                onClick={() => setSelectedDean(dean)}
                                className="w-full py-2.5 rounded-lg bg-gray-50 text-gray-700 font-semibold text-sm hover:bg-[#071133] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Quote size={14} /> View Message
                            </button>
                         ) : (
                             <div className="w-full py-2.5"></div>
                         )}
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Read More */}
      {selectedDean && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedDean(null)}>
           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden animate-scale-up" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedDean(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors z-10 text-white"
              >
                 <X size={20} />
              </button>
              
              <div className="bg-[#071133] p-8 text-white relative overflow-hidden">
                 <Quote className="absolute -bottom-4 -right-4 text-white/5 w-40 h-40" />
                 <h3 className="text-xl font-serif font-bold mb-1 relative z-10">Dean's Message</h3>
                 <p className="text-blue-200 text-sm relative z-10">{selectedDean.faculty}</p>
              </div>
              
              <div className="p-8">
                 <div className="flex items-center gap-4 mb-6">
                    <img src={selectedDean.image} alt={selectedDean.name} className="w-14 h-14 rounded-xl object-cover border border-gray-200 shadow-sm" />
                    <div>
                       <p className="font-bold text-gray-900">{selectedDean.name}</p>
                       <p className="text-xs text-gray-500">{selectedDean.designation}</p>
                    </div>
                 </div>
                 
                 <div className="prose prose-sm prose-gray max-w-none bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <p className="text-gray-700 leading-relaxed italic">
                       "{selectedDean.fullMessage}"
                    </p>
                 </div>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default DeansOfFaculty;

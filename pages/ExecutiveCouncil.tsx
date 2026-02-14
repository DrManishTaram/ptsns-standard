import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Users, Building, MapPin, BadgeCheck, FileText } from 'lucide-react';

interface CouncilMember {
  id: number;
  name: string;
  role?: string;
  workplace: string;
  initials: string;
}

const members: CouncilMember[] = [
  { id: 1, name: "डॉ. सी.बी. सांधिया", workplace: "शासकीय महाविद्यालय उमरिया (म.प्र)", initials: "CS" },
  { id: 2, name: "डॉ. अनिल कुमार सक्सेना", workplace: "शासकीय महाविद्यालय जैतपुर (म.प्र.)", initials: "AS" },
  { id: 3, name: "डॉ. आर. के. तिवारी", workplace: "शासकीय महाविद्यालय ब्यौहारी (म.प्र.)", initials: "RT" },
  { id: 4, name: "डॉ. बी. के. सोनवानी", workplace: "शासकीय महाविद्यालय कोतमा (म.प्र.)", initials: "BS" },
  { id: 5, name: "डॉ. ध्रुव कुमार दीक्षित", workplace: "301, श्री सार्थक अपार्टमेंट, जी.एस. कॉलेज के पास, साउथ सिविल लाइन्स, जबलपुर (म.प्र.)", initials: "DD" },
  { id: 6, name: "डॉ. शिव कुमार मिश्रा", workplace: "भौतिक विभाग, इंदिरा गांधी राष्ट्रीय जनजातीय विश्वविद्यालय, अमरकंटक (म.प्र)", initials: "SM" },
  { id: 7, name: "श्रीमती प्रतिभा सिंह सेंगर", workplace: "वन विकास निगम कालोनी, उमरिया (म.प्र.)", initials: "PS" },
  { id: 8, name: "श्री अमित बघेल", workplace: "फ्लैट नं. 110, सी-ब्लॉक, ड्रीम्स इंपीरिया, सरकंडा, बिलासपुर (छत्तीसगढ़)", initials: "AB" },
  { id: 9, name: "कुमारी अन्नू मांझी", workplace: "म.नं. 120, वार्ड नं. 36, जलेश निकुंज, नगरिया, रीवा (म.प्र.)", initials: "AM" },
  { id: 10, name: "श्री नरेन्द्र कुमार देवांगन", workplace: "पुलाई दफाई पौराधार, वार्ड नं. 2, नगर परिषद्, डूमरकछार, तह. कोतमा, जिला-अनूपपुर (म.प्र.)", initials: "ND" },
  { id: 11, name: "डॉ. प्रवीण कुमार शर्मा", workplace: "संकायाध्यक्ष विज्ञान संकाय", initials: "PS" },
  { id: 12, name: "आयुक्त", role: "Commissioner", workplace: "उच्च शिक्षा विभाग, मप्र. शासन, सतपुड़ा भवन भोपाल", initials: "CM" },
  { id: 13, name: "अतिरिक्त संचालक", role: "Additional Director", workplace: "उच्च शिक्षा विभाग रीवा संभाग", initials: "AD" },
  { id: 14, name: "प्रमुख सचिव", role: "Principal Secretary", workplace: "वित्त विभाग मप्र शासन भोपाल", initials: "PS" },
];

const ExecutiveCouncil: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            
            {/* Hero Section */}
            <div className="relative bg-[#071133] text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                
                <div className="container mx-auto px-4 py-16 relative z-10 text-center">
                    <div className="flex justify-center items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <span>Administration</span>
                        <ChevronRight size={12} />
                        <span>Governance</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Executive Council</h1>
                    <h2 className="text-2xl md:text-3xl font-serif text-white/80" style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
                        कार्य परिषद्
                    </h2>
                    
                    <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
                </div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 py-12 -mt-8 relative z-20">
                
                {/* Intro Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-12 max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl hidden md:block">
                            <Users size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#071133] mb-4" style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
                                कार्य परिषद् के बारे में
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
                                कार्य परिषद् विश्वविद्यालय का सर्वोच्च प्रशासनिक निकाय है जो विश्वविद्यालय के सुचारु संचालन, शैक्षणिक उत्कृष्टता और संस्थागत विकास के लिए महत्वपूर्ण निर्णय लेता है। यह परिषद् विश्वविद्यालय की नीतियों, योजनाओं, प्रशासनिक और वित्तीय मामलों का निर्धारण करती है।
                            </p>
                        </div>
                    </div>
                </div>

                {/* Members List Title */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    <FileText className="text-amber-600" />
                    <h3 className="text-2xl md:text-3xl font-bold text-[#071133]" style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
                        कार्य परिषद् सदस्यों की सूची
                    </h3>
                </div>

                {/* Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((member) => (
                        <div key={member.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                            
                            {/* Card Header with Member Number */}
                            <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100 group-hover:bg-[#071133] group-hover:text-white transition-colors duration-300">
                                <span className="font-bold text-xs uppercase tracking-wider text-gray-500 group-hover:text-blue-200">
                                    Member No.
                                </span>
                                <span className="flex items-center gap-1 bg-white text-[#071133] px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                    <BadgeCheck size={14} className="text-emerald-500" />
                                    {member.id}
                                </span>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    {/* Avatar/Initial */}
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-[#071133] flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                                        {member.initials}
                                    </div>
                                    
                                    <div>
                                        {/* Name */}
                                        <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#071133] transition-colors" style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
                                            {member.name}
                                        </h4>
                                        {member.role && (
                                            <p className="text-xs font-bold text-amber-600 uppercase tracking-wide mb-2">
                                                {member.role}
                                            </p>
                                        )}
                                        
                                        {/* Address/Workplace */}
                                        <div className="flex items-start gap-2 text-gray-500 text-sm mt-3">
                                            <MapPin size={16} className="flex-shrink-0 mt-0.5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                                            <span style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
                                                {member.workplace}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Info */}
                <div className="mt-16 text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
                   <p>Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)</p>
                </div>

            </div>
        </div>
    );
};

export default ExecutiveCouncil;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, MapPin, Phone, Mail, User, ShieldCheck, ClipboardList, CheckCircle2 } from 'lucide-react';

interface StaffMember {
    name: string;
    role: string;
    designation: string;
    contact: string;
    email: string;
    image: string;
}

const shahdolTeam: StaffMember[] = [
    {
        name: "Prof. Geeta Saraf",
        role: "In-Charge",
        designation: "Professor, Political Science",
        contact: "9425183687",
        email: "geetasaraf1968@gmail.com",
        image: "/Adminstration/geeta-saraf.jpg"
    },
    {
        name: "Dr. Pragya Yadav",
        role: "Assistant In-Charge",
        designation: "Assistant Professor, Commerce",
        contact: "+91-9407-3348-38",
        email: "pragyayadav9988@gmail.com",
        image: "/Adminstration/pragya-yadav.jpg"
    }
];

const PremisesInCharge: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'shahdol' | 'nawalpur'>('shahdol');

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
                        <span>Premises In-Charge</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
                        Premises In-Charge
                    </h1>
                    <p className="text-lg font-light text-blue-100/80 max-w-2xl mx-auto">
                        Managing Campus Infrastructure & Safety at Pandit Shambhu Nath Shukla Vishwavidyalaya
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 -mt-16 relative z-20 pb-20">
                
                {/* Tabs */}
                <div className="flex justify-center mb-12">
                     <div className="inline-flex bg-white rounded-full p-1 shadow-lg border border-gray-100">
                        <button 
                            onClick={() => setActiveTab('shahdol')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'shahdol' ? 'bg-[#071133] text-white shadow-md' : 'text-gray-500 hover:text-[#071133]'}`}
                        >
                            <MapPin size={16} /> Shahdol Campus
                        </button>
                        <button 
                            onClick={() => setActiveTab('nawalpur')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'nawalpur' ? 'bg-[#071133] text-white shadow-md' : 'text-gray-500 hover:text-[#071133]'}`}
                        >
                            <MapPin size={16} /> Nawalpur Campus
                        </button>
                     </div>
                </div>

                {activeTab === 'shahdol' ? (
                    <div className="animate-fade-in-up">
                        {/* Section Title */}
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-serif font-bold text-gray-900">Shahdol Campus</h2>
                            <p className="text-gray-500 mt-2">Premises Management Team</p>
                            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        {/* Team Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                            {shahdolTeam.map((member, idx) => (
                                <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                    <div className="p-8 flex flex-col items-center text-center">
                                        <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-blue-500 to-[#071133] mb-6 shadow-md relative group-hover:scale-105 transition-transform duration-300">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full rounded-full object-cover border-4 border-white bg-white"
                                            />
                                            <div className="absolute bottom-0 right-0 bg-amber-500 text-white p-1.5 rounded-full shadow-sm border-2 border-white">
                                                <User size={14} />
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                                            {member.role}
                                        </span>
                                        <p className="text-gray-500 text-sm font-medium mb-6">{member.designation}</p>
                                        
                                        <div className="w-full space-y-3 bg-gray-50 p-5 rounded-xl border border-gray-100">
                                            <a href={`tel:${member.contact}`} className="flex items-center gap-3 text-gray-600 text-sm hover:text-blue-600 transition-colors group/link p-2 bg-white rounded-lg shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors">
                                                    <Phone size={14} />
                                                </div>
                                                <span className="font-medium truncate">{member.contact}</span>
                                            </a>
                                            <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-gray-600 text-sm hover:text-blue-600 transition-colors group/link p-2 bg-white rounded-lg shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover/link:bg-amber-600 group-hover/link:text-white transition-colors">
                                                    <Mail size={14} />
                                                </div>
                                                <span className="font-medium truncate">{member.email}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Responsibilities Section */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto">
                            <div className="bg-[#071133] px-6 py-4 flex items-center gap-3">
                                <ClipboardList className="text-amber-400" size={24} />
                                <h3 className="text-white font-bold text-lg">Responsibilities & Duties</h3>
                            </div>
                            <div className="p-8 md:p-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors duration-300">
                                         <div className="p-3 bg-white rounded-lg shadow-sm text-emerald-500">
                                            <Home size={24} />
                                         </div>
                                         <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Infrastructure Maintenance</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">Daily monitoring and upkeep of campus buildings, classrooms, and general infrastructure to ensure a conducive environment.</p>
                                         </div>
                                    </div>
                                    <div className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors duration-300">
                                         <div className="p-3 bg-white rounded-lg shadow-sm text-blue-500">
                                            <ShieldCheck size={24} />
                                         </div>
                                         <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Safety & Event Support</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">Ensuring campus safety protocols and providing logistical support for university events, examinations, and functions.</p>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 animate-fade-in-up">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-300 mb-6">
                            <MapPin size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-400 mb-2">Nawalpur Campus</h3>
                        <p className="text-gray-500">Premises In-Charge details will be updated shortly.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PremisesInCharge;

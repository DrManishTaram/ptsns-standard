import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Scale, Shield, FileText, HelpCircle, Mail, Phone, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const OmbudspersonPage: React.FC = () => {
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
                        <span>Ombudsperson</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
                        Office of the Ombudsperson
                    </h1>
                    <p className="text-lg font-light text-blue-100/80 max-w-2xl mx-auto">
                        Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol
                    </p>
                    <p className="text-sm font-medium text-amber-400 mt-2 uppercase tracking-wide">
                        An independent authority ensuring fair and timely redressal of student grievances
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-16 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Ombudsperson Profile */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 sticky top-24">
                             <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-4 flex items-center gap-3">
                                <Scale className="text-white" size={24} />
                                <h3 className="text-white font-bold text-lg">Meet the Ombudsperson</h3>
                             </div>
                             
                             <div className="p-8 text-center bg-gradient-to-b from-amber-50 to-white">
                                <div className="w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-tr from-amber-500 to-blue-600 mb-4 shadow-lg">
                                    <img 
                                        src="/Adminstration/ombudsperson.jpg" 
                                        alt="Dr. Vikram Singh Baghel" 
                                        className="w-full h-full rounded-full object-cover border-4 border-white"
                                    />
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Dr. Vikram Singh Baghel</h2>
                                <p className="text-amber-600 font-bold uppercase text-xs tracking-wider mb-6">Ombudsperson, Student Grievance Redressal</p>
                                
                                <div className="space-y-4 text-left bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm text-sm">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase">Appointed On</p>
                                            <p className="font-medium text-gray-800">19/02/2025</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase">Office</p>
                                            <p className="font-medium text-gray-800">Office of the Ombudsperson, PSNSU, Shahdol Campus-- 484001</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                                            <a href="mailto:vikrambaghel@psnsuniversity.ac.in" className="font-medium text-blue-600 hover:underline break-all">vikrambaghel@psnsuniversity.ac.in</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase">Phone</p>
                                            <a href="tel:+919425844318" className="font-medium text-blue-600 hover:underline">+91-9425844318</a>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Right Column: Policies & Processes */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Role & Jurisdiction */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <Shield size={24} />
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-[#071133]">Role and Jurisdiction</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                The Ombudsperson is an independent authority appointed to ensure fair and timely redressal of student grievances in accordance with the <strong>Vishwavidyalaya Grants Commission (Redressal of Grievances of Students) Regulations, 2023</strong>. The Ombudsperson works in coordination with the Student Grievance Redressal Committee and provides an appellate platform if the internal mechanism fails.
                            </p>
                        </div>

                        {/* Responsibilities */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="text-emerald-500" /> Key Responsibilities
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "Receive and review appeals from students on grievance matters",
                                    "Make recommendations to the Vishwavidyalaya for resolving student grievances",
                                    "Ensure adherence to UGC regulations on grievance redressal",
                                    "Maintain confidentiality of student complaints and cases",
                                    "Monitor the effectiveness of the Vishwavidyalaya's internal grievance redressal system"
                                ].map((resp, idx) => (
                                    <div key={idx} className="flex gap-4 items-start p-3 rounded-lg bg-gray-50 border border-gray-100">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                            {idx + 1}
                                        </div>
                                        <p className="text-gray-700 font-medium">{resp}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Grievance Process */}
                        <div className="bg-gradient-to-br from-[#071133] to-[#1a2b5e] text-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                            <FileText className="absolute top-4 right-4 text-white/5 w-32 h-32" />
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <FileText className="text-amber-400" /> Grievance Process
                                </h3>
                                <div className="space-y-6 relative">
                                    {/* Connecting Line */}
                                    <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-white/20"></div>
                                    
                                    {[
                                        { title: "Submit Initial Grievance", desc: "Submit grievance to Department/Faculty level committee." },
                                        { title: "Escalate if Unresolved", desc: "Escalate to Vishwavidyalaya Student Grievance Redressal Committee (USGRC)." },
                                        { title: "Appeal to Ombudsperson", desc: "If still unsatisfied, appeal to the Ombudsperson within 15 days of USGRC decision." },
                                        { title: "Resolution", desc: "Ombudsperson reviews case and provides recommendation within 30 days." }
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex gap-4 relative">
                                            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-lg border-2 border-[#071133] z-10 flex-shrink-0">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-amber-200">{step.title}</h4>
                                                <p className="text-blue-100 text-sm mt-1">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* FAQs */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <HelpCircle className="text-blue-500" /> Frequently Asked Questions
                            </h3>
                            <div className="space-y-6 divide-y divide-gray-100">
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2">What types of grievances can be addressed?</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">Academic matters, administrative issues, discrimination concerns, examination results, admission disputes, and other Vishwavidyalaya-related complaints.</p>
                                </div>
                                <div className="pt-4">
                                    <h4 className="font-bold text-gray-800 mb-2">How to file an appeal with the Ombudsperson?</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">Submit a written appeal with relevant documents and previous decisions through email or at the office of the Ombudsperson.</p>
                                </div>
                                <div className="pt-4">
                                    <h4 className="font-bold text-gray-800 mb-2">Is there a time limit for filing an appeal?</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">Yes, appeals must be filed within 15 days of receiving the decision from the Vishwavidyalaya Student Grievance Redressal Committee.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OmbudspersonPage;

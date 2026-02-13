
import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Code, Users, Award, BookOpen, Briefcase, GraduationCap, Zap, Globe,
  Monitor, Cpu, Database, Shield, Wifi, ArrowRight, ChevronDown,
  Mail, Phone, MapPin, Star, Target, Lightbulb, Binary, Braces, Terminal,
  Sparkles, Clock, Trophy, Brain, Heart, Share2
} from 'lucide-react';
import { departments, DepartmentData } from '../data/departmentData';
import { themeStyles, ThemeType } from '../utils/themeStyles';

const DepartmentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Scroll to top on mount (handled by ScrollToTop component in App.tsx but good to have)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Get department data or fallback to generic template
  // If id is not present or invalid, we could redirect, but for now fallback to generic
  const deptData = id && departments[id] ? departments[id] : departments['generic'];

  // If using generic template but we have an ID, try to capitalize ID for name if it's generic
  if (deptData.id === 'generic' && id) {
     // Transform "political-science" -> "Political Science"
     const formattedName = id
       .split('-')
       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
       .join(' ');
     
     // Clone the generic data to avoid mutating the original reference
     // and override the name
     return (
       <DepartmentPageContent 
         deptData={{
           ...deptData,
           name: formattedName
         }} 
       />
     );
  }

  return <DepartmentPageContent deptData={deptData} />;
};

const DepartmentPageContent: React.FC<{ deptData: DepartmentData }> = ({ deptData }) => {
  const {
    name, badge, description, stats, about, highlights, hod, 
    faculty, programs, labs, researchAreas, faqs, achievements, projects
  } = deptData;

  const currentTheme = themeStyles[deptData.theme] || themeStyles['indigo'];
  const t = currentTheme.primary;
  const s = currentTheme.secondary;

  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ═══════════════════════════════════════════
          HERO RIBBON
      ═══════════════════════════════════════════ */}
      <section className="relative pt-14 pb-20 overflow-hidden" style={{ background: currentTheme.heroGradient }}>
        {/* Animated mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
          <div className="absolute top-[-40%] right-[-10%] w-[700px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />
          <div className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }} />
          <div className="absolute top-[10%] left-[50%] w-[300px] h-[300px] rounded-full animate-pulse"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />
        </div>

        {/* Decorative watermark */}
        <div className="absolute top-8 right-8 text-white/[0.03] font-mono text-[80px] lg:text-[120px] leading-none font-black select-none hidden lg:block">
          {`<${name.split(' ')[0]}/>`}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            {badge && (
              <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-5 border border-${t}-400/20`} style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))` }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className={`text-${t}-200 text-[11px] font-bold tracking-[0.2em] uppercase`}>{badge}</span>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] font-extrabold text-white mb-6 leading-tight tracking-tight">
              Department of <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, #818cf8, #fff, #a78bfa)` }}>{name}</span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 mb-0 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          FLOATING STATS BAR
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 -mt-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${stats.length}`}>
              {stats.map((stat, i) => (
                <div key={i} className={`relative p-5 text-center group hover:bg-gradient-to-b hover:from-${t}-50/50 hover:to-transparent transition-all duration-300 ${i < stats.length - 1 ? 'border-r border-slate-100' : ''}`}>
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-${t}-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  <stat.icon className={`mx-auto mb-1.5 text-${t}-500 opacity-70`} size={20} strokeWidth={1.8} />
                  <div className="text-xl font-extrabold text-slate-800 tracking-tight">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT + HIGHLIGHTS
      ═══════════════════════════════════════════ */}
      <section className="pt-20 pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            {/* Text — 3 cols */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-${t}-500 to-${s}-600`}>
                  <Code size={18} className="text-white" />
                </div>
                <span className={`text-${t}-600 font-bold text-xs tracking-[0.2em] uppercase`}>About the Department</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                {about.title}
              </h2>
              <div className="space-y-4 text-slate-600 text-[15px] leading-[1.8]">
                 {about.content.map((paragraph, idx) => (
                   <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 font-semibold">$1</strong>') }} />
                 ))}
              </div>

              {/* Mission / Vision cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Target, title: 'Our Mission', desc: about.mission },
                  { icon: Lightbulb, title: 'Our Vision', desc: about.vision }
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-${t}-50/40 hover:border-${t}-100 transition-all duration-300 group`}>
                    <div className={`w-9 h-9 rounded-lg mb-3 flex items-center justify-center bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-${t}-200 transition-all`}>
                      <item.icon size={16} className={`text-${t}-600`} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights card — 2 cols */}
            <div className="lg:col-span-2">
              <div className="relative group">
                {/* Decorative tilt card behind */}
                <div className={`absolute inset-0 rounded-3xl rotate-2 group-hover:rotate-1 transition-transform duration-500 bg-gradient-to-br from-${t}-500 to-${s}-500 opacity-[0.08]`} />
                <div className="relative rounded-3xl p-8 overflow-hidden shadow-xl" style={{ background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 100%)' }}>
                  {/* Glow */}
                  <div className={`absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br from-${t}-500 to-transparent opacity-20 blur-3xl`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2.5 mb-7">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                        <Award size={16} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">Department Highlights</h3>
                    </div>

                    <div className="space-y-3.5">
                      {highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group/item">
                          <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
                            <div className={`absolute inset-0 rounded-full bg-${t}-500/20 group-hover/item:bg-${t}-500/30 transition-colors`} />
                            <div className={`w-2 h-2 rounded-full bg-${t}-400`} />
                          </div>
                          <span className="text-slate-300 text-sm font-medium group-hover/item:text-white transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Accent badge */}
                    <div className="mt-7 pt-6 border-t border-white/10">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.1))', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.2)' }}>
                        <Sparkles size={12} />
                        NAAC A+ Accredited
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOD MESSAGE SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
         {/* Decorative background elements */}
         <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-${t}-50/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none`} />
         <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] bg-${s}-50/60 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none`} />
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
               
               {/* HOD Profile Card (Left) */}
               <div className="lg:col-span-5">
                  <div className="relative group">
                     <div className={`absolute inset-0 bg-gradient-to-br from-${t}-500 to-${s}-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-10`} />
                     <div className="relative bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                        
                        {/* Gradient Header Overlay */}
                        <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-${t}-50 to-${s}-50 opacity-50`} />
                        
                        <div className="relative z-10">
                           <div className="flex flex-col items-center text-center">
                              {/* Avatar */}
                              <div className="w-32 h-32 rounded-full p-1.5 bg-white shadow-xl mb-5 relative group-hover:scale-105 transition-transform duration-500">
                                 <div className={`w-full h-full rounded-full bg-gradient-to-br from-${t}-100 to-${s}-100 flex items-center justify-center overflow-hidden border-4 border-white`}>
                                    <span className={`text-3xl font-bold text-${t}-400 tracking-tight`}>
                                        {hod.name.split(' ').slice(1).map(n => n[0]).join('').slice(0, 2)}
                                    </span>
                                 </div>
                                 <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full" title="Active Head" />
                              </div>

                              <h3 className="text-2xl font-bold text-slate-900 mb-1">{hod.name}</h3>
                              <p className={`text-sm font-bold text-${t}-600 tracking-wider uppercase mb-6`}>{hod.designation}</p>
                              
                              <div className="flex gap-2 mb-8">
                                 <span className="px-3 py-1 bg-slate-100/80 rounded-full text-xs font-semibold text-slate-600 border border-slate-200">Ph.D.</span>
                                 <span className={`px-3 py-1 bg-${t}-50 rounded-full text-xs font-semibold text-${t}-600 border border-${t}-100`}>{hod.experience} Exp.</span>
                              </div>

                              {/* Stats */}
                              <div className="grid grid-cols-2 gap-4 w-full mb-8">
                                 <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 text-center">
                                    <div className="text-2xl font-bold text-slate-800">{hod.publications}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Publications</div>
                                 </div>
                                 <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 text-center">
                                    <div className="text-2xl font-bold text-slate-800">{hod.experience}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Years Teaching</div>
                                 </div>
                              </div>

                              {/* Contact */}
                              <div className="w-full space-y-3 pt-6 border-t border-slate-100">
                                 <div className="flex items-center gap-3 text-slate-600 text-sm">
                                    <div className={`w-8 h-8 rounded-lg bg-${t}-50 flex items-center justify-center text-${t}-600 shrink-0`}>
                                       <Mail size={14} />
                                    </div>
                                    <span className="font-medium truncate">{hod.contact.email}</span>
                                 </div>
                                 <div className="flex items-center gap-3 text-slate-600 text-sm">
                                    <div className={`w-8 h-8 rounded-lg bg-${t}-50 flex items-center justify-center text-${t}-600 shrink-0`}>
                                       <Phone size={14} />
                                    </div>
                                    <span className="font-medium">{hod.contact.phone}</span>
                                 </div>
                                 <div className="flex items-center gap-3 text-slate-600 text-sm">
                                    <div className={`w-8 h-8 rounded-lg bg-${t}-50 flex items-center justify-center text-${t}-600 shrink-0`}>
                                       <MapPin size={14} />
                                    </div>
                                    <span className="font-medium">Dept of {name}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Message Content (Right) */}
               <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 mb-4">
                     <div className={`h-0.5 w-10 bg-${t}-600`}></div>
                     <span className={`text-${t}-600 font-bold text-xs tracking-[0.2em] uppercase`}>Leadership Message</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                     Message from the <br />
                     <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${t}-600 to-${s}-600`}>Head of Department</span>
                  </h2>

                  <div className="relative indent-8">
                     <span className={`absolute -top-4 -left-2 text-6xl text-${t}-200 font-serif opacity-40`}>"</span>
                     <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light text-justify">
                        {hod.message.map((msg, idx) => (
                           <p key={idx}>{msg}</p>
                        ))}
                     </div>
                  </div>

                  <div className="mt-10 flex items-center gap-4">
                     <div className="flex flex-col">
                        <span className="font-serif italic text-2xl text-slate-900">{hod.name}</span>
                        <span className={`text-xs font-bold text-${t}-600 uppercase tracking-widest mt-1`}>{hod.designation}</span>
                     </div>
                     <div className="h-px bg-slate-200 flex-grow max-w-[100px]" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ═══════════════════════════════════════════
          FACULTY
      ═══════════════════════════════════════════ */}
      {faculty.length > 0 && (
        <section className={`py-20 bg-${t}-50/30`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className={`text-${t}-600 font-bold text-xs tracking-[0.2em] uppercase block mb-3`}>Expert Mentors</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Our Faculty</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto text-sm">Dedicated researchers and educators shaping the next generation.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {faculty.map((f, i) => (
                <div key={i} className={`group relative bg-white rounded-[2rem] border border-slate-100 p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.08)] hover:border-${t}-100`}>
                  
                  {/* Decorative Background Elements */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${f.color || `from-${t}-400 to-${s}-500`} opacity-[0.08] blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-15 transition-opacity duration-500`} />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* Avatar Container */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${f.color || `from-${t}-400 to-${s}-500`} blur-2xl opacity-0 group-hover:opacity-20 scale-150 rounded-full transition-all duration-500`} />
                      <div className={`w-24 h-24 relative rounded-2xl bg-white p-1.5 shadow-xl shadow-slate-200/50 group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500 ring-1 ring-slate-100 group-hover:ring-${t}-100`}>
                         <div className={`w-full h-full rounded-xl bg-gradient-to-br ${f.color || `from-${t}-400 to-${s}-500`} flex items-center justify-center overflow-hidden`}>
                            <span className="text-2xl font-black text-white/90 drop-shadow-sm tracking-tight">
                               {f.name.split(' ').filter(n => !['Dr.', 'Mr.', 'Mrs.', 'Prof.', 'Ms.'].includes(n)).map(n => n[0]).join('').slice(0, 2)}
                            </span>
                         </div>
                         {/* Status Dot */}
                         <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full border border-white animate-pulse" />
                         </div>
                      </div>
                    </div>

                    {/* Info */}
                    <h3 className={`text-lg font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-${t}-600 transition-colors duration-300`}>
                      {f.name}
                    </h3>
                    
                    <div className="mb-6 h-8">
                       <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-white group-hover:shadow-sm group-hover:text-${t}-600 group-hover:border-${t}-100 transition-all duration-300`}>
                          {f.designation}
                       </span>
                    </div>

                    {/* Connect Action */}
                    <div className="flex gap-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                         <Mail size={16} />
                      </button>
                      <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                         <Share2 size={16} />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          RESEARCH AREAS
      ═══════════════════════════════════════════ */}
      {researchAreas.length > 0 && (
      <section className="py-24 relative overflow-hidden" style={{ background: currentTheme.heroGradient }}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
          <div className={`absolute top-[-20%] left-[50%] w-[500px] h-[500px] rounded-full bg-${t}-500/20 blur-[100px]`} />
          <div className={`absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-${s}-500/15 blur-[80px]`} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className={`text-${t}-400 font-bold text-xs tracking-[0.2em] uppercase block mb-3`}>Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Research & Focus Areas</h2>
            <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm">Cutting-edge domains where our faculty and students drive innovation.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {researchAreas.map((area, i) => (
              <div key={i} className="group cursor-default">
                <div className={`relative rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 h-full flex flex-col items-center justify-center text-center overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]`} style={{ background: 'rgba(255,255,255,0.03)' }}>
                  {/* Hover gradient fill */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${area.color} p-[2px] group-hover:shadow-lg group-hover:shadow-${t}-500/20 transition-all duration-300`}>
                      <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <area.icon size={24} className={`text-${t}-300 group-hover:text-white transition-colors duration-300`} strokeWidth={1.8} />
                      </div>
                    </div>
                    <h3 className="font-bold text-sm text-slate-300 group-hover:text-white transition-colors duration-300">{area.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ═══════════════════════════════════════════
          ACADEMIC PROGRAMS
      ═══════════════════════════════════════════ */}
      {programs.length > 0 && (
      <section id="programs" className="py-24 bg-white relative overflow-hidden">
        <div className={`absolute top-0 left-0 w-[500px] h-[500px] bg-${t}-50/40 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none`} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className={`text-${t}-600 font-bold text-xs tracking-[0.2em] uppercase block mb-3`}>Academics</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Our Programs</h2>
              <p className="text-slate-500 mt-2 text-sm">Comprehensive courses designed for the digital age.</p>
            </div>
            <div className={`flex p-1.5 rounded-2xl bg-gradient-to-r from-${t}-50 to-${s}-50 border border-${t}-100`}>
              {programs.map((prog, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProgram(i)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
                    activeProgram === i
                      ? `bg-${t}-600 text-white shadow-lg shadow-${t}-200`
                      : `text-slate-500 hover:text-${t}-600`
                  }`}
                >
                  {prog.level}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {programs[activeProgram].courses.map((course, i) => (
              <div key={i} className={`group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-${t}-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}>
                {/* Decorative gradient on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${t}-50/60 via-${s}-50/30 to-transparent rounded-3xl`} />
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${t}-100/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-${t}-500 to-${s}-600 text-white shadow-lg shadow-${t}-200/50`}>
                      <GraduationCap size={24} />
                    </div>
                    <Link to="/admission-notification" className={`w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-${t}-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${t}-200 group-hover:scale-110`}>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <h3 className={`text-lg font-bold text-slate-900 mb-4 group-hover:text-${t}-700 transition-colors`}>{course.name}</h3>
                  <div className="flex gap-3 text-xs font-bold pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100"><Clock size={12} /> {course.duration}</span>
                    <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-${t}-50 text-${t}-600 border border-${t}-100`}><Users size={12} /> {course.seats} Seats</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ═══════════════════════════════════════════
          LABORATORIES
      ═══════════════════════════════════════════ */}
      {labs.length > 0 && (
      <section className="py-20 relative overflow-hidden" style={{ background: currentTheme.heroGradient }}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '28px 28px'
          }} />
          <div className={`absolute top-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-${t}-500/10 blur-[100px]`} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className={`text-${t}-400 font-bold text-xs tracking-[0.2em] uppercase block mb-3`}>Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">World-Class Laboratories</h2>
            <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm">Equipped with the latest hardware and software for advanced research and learning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {labs.map((lab, i) => (
              <div key={i} className={`group rounded-2xl p-6 border border-white/[0.06] hover:border-${t}-500/20 transition-all duration-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]`}
                style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center border border-${t}-500/20 bg-${t}-500/10 group-hover:bg-${t}-500/20 group-hover:scale-105 transition-all duration-300`}>
                  <lab.icon size={18} className={`text-${t}-400`} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{lab.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{lab.description}</p>
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold text-${t}-300 bg-${t}-500/10 px-3 py-1.5 rounded-lg border border-${t}-500/15 tracking-wide`}>
                  <Monitor size={10} />
                  {lab.specs}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ═══════════════════════════════════════════
          INNOVATION & ACHIEVEMENTS
      ═══════════════════════════════════════════ */}
      {(achievements || projects) && (
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-${t}-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none`} />
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-${s}-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none`} />

        <div className="container mx-auto px-4 relative z-10">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className={`text-${t}-600 font-bold text-xs tracking-[0.2em] uppercase block mb-3 pl-1`}>Student Excellence</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Innovation <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${t}-600 to-${s}-600`}>& Achievements</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed md:text-right">
              Celebrating groundbreaking victories and transformative projects built by our students.
            </p>
          </div>

          {/* 1. ACHIEVEMENTS */}
          {achievements && achievements.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {achievements.map((item, i) => (
              item.type === 'hackathon' ? (
                // Hackathon Card
                <div key={i} className="relative group rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.4)] transition-all duration-500 hover:-translate-y-2">
                   {/* Background Pattern */}
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/prism.png')] opacity-20 mix-blend-overlay"></div>
                   <div className="absolute -right-10 -bottom-10 text-white opacity-10 rotate-12 transform group-hover:scale-110 transition-transform duration-700">
                      <Trophy size={300} strokeWidth={1} />
                   </div>
                   
                   <div className="relative p-10 md:p-12 text-white h-full flex flex-col justify-between">
                      <div>
                         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest mb-6">
                            <Star size={12} fill="currentColor" /> {item.badge}
                         </div>
                         <h3 className="text-3xl md:text-5xl font-black leading-[1.1] mb-4">
                            {item.title}
                         </h3>
                         <p className="text-amber-100 font-medium text-lg max-w-md">
                            {item.description}
                         </p>
                      </div>
                      
                      <div className="mt-10 flex items-center gap-4">
                        {item.tags && (
                         <div className="text-sm font-bold text-white/90">
                            {item.tags.join(' • ')} <br/> <span className="opacity-70 font-normal">{item.subtitle}</span>
                         </div>
                        )}
                      </div>
                   </div>
                </div>
              ) : (
                // Competition/Award Card
                <div key={i} className="relative group rounded-[2.5rem] overflow-hidden bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 hover:border-rose-200 hover:shadow-rose-100/50 transition-all duration-500">
                   {/* Decorative Gradient Blob */}
                   <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-rose-100/50 to-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-rose-200/50 transition-colors duration-500"></div>
                   
                   <div className="relative p-10 md:p-12 h-full flex flex-col justify-between">
                      <div>
                         <div className="flex justify-between items-start mb-8">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white shadow-xl shadow-rose-500/20 group-hover:scale-110 transition-transform duration-500">
                               <Target size={40} />
                            </div>
                            <span className="px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider border border-rose-100">
                               {item.badge}
                            </span>
                         </div>
                         
                         <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight group-hover:text-rose-600 transition-colors">
                            {item.title}
                         </h3>
                         <p className="text-slate-500 text-lg leading-relaxed mb-6">
                            {item.description}
                         </p>
                      </div>

                      <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                         <div className="text-sm">
                            <div className="font-bold text-slate-800">{item.subtitle}</div>
                            {item.tags && <div className="text-slate-400">{item.tags.join(', ')}</div>}
                         </div>
                         <div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                            <ArrowRight size={20} />
                         </div>
                      </div>
                   </div>
                </div>
              )
            ))}
          </div>
          )}

          {/* 2. FEATURED PROJECTS Grid */}
          {projects && projects.length > 0 && (
          <div>
             <div className="flex items-center gap-4 mb-10">
                <span className="text-slate-900 font-extrabold text-2xl tracking-tight">Major Projects</span>
                <div className="h-px bg-slate-200 flex-grow" />
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                {projects.map((proj, i) => (
                  <div key={i} className="group relative rounded-3xl p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl bg-slate-900/5" style={{ background: i % 2 === 0 ? '#0f172a' : undefined }}>
                     {!((i % 2 === 0)) && <div className="absolute inset-0 bg-white" />} 
                     
                     {/* Background style based on index/color is hard to genericize perfectly without inline styles from data, but we can do a best effort default */}
                     
                     {/* If it's the first project (Chaitanya AI style - Dark) */}
                     {i === 0 && (
                       <>
                         <div className="absolute inset-0 bg-[#0f172a]" />
                         <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50"></div>
                         <div className="absolute -right-6 -top-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-colors"></div>
                       </>
                     )}

                     {/* Second project (Arogyam style - Green) */}
                     {i === 1 && (
                        <>
                           <div className="absolute inset-0 opacity-100" style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)' }}></div>
                           <div className="absolute -right-8 -top-8 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-colors duration-500"></div>
                        </>
                     )}

                     {/* Third project (Cosmos style - Blue) */}
                     {i === 2 && (
                        <>
                           <div className="absolute inset-0 opacity-100" style={{ background: 'linear-gradient(135deg, #0c1631 0%, #1e3a5f 50%, #1a365d 100%)' }}></div>
                           <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                        </>
                     )}
                     
                     
                     <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                             i === 1 ? 'bg-white/80 backdrop-blur-sm text-emerald-600 border-emerald-200 shadow-sm' : 'bg-white/10 text-white border-white/20'
                           }`}>
                              <proj.icon size={28} />
                           </div>
                           <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                             i === 1 ? 'bg-white/70 backdrop-blur-sm text-emerald-700 border-emerald-200' : 'bg-white/10 text-white/80 border-white/20'
                           }`}>
                              {proj.category}
                           </span>
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-3 ${i === 1 ? 'text-emerald-900 center' : 'text-white'}`}>{proj.title}</h3>
                        <p className={`text-sm leading-relaxed mb-6 min-h-[60px] ${i === 1 ? 'text-emerald-800/70' : 'text-slate-400'}`}>
                           {proj.description}
                        </p>
                        
                        <div className="flex gap-2 flex-wrap">
                           {proj.tags.map((tag, idx) => (
                             <span key={idx} className={`px-2 py-1 rounded-md text-[10px] border font-mono ${
                               i === 1 ? 'bg-white/60 backdrop-blur-sm text-emerald-700 border-emerald-200/50' : 'bg-white/5 text-slate-400 border-white/10'
                             }`}>{tag}</span>
                           ))}
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
          )}

        </div>
      </section>
      )}

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className={`absolute bottom-0 right-0 w-[400px] h-[400px] bg-${t}-50/50 rounded-full blur-[80px] translate-y-1/3 translate-x-1/4 pointer-events-none`} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
            {/* Left Side - Header */}
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <span className={`text-${t}-600 font-bold text-xs tracking-[0.2em] uppercase block mb-3`}>FAQ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Frequently Asked<br/><span className={`text-transparent bg-clip-text bg-gradient-to-r from-${t}-600 to-${s}-600`}>Questions</span></h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">Everything you need to know about the Department of {name}.</p>
              <div className="hidden lg:block p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-${t}-100 flex items-center justify-center text-${t}-600`}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Still have questions?</div>
                    <div className="text-sm font-bold text-slate-800">Contact our department</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Accordion */}
            <div className="lg:col-span-3 space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeFaqIndex === i
                    ? `border-${t}-200 bg-white shadow-lg shadow-${t}-100/50`
                    : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'
                }`}>
                  <button
                    onClick={() => setActiveFaqIndex(activeFaqIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left gap-4"
                  >
                    <span className={`font-bold text-sm transition-colors leading-snug ${
                      activeFaqIndex === i ? `text-${t}-700` : 'text-slate-700'
                    }`}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeFaqIndex === i ? `bg-${t}-600 text-white rotate-180 shadow-md shadow-${t}-200` : 'bg-slate-100 text-slate-400'
                    }`}>
                      <ChevronDown size={14} />
                    </div>
                  </button>
                  <div className={`grid transition-all duration-300 ${activeFaqIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT CTA
      ═══════════════════════════════════════════ */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-center" style={{ background: currentTheme.heroGradient }}>
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }} />
              <div className={`absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full animate-pulse bg-${t}-500/20 blur-[100px]`} />
              <div className={`absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-${s}-500/15 blur-[80px]`} />
              <div className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-${t}-500/6 blur-[80px]`} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 mb-8 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-slate-300 text-xs font-bold tracking-[0.15em] uppercase">Admissions Open 2025-26</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
                Ready to Shape<br/>the <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, #818cf8, #fff, #a78bfa)` }}>Future</span>?
              </h2>
              <p className="text-slate-400 mb-10 text-lg max-w-lg mx-auto font-light">
                Join the Department of {name} and become part of a legacy of innovation and excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/admission-notification" className={`inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] shadow-lg shadow-${t}-500/25 bg-gradient-to-br from-${t}-500 to-${s}-500`}>
                  <GraduationCap size={18} />
                  Apply Now
                </Link>
                <div className="flex items-center gap-6 text-slate-400 text-sm">
                  <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Phone size={14} /> Support</span>
                  <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Mail size={14} /> Inquiry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DepartmentPage;

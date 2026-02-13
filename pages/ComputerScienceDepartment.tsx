import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code, Users, Award, BookOpen, Briefcase, GraduationCap, Zap, Globe,
  Monitor, Cpu, Database, Shield, Wifi, ArrowRight, ChevronDown,
  Mail, Phone, MapPin, Star, Target, Lightbulb, Binary, Braces, Terminal,
  Sparkles, Clock, Trophy, Brain, Heart, Share2
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const programs = [
  {
    level: 'Undergraduate',
    courses: [
      { name: 'B.Sc. Computer Science', duration: '3 Years', seats: 60 },
      { name: 'DCA (Diploma in Computer Applications)', duration: '1 Year', seats: 60 },
    ]
  },
  {
    level: 'Postgraduate',
    courses: [
      { name: 'M.Sc. Computer Science', duration: '2 Years', seats: 30 },
      { name: 'PGDCA (Post Graduate Diploma in Computer Applications)', duration: '1 Year', seats: 30 },
    ]
  },
  {
    level: 'Doctoral',
    courses: [
      { name: 'Ph.D. in Computer Science', duration: 'Full-time / Part-time', seats: 10 },
    ]
  }
];

const faculty = [
  { name: 'Dr. Rachana Dubey', designation: 'Assistant Professor', color: 'from-violet-600 to-purple-600' },
  { name: 'Dr. Manish Taram', designation: 'Assistant Professor', color: 'from-blue-600 to-indigo-600' },
  { name: 'Dr. Balendra Garg', designation: 'Visiting Faculty', color: 'from-cyan-600 to-blue-600' },
  { name: 'Mrs. Monika Vishwakarma', designation: 'Visiting Faculty', color: 'from-emerald-600 to-teal-600' },
  { name: 'Mr. Pawan Jaiswal', designation: 'Teaching Assistant', color: 'from-amber-600 to-orange-600' },
  { name: 'Mr. Abhishek Pathak', designation: 'Teaching Assistant', color: 'from-rose-600 to-pink-600' },
  { name: 'Mrs. Neelam Kurariya', designation: 'Teaching Assistant', color: 'from-indigo-600 to-violet-600' },
  { name: 'Mrs. Ashu Kiran Mishra', designation: 'Teaching Assistant', color: 'from-teal-600 to-cyan-600' },
];

const labs = [
  { name: 'Advanced Computing Lab', icon: Cpu, description: 'High-performance workstations for computational research and parallel processing.', specs: '40 Workstations' },
  { name: 'AI & Machine Learning Lab', icon: Zap, description: 'GPU-powered infrastructure for deep learning and neural network training.', specs: 'NVIDIA GPU Cluster' },
  { name: 'Cybersecurity Lab', icon: Shield, description: 'Cisco-certified environment for penetration testing and security analysis.', specs: 'Cisco Infrastructure' },
  { name: 'IoT & Embedded Systems Lab', icon: Wifi, description: 'Arduino, Raspberry Pi, and edge computing platforms for IoT development.', specs: '50+ IoT Kits' },
  { name: 'Software Engineering Lab', icon: Monitor, description: 'Modern development environment with CI/CD pipelines and DevOps tooling.', specs: 'Cloud-Connected' },
  { name: 'Data Analytics Lab', icon: Database, description: 'Big data ecosystem with Hadoop, Spark, and visualization platforms.', specs: 'Big Data Stack' },
];



const researchAreas = [
  { name: 'Artificial Intelligence', icon: Lightbulb, color: 'from-violet-500 to-purple-600' },
  { name: 'Machine Learning', icon: Binary, color: 'from-blue-500 to-cyan-500' },
  { name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-rose-600' },
  { name: 'Cloud Computing', icon: Globe, color: 'from-sky-500 to-blue-600' },
  { name: 'Data Science', icon: Database, color: 'from-emerald-500 to-teal-600' },
  { name: 'IoT & Embedded', icon: Cpu, color: 'from-amber-500 to-orange-600' },
  { name: 'Software Engg.', icon: Braces, color: 'from-pink-500 to-rose-500' },
  { name: 'Web Technologies', icon: Terminal, color: 'from-indigo-500 to-violet-600' },
];

const highlights = [
  'NEP 2020 Aligned Curriculum',
  'Advanced Research Centers',
  'IEEE & ACM Student Chapters',
  'Regular Tech Symposiums',
  'Alumni in Global Tech Giants',
  'Industry-Ready Training',
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const ComputerScienceDepartment: React.FC = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [activeProgram, setActiveProgram] = useState(0);

  const faqs = [
    { q: 'What are the admission requirements?', a: 'Students must have passed 10+2 with Mathematics and a minimum of 50% marks. Admission is through university entrance examination.' },
    { q: 'Are there scholarship opportunities?', a: 'Various scholarships are available including merit-based, SC/ST/OBC, and university grants. Contact the department office for details.' },
    { q: 'What programming languages are taught?', a: 'Students learn C, C++, Java, Python, JavaScript, R, and more. Courses are updated regularly to match industry demands.' },
    { q: 'Is there a hostel facility?', a: 'Yes, the university provides well-furnished hostel facilities for boys and girls with Wi-Fi, mess, and recreational areas.' },
  ];

  const stats = [
    { value: '500+', label: 'Students Enrolled', icon: Users },
    { value: '15+', label: 'Expert Faculty', icon: GraduationCap },
    { value: '50+', label: 'Research Papers', icon: BookOpen },
    { value: '6', label: 'Advanced Labs', icon: Monitor },
    { value: '10+', label: 'Industry Partners', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ═══════════════════════════════════════════
          HERO RIBBON — compact, cinematic, wow
      ═══════════════════════════════════════════ */}
      <section className="relative pt-14 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e1b4b 100%)' }}>
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

        {/* Decorative code watermark */}
        <div className="absolute top-8 right-8 text-white/[0.03] font-mono text-[120px] leading-none font-black select-none hidden lg:block">
          {'<CS/>'}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-5 border border-indigo-400/20" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.08))' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-indigo-200 text-[11px] font-bold tracking-[0.2em] uppercase">Center of Excellence</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] font-extrabold text-white mb-6 leading-tight tracking-tight">
              Department of <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #06b6d4, #a78bfa)' }}>Computer Science</span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 mb-0 max-w-2xl mx-auto leading-relaxed">
              Pioneering research, innovation, and academic excellence — shaping the technologists of tomorrow.
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
              {stats.map((stat, i) => (
                <div key={i} className={`relative p-5 text-center group hover:bg-gradient-to-b hover:from-indigo-50/50 hover:to-transparent transition-all duration-300 ${i < stats.length - 1 ? 'border-r border-slate-100' : ''}`}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <stat.icon className="mx-auto mb-1.5 text-indigo-500 opacity-70" size={20} strokeWidth={1.8} />
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
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}>
                  <Code size={18} className="text-white" />
                </div>
                <span className="text-indigo-600 font-bold text-xs tracking-[0.2em] uppercase">About the Department</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                Where Innovation Meets{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>Excellence</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-[15px] leading-[1.8]">
                <p>
                  The Department of Computer Science is a vibrant ecosystem where theoretical foundations meet practical application.
                  Recognized as a <strong className="text-slate-800 font-semibold">Center of Excellence</strong>, we bridge academia
                  and industry standards through rigorous research and innovation.
                </p>
                <p>
                  Our curriculum, designed in alignment with <strong className="text-slate-800 font-semibold">NEP 2020</strong>,
                  empowers students to become ethical leaders in technology — from software engineering to artificial intelligence,
                  cybersecurity to cloud computing.
                </p>
              </div>

              {/* Mission / Vision cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Target, title: 'Our Mission', desc: 'Nurturing tech leaders who drive innovation and social impact.' },
                  { icon: Lightbulb, title: 'Our Vision', desc: 'Globally recognized for research excellence and industry readiness.' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-indigo-50/40 hover:border-indigo-100 transition-all duration-300 group">
                    <div className="w-9 h-9 rounded-lg mb-3 flex items-center justify-center bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-indigo-200 transition-all">
                      <item.icon size={16} className="text-indigo-600" />
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
                <div className="absolute inset-0 rounded-3xl rotate-2 group-hover:rotate-1 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' , opacity: 0.08 }} />
                <div className="relative rounded-3xl p-8 overflow-hidden shadow-xl" style={{ background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 100%)' }}>
                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)' }} />

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
                            <div className="absolute inset-0 rounded-full bg-indigo-500/20 group-hover/item:bg-indigo-500/30 transition-colors" />
                            <div className="w-2 h-2 rounded-full bg-indigo-400" />
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
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
               
               {/* HOD Profile Card (Left) */}
               <div className="lg:col-span-5">
                  <div className="relative group">
                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-10" />
                     <div className="relative bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                        
                        {/* Gradient Header Overlay */}
                        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-50" />
                        
                        <div className="relative z-10">
                           <div className="flex flex-col items-center text-center">
                              {/* Avatar */}
                              <div className="w-32 h-32 rounded-full p-1.5 bg-white shadow-xl mb-5 relative group-hover:scale-105 transition-transform duration-500">
                                 <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center overflow-hidden border-4 border-white">
                                    <span className="text-3xl font-bold text-indigo-400">PK</span>
                                 </div>
                                 <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full" title="Active Head" />
                              </div>

                              <h3 className="text-2xl font-bold text-slate-900 mb-1">Prof. Pramod Kumar Pandey</h3>
                              <p className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-6">Professor & Head</p>
                              
                              <div className="flex gap-2 mb-8">
                                 <span className="px-3 py-1 bg-slate-100/80 rounded-full text-xs font-semibold text-slate-600 border border-slate-200">Ph.D. Astrophysics</span>
                                 <span className="px-3 py-1 bg-indigo-50 rounded-full text-xs font-semibold text-indigo-600 border border-indigo-100">35 Years Exp.</span>
                              </div>

                              {/* Stats */}
                              <div className="grid grid-cols-2 gap-4 w-full mb-8">
                                 <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 text-center">
                                    <div className="text-2xl font-bold text-slate-800">150+</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Publications</div>
                                 </div>
                                 <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 text-center">
                                    <div className="text-2xl font-bold text-slate-800">35<span className="text-sm">+</span></div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Years Teaching</div>
                                 </div>
                              </div>

                              {/* Contact */}
                              <div className="w-full space-y-3 pt-6 border-t border-slate-100">
                                 <div className="flex items-center gap-3 text-slate-600 text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                       <Mail size={14} />
                                    </div>
                                    <span className="font-medium truncate">pramodpandeyphys@gmail.com</span>
                                 </div>
                                 <div className="flex items-center gap-3 text-slate-600 text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                       <Phone size={14} />
                                    </div>
                                    <span className="font-medium">9424774332</span>
                                 </div>
                                 <div className="flex items-center gap-3 text-slate-600 text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                       <MapPin size={14} />
                                    </div>
                                    <span className="font-medium">Dept of Computer Science</span>
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
                     <div className="h-0.5 w-10 bg-indigo-600"></div>
                     <span className="text-indigo-600 font-bold text-xs tracking-[0.2em] uppercase">Leadership Message</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                     Message from the <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Head of Department</span>
                  </h2>

                  <div className="relative indent-8">
                     <span className="absolute -top-4 -left-2 text-6xl text-indigo-200 font-serif opacity-40">"</span>
                     <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light text-justify">
                        <p>
                           Welcome to the Department of Computer Science at Pandit Shambhunath Shukla University, Shahdol. Our department is committed to academic excellence, cutting-edge research, and innovation in the field of computer science.
                        </p>
                        <p>
                           We strive to provide a dynamic learning environment that nurtures critical thinking, problem-solving skills, and technological advancements. With a dedicated team of faculty members and researchers, we aim to equip students with the knowledge and expertise needed to excel in both academia and industry.
                        </p>
                        <p>
                           I invite students and scholars to explore the vast opportunities in computer science and contribute to the ever-evolving digital world.
                        </p>
                     </div>
                  </div>

                  <div className="mt-10 flex items-center gap-4">
                     <div className="flex flex-col">
                        <span className="font-serif italic text-2xl text-slate-900">Dr. Pramod Kumar Pandey</span>
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-1">Professor & Head</span>
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
      <section className="py-20 bg-slate-50/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-indigo-600 font-bold text-xs tracking-[0.2em] uppercase block mb-3">Expert Mentors</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Our Faculty</h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto text-sm">Dedicated researchers and educators shaping the next generation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {faculty.map((f, i) => (
              <div key={i} className="group relative bg-white rounded-[2rem] border border-slate-100 p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.08)] hover:border-indigo-100">
                
                {/* Decorative Background Elements */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${f.color} opacity-[0.08] blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-15 transition-opacity duration-500`} />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  
                  {/* Avatar Container */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${f.color} blur-2xl opacity-0 group-hover:opacity-20 scale-150 rounded-full transition-all duration-500`} />
                    <div className={`w-24 h-24 relative rounded-2xl bg-white p-1.5 shadow-xl shadow-slate-200/50 group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500 ring-1 ring-slate-100 group-hover:ring-indigo-100`}>
                       <div className={`w-full h-full rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center overflow-hidden`}>
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
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                    {f.name}
                  </h3>
                  
                  <div className="mb-6 h-8">
                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-white group-hover:shadow-sm group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all duration-300`}>
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

      {/* ═══════════════════════════════════════════
          RESEARCH AREAS
      ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e1b4b 100%)' }}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
          <div className="absolute top-[-20%] left-[50%] w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />
          <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold text-xs tracking-[0.2em] uppercase block mb-3">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Research & Focus Areas</h2>
            <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm">Cutting-edge domains where our faculty and students drive innovation.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {researchAreas.map((area, i) => (
              <div key={i} className="group cursor-default">
                <div className="relative rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 h-full flex flex-col items-center justify-center text-center overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  {/* Hover gradient fill */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${area.color} p-[2px] group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300`}>
                      <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <area.icon size={24} className="text-indigo-300 group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
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

      {/* ═══════════════════════════════════════════
          ACADEMIC PROGRAMS
      ═══════════════════════════════════════════ */}
      <section id="programs" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-indigo-600 font-bold text-xs tracking-[0.2em] uppercase block mb-3">Academics</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Our Programs</h2>
              <p className="text-slate-500 mt-2 text-sm">Comprehensive courses designed for the digital age.</p>
            </div>
            <div className="flex p-1.5 rounded-2xl bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100">
              {programs.map((prog, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProgram(i)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
                    activeProgram === i
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                      : 'text-slate-500 hover:text-indigo-600'
                  }`}
                >
                  {prog.level}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {programs[activeProgram].courses.map((course, i) => (
              <div key={i} className="group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-indigo-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-50/60 via-violet-50/30 to-transparent rounded-3xl" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-200/50">
                      <GraduationCap size={24} />
                    </div>
                    <Link to="/admission-notification" className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-200 group-hover:scale-110">
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">{course.name}</h3>
                  <div className="flex gap-3 text-xs font-bold pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100"><Clock size={12} /> {course.duration}</span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100"><Users size={12} /> {course.seats} Seats</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          LABORATORIES — dark cinematic section
      ═══════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e1b4b 100%)' }}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '28px 28px'
          }} />
          <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="text-indigo-400 font-bold text-xs tracking-[0.2em] uppercase block mb-3">Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">World-Class Laboratories</h2>
            <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm">Equipped with the latest hardware and software for advanced research and learning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {labs.map((lab, i) => (
              <div key={i} className="group rounded-2xl p-6 border border-white/[0.06] hover:border-indigo-500/20 transition-all duration-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]"
                style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center border border-indigo-500/20 bg-indigo-500/10 group-hover:bg-indigo-500/20 group-hover:scale-105 transition-all duration-300">
                  <lab.icon size={18} className="text-indigo-400" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{lab.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{lab.description}</p>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/15 tracking-wide">
                  <Monitor size={10} />
                  {lab.specs}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INNOVATION & ACHIEVEMENTS
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-indigo-600 font-bold text-xs tracking-[0.2em] uppercase block mb-3 pl-1">Student Excellence</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">& Achievements</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed md:text-right">
              Celebrating groundbreaking victories and transformative projects built by our students.
            </p>
          </div>

          {/* 1. NATIONAL ACHIEVEMENTS (Hero Cards) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            
            {/* Achievement 1: Hackathon Winner */}
            <div className="relative group rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.4)] transition-all duration-500 hover:-translate-y-2">
               {/* Background Pattern */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/prism.png')] opacity-20 mix-blend-overlay"></div>
               <div className="absolute -right-10 -bottom-10 text-white opacity-10 rotate-12 transform group-hover:scale-110 transition-transform duration-700">
                  <Trophy size={300} strokeWidth={1} />
               </div>
               
               <div className="relative p-10 md:p-12 text-white h-full flex flex-col justify-between">
                  <div>
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest mb-6">
                        <Star size={12} fill="currentColor" /> National Winner
                     </div>
                     <h3 className="text-3xl md:text-5xl font-black leading-[1.1] mb-4">
                        India's Biggest <br /> Agentic AI Hackathon
                     </h3>
                     <p className="text-amber-100 font-medium text-lg max-w-md">
                        Outperforming 5,000+ teams with a revolutionary autonomous agent system.
                     </p>
                  </div>
                  
                  <div className="mt-10 flex items-center gap-4">
                     <div className="flex -space-x-3">
                        <div className="w-12 h-12 rounded-full border-4 border-amber-500 bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs">A</div>
                        <div className="w-12 h-12 rounded-full border-4 border-amber-500 bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs">B</div>
                        <div className="w-12 h-12 rounded-full border-4 border-amber-500 bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs">C</div>
                     </div>
                     <div className="text-sm font-bold text-white/90">
                        Team 'The Goldenbirds' <br/> <span className="opacity-70 font-normal">1st Place • ₹1 Lakh Prize</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Achievement 2: SIH Finalist */}
            <div className="relative group rounded-[2.5rem] overflow-hidden bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 hover:border-rose-200 hover:shadow-rose-100/50 transition-all duration-500">
               {/* Decorative Gradient Blob */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-rose-100/50 to-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-rose-200/50 transition-colors duration-500"></div>
               
               <div className="relative p-10 md:p-12 h-full flex flex-col justify-between">
                  <div>
                     <div className="flex justify-between items-start mb-8">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white shadow-xl shadow-rose-500/20 group-hover:scale-110 transition-transform duration-500">
                           <Target size={40} />
                        </div>
                        <span className="px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider border border-rose-100">
                           Grand Finalist
                        </span>
                     </div>
                     
                     <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight group-hover:text-rose-600 transition-colors">
                        Smart India Hackathon
                     </h3>
                     <p className="text-slate-500 text-lg leading-relaxed mb-6">
                        Selected for the Grand Finale of the world's biggest open innovation model, solving complex real-world problems.
                     </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                     <div className="text-sm">
                        <div className="font-bold text-slate-800">Software Edition</div>
                        <div className="text-slate-400">Ministry of Education</div>
                     </div>
                     <div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                        <ArrowRight size={20} />
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* 2. FEATURED PROJECTS Grid */}
          <div>
             <div className="flex items-center gap-4 mb-10">
                <span className="text-slate-900 font-extrabold text-2xl tracking-tight">Major Projects</span>
                <div className="h-px bg-slate-200 flex-grow" />
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                
                {/* Project 1: Chaitanya AI */}
                <div className="group relative bg-[#0f172a] rounded-3xl p-8 overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-2xl shadow-indigo-900/20">
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50"></div>
                   <div className="absolute -right-6 -top-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-colors"></div>
                   
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                         <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                            <Brain size={28} />
                         </div>
                         <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-wide border border-indigo-500/30">
                            Generative AI
                         </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">Chaitanya AI</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[60px]">
                         Building India's Sovereign LLM. A foundational AI model designed specifically for Indian languages and cultural context.
                      </p>
                      
                      <div className="flex gap-2">
                         {['Python', 'PyTorch', 'Transformers'].map((tag, i) => (
                           <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-slate-400 text-[10px] border border-white/10 font-mono">{tag}</span>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Project 2: Arogyam App */}
                <div className="group relative rounded-3xl p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl" style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)' }}>
                   {/* Decorative heartbeat line */}
                   <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10 pointer-events-none">
                      <svg viewBox="0 0 400 60" fill="none" className="w-full h-full">
                         <path d="M0 30 L80 30 L100 10 L120 50 L140 20 L160 40 L180 30 L400 30" stroke="#059669" strokeWidth="2" fill="none" />
                      </svg>
                   </div>
                   <div className="absolute -right-8 -top-8 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-colors duration-500"></div>
                   
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                         <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-emerald-600 border border-emerald-200 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <Heart size={28} />
                         </div>
                         <span className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm text-emerald-700 text-[10px] font-bold uppercase tracking-wide border border-emerald-200">
                            Health Tech
                         </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-emerald-900 mb-3">Arogyam App</h3>
                      <p className="text-emerald-800/70 text-sm leading-relaxed mb-6 min-h-[60px]">
                         A comprehensive health-tech solution connecting rural patients with specialized medical care and telemedicine support.
                      </p>
                      
                      <div className="flex gap-2 flex-wrap">
                         {['Flutter', 'Firebase', 'WebRTC'].map((tag, i) => (
                           <span key={i} className="px-2.5 py-1 rounded-lg bg-white/60 backdrop-blur-sm text-emerald-700 text-[10px] border border-emerald-200/50 font-mono font-bold">{tag}</span>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Project 3: Cosmos */}
                <div className="group relative rounded-3xl p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl" style={{ background: 'linear-gradient(135deg, #0c1631 0%, #1e3a5f 50%, #1a365d 100%)' }}>
                   {/* Decorative network nodes */}
                   <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                         <circle cx="40" cy="40" r="3" fill="#60a5fa" />
                         <circle cx="160" cy="50" r="4" fill="#60a5fa" />
                         <circle cx="100" cy="100" r="5" fill="#93c5fd" />
                         <circle cx="60" cy="160" r="3" fill="#60a5fa" />
                         <circle cx="150" cy="150" r="4" fill="#60a5fa" />
                         <line x1="40" y1="40" x2="100" y2="100" stroke="#60a5fa" strokeWidth="0.5" />
                         <line x1="160" y1="50" x2="100" y2="100" stroke="#60a5fa" strokeWidth="0.5" />
                         <line x1="60" y1="160" x2="100" y2="100" stroke="#60a5fa" strokeWidth="0.5" />
                         <line x1="150" y1="150" x2="100" y2="100" stroke="#60a5fa" strokeWidth="0.5" />
                         <line x1="40" y1="40" x2="160" y2="50" stroke="#60a5fa" strokeWidth="0.3" />
                         <line x1="60" y1="160" x2="150" y2="150" stroke="#60a5fa" strokeWidth="0.3" />
                      </svg>
                   </div>
                   <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                   
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                         <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-300 border border-blue-500/30 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <Share2 size={28} />
                         </div>
                         <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wide border border-blue-500/30">
                            Social Network
                         </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Cosmos</h3>
                      <p className="text-blue-200/60 text-sm leading-relaxed mb-6 min-h-[60px]">
                         University's own social media platform to research, share knowledge, and collaborate on academic projects.
                      </p>
                      
                      <div className="flex gap-2 flex-wrap">
                         {['React', 'Node.js', 'GraphDB'].map((tag, i) => (
                           <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 text-blue-300 text-[10px] border border-white/10 font-mono font-bold">{tag}</span>
                         ))}
                      </div>
                   </div>
                </div>

             </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[80px] translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
            {/* Left Side - Header */}
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <span className="text-indigo-600 font-bold text-xs tracking-[0.2em] uppercase block mb-3">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Frequently Asked<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Questions</span></h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">Everything you need to know about the Department of Computer Science.</p>
              <div className="hidden lg:block p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
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
                    ? 'border-indigo-200 bg-white shadow-lg shadow-indigo-100/50'
                    : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'
                }`}>
                  <button
                    onClick={() => setActiveFaqIndex(activeFaqIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left gap-4"
                  >
                    <span className={`font-bold text-sm transition-colors leading-snug ${
                      activeFaqIndex === i ? 'text-indigo-700' : 'text-slate-700'
                    }`}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeFaqIndex === i ? 'bg-indigo-600 text-white rotate-180 shadow-md shadow-indigo-200' : 'bg-slate-100 text-slate-400'
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
          <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-center" style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e1b4b 100%)' }}>
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }} />
              <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full animate-pulse" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)' }} />
              <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }} />
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 50%)' }} />
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
                Ready to Shape<br/>the <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #06b6d4, #a78bfa)' }}>Future</span>?
              </h2>
              <p className="text-slate-400 mb-10 text-lg max-w-lg mx-auto font-light">
                Join the Department of Computer Science and become part of a legacy of innovation and excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/admission-notification" className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] shadow-lg shadow-indigo-500/25"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}>
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

export default ComputerScienceDepartment;

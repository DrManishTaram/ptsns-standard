
import {
  Code, Users, Award, BookOpen, Briefcase, GraduationCap, Zap, Globe,
  Monitor, Cpu, Database, Shield, Wifi, ArrowRight, ChevronDown,
  Mail, Phone, MapPin, Star, Target, Lightbulb, Binary, Braces, Terminal,
  Sparkles, Clock, Trophy, Brain, Heart, Share2, Leaf, Dna, Calculator, 
  TrendingUp, Landmark, Music, Scale
} from 'lucide-react';

export interface Course {
  name: string;
  duration: string;
  seats: number;
}

export interface Program {
  level: string;
  courses: Course[];
}

export interface Faculty {
  name: string;
  designation: string;
  color: string;
  specialization?: string;
}

export interface Lab {
  name: string;
  icon: any;
  description: string;
  specs: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  badge?: string;
  tags?: string[];
  link?: string;
  color?: string;
  type: 'hackathon' | 'competition' | 'award';
}

export interface ResearchArea {
  name: string;
  icon: any;
  color: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: any;
  color: string;
  link?: string;
}

export interface DepartmentData {
  id: string;
  name: string;
  badge?: string;
  heroImage?: string; // Optional custom hero background
  description: string;
  stats: { value: string; label: string; icon: any }[];
  about: {
    title: string;
    content: string[];
    mission: string;
    vision: string;
  };
  highlights: string[];
  hod: {
    name: string;
    designation: string;
    message: string[];
    image?: string;
    publications: string;
    experience: string;
    contact: { email: string; phone: string };
  };
  faculty: Faculty[];
  programs: Program[];
  labs: Lab[];
  researchAreas: ResearchArea[];
  faqs: { q: string; a: string }[];
  achievements?: Achievement[];
  projects?: Project[];
  theme: 'blue' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'purple' | 'cyan' | 'teal' | 'orange' | 'slate';
}

export const departments: Record<string, DepartmentData> = {
  'computer-science': {
    id: 'computer-science',
    theme: 'indigo',
    name: 'Computer Science',
    badge: 'Center of Excellence',
    description: 'Pioneering research, innovation, and academic excellence — shaping the technologists of tomorrow.',
    stats: [
      { value: '500+', label: 'Students Enrolled', icon: Users },
      { value: '15+', label: 'Expert Faculty', icon: GraduationCap },
      { value: '50+', label: 'Research Papers', icon: BookOpen },
      { value: '6', label: 'Advanced Labs', icon: Monitor },
      { value: '10+', label: 'Industry Partners', icon: Briefcase },
    ],
    about: {
      title: 'Where Innovation Meets Excellence',
      content: [
        'The Department of Computer Science is a vibrant ecosystem where theoretical foundations meet practical application. Recognized as a **Center of Excellence**, we bridge academia and industry standards through rigorous research and innovation.',
        'Our curriculum, designed in alignment with **NEP 2020**, empowers students to become ethical leaders in technology — from software engineering to artificial intelligence, cybersecurity to cloud computing.'
      ],
      mission: 'Nurturing tech leaders who drive innovation and social impact.',
      vision: 'Globally recognized for research excellence and industry readiness.'
    },
    highlights: [
      'NEP 2020 Aligned Curriculum', 'Advanced Research Centers', 'IEEE & ACM Student Chapters',
      'Regular Tech Symposiums', 'Alumni in Global Tech Giants', 'Industry-Ready Training'
    ],
    hod: {
      name: 'Prof. Pramod Kumar Pandey',
      designation: 'Professor & Head',
      message: [
        'Welcome to the Department of Computer Science at Pandit Shambhunath Shukla University, Shahdol. Our department is committed to academic excellence, cutting-edge research, and innovation in the field of computer science.',
        'We strive to provide a dynamic learning environment that nurtures critical thinking, problem-solving skills, and technological advancements. With a dedicated team of faculty members and researchers, we aim to equip students with the knowledge and expertise needed to excel in both academia and industry.',
        'I invite students and scholars to explore the vast opportunities in computer science and contribute to the ever-evolving digital world.'
      ],
      publications: '150+',
      experience: '35+',
      contact: { email: 'pramodpandeyphys@gmail.com', phone: '9424774332' }
    },
    faculty: [
      { name: 'Dr. Rachana Dubey', designation: 'Assistant Professor', color: 'from-violet-600 to-purple-600' },
      { name: 'Dr. Manish Taram', designation: 'Assistant Professor', color: 'from-blue-600 to-indigo-600' },
      { name: 'Dr. Balendra Garg', designation: 'Visiting Faculty', color: 'from-cyan-600 to-blue-600' },
      { name: 'Mrs. Monika Vishwakarma', designation: 'Visiting Faculty', color: 'from-emerald-600 to-teal-600' },
      { name: 'Mr. Pawan Jaiswal', designation: 'Teaching Assistant', color: 'from-amber-600 to-orange-600' },
      { name: 'Mr. Abhishek Pathak', designation: 'Teaching Assistant', color: 'from-rose-600 to-pink-600' },
      { name: 'Mrs. Neelam Kurariya', designation: 'Teaching Assistant', color: 'from-indigo-600 to-violet-600' },
      { name: 'Mrs. Ashu Kiran Mishra', designation: 'Teaching Assistant', color: 'from-teal-600 to-cyan-600' },
    ],
    programs: [
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
    ],
    labs: [
      { name: 'Advanced Computing Lab', icon: Cpu, description: 'High-performance workstations for computational research and parallel processing.', specs: '40 Workstations' },
      { name: 'AI & Machine Learning Lab', icon: Zap, description: 'GPU-powered infrastructure for deep learning and neural network training.', specs: 'NVIDIA GPU Cluster' },
      { name: 'Cybersecurity Lab', icon: Shield, description: 'Cisco-certified environment for penetration testing and security analysis.', specs: 'Cisco Infrastructure' },
      { name: 'IoT & Embedded Systems Lab', icon: Wifi, description: 'Arduino, Raspberry Pi, and edge computing platforms for IoT development.', specs: '50+ IoT Kits' },
      { name: 'Software Engineering Lab', icon: Monitor, description: 'Modern development environment with CI/CD pipelines and DevOps tooling.', specs: 'Cloud-Connected' },
      { name: 'Data Analytics Lab', icon: Database, description: 'Big data ecosystem with Hadoop, Spark, and visualization platforms.', specs: 'Big Data Stack' },
    ],
    researchAreas: [
      { name: 'Artificial Intelligence', icon: Lightbulb, color: 'from-violet-500 to-purple-600' },
      { name: 'Machine Learning', icon: Binary, color: 'from-blue-500 to-cyan-500' },
      { name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-rose-600' },
      { name: 'Cloud Computing', icon: Globe, color: 'from-sky-500 to-blue-600' },
      { name: 'Data Science', icon: Database, color: 'from-emerald-500 to-teal-600' },
      { name: 'IoT & Embedded', icon: Cpu, color: 'from-amber-500 to-orange-600' },
      { name: 'Software Engg.', icon: Braces, color: 'from-pink-500 to-rose-500' },
      { name: 'Web Technologies', icon: Terminal, color: 'from-indigo-500 to-violet-600' },
    ],
    faqs: [
      { q: 'What are the admission requirements?', a: 'Students must have passed 10+2 with Mathematics and a minimum of 50% marks. Admission is through university entrance examination.' },
      { q: 'Are there scholarship opportunities?', a: 'Various scholarships are available including merit-based, SC/ST/OBC, and university grants. Contact the department office for details.' },
      { q: 'What programming languages are taught?', a: 'Students learn C, C++, Java, Python, JavaScript, R, and more. Courses are updated regularly to match industry demands.' },
      { q: 'Is there a hostel facility?', a: 'Yes, the university provides well-furnished hostel facilities for boys and girls with Wi-Fi, mess, and recreational areas.' },
    ],
    achievements: [
      {
        id: 'agentic-ai',
        type: 'hackathon',
        title: "India's Biggest Agentic AI Hackathon",
        subtitle: "1st Place • ₹1 Lakh Prize",
        description: "Outperforming 5,000+ teams with a revolutionary autonomous agent system.",
        badge: "National Winner",
        tags: ["Team 'The Goldenbirds'"]
      },
      {
        id: 'sih',
        type: 'competition',
        title: "Smart India Hackathon",
        subtitle: "Grand Finalist",
        description: "Selected for the Grand Finale of the world's biggest open innovation model, solving complex real-world problems.",
        badge: "Grand Finalist",
        tags: ["Ministry of Education"]
      }
    ],
    projects: [
      {
        title: 'Chaitanya AI',
        category: 'Generative AI',
        description: "Building India's Sovereign LLM. A foundational AI model designed specifically for Indian languages and cultural context.",
        tags: ['Python', 'PyTorch', 'Transformers'],
        icon: Brain,
        color: 'from-indigo-500 to-violet-600'
      },
      {
        title: 'Arogyam App',
        category: 'Health Tech',
        description: 'A comprehensive health-tech solution connecting rural patients with specialized medical care and telemedicine support.',
        tags: ['Flutter', 'Firebase', 'WebRTC'],
        icon: Heart,
        color: 'from-emerald-500 to-teal-600'
      },
      {
        title: 'Cosmos',
        category: 'Social Network',
        description: "University's own social media platform to research, share knowledge, and collaborate on academic projects.",
        tags: ['React', 'Node.js', 'GraphDB'],
        icon: Share2,
        color: 'from-blue-500 to-cyan-600'
      }
    ]
  },
  
  // Generic Template for other departments
  'generic': {
    id: 'generic',
    theme: 'blue',
    name: 'Department Name',
    description: 'Fostering academic excellence and innovative research in our field.',
    stats: [
      { value: '200+', label: 'Students', icon: Users },
      { value: '10+', label: 'Faculty', icon: GraduationCap },
      { value: '20+', label: 'Publications', icon: BookOpen },
      { value: '4', label: 'Laboratories', icon: Monitor },
    ],
    about: {
      title: 'About the Department',
      content: [
        'Our department is dedicated to providing high-quality education and fostering a research-driven environment.',
        'We aim to prepare students for successful careers in academia, industry, and public service through a rigorous curriculum and practical training.'
      ],
      mission: 'To provide quality education and foster research.',
      vision: 'To be a center of excellence in our field.'
    },
    highlights: ['Qualified Faculty', 'Modern Infrastructure', 'Research Focus', 'Student Support'],
    hod: {
      name: 'Head of Department',
      designation: 'Professor & Head',
      message: [
        'Welcome to our department. We are committed to providing the best educational experience for our students.',
        'Our faculty members are dedicated to mentoring students and guiding them towards academic and professional success.'
      ],
      publications: '50+',
      experience: '20+',
      contact: { email: 'hod@university.ac.in', phone: 'Contact Office' }
    },
    faculty: [],
    programs: [],
    labs: [],
    researchAreas: [],
    faqs: [
      { q: 'What programs are offered?', a: 'We offer Undergraduate and Postgraduate programs. Please check the programs section for details.' },
      { q: 'How to apply?', a: 'Applications are accepted through the university admission portal.' }
    ]
  }
};

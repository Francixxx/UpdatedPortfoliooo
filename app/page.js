"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon, MapPin, Briefcase, Code2, Award, BookOpen, Users, MessageCircle, ChevronRight, Youtube, Facebook, Instagram, Terminal, Rocket, Zap, Coffee, Heart, ArrowUpRight, Download } from 'lucide-react';
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('work');
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust the duration of the loading screen here
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const bgPrimary = darkMode ? 'bg-slate-950' : 'bg-gray-50';
  const bgSecondary = darkMode ? 'bg-slate-900' : 'bg-white';
  const textPrimary = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = darkMode ? 'text-slate-400' : 'text-gray-600';
  const borderColor = darkMode ? 'border-slate-800' : 'border-gray-200';
  const accentColor = darkMode ? 'from-cyan-500 to-blue-600' : 'from-blue-600 to-purple-600';

  const projects = [
   
  {
    title: "PiyuCheckpoint",
    description: "A Web-Based Security Identification System using RFID technology for efficient personnel and vehicle access monitoring.",
    tech: ["JavaScript", "C++", "RFID", "Web Serial API"],
    year: "2025",
    color: "from-blue-500 to-indigo-500",
    image: "/piyucheckpoint.png"
  },
  {
    title: "Food O' Clock",
    description: "A responsive E-commerce website for ordering food online, featuring menu browsing, cart management, and checkout functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2024",
    color: "from-orange-500 to-red-500",
    image: "/foodOclock.jpg"
  },
  {
    title: "Inzpect Scoreboard",
    description: "A real-time digital scoreboard system for tracking and displaying live competition scores using React.",
    tech: ["React.js", "Node.js", "Express"],
    year: "2024",
    color: "from-purple-500 to-pink-500",
    image: "/scoreboard.jpg"
  },
  {
    title: "Inzpect Selfie In & Out Attendance App",
    description: "A mobile attendance system using selfie capture for time-in and time-out verification.",
    tech: ["React Native", "Expo", "Node.js", "MySQL"],
    year: "2024",
    color: "from-green-500 to-emerald-500"
    // image: "/selfie-app.png" // Add a valid image path here
  },
  {
    title: "PatrolNet",
    description: "A Web and Mobile-based Patrol Monitoring System for security management, featuring real-time reporting and tracking.",
    tech: ["React.js", "React Native", "Node.js", "Express", "MySQL"],
    year: "2025",
    color: "from-cyan-500 to-blue-500",
    image: "/PatrolNet.png"
  }
];

  const experience = [
    { role: "Software Developer", company: "Polaris", period: "July 2025 - Present", type: "Contract" },
    { role: "Software Developer", company: "Inzpect Technology", period: "May 2025 -  July 2025", type: "Intern" }
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: 80, color: "bg-yellow-500" },
    { name: "React & Next.js", level: 90, color: "bg-blue-500" },
    { name: "Python & AI/ML", level: 60, color: "bg-green-500" },
    { name: "PHP & Laravel", level: 80, color: "bg-purple-500" },
    { name: "C++ & IOT", level: 60, color: "bg-purple-500" },
    { name: "Cloud & DevOps", level: 30, color: "bg-cyan-500" }
  ];

  return (
    <div className={`min-h-screen ${bgPrimary} transition-colors duration-300`}>
      {/* Loading Screen */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center ${bgPrimary} transition-opacity duration-500 ease-in-out ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-24 h-24">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${accentColor} animate-spin`}></div>
            <Image
              src="/Profile.png"
              alt="Francis's profile picture"
              width={80}
              height={80}
              className="rounded-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className={`text-2xl font-bold ${textPrimary} mt-4`}>Francis Espiritu</div>
          <p className={textSecondary}>Crafting digital experiences...</p>
        </div>
      </div>

      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <nav className={`${bgSecondary} ${scrolled ? 'shadow-lg shadow-black/5' : ''} rounded-full px-6 py-3 backdrop-blur-xl bg-opacity-80 border ${borderColor}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/Profile.png"
                  alt="Francis's profile picture"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <span className={`font-bold text-lg ${textPrimary} hidden sm:block`}>Francis</span>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="#work" className={`${textSecondary} hover:${textPrimary} transition-colors hidden md:block`}>Work</a>
                <a href="#about" className={`${textSecondary} hover:${textPrimary} transition-colors hidden md:block`}>About</a>
                <a href="#contact" className={`${textSecondary} hover:${textPrimary} transition-colors hidden md:block`}>Contact</a>
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full ${bgPrimary} ${borderColor} border transition-all hover:scale-110`}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
           
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className={`px-4 py-1.5 rounded-full ${bgSecondary} border ${borderColor} flex items-center gap-2`}>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`text-sm ${textSecondary}`}>Available for commissions</span>
                  </div>
                </div>
                
                <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${textPrimary} leading-tight`}>
                  Software Developer
                  <span className={`block bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>
                    & Freelancer
                  </span>
                </h1>
                
                <p className={`text-xl ${textSecondary} max-w-xl leading-relaxed`}>
                  Fresh graduate Software Developer crafting modern web and mobile experiences. I focus on full-stack development and love collaborating on commissions, capstone projects, and community-driven ideas.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className={`group px-6 py-3 bg-gradient-to-r ${accentColor} text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2`}>
                  Let&apos;s Talk
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="/Espiritu-Francis_resume.pdf" download className={`group px-6 py-3 ${bgSecondary} border ${borderColor} rounded-xl font-medium hover:scale-105 transition-all ${textPrimary} flex items-center gap-2`}>
                  Download CV
                  <Download size={18} className="group-hover:animate-bounce" />
                </a>
              </div>

              <div className="flex gap-3">
                <a href="https://github.com/Francixxx" className={`w-10 h-10 ${bgSecondary} border ${borderColor} rounded-lg flex items-center justify-center hover:scale-110 transition-transform ${textPrimary}`}>
                  <Github size={18} />
                </a>
                <a href="#" className={`w-10 h-10 ${bgSecondary} border ${borderColor} rounded-lg flex items-center justify-center hover:scale-110 transition-transform ${textPrimary}`}>
                  <Linkedin size={18} />
                </a>
                <a href="#" className={`w-10 h-10 ${bgSecondary} border ${borderColor} rounded-lg flex items-center justify-center hover:scale-110 transition-transform ${textPrimary}`}>
                  <Youtube size={18} />
                </a>
                <a href="#" className={`w-10 h-10 ${bgSecondary} border ${borderColor} rounded-lg flex items-center justify-center hover:scale-110 transition-transform ${textPrimary}`}>
                  <Mail size={18} />
                </a>
              </div>
            </div>

      
            <div className="lg:col-span-5">
              <div className={`group ${bgSecondary} border ${borderColor} rounded-3xl p-8 space-y-6`}>
                <div className="relative">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                    <Image
                      src="/Profile.png" 
                      alt="Francis's profile picture" 
                      fill
                      className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/profile2.png" 
                      alt="Francis's profile picture (hover)" 
                      fill
                      className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 ${bgSecondary} border ${borderColor} rounded-full backdrop-blur-xl bg-opacity-90 flex items-center gap-2`}>
                    <MapPin size={16} className="text-blue-500" />
                    <span className={`text-sm font-medium ${textPrimary}`}>Jala-jala Rizal, PH</span>
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  <div>
                    <h3 className={`text-2xl font-bold ${textPrimary}`}>Francs Espiritu</h3>
                    <p className={textSecondary}>Software Developer</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className={`${bgPrimary} rounded-xl p-4 text-center`}>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>0.3+</div>
                      <div className={`text-xs ${textSecondary} mt-1`}>Years Exp</div>
                    </div>
                    <div className={`${bgPrimary} rounded-xl p-4 text-center`}>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>200K+</div>
                      <div className={`text-xs ${textSecondary} mt-1`}>Community</div>
                    </div>
                    <div className={`${bgPrimary} rounded-xl p-4 text-center`}>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>10+</div>
                      <div className={`text-xs ${textSecondary} mt-1`}>Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="work" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className={`text-4xl font-bold ${textPrimary} mb-2`}>Featured Work</h2>
              <p className={textSecondary}>Projects that make an impact</p>
            </div>
            <Terminal className={`${textSecondary}`} size={32} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`group ${bgSecondary} border ${borderColor} rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}>
                <div className={`relative h-48 overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-gray-100'}`}>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:object-contain transition-all duration-300"
                    />
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold ${textPrimary} mb-2 group-hover:text-blue-500 transition-colors`}>
                    {project.title}
                  </h3>
                  <p className={`${textSecondary} mb-4 text-sm`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 ${bgPrimary} rounded-lg text-xs ${textSecondary}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
         
            <div className="space-y-6">
              <h2 className={`text-4xl font-bold ${textPrimary}`}>About Me</h2>
              <p className={`${textSecondary} leading-relaxed`}>
               I&apos;m a full-stack web developer passionate about creating innovative web and mobile solutions that help businesses thrive in the digital age.
              </p>
              <p className={`${textSecondary} leading-relaxed`}>
                Currently working as a Software Developer, I&apos;ve also gained hands-on experience through internships and freelance projects. I enjoy building scalable applications, optimizing user experiences, and writing clean, maintainable code that brings ideas to life.
              </p>
              <div className={`${bgSecondary} border ${borderColor} rounded-2xl p-6 space-y-4`}>
                <div className="flex items-center gap-3">
                  <Coffee className="text-orange-500" size={24} />
                  <div>
                    <div className={`font-semibold ${textPrimary}`}>Coffee Enthusiast</div>
                    <div className={`text-sm ${textSecondary}`}>Fueled by espresso and curiosity</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="text-blue-500" size={24} />
                  <div>
                    <div className={`font-semibold ${textPrimary}`}>Community Builder</div>
                    <div className={`text-sm ${textSecondary}`}>200K+ developers learning together</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-yellow-500" size={24} />
                  <div>
                    <div className={`font-semibold ${textPrimary}`}>Tech Explorer</div>
                    <div className={`text-sm ${textSecondary}`}>Always learning emerging technologies</div>
                  </div>
                </div>
              </div>
            </div>

      
            <div className={`${bgSecondary} border ${borderColor} rounded-2xl overflow-hidden`}>
              <div className="flex border-b border-gray-200 dark:border-slate-800">
                <button
                  onClick={() => setActiveTab('work')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${activeTab === 'work' ? `${textPrimary} border-b-2 border-blue-500` : textSecondary}`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${activeTab === 'skills' ? `${textPrimary} border-b-2 border-blue-500` : textSecondary}`}
                >
                  Skills
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'work' ? (
                  <div className="space-y-6">
                    {experience.map((job, index) => (
                      <div key={index} className="relative pl-6 border-l-2 border-gray-200 dark:border-slate-800 pb-6 last:pb-0">
                        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br ${accentColor}`}></div>
                        <div className={`text-xs ${textSecondary} mb-1`}>{job.period} • {job.type}</div>
                        <div className={`font-semibold ${textPrimary} mb-1`}>{job.role}</div>
                        <div className={`text-sm ${textSecondary}`}>{job.company}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-medium ${textPrimary}`}>{skill.name}</span>
                          <span className={`text-sm ${textSecondary}`}>{skill.level}%</span>
                        </div>
                        <div className={`h-2 ${bgPrimary} rounded-full overflow-hidden`}>
                          <div 
                            className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section id="contact" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className={`${bgSecondary} border ${borderColor} rounded-3xl p-12 text-center relative overflow-hidden`}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-6">
              <h2 className={`text-4xl font-bold ${textPrimary}`}>
                Let&apos;s Build Something Amazing
              </h2>
              <p className={`text-xl ${textSecondary} max-w-2xl mx-auto`}>
                Have a project in mind? Whether it&apos;s a startup idea, enterprise solution, or just want to chat about tech - I&apos;m all ears.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a href="Francisdizonespiritu09@gmail.com" className={`group px-8 py-4 bg-gradient-to-r ${accentColor} text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2`}>
                  <Mail size={20} />
                  Email Me
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="#" className={`px-8 py-4 ${bgPrimary} border ${borderColor} rounded-xl font-medium hover:scale-105 transition-all ${textPrimary} flex items-center gap-2`}>
                  <MessageCircle size={20} />
                  Schedule Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <footer className={`border-t ${borderColor} py-12 px-6`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/Profile.png"
                alt="Francis's profile picture"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <div className={`font-semibold ${textPrimary}`}>Francis</div>
                <div className={`text-sm ${textSecondary}`}>Building the future, one line at a time</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${textSecondary}`}>Made with</span>
              <Heart size={16} className="text-red-500 fill-red-500" />
              <span className={`text-sm ${textSecondary}`}>in the Philippines</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
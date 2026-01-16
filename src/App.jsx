import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code2, Server, Smartphone } from 'lucide-react';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    { category: 'Mobile Development', items: ['Flutter', 'Android SDK', 'Jetpack Compose', 'Dart', 'Kotlin', 'Java'], icon: <Smartphone className="w-6 h-6" /> },
    { category: 'Backend Development', items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'TypeScript'], icon: <Server className="w-6 h-6" /> },
    { category: 'Languages', items: ['Dart', 'Java', 'Kotlin', 'JavaScript', 'TypeScript', 'C++'], icon: <Code2 className="w-6 h-6" /> },
    { category: 'Databases', items: ['Firebase', 'MongoDB', 'SQLite', 'PostgreSQL'], icon: <Server className="w-6 h-6" /> },
    { category: 'Architecture', items: ['Clean Architecture', 'MVVM', 'MVI', 'BLoC/Cubit'], icon: <Code2 className="w-6 h-6" /> },
    { category: 'DevOps & Tools', items: ['Git', 'CI/CD', 'Fastlane', 'GitHub Actions', 'Docker'], icon: <Code2 className="w-6 h-6" /> },
  ];

  const experiences = [
    {
      title: 'Flutter Developer',
      company: 'Execution Techn',
      period: 'Jan 2025 – Present',
      location: 'Remote',
      description: 'Developed 3 Flutter apps with Bloc & CI/CD pipelines.',
      achievements: ['Implemented state management with BLoC', 'Set up automated CI/CD workflows', 'Delivered production-ready applications']
    },
    {
      title: 'Mobile Developer',
      company: 'Special Group Company',
      period: 'Aug 2024 – Jan 2025',
      location: 'Cairo, Egypt',
      description: 'Real estate platform using REST APIs & Google Maps integration.',
      achievements: ['Integrated Google Maps API', 'Built RESTful API consumers', 'Optimized app performance']
    },
    {
      title: 'Flutter Developer',
      company: 'Paymac Software',
      period: 'Mar 2024 – Aug 2024',
      location: 'Cairo, Egypt',
      description: 'Built healthcare platform Refine.',
      achievements: ['Developed healthcare discount system', 'Implemented secure payment flows', 'Created user-friendly UI/UX']
    },
    {
      title: 'Android Lecturer',
      company: 'Mindset Training',
      period: 'Mar 2024 – Sept 2024',
      location: 'Cairo, Egypt',
      description: 'Teaching Android development fundamentals and advanced concepts.',
      achievements: ['Trained 50+ students', 'Created comprehensive course materials', 'Mentored junior developers']
    },
  ];

  const projects = [
    {
      name: 'Refine',
      description: 'Healthcare Discounts App with payment integration and real-time updates',
      tech: ['Flutter', 'Firebase', 'REST API', 'BLoC'],
      type: 'Mobile'
    },
    {
      name: 'Dr Recruiter',
      description: 'Medical Job Platform connecting healthcare professionals with opportunities',
      tech: ['Flutter', 'Node.js', 'MongoDB', 'Express'],
      type: 'Full Stack'
    },
    {
      name: 'Live Jobs',
      description: 'Live Interview System with real-time video and chat functionality',
      tech: ['Flutter', 'WebRTC', 'Socket.io', 'NestJS'],
      type: 'Full Stack'
    },
    {
      name: 'eBroker',
      description: 'Property Marketplace with advanced search and filtering',
      tech: ['Flutter', 'Google Maps', 'Firebase', 'REST API'],
      type: 'Mobile'
    },
    {
      name: 'SaaS Staff Teacher',
      description: 'Classroom SaaS platform for educational institutions',
      tech: ['Flutter', 'Node.js', 'PostgreSQL', 'GraphQL'],
      type: 'Full Stack'
    },
    {
      name: 'Elmaref Quran',
      description: 'Native Android App for Quran reading and memorization',
      tech: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM'],
      type: 'Mobile'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">ME</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeSection === item.id
                        ? 'text-primary-500 bg-primary-500/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-500/5'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${activeSection === item.id
                      ? 'text-primary-500 bg-primary-500/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-500/5'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-purple-500/10 to-pink-500/10 animate-gradient"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-slide-up">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-purple-600 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-5xl font-bold gradient-text">
                  ME
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">MOHAMAD ELGAMAL</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
              Android, Flutter & Backend Developer
            </p>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Building scalable mobile applications and powerful backend systems with 3+ years of experience
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Get In Touch
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a href="mailto:mohamadelgamal.egypt@gmail.com" className="p-3 rounded-full glass-effect hover:scale-110 transition-transform" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/mobileDeveloper" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-effect hover:scale-110 transition-transform" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-effect hover:scale-110 transition-transform" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="tel:+201050496330" className="p-3 rounded-full glass-effect hover:scale-110 transition-transform" aria-label="Phone">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Android, Flutter & Backend Developer with <span className="font-bold text-primary-500">3+ years experience</span> in building scalable mobile applications and RESTful APIs.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Delivered <strong>5+ production apps</strong> on Google Play & App Store with 4.5★+ ratings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Strong experience with <strong>Flutter, Kotlin, Java</strong>, and <strong>Backend APIs using Node.js, Express.js & NestJS</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Clean Architecture advocate with <strong>BLoC/Cubit & MVVM</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Expert in <strong>Agile/Scrum, CI/CD</strong> with Fastlane & GitHub Actions</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card text-center hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="card text-center hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Production Apps</div>
              </div>
              <div className="card text-center hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Students Trained</div>
              </div>
              <div className="card text-center hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">4.5★</div>
                <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Tech Stack</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="card hover:scale-105 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary-500/10 text-primary-500 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 z-10"></div>

                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="card hover:scale-105">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-primary-500 font-semibold text-lg">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{exp.period} • {exp.location}</p>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-primary-500 mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card hover:scale-105 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 text-white group-hover:scale-110 transition-transform">
                    {project.type === 'Mobile' ? <Smartphone className="w-6 h-6" /> : <Server className="w-6 h-6" />}
                  </div>
                  <span className="px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="mt-4 flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                  View Details <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-6">Get In Touch</h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-12">
            Let's build scalable mobile apps and powerful backend systems together.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary-500/10 text-primary-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <a href="mailto:mohamadelgamal.egypt@gmail.com" className="text-primary-500 hover:underline">
                    mohamadelgamal.egypt@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary-500/10 text-primary-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                  <a href="tel:+201050496330" className="text-primary-500 hover:underline">
                    +20 105 049 6330
                  </a>
                </div>
              </div>
            </div>

            <div className="card hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary-500/10 text-primary-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="card hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary-500/10 text-primary-500">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">LinkedIn</h3>
                  <a href="https://linkedin.com/mobileDeveloper" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">
                    linkedin.com/mobileDeveloper
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2026 Mohamad Elgamal – Android, Flutter & Backend Developer
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React + Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

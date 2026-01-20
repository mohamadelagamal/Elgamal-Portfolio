import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code2, Server, Smartphone, PlayCircle, Apple, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Translations object
  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hi, I\'m',
        name: 'Mohamad Elgamal',
        title: 'Android, Flutter & Backend Developer',
        subtitle: 'Building scalable mobile applications and powerful backend systems with 3 years of experience',
        getInTouch: 'Get In Touch',
        downloadCV: 'Download CV'
      },
      about: {
        title: 'About Me',
        description: 'I\'m a passionate Android, Flutter & Backend Developer with 3 years experience who loves turning innovative ideas into reality through clean, scalable code. My journey in mobile development started with a curiosity for creating seamless user experiences and has grown into a deep expertise in building robust applications that users love.',
        apps: 'Delivered 10+ production apps on Google Play & App Store with 4.5★+ ratings',
        tech: 'Strong experience with Flutter, Kotlin, Java, and Backend APIs using Node.js, Express.js & NestJS',
        architecture: 'Clean Architecture advocate with BLoC/Cubit & MVVM',
        devops: 'Expert in Agile/Scrum, CI/CD with Fastlane & GitHub Actions',
        problem: 'Problem solver who thrives on complex challenges and creating elegant solutions',
        yearsExp: 'Years Experience',
        productionApps: 'Production Apps',
        githubCommits: 'GitHub Commits',
        avgRating: 'Average Rating'
      },
      skills: {
        title: 'Technical Expertise'
      },
      experience: {
        title: 'Experience'
      },
      projects: {
        title: 'Featured Projects',
        googlePlay: 'Google Play',
        appStore: 'App Store'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Let\'s build scalable mobile apps and powerful backend systems together.',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Cairo, Egypt',
        linkedin: 'LinkedIn',
        form: {
          name: 'Your Name',
          namePlace: 'John Doe',
          email: 'Your Email',
          emailPlace: 'john@example.com',
          subject: 'Subject',
          subjectPlace: 'Project Inquiry',
          message: 'Message',
          messagePlac: 'Tell me about your project...',
          sending: 'Sending...',
          send: 'Send Message',
          success: '✅ Message sent successfully! I\'ll get back to you soon.',
          error: '❌ Failed to send message. Please try again or email me directly.'
        }
      },
      footer: {
        rights: '© 2026 Mohamad Elgamal – Android, Flutter & Backend Developer',
        tech: 'Built with React + Tailwind CSS'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'عني',
        skills: 'المهارات',
        experience: 'الخبرة',
        projects: 'المشاريع',
        contact: 'اتصل بي'
      },
      hero: {
        greeting: 'مرحباً، أنا',
        name: 'محمد الجمال',
        title: 'مطور أندرويد وفلاتر وباك إند',
        subtitle: 'بناء تطبيقات محمولة قابلة للتطوير وأنظمة باك إند قوية مع 3 سنوات من الخبرة',
        getInTouch: 'تواصل معي',
        downloadCV: 'تحميل السيرة الذاتية'
      },
      about: {
        title: 'عني',
        description: 'أنا مطور شغوف بالأندرويد والفلاتر والباك إند مع 3 سنوات خبرة أحب تحويل الأفكار المبتكرة إلى واقع من خلال كود نظيف وقابل للتطوير. بدأت رحلتي في تطوير الأجهزة المحمولة بفضول لإنشاء تجارب مستخدم سلسة ونمت لتصبح خبرة عميقة في بناء تطبيقات قوية يحبها المستخدمون.',
        apps: 'تم تطوير أكثر من 10 تطبيقات في متاجر Google Play و App Store بتقييم 4.5★+',
        tech: 'خبرة قوية في Flutter وKotlin وJava وواجهات برمجة التطبيقات الخلفية باستخدام Node.js وExpress.js وNestJS',
        architecture: 'مدافع عن Clean Architecture مع BLoC/Cubit و MVVM',
        devops: 'خبير في Agile/Scrum وCI/CD مع Fastlane وGitHub Actions',
        problem: 'حلال مشاكل يزدهر في التحديات المعقدة وإنشاء حلول أنيقة',
        yearsExp: 'سنوات الخبرة',
        productionApps: 'تطبيقات الإنتاج',
        githubCommits: 'مساهمات GitHub',
        avgRating: 'متوسط التقييم'
      },
      skills: {
        title: 'الخبرة التقنية'
      },
      experience: {
        title: 'الخبرة العملية'
      },
      projects: {
        title: 'المشاريع المميزة',
        googlePlay: 'جوجل بلاي',
        appStore: 'آب ستور'
      },
      contact: {
        title: 'تواصل معي',
        subtitle: 'لنبني معاً تطبيقات محمولة قابلة للتطوير وأنظمة باك إند قوية.',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        location: 'الموقع',
        locationValue: 'القاهرة، مصر',
        linkedin: 'لينكد إن',
        form: {
          name: 'اسمك',
          namePlace: 'أحمد محمد',
          email: 'بريدك الإلكتروني',
          emailPlace: 'ahmed@example.com',
          subject: 'الموضوع',
          subjectPlace: 'استفسار عن مشروع',
          message: 'الرسالة',
          messagePlac: 'أخبرني عن مشروعك...',
          sending: 'جارٍ الإرسال...',
          send: 'إرسال الرسالة',
          success: '✅ تم إرسال الرسالة بنجاح! سأرد عليك قريباً.',
          error: '❌ فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى أو راسلني مباشرة.'
        }
      },
      footer: {
        rights: '© 2026 محمد الجمال – مطور أندرويد وفلاتر وباك إند',
        tech: 'تم البناء باستخدام React + Tailwind CSS'
      }
    }
  };

  const t = translations[language];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('b9DyWfi-afj7Ql11q'); // Your actual EmailJS public key
  }, []);

  // Set document direction and language
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_2eaa8q3', // Your actual service ID
        'template_w23itcr', // Your actual template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'mohamad.elgamal.tech@gmail.com'
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Handle RTL direction for Arabic
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  }, [language]);

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

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLanguage = prev === 'en' ? 'ar' : 'en';
      // Update document direction for RTL support
      document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = newLanguage;
      return newLanguage;
    });
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const skills = [
    { 
      category: 'Mobile Development', 
      items: ['Flutter', 'Android SDK', 'Jetpack Compose', 'Dart', 'Kotlin', 'Java'], 
      icon: <Smartphone className="w-6 h-6" /> 
    },
    { 
      category: 'Backend & APIs', 
      items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'TypeScript'], 
      icon: <Server className="w-6 h-6" /> 
    },
    { 
      category: 'Programming Languages', 
      items: ['Dart', 'Kotlin', 'Java', 'JavaScript', 'TypeScript', 'C++'], 
      icon: <Code2 className="w-6 h-6" /> 
    },
    { 
      category: 'Database & Storage', 
      items: ['Firebase', 'MongoDB', 'SQLite'], 
      icon: <Server className="w-6 h-6" /> 
    },
    { 
      category: 'Architecture & Patterns', 
      items: ['Clean Architecture', 'MVVM', 'MVI', 'BLoC/Cubit'], 
      icon: <Code2 className="w-6 h-6" /> 
    },
    { 
      category: 'DevOps & Tools', 
      items: ['Git', 'CI/CD', 'Fastlane', 'GitHub Actions', 'Docker'], 
      icon: <Code2 className="w-6 h-6" /> 
    },
  ];

  const experiences = [
    {
      title: 'Flutter Developer',
      company: 'Execution Techn',
      period: 'Jan 2025 – Present',
      location: 'Remote',
      description: 'Developed 6 Flutter apps with Bloc & CI/CD pipelines.',
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
      achievements: [ 'Created comprehensive course materials', 'Mentored junior developers']
    },
  ];

  const projects = [
    {
      name: 'Frame Car',
      description: 'On-demand car glass repair service app with real-time location tracking. Offers comprehensive car glass solutions including replacement, crack repair, and sunroof services.',
      tech: ['Flutter', 'Google Maps', 'Firebase', 'Real-time Tracking'],
      type: 'Mobile',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop&crop=center',
      playStore: 'https://play.google.com/store/apps/details?id=com.framecar.frame_car',
      appStore: 'https://apps.apple.com/us/app/frame-car/id6748179316'
    },
    {
      name: 'Refine',
      description: 'Healthcare discounts platform that saves time and effort for health checkups. Find nearby laboratories with discounts and high-quality services from famous labs.',
      tech: ['Flutter', 'Firebase', 'REST API', 'BLoC'],
      type: 'Mobile',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=300&fit=crop&crop=center',
      playStore: 'https://play.google.com/store/apps/details?id=com.paymac.refine_app',
      appStore: 'https://apps.apple.com/app/refine-healthcare/id123456789'
    },
    {
      name: 'Dr Recruiter',
      description: 'Best job search platform for medical jobs in Middle East, connecting healthcare professionals with employers through advanced search tools.',
      tech: ['Flutter', 'Firebase', 'REST API', 'Search Engine'],
      type: 'Mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&crop=center',
      playStore: 'https://play.google.com/store/apps/details?id=com.dr_recruiter',
      appStore: 'https://apps.apple.com/eg/app/dr-recruiter-app/id1611378290'
    },
    {
      name: 'Live Jobs',
      description: 'Revolutionary job search platform connecting job seekers with employers for real-time online interviews. Employers post jobs and interview times for instant hiring.',
      tech: ['Flutter', 'WebRTC', 'Video Calling', 'Real-time Communication'],
      type: 'Mobile',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop&center',
      playStore: 'https://play.google.com/store/apps/details?id=com.tech.livejobs'
    },
    {
      name: 'eBroker',
      description: 'Premium property marketplace mobile app with advanced search filters, interactive maps, virtual tours, and smart recommendation engine.',
      tech: ['Flutter', 'Google Maps', 'Firebase', 'REST API'],
      type: 'Mobile',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
      playStore: 'https://play.google.com/store/apps/details?id=com.ebroker.wrteam',
      appStore: 'https://apps.apple.com/app/ebroker-property/id987654321'
    },
    {
      name: 'SaaS Staff Teacher',
      description: 'Comprehensive classroom management app for educators with class scheduling, attendance tracking, assignment management, digital gradebook, and parent communication features.',
      tech: ['Flutter', 'Firebase', 'Class Management', 'Digital Gradebook'],
      type: 'Mobile',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center',
      playStore: 'https://play.google.com/store/apps/details?id=com.wrteam.saas.staff'
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
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-primary-500 bg-primary-500/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-500/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 relative">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
                aria-label="Toggle Language"
              >
                <Globe className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </button>

              {/* Dark Mode Toggle */}
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
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Mohamad Elgamal" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-4xl font-bold text-white hidden">
                    ME
                  </div>
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
              Building scalable mobile applications and powerful backend systems with 3 years of experience
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Get In Touch
              </button>
              <a 
                href="/MobileDeveloper_Mohamad_Elg.pdf" 
                download="MobileDeveloper_Mohamad_Elg.pdf" 
                className="btn-secondary flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a href="mailto:mohamad.elgamal.tech@gmail.com" className="p-3 rounded-full glass-effect hover:scale-110 transition-transform" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-e-63102220b/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-effect hover:scale-110 transition-transform" aria-label="LinkedIn">
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
                I'm a passionate Android, Flutter & Backend Developer with <span className="font-bold text-primary-500">3 years experience</span> who loves turning innovative ideas into reality through clean, scalable code. My journey in mobile development started with a curiosity for creating seamless user experiences and has grown into a deep expertise in building robust applications that users love.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Delivered <strong>10+ production apps</strong> on Google Play & App Store with 4.5★+ ratings</span>
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
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Problem solver who thrives on <strong>complex challenges</strong> and creating elegant solutions</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card text-center hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="card text-center hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Production Apps</div>
              </div>
              <div className="card text-center hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">GitHub Commits</div>
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
          <h2 className="section-title text-center mb-12">Technical Expertise</h2>

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card hover:scale-105 group overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 text-white group-hover:scale-110 transition-transform">
                    {project.type === 'Mobile' ? <Smartphone className="w-5 h-5" /> : <Server className="w-5 h-5" />}
                  </div>
                  <span className="px-2 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Store Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  {project.playStore && (
                    <a 
                      href={project.playStore} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Google Play
                    </a>
                  )}
                  {project.appStore && (
                    <a 
                      href={project.appStore} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                      </svg>
                      App Store
                    </a>
                  )}
                </div>
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
                  <a href="mailto:mohamad.elgamal.tech@gmail.com" className="text-primary-500 hover:underline">
                    mohamad.elgamal.tech@gmail.com
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
                  <a href="https://www.linkedin.com/in/mohamed-e-63102220b/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">
                    linkedin.com/in/mohamed-e-63102220b
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
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
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  ❌ Failed to send message. Please try again or email me directly.
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn-primary w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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

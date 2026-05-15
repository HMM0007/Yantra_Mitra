import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  Mic,
  Lightbulb,
  Wifi,
  Globe,
  Brain,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  CheckCircle,
  Clock,
  DollarSign,
  Smartphone,
  Zap as ZapIcon,
  ImageIcon,
  MapPin,
  TrendingUp,
  Cpu,
} from 'lucide-react';

const YantraMitraPortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 500;
          setShowScrollTop(shouldShow);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Features', id: 'features' },
    { label: 'How it Works', id: 'how-it-works' },
    { label: 'Team', id: 'team' },
    { label: 'Technology', id: 'technology' },
    { label: 'Contact', id: 'contact' },
  ];

  // ==================== NAVBAR ====================
  const Navbar = () => (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.320, 1] }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/85 border-b border-sage-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToTop()}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="w-12 h-12 relative flex items-center justify-center hover:shadow-lg hover:shadow-sage-500/20 transition-shadow duration-500 rounded-xl">
              <img src="/LOGO.png" alt="YantraMitra AI" className="w-full h-full" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-sage-600 to-forest-700 bg-clip-text text-transparent tracking-tight">
                YantraMitra
              </h1>
              <p className="text-xs font-semibold text-sage-600">AI</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold text-gray-700 hover:text-sage-600 transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: "0 20px 30px rgba(107, 168, 77, 0.3)" }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            onClick={() => scrollToSection('contact')}
            className="hidden sm:block px-7 py-2.5 bg-gradient-to-r from-sage-500 to-sage-600 text-white rounded-lg font-semibold text-sm shadow-lg shadow-sage-500/25 hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="md:hidden pb-4 border-t border-sage-200"
            >
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-sage-50 hover:text-sage-600 transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );

  // ==================== HERO SECTION ====================
  const HeroSection = () => (
    <section className="min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 relative overflow-hidden bg-gradient-to-br from-white via-sage-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-72 h-72 bg-sage-200 rounded-full blur-3xl opacity-15"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-forest-200 rounded-full blur-3xl opacity-15"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="bg-gradient-to-r from-sage-600 via-forest-700 to-forest-800 bg-clip-text text-transparent">
                Smart Farming
              </span>
              <br />
              <span className="text-gray-800">Assistance Powered by AI</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Helping farmers diagnose machinery problems instantly — anytime, anywhere. Transform your farming experience with AI-powered insights and real-time solutions.
            </motion.p>

            <motion.p
              className="text-sm italic text-sage-700 mb-8 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              "तुमच्या शेतीसाठी स्मार्ट साथी" - Your Smart Companion for Farming
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 25px 35px rgba(107, 168, 77, 0.35)" }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                onClick={() => scrollToSection('features')}
                className="px-8 py-4 bg-gradient-to-r from-sage-500 to-sage-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-sage-500/30 hover:shadow-xl transition-all duration-300"
              >
                Explore Features <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08, backgroundColor: "#f9fdf6", boxShadow: "0 15px 25px rgba(107, 168, 77, 0.2)" }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                onClick={() => scrollToSection('team')}
                className="px-8 py-4 border-2 border-sage-400 text-sage-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                Meet Our Team
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Mobile Mockup */}
          <motion.div
            className="relative h-full min-h-[400px] flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            {/* Floating Phone Mockup */}
            <motion.div
              animate={{ y: [0, -15, 0], rotateX: [0, 5, 0], rotateY: [-8, 0, 8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ perspective: "1200px" }}
              className="relative w-full max-w-sm"
            >
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-3 shadow-2xl border border-gray-700">
                <div className="bg-gradient-to-br from-sage-400 via-sage-300 to-forest-400 rounded-2xl p-4 min-h-96 flex flex-col items-center justify-between">
                  {/* Phone Screen Content */}
                  <div className="w-full text-white text-center pt-4">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-4xl mb-2"
                    >
                      🤖
                    </motion.div>
                    <p className="font-bold text-sm">AI Analysis</p>
                    <p className="text-xs mt-2 opacity-90">Running diagnostics...</p>
                  </div>

                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  </motion.div>

                  <div className="w-full bg-white/20 rounded-lg p-3 text-xs text-white text-center backdrop-blur">
                    <p className="font-semibold">Engine Status</p>
                    <p className="text-green-200 mt-1">✓ Optimal</p>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [-8, 8, -8], x: [-8, 3, -8], scale: [1, 1.08, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-xl border border-sage-200 hover:shadow-2xl transition-shadow duration-500"
              >
                <Zap className="w-6 h-6 text-sage-600" />
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8], x: [8, -3, 8], scale: [1, 1.08, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-full p-3 shadow-xl border border-sage-200 hover:shadow-2xl transition-shadow duration-500"
              >
                <Brain className="w-6 h-6 text-forest-700" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sage-600"
        >
          <p className="text-sm font-medium mb-2">Scroll to explore</p>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );

  // ==================== ABOUT SECTION ====================
  const AboutSection = () => (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Image Area */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-sage-100 to-forest-100 rounded-2xl p-8 min-h-72 flex items-center justify-center border border-sage-200 shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 bg-sage-300 rounded-full blur-2xl opacity-15"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 text-center"
              >
                <Brain className="w-20 h-20 text-sage-600 mx-auto mb-4" />
                <p className="text-lg font-bold text-sage-700">AI-Powered Diagnostics</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 tracking-tight">About YantraMitra AI</h2>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 12 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="flex gap-4"
              >
                <CheckCircle className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">AI-Powered Farming Assistant</h3>
                  <p className="text-gray-600 text-sm">Intelligent diagnostics for tractor and machinery issues, powered by advanced machine learning.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 12 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="flex gap-4"
              >
                <CheckCircle className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Multi-Language Support</h3>
                  <p className="text-gray-600 text-sm">Supports local languages for farmers, breaking language barriers in rural areas.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 12 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="flex gap-4"
              >
                <CheckCircle className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Works Offline</h3>
                  <p className="text-gray-600 text-sm">Complete offline functionality ensures uninterrupted access in remote farming areas.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 12 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="flex gap-4"
              >
                <CheckCircle className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Designed for Rural Farmers</h3>
                  <p className="text-gray-600 text-sm">Intuitive interface built specifically for farmers with minimal tech background.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // ==================== FEATURES SECTION ====================
  const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      whileHover={{ y: -15, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
      className="group relative bg-white border border-sage-200 rounded-2xl p-6 sm:p-8 hover:border-sage-400 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sage-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ pointerEvents: 'none' }}
      />

      <motion.div
        whileHover={{ scale: 1.15, rotate: 8 }}
        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative z-10 w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-sage-500/40 shadow-lg shadow-sage-500/20 transition-shadow duration-500"
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>

      <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="relative z-10 text-gray-600 leading-relaxed text-sm">{description}</p>

      <motion.div
        className="relative z-10 mt-4 flex items-center gap-2 text-sage-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );

  const FeaturesSection = () => {
    const features = [
      {
        icon: Brain,
        title: 'AI Powered Diagnosis',
        description: 'Machine learning models analyze machinery issues with precision and accuracy.',
      },
      {
        icon: Mic,
        title: 'Voice Guidance',
        description: 'Interactive voice interface guides farmers through solutions step by step.',
      },
      {
        icon: Zap,
        title: 'Step-by-Step Solutions',
        description: 'Clear, detailed instructions to resolve machinery problems quickly.',
      },
      {
        icon: Wifi,
        title: 'Offline Support',
        description: 'Full functionality without internet connection for remote farm areas.',
      },
      {
        icon: Globe,
        title: 'Local Languages',
        description: 'Support for regional languages making technology accessible to all.',
      },
      {
        icon: Lightbulb,
        title: 'Smart Detection',
        description: 'Intelligent problem recognition from minimal user input.',
      },
    ];

    return (
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sage-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Powerful Features</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Everything a farmer needs to keep their machinery running smoothly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ==================== APP MODULES ====================
  const AppModulesSection = () => {
    const modules = [
      {
        icon: Brain,
        title: 'AI Diagnosis Module',
        description: 'Advanced machine learning algorithms analyze machinery symptoms and identify root causes with high accuracy. Our proprietary AI model has been trained on thousands of real-world agricultural equipment issues, failures, and repairs across diverse tractor and machinery brands. The system uses deep learning to recognize patterns in sensor data, audio signatures, and user descriptions.',
        details: '• Deep Learning Neural Networks\n• 95%+ Diagnosis Accuracy\n• Real-time Processing (<500ms)\n• Pattern Recognition from 10,000+ Issues\n• Continuous Learning & Improvement'
      },
      {
        icon: Mic,
        title: 'Voice Guidance Module',
        description: 'Interactive voice interface provides hands-free operation perfect for field conditions when farmers cannot use touchscreen. Powered by advanced speech recognition, the module converts natural spoken descriptions into structured diagnostic queries. Farmers speak naturally in their regional language, and the system understands context, accent variations, and agricultural terminology.',
        details: '• Advanced Speech Recognition\n• Accent & Dialect Adaptive\n• Background Noise Filtering\n• Natural Language Understanding\n• Real-time Voice Feedback\n• Multi-language Voice Support'
      },
      {
        icon: ArrowRight,
        title: 'Solution Engine',
        description: 'Generates comprehensive, context-aware repair solutions tailored to the specific machinery, issue severity, and farmer skill level. The engine produces step-by-step instructions with estimated repair times, required tools, spare parts needed, safety warnings, and video/image references. Solutions are regularly updated by agricultural experts and field-tested by actual farmers.',
        details: '• Adaptive Difficulty Levels\n• Component-Level Guidance\n• Safety Protocols Integrated\n• Tool & Parts Recommendations\n• Time & Cost Estimates\n• Video & Image References'
      },
      {
        icon: Wifi,
        title: 'Offline Architecture',
        description: 'Complete offline-first architecture ensures the app functions perfectly without internet connectivity—critical for rural farm areas with limited or no connectivity. Lightweight AI models are cached locally on the device. The system automatically syncs diagnostic data, solutions, and usage patterns when internet becomes available, ensuring no farmer productivity loss.',
        details: '• Local Database Storage\n• Cached AI Models\n• Automatic Cloud Sync\n• Data Compression\n• Bandwidth Optimization\n• Zero Network Dependency'
      },
      {
        icon: Globe,
        title: 'Multi-Language Support',
        description: 'Complete localization for 10+ regional languages including Marathi, Hindi, Tamil, Telugu, Kannada, and more. Beyond simple translation, we implement cultural context, regional agricultural terminology, local equipment naming conventions, and farming practices relevant to each region. Every language receives native speaker quality assurance.',
        details: '• 10+ Regional Languages\n• Native Speaker Localization\n• Agricultural Terminology\n• Regional Equipment Names\n• Cultural Context Integration\n• Continuous Language Expansion'
      },
      {
        icon: Lightbulb,
        title: 'Smart Problem Detection',
        description: 'Intelligent symptom matching system that requires minimal information from farmers. Using natural language processing and fuzzy matching, the system understands incomplete, colloquial, or non-technical problem descriptions. Farmers can describe issues in their own words without agricultural jargon, and the system intelligently maps symptoms to machinery problems with remarkable accuracy.',
        details: '• NLP-based Understanding\n• Fuzzy Symptom Matching\n• Context-Aware Inference\n• Multi-symptom Analysis\n• Machine Learning Refinement\n• Farmer-Friendly Input'
      },
    ];

    return (
      <section id="modules" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sage-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 tracking-tight">App Modules & Architecture</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Deep dive into each core module powering YantraMitra AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {modules.map((module, index) => {
              const ModuleIcon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15, boxShadow: "0 30px 50px rgba(107, 168, 77, 0.2)" }}
                  className="group relative bg-white border border-sage-200 rounded-2xl p-6 sm:p-8 hover:border-sage-400 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                      className="w-14 h-14 bg-gradient-to-br from-sage-500 to-forest-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                    >
                      <ModuleIcon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sage-700 transition-colors duration-300">{module.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {module.description}
                    </p>

                    {/* Details */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: 'auto' }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      className="border-t border-sage-200 pt-4"
                    >
                      <p className="text-xs font-semibold text-sage-700 leading-relaxed whitespace-pre-line">
                        {module.details}
                      </p>
                    </motion.div>

                    {/* Learn More Link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                      className="relative z-10 mt-4 flex items-center gap-2 text-sage-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // ==================== HOW IT WORKS ====================
  const HowItWorksSection = () => {
    const steps = [
      { icon: '📝', title: 'Describe Problem', description: 'Tell YantraMitra about your machinery issue' },
      { icon: '🔍', title: 'AI Detects Issue', description: 'Advanced AI analyzes and identifies the problem' },
      { icon: '⚡', title: 'Get Solution', description: 'Receive instant, step-by-step solution' },
      { icon: '👨‍🌾', title: 'Continue Farming', description: 'Fix the issue and get back to farming' },
    ];

    return (
      <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 tracking-tight">How It Works</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Simple, intuitive process to get instant machinery diagnostics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number Circle */}
                <motion.div
                  whileHover={{ scale: 1.15, boxShadow: "0 20px 30px rgba(107, 168, 77, 0.35)" }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center text-3xl shadow-xl shadow-sage-500/30 cursor-pointer hover:shadow-2xl transition-shadow duration-500"
                >
                  {step.icon}
                </motion.div>

                {/* Arrow connecting steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.12 + 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-8 left-full w-12 h-0.5 bg-gradient-to-r from-sage-500 to-transparent"
                    style={{ origin: 'left center' }}
                  />
                )}

                {/* Content */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ==================== WHY YANTRAMITRA ====================
  const WhyYantraMitraSection = () => {
    const benefits = [
      { icon: Clock, label: 'Saves Time', value: '80%', color: 'from-sage-500' },
      { icon: DollarSign, label: 'Reduces Costs', value: '60%', color: 'from-forest-500' },
      { icon: Wifi, label: 'Offline Ready', value: '100%', color: 'from-sage-600' },
      { icon: Smartphone, label: 'Farmer Friendly', value: 'Easy', color: 'from-forest-600' },
      { icon: Zap, label: 'Fast Diagnosis', value: '<1min', color: 'from-sage-500' },
      { icon: Brain, label: 'Smart AI', value: 'Advanced', color: 'from-forest-700' },
    ];

    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sage-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Why YantraMitra AI?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Designed with farmers in mind, delivering real value
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="group bg-white border border-sage-200 rounded-xl p-4 sm:p-6 text-center hover:border-sage-400 hover:shadow-xl transition-all duration-500"
                >
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 12 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${benefit.color} to-green-400 rounded-lg flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:shadow-xl transition-shadow duration-500`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <motion.p
                    className="text-2xl sm:text-3xl font-bold text-sage-600 mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.07 + 0.2, duration: 0.5 }}
                  >
                    {benefit.value}
                  </motion.p>
                  <p className="text-sm font-semibold text-gray-700">{benefit.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // ==================== TEAM SECTION ====================
  const TeamSection = () => {
    const team = [
      { name: 'Aditya Golande', github: '#', linkedin: '#' },
      { name: 'Harshal More', github: '#', linkedin: '#' },
      { name: 'Vishwapratap Kamble', github: '#', linkedin: '#' },
      { name: 'Suyash Sonawane', github: '#', linkedin: '#' },
      { name: 'Prasad Kadam', github: '#', linkedin: '#' },
    ];

    return (
      <section id="team" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Meet The Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Dedicated professionals building the future of agricultural technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                whileHover={{ y: -20 }}
                className="group text-center"
              >
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.08, boxShadow: "0 25px 35px rgba(107, 168, 77, 0.3)" }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  className="relative mb-6 mx-auto w-32 h-32 bg-gradient-to-br from-sage-400 to-forest-500 rounded-2xl flex items-center justify-center text-5xl shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-2 border-sage-200 group-hover:border-sage-400"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-4xl"
                  >
                    👤
                  </motion.div>
                </motion.div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-4">{member.name}</h3>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="flex justify-center gap-3"
                >
                  <motion.a
                    href={member.github}
                    whileHover={{ scale: 1.25, y: -8 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-sage-500 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.25, y: -8 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-sage-500 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ==================== TECHNOLOGY STACK ====================
  const TechnologySection = () => {
    const tech = [
      { name: 'Java', icon: '☕', color: 'from-orange-500' },
      { name: 'XML', icon: '📝', color: 'from-red-500' },
      { name: 'SQLite / Room', icon: '🗄️', color: 'from-blue-500' },
      { name: 'Gemini API', icon: '🤖', color: 'from-purple-500' },
      { name: 'Android Studio', icon: '📱', color: 'from-green-500' },
      { name: 'AI/NLP', icon: '🧠', color: 'from-indigo-500' },
      { name: 'Offline-First', icon: '🔌', color: 'from-yellow-500' },
      { name: 'RESTful APIs', icon: '🔗', color: 'from-cyan-500' },
    ];

    return (
      <section id="technology" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sage-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Technology Stack</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Built with cutting-edge technologies for reliability and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {tech.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                whileHover={{ y: -16, scale: 1.08 }}
                className="group"
              >
                <motion.div
                  className={`bg-gradient-to-br ${item.color} to-green-400 h-28 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                  whileHover={{ boxShadow: "0 30px 50px rgba(0, 0, 0, 0.15)" }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-4xl mb-2"
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
                <p className="text-center text-sm font-semibold text-gray-700 mt-3">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ==================== FUTURE VISION ====================
  const FutureVisionSection = () => {
    const roadmap = [
      { icon: Mic, title: 'Voice Input', description: 'Natural voice commands for hands-free operation' },
      { icon: ImageIcon, title: 'Image Recognition', description: 'Analyze machinery images for instant diagnosis' },
      { icon: MapPin, title: 'Mechanic Locator', description: 'Find nearby mechanics and service centers' },
      { icon: Globe, title: 'Multi-Language', description: 'Expand support to more regional languages' },
      { icon: TrendingUp, title: 'Predictive Maintenance', description: 'AI predicts maintenance before issues occur' },
    ];

    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Future Vision</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Exciting features and improvements coming soon
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {roadmap.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15 }}
                  className="group bg-gradient-to-br from-sage-50 to-forest-50 border border-sage-200 rounded-2xl p-6 sm:p-8 text-center hover:border-sage-400 hover:shadow-xl transition-all duration-500 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-sage-500 to-forest-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-sage-500/30 group-hover:shadow-xl transition-shadow duration-500"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // ==================== CONTACT / FOOTER ====================
  const ContactSection = () => (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-800 via-forest-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-96 h-96 bg-sage-500 rounded-full blur-3xl opacity-10"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Ready to Transform Farming?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light">
            Join us in empowering farmers with AI-powered solutions
          </p>

          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 25px 35px rgba(107, 168, 77, 0.4)" }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="px-8 py-4 bg-gradient-to-r from-sage-500 to-sage-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="border-t border-forest-700 pt-12 mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold mb-4">YantraMitra AI</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Built for empowering farmers through technology. Smart farming assistance powered by AI.
              </p>
              <p className="text-sm italic text-sage-300">
                "तुमच्या शेतीसाठी स्मार्ट साथी"
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><motion.a href="#features" whileHover={{ x: 5, color: '#A8D984' }} transition={{ duration: 0.2 }} className="hover:text-sage-400 transition-colors cursor-pointer">Features</motion.a></li>
                <li><motion.a href="#how-it-works" whileHover={{ x: 5, color: '#A8D984' }} transition={{ duration: 0.2 }} className="hover:text-sage-400 transition-colors cursor-pointer">How It Works</motion.a></li>
                <li><motion.a href="#team" whileHover={{ x: 5, color: '#A8D984' }} transition={{ duration: 0.2 }} className="hover:text-sage-400 transition-colors cursor-pointer">Team</motion.a></li>
                <li><motion.a href="#technology" whileHover={{ x: 5, color: '#A8D984' }} transition={{ duration: 0.2 }} className="hover:text-sage-400 transition-colors cursor-pointer">Technology</motion.a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-400 mb-4 text-sm">Email us for any inquiries</p>
              <motion.a
                href="mailto:contact@yantramitra.ai"
                whileHover={{ scale: 1.05, color: '#A8D984' }}
                transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="inline-flex items-center gap-2 text-sage-400 hover:text-sage-300 transition-colors font-semibold text-sm"
              >
                <Mail className="w-5 h-5" />
                contact@yantramitra.ai
              </motion.a>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {[
                  { icon: Github, label: 'GitHub' },
                  { icon: Linkedin, label: 'LinkedIn' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.25, y: -8 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                      className="w-10 h-10 bg-forest-700 hover:bg-sage-500 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-forest-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2024 YantraMitra AI. All rights reserved.</p>
            <p>Built with passion for farmers 🌾</p>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // ==================== SCROLL TO TOP ====================
  const ScrollToTop = () => (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          whileHover={{ scale: 1.15, boxShadow: "0 20px 35px rgba(107, 168, 77, 0.4)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-sage-500 to-forest-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );

  // ==================== MAIN RETURN ====================
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AppModulesSection />
      <HowItWorksSection />
      <WhyYantraMitraSection />
      <TeamSection />
      <TechnologySection />
      <FutureVisionSection />
      <ContactSection />
      <ScrollToTop />
    </div>
  );
};

export default YantraMitraPortfolio;

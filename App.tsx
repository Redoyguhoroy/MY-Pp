
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MouseTrail from './components/MouseTrail';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DraggableSection from './components/DraggableSection';
import { Menu, X, Terminal, Github, Linkedin, MonitorCheck, ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/redoyguhoroy/",
    github: "https://github.com/Redoyguhoroy"
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 50);
      setShowScrollTop(scrollPos > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', id: 'hero' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white bg-slate-950 text-slate-200">
      <MouseTrail />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
            <div className="relative">
              <MonitorCheck className="text-cyan-400 group-hover:scale-110 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <span className="font-orbitron font-bold text-xl tracking-tighter uppercase">ROY.<span className="text-cyan-400">QA</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="font-orbitron text-[10px] tracking-[0.3em] text-slate-400 hover:text-cyan-400 transition-all relative group uppercase"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 glass rounded-lg hover:text-cyan-400 hover:neon-border-blue transition-all"
            >
              <Github size={18} />
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 glass rounded-lg hover:text-cyan-400 hover:neon-border-blue transition-all"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-white p-2 glass rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[110] bg-slate-950/95 backdrop-blur-2xl p-6 flex flex-col items-center justify-center space-y-12"
          >
            <button className="absolute top-6 right-6 p-4 glass rounded-full" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="font-orbitron text-4xl tracking-widest text-slate-400 hover:text-cyan-400 text-center uppercase"
              >
                {item.name}
              </motion.button>
            ))}
            <div className="flex space-x-6 pt-8">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-xl text-white hover:text-cyan-400"><Github size={32} /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-xl text-white hover:text-cyan-400"><Linkedin size={32} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Sections */}
      <main className="relative z-10">
        <div id="hero">
          <DraggableSection className="min-h-screen flex items-center justify-center">
            <Hero />
          </DraggableSection>
        </div>

        <div id="about" className="py-20 bg-slate-900/10">
          <DraggableSection>
            <About />
          </DraggableSection>
        </div>

        <div id="skills" className="py-20">
          <DraggableSection>
            <Skills />
          </DraggableSection>
        </div>

        <div id="projects" className="py-20 bg-slate-900/10">
          <DraggableSection>
            <Projects />
          </DraggableSection>
        </div>

        <div id="contact" className="py-20">
          <DraggableSection>
            <Contact />
          </DraggableSection>
        </div>
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[100] p-4 bg-cyan-600/20 backdrop-blur-xl border border-cyan-500/50 rounded-full text-cyan-400 shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] hover:bg-cyan-600/30 transition-all group"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-slate-950 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 cursor-pointer" onClick={scrollToTop}>
              <Terminal size={20} className="text-cyan-400" />
              <span className="font-orbitron font-bold text-xl tracking-tighter uppercase">ROY.<span className="text-cyan-400">QA</span></span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm">
              Engineered with precision. Tested for excellence. <br />
              © 2024 Roy SQA Engineering. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex gap-8 items-center flex-wrap justify-center">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-cyan-400 transition-colors font-orbitron text-[10px] tracking-[0.3em]"
            >
              GITHUB
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-cyan-400 transition-colors font-orbitron text-[10px] tracking-[0.3em]"
            >
              LINKEDIN
            </a>
            <span className="hidden md:block w-1 h-1 bg-slate-800 rounded-full"></span>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors font-orbitron text-[10px] tracking-[0.3em]">PRIVACY</a>
          </div>
        </div>
      </footer>

      {/* Subtle Bottom Glow */}
      <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none blur-[1px] z-50"></div>
    </div>
  );
};

export default App;

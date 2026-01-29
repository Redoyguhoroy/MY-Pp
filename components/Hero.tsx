
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ICON_MAP } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Software Quality Assurance Engineer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // SQA Related icons mapped from ICON_MAP
  const sqaIcons = [
    { name: 'Bug', label: 'BUG TRACKING' },
    { name: 'ShieldCheck', label: 'SECURITY' },
    { name: 'Layers', label: 'SELENIUM' },
    { name: 'Settings', label: 'JIRA' },
    { name: 'Database', label: 'SQL' },
    { name: 'Smartphone', label: 'MOBILE' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGetInTouch = () => {
    const subject = encodeURIComponent("Portfolio Quick Contact");
    const mailtoUrl = `mailto:royredoyguho@gmail.com?subject=${subject}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 lg:px-24 py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="flex-1 space-y-8 z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="w-8 h-[1px] bg-cyan-500/50"></div>
            <h2 className="text-cyan-400 font-orbitron tracking-widest text-lg md:text-xl uppercase">
              {text}<span className="animate-pulse">|</span>
            </h2>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-orbitron leading-tight">
            Test. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 neon-text-blue">Improve.</span> <br />
            Deliver.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-slate-400 max-w-lg text-lg leading-relaxed"
        >
          Turning complex software into reliable products through smart testing and quality assurance. Dedicated to performance, security, and exceptional user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-orbitron text-sm tracking-widest rounded-lg neon-border-blue transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(8,145,178,0.4)]"
          >
            VIEW PROJECTS
          </button>
          <button 
            onClick={handleGetInTouch}
            className="px-8 py-4 glass hover:bg-white/10 text-white font-orbitron text-sm tracking-widest rounded-lg transition-all transform hover:scale-105 active:scale-95 hover:text-cyan-400 hover:neon-border-blue"
          >
            GET IN TOUCH
          </button>
        </motion.div>
      </div>

      <div className="flex-1 relative mt-20 md:mt-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
        >
          {/* Radar Sweep Effect */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 z-10 pointer-events-none opacity-20"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-gradient-to-r from-cyan-500/50 to-transparent origin-bottom rounded-t-full"></div>
          </motion.div>

          {/* Portrait Mask */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative z-20 w-full h-full rounded-full border-2 border-cyan-500/30 p-2 overflow-hidden neon-border-blue glass shadow-[0_0_50px_rgba(6,182,212,0.2)]"
          >
            <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden relative group">
                <img 
                    src="https://i.imgur.com/1fJ9rQL.png" 
                    alt="Roy Portrait" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                
                {/* QA Scanning line removed per request */}
                
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>
          </motion.div>

          {/* Multiple Dynamic Orbiting Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-dashed border-cyan-500/40 rounded-full z-10"
          ></motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-16 border border-dotted border-purple-500/30 rounded-full z-0"
          ></motion.div>

          {/* Orbiting SQA Icons - These move around the circle */}
          {sqaIcons.map((item, i) => {
            const Icon = ICON_MAP[item.name];
            const orbitDuration = 25 + i * 5;
            
            return (
              <motion.div
                key={item.name}
                className="absolute w-full h-full z-30"
                animate={{ rotate: 360 }}
                transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
                  style={{ top: '-40px' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
                >
                   <div className="relative group cursor-help">
                      <div className="p-3 glass rounded-xl text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20 group-hover:neon-border-blue transition-all shadow-xl">
                        {Icon && <Icon size={22} />}
                      </div>
                      
                      {/* Tooltip Label */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-[9px] font-orbitron px-2 py-1 rounded-md whitespace-nowrap shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                        {item.label}
                      </div>
                      
                      {/* Trailing Particle effect */}
                      <motion.div 
                        animate={{ opacity: [0, 1, 0], y: [0, 15, 30], scale: [1, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                      ></motion.div>
                   </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Floating Data Particles (Simulating code fragments/bugs) */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              animate={{ 
                x: [Math.random() * 500 - 250, Math.random() * 500 - 250],
                y: [Math.random() * 500 - 250, Math.random() * 500 - 250],
                opacity: [0, 0.8, 0],
                scale: [0, Math.random() * 1.5, 0]
              }}
              transition={{ 
                duration: 6 + Math.random() * 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className={`absolute w-1 h-1 ${i % 2 === 0 ? 'bg-cyan-400/50' : 'bg-purple-400/50'} rounded-full blur-[1px]`}
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

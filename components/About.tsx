
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SDLC_PHASES } from '../constants';
import { Search, Mail, Phone, ShieldCheck, Copy, Check } from 'lucide-react';

const About: React.FC = () => {
  const [summaryText, setSummaryText] = useState('');
  const [copied, setCopied] = useState(false);
  const introPart = "I am Redoy guho Roy. ";
  const mainPart = "Dedicated SQA Engineer committed to improving software quality, performance, and user experience. Experienced in Information Technology with a specialization in Software Quality Assurance, Proficiency in Mobile and Web-Based Application Testing. Extensive working knowledge on all phases of the Software Development Life Cycle and IT methodologies such as Agile and SCRUM.";
  const fullSummary = introPart + mainPart;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullSummary.length) {
      const timeout = setTimeout(() => {
        setSummaryText(fullSummary.slice(0, index + 1));
        setIndex(index + 1);
      }, 15);
      return () => clearTimeout(timeout);
    }
  }, [index, fullSummary]);

  const copyEmail = () => {
    navigator.clipboard.writeText("royredoyguho@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-24 px-6 lg:px-24 max-w-7xl mx-auto min-h-[600px] relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-orbitron tracking-widest text-sm uppercase flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-400/50"></span>
              The Quality Architect
            </h3>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold leading-tight">
              Precision. <span className="text-cyan-400 neon-text-blue">Quality.</span> <br />
              Reliability.
            </h2>
            
            <div className="relative glass p-8 rounded-3xl border-white/5 shadow-2xl overflow-hidden group">
              {/* Subtle background animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <p className="text-slate-200 text-lg leading-relaxed font-medium relative z-10">
                <span className="text-cyan-400 font-bold">{summaryText.slice(0, Math.min(index, introPart.length))}</span>
                {summaryText.slice(introPart.length)}
                <span className="text-cyan-400 animate-pulse ml-1 inline-block w-2 h-5 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
               <div className="relative group">
                 <motion.a 
                    href="mailto:royredoyguho@gmail.com" 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-all glass px-5 py-4 rounded-2xl border-cyan-500/20 hover:neon-border-blue bg-white/[0.02]"
                 >
                    <Mail size={20} className="text-cyan-400" />
                    <span className="text-xs font-orbitron tracking-widest">royredoyguho@gmail.com</span>
                 </motion.a>
                 <button 
                  onClick={copyEmail}
                  className="absolute -right-2 -top-2 p-2 bg-slate-900 border border-white/10 rounded-full text-slate-400 hover:text-cyan-400 transition-colors shadow-xl"
                  title="Copy Email"
                 >
                   {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                 </button>
               </div>

               <motion.a 
                  href="tel:+8801313731493" 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-all glass px-5 py-4 rounded-2xl border-purple-500/20 hover:border-purple-500/50 bg-white/[0.02]"
               >
                  <Phone size={20} className="text-purple-400" />
                  <span className="text-xs font-orbitron tracking-widest uppercase">+880 1313-731493</span>
               </motion.a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.5)' }}
              className="glass p-8 rounded-3xl border-l-4 border-cyan-500 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="text-cyan-400 mb-4 bg-cyan-400/10 w-fit p-3 rounded-xl"><Search size={28} /></div>
              <span className="block text-4xl font-bold font-orbitron text-white mb-1">500+</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Bugs Identified</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, borderColor: 'rgba(139, 92, 246, 0.5)' }}
              className="glass p-8 rounded-3xl border-l-4 border-purple-500 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="text-purple-400 mb-4 bg-purple-400/10 w-fit p-3 rounded-xl"><ShieldCheck size={28} /></div>
              <span className="block text-4xl font-bold font-orbitron text-white mb-1">50+</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Test Strategies</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative lg:pl-10">
          <h3 className="text-center lg:text-left text-cyan-400 font-orbitron tracking-widest text-sm uppercase mb-10 flex items-center justify-center lg:justify-start gap-3">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
             SDLC Framework
          </h3>
          <div className="relative border-l-2 border-cyan-500/20 ml-4 lg:ml-0 space-y-8">
            {SDLC_PHASES.map((phase, idx) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-10 group"
              >
                {/* Connector Node */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ${phase.color} shadow-[0_0_15px_currentColor] group-hover:scale-150 transition-transform z-10`}></div>
                
                {/* Content Card */}
                <div className="glass p-6 rounded-2xl group-hover:neon-border-blue transition-all transform group-hover:translate-x-3 relative overflow-hidden bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                     <span className="font-orbitron text-6xl font-black text-white">{idx + 1}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2 relative z-10">
                    <h4 className="font-orbitron text-[13px] font-bold text-white uppercase tracking-widest group-hover:text-cyan-400 transition-colors">{phase.phase}</h4>
                    <span className="text-[9px] text-slate-600 font-orbitron tracking-tighter">STEP 0{idx + 1}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

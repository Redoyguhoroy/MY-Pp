
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { BarChart3, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-cyan-400 font-orbitron tracking-widest text-sm uppercase mb-4">Case Studies</h3>
        <h2 className="text-4xl font-orbitron font-bold">Impactful Quality Assurance</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            className={`glass p-8 rounded-2xl cursor-pointer transition-all duration-500 border-t-2 ${activeIdx === idx ? 'border-cyan-500 bg-cyan-500/10 h-auto' : 'border-transparent hover:bg-white/5'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                <BarChart3 size={24} />
              </div>
              <span className="text-xs font-orbitron text-slate-500 uppercase tracking-tighter">{project.category}</span>
            </div>
            
            <h3 className="text-xl font-orbitron font-bold mb-4">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            <AnimatePresence>
              {activeIdx === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 pt-4 border-t border-white/10"
                >
                  <div className="grid grid-cols-1 gap-3">
                    {project.stats.map(stat => (
                      <div key={stat.label} className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">{stat.label}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '80%' }}
                                className="h-full bg-cyan-500"
                            ></motion.div>
                          </div>
                          <span className="text-cyan-400 font-bold">{stat.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-3 mt-4 flex items-center justify-center gap-2 text-xs font-orbitron tracking-widest text-cyan-400 hover:text-white transition-colors">
                    FULL DOCUMENTATION <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {!activeIdx && idx === activeIdx && (
                 <div className="text-xs text-slate-500 font-orbitron flex items-center gap-1 mt-4 animate-bounce">
                    Click to Expand
                </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

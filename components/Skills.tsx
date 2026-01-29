
import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-cyan-400 font-orbitron tracking-widest text-sm uppercase mb-4">Mastered Technologies</h3>
        <h2 className="text-4xl font-orbitron font-bold">My SQA Toolkit</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

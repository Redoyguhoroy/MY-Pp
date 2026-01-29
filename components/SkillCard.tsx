
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
// Fixed: Skill type should be imported from ../types, while ICON_MAP is in ../constants
import { ICON_MAP } from '../constants';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = ICON_MAP[skill.icon];

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass p-6 rounded-xl flex flex-col items-center justify-center space-y-4 group hover:neon-border-blue transition-all duration-300 cursor-pointer"
    >
      <div className={`${skill.color} p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform`}>
        {Icon && <Icon size={32} strokeWidth={1.5} />}
      </div>
      <span className="font-orbitron text-sm tracking-wider text-center group-hover:text-cyan-400 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillCard;

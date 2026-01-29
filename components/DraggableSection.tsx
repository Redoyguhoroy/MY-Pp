
import React from 'react';
import { motion } from 'framer-motion';

interface DraggableSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const DraggableSection: React.FC<DraggableSectionProps> = ({ children, className, id }) => {
  return (
    <motion.section
      id={id}
      drag
      dragMomentum={false}
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileDrag={{ scale: 1.02, zIndex: 40 }}
      className={`relative cursor-grab active:cursor-grabbing ${className}`}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-1 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
      </div>
      {children}
    </motion.section>
  );
};

export default DraggableSection;

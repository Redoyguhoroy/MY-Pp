
import React from 'react';
import { 
  ShieldCheck, 
  FileEdit, 
  Bug, 
  Workflow, 
  Users, 
  Settings, 
  Database, 
  Smartphone,
  CheckCircle2,
  Cpu,
  Zap,
  Layers
} from 'lucide-react';
import { Skill, Project, TimelineStep } from './types';

export const SKILLS: Skill[] = [
  { name: 'Manual Testing', icon: 'ShieldCheck', color: 'text-cyan-400' },
  { name: 'Test Case Writing', icon: 'FileEdit', color: 'text-blue-400' },
  { name: 'Bug Reporting', icon: 'Bug', color: 'text-red-400' },
  { name: 'SDLC', icon: 'Workflow', color: 'text-purple-400' },
  { name: 'Agile & Scrum', icon: 'Users', color: 'text-green-400' },
  { name: 'Jira', icon: 'Settings', color: 'text-orange-400' },
  { name: 'Selenium', icon: 'Layers', color: 'text-emerald-400' },
  { name: 'SQL & Database', icon: 'Database', color: 'text-amber-400' },
  { name: 'Mobile Testing', icon: 'Smartphone', color: 'text-indigo-400' },
];

export const PROJECTS: Project[] = [
  {
    title: 'FinTech App Validation',
    category: 'Finance / Security',
    description: 'Comprehensive end-to-end testing for a multi-currency digital banking platform.',
    stats: [
      { label: 'Bugs Identified', value: '150+' },
      { label: 'Test Coverage', value: '98%' },
      { label: 'Reliability', value: '+40%' }
    ]
  },
  {
    title: 'E-Commerce UI/UX Audit',
    category: 'Retail / Web',
    description: 'Manual and automated regression testing for high-traffic e-commerce storefronts.',
    stats: [
      { label: 'Latency Reduced', value: '200ms' },
      { label: 'Devices Tested', value: '12' },
      { label: 'Conversion', value: '+15%' }
    ]
  },
  {
    title: 'Healthcare API Integrity',
    category: 'Health / API',
    description: 'Performance testing and security vulnerability scans for medical record systems.',
    stats: [
      { label: 'API Endpoints', value: '45' },
      { label: 'Compliance', value: 'HIPAA' },
      { label: 'Security Score', value: 'A+' }
    ]
  }
];

export const SDLC_PHASES: TimelineStep[] = [
  { phase: 'Requirement Analysis', description: 'Gathering specifications and defining test objectives.', color: 'bg-cyan-500' },
  { phase: 'Test Planning', description: 'Developing strategy, resources, and environment setup.', color: 'bg-blue-500' },
  { phase: 'Test Case Development', description: 'Creating detailed scenarios and validation scripts.', color: 'bg-indigo-500' },
  { phase: 'Test Execution', description: 'Running tests and documenting results in real-time.', color: 'bg-purple-500' },
  { phase: 'Bug Fixing & Retesting', description: 'Reporting defects and verifying resolutions.', color: 'bg-pink-500' },
  { phase: 'Final Deployment', description: 'Ensuring production readiness and high quality.', color: 'bg-green-500' }
];

export const ICON_MAP: Record<string, any> = {
  ShieldCheck, FileEdit, Bug, Workflow, Users, Settings, Database, Smartphone, CheckCircle2, Cpu, Zap, Layers
};

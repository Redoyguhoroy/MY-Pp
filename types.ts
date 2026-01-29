
export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  stats: { label: string; value: string }[];
}

export interface TimelineStep {
  phase: string;
  description: string;
  color: string;
}

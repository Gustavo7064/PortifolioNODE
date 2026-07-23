export interface TechItem {
  name: string;
  category: 'language' | 'backend' | 'database' | 'tools' | 'frontend';
  level: 'Avançado' | 'Intermediário' | 'Básico';
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  youtubeUrl?: string;
  liveUrl?: string;
  featured: boolean;
  // Detail-page content
  objective: string;
  howItWasBuilt: string;
  features: string[];
  whatILearned: string;
  mindsetShift: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

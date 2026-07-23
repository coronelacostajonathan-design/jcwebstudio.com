export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  features: string[];
  techStack: string[];
  estimatedDays: string;
  startingPriceUSD: number;
  startingPricePYG: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  image: string;
  accentColor: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  demoType: 'restaurant' | 'electronics' | 'hardware' | 'supermarket' | 'clinic' | 'gym' | 'mechanic';
}

export interface FAQItem {
  id: string;
  category: 'general' | 'pagos' | 'tiempos' | 'servicios';
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
  icon: string;
}

export interface CalculatorState {
  businessType: string;
  projectType: string;
  domainHosting: boolean;
  advancedSEO: boolean;
  monthlyMaintenance: boolean;
  adminPanel: boolean;
  multiLanguage: boolean;
  whatsappBot: boolean;
  deliverySpeed: 'normal' | 'express';
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
}

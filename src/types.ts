import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  variant?: 'glass' | 'gradient' | 'solid';
  className?: string;
  hover?: boolean;
}

export interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export interface VideoPlaceholderProps {
  title: string;
  subtitle: string;
  aspectRatio: '16-9' | '9-16';
}

export interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  gradient: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

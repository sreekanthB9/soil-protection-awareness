export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface CardItem {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface TimelineWeek {
  week: number;
  title: string;
  summary: string;
  activities: readonly string[];
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface ProgressCard {
  title: string;
  value: number;
  max: number;
  color: string;
}

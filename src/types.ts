export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  startingPrice: string;
  typicalDuration: string;
  popularAddon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeImg?: string;
  afterImg: string;
  tag: string;
  duration: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  service: string;
  date: string;
  review: string;
  verified: boolean;
}

export interface EstimateSelection {
  serviceId: string;
  size: number;
  materialTier: 'economy' | 'standard' | 'premium';
  urgency: 'flexible' | 'within-month' | 'emergency';
}


export interface ClassItem {
  id: string;
  name: string;
  instructor: string;
  time: string;
  day: string;
  intensity: 'Low' | 'Medium' | 'High';
  category: 'Strength' | 'Cardio' | 'Yoga' | 'HIIT';
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface GeneratedAdvice {
  plan: string;
  imageUrl: string;
  loading: boolean;
}

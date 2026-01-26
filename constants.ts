
import { ClassItem, Trainer, PricingPlan } from './types';

export const CLASSES: ClassItem[] = [
  // Lunes - Mañana
  { id: 'm1', name: 'Powerlifting Élite', instructor: 'Marcos Vane', time: '08:00 AM', day: 'Lunes', intensity: 'High', category: 'Strength' },
  { id: 'm2', name: 'Yoga Vanguardia', instructor: 'Elena Sterling', time: '09:30 AM', day: 'Lunes', intensity: 'Low', category: 'Yoga' },
  { id: 'm3', name: 'Cross-Training Mañana', instructor: 'Javi Rico', time: '11:00 AM', day: 'Lunes', intensity: 'High', category: 'HIIT' },
  // Lunes - Tarde
  { id: 't1', name: 'HIIT Metabólico', instructor: 'Javi Rico', time: '05:00 PM', day: 'Lunes', intensity: 'High', category: 'HIIT' },
  { id: 't2', name: 'Zumba & Cardio', instructor: 'Elena Sterling', time: '06:30 PM', day: 'Lunes', intensity: 'Medium', category: 'Cardio' },
  { id: 't3', name: 'Fuerza Total', instructor: 'Marcos Vane', time: '08:00 PM', day: 'Lunes', intensity: 'High', category: 'Strength' },
  
  // Martes - Mañana
  { id: 'm4', name: 'Movilidad Articular', instructor: 'Elena Sterling', time: '08:30 AM', day: 'Martes', intensity: 'Low', category: 'Yoga' },
  { id: 'm5', name: 'Fuerza Funcional', instructor: 'Marcos Vane', time: '10:00 AM', day: 'Martes', intensity: 'Medium', category: 'Strength' },
  { id: 'm6', name: 'Cardio Box Mañana', instructor: 'Javi Rico', time: '11:30 AM', day: 'Martes', intensity: 'High', category: 'Cardio' },
  // Martes - Tarde
  { id: 't4', name: 'Pilates Tarde', instructor: 'Elena Sterling', time: '05:30 PM', day: 'Martes', intensity: 'Low', category: 'Yoga' },
  { id: 't5', name: 'Spartan WOD', instructor: 'Javi Rico', time: '07:00 PM', day: 'Martes', intensity: 'High', category: 'HIIT' },
  { id: 't6', name: 'Levantamiento Olímpico', instructor: 'Marcos Vane', time: '08:30 PM', day: 'Martes', intensity: 'High', category: 'Strength' },
];

export const TRAINERS: Trainer[] = [
  {
    id: 't1',
    name: 'Marcos Vane',
    specialty: 'Powerlifting y Hipertrofia',
    bio: 'Ex-atleta olímpico. Su enfoque en la técnica y su energía positiva te ayudarán a superar cualquier estancamiento.',
    imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Elena Sterling',
    specialty: 'Yoga y Movilidad',
    bio: 'Maestra de bienestar. Elena combina la calma del yoga con una sonrisa motivadora para mejorar tu salud física y mental.',
    imageUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Javi Rico',
    specialty: 'HIIT Cross-Funcional',
    bio: 'Energía pura de Cangas. Javi es conocido por su entusiasmo contagioso y sus entrenamientos de alta intensidad.',
    imageUrl: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=800&auto=format&fit=crop'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'p1',
    name: 'Esencial',
    price: 39,
    features: ['Acceso al Gimnasio', 'Vestuarios Premium', '2 Clases/Mes', 'App Móvil']
  },
  {
    id: 'p2',
    name: 'Élite',
    price: 69,
    features: ['Acceso Ilimitado', 'Todas las Clases Incluidas', '1 Sesión de Entrenamiento Personal', 'Plan de Nutrición'],
    isPopular: true
  },
  {
    id: 'p3',
    name: 'Forza Premium',
    price: 119,
    features: ['Acceso 24/7 Prioritario', 'Entrenamiento Personal Semanal', 'Plan de Comidas AI', 'Zona Spa y Recuperación']
  }
];

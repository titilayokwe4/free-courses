export interface Course {
  id: string; // slug
  image: string;
  badge?: string;
  level: string; // 'Beginner' | 'Intermediate' | 'Advanced'
  category: string; // e.g. 'Design', 'Development'
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  duration: string;
  students: number;
  price: number; // e.g., 15000
}

export const COURSES: Course[] = [
  {
    id: 'complete-ui-ux-design-masterclass',
    image: '/feature-courses/feature1.jpeg',
    badge: 'Featured',
    level: 'Beginner',
    category: 'Design',
    title: 'Complete UI/UX Design Masterclass',
    instructor: 'Sofia Reyes',
    rating: 4.9,
    reviews: 2840,
    duration: '42.5h',
    students: 18500,
    price: 15000,
  },
  {
    id: 'advanced-react-typescript',
    image: '/feature-courses/feature2.jpeg',
    badge: 'Featured',
    level: 'Advanced',
    category: 'Development',
    title: 'Advanced React & TypeScript',
    instructor: 'Marcus Chen',
    rating: 4.8,
    reviews: 1920,
    duration: '38h',
    students: 32100,
    price: 15000,
  },
  {
    id: 'portrait-photography-essentials',
    image: '/feature-courses/feature3.jpeg',
    badge: 'Featured',
    level: 'Beginner',
    category: 'Photography',
    title: 'Portrait Photography Essentials',
    instructor: 'Lena Hoffmann',
    rating: 4.9,
    reviews: 1450,
    duration: '24h',
    students: 12800,
    price: 15000,
  },
  {
    id: 'motion-design-with-after-effects',
    image: '/feature-courses/feature4.jpeg',
    badge: 'Featured',
    level: 'Intermediate',
    category: '3D & Animation',
    title: 'Motion Design with After Effects',
    instructor: 'James Okafor',
    rating: 4.7,
    reviews: 890,
    duration: '31.5h',
    students: 9200,
    price: 15000,
  },
  {
    id: 'digital-illustration-masterclass',
    image: '/feature-courses/feature4.jpeg',
    level: 'Beginner',
    category: 'Illustration',
    title: 'Digital Illustration Masterclass',
    instructor: 'Aiko Tanaka',
    rating: 4.9,
    reviews: 750,
    duration: '18h',
    students: 6400,
    price: 15000,
  },
  {
    id: 'growth-marketing-blueprint',
    image: '/feature-courses/feature2.jpeg',
    level: 'Intermediate',
    category: 'Marketing',
    title: 'Growth Marketing Blueprint',
    instructor: 'Carlos Mendez',
    rating: 4.6,
    reviews: 1120,
    duration: '28h',
    students: 8300,
    price: 15000,
  },
  {
    id: 'electronic-music-production',
    image: '/feature-courses/feature1.jpeg',
    level: 'Advanced',
    category: 'Music',
    title: 'Electronic Music Production',
    instructor: 'James Okafor',
    rating: 4.8,
    reviews: 620,
    duration: '35h',
    students: 4500,
    price: 15000,
  },
  {
    id: 'creative-writing-fundamentals',
    image: '/feature-courses/feature3.jpeg',
    level: 'Beginner',
    category: 'Writing',
    title: 'Creative Writing Fundamentals',
    instructor: 'Lena Hoffmann',
    rating: 4.7,
    reviews: 540,
    duration: '15h',
    students: 3800,
    price: 15000,
  }
];

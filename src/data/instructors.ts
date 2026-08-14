export interface Instructor {
  id: string; // slug, e.g. 'lena-hoffmann'
  name: string;
  image: string;
  specialty: string;
  description: string;
  rating: number;
  students: string; // e.g. "18K" or "18,000"
  courses: number;
}

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'lena-hoffmann',
    name: 'Lena Hoffmann',
    image: '/instructors/instructor1.svg',
    specialty: 'Photography',
    description: 'Professional photographer and educator based in Berlin. Published in Vogue, National Geographic, and Time Magazine.',
    rating: 4.9,
    students: '18,000',
    courses: 6
  },
  {
    id: 'james-okafor',
    name: 'James Okafor',
    image: '/instructors/instructor2.svg',
    specialty: '3D & Motion Design',
    description: 'Motion designer and creative director. Co-founder of a boutique animation studio. Clients include Nike and Apple.',
    rating: 4.7,
    students: '22,000',
    courses: 5
  },
  {
    id: 'aiko-tanaka',
    name: 'Aiko Tanaka',
    image: '/instructors/instructor3.svg',
    specialty: 'Illustration',
    description: 'Illustrator and concept artist for games and animation. Former Pixar and DreamWorks artist.',
    rating: 4.9,
    students: '31,000',
    courses: 7
  },
  {
    id: 'sofia-reyes',
    name: 'Sofia Reyes',
    image: '/instructors/instructor1.svg',
    specialty: 'UI/UX Design',
    description: 'Award-winning UX designer with 10+ years crafting digital experiences for Fortune 500 companies.',
    rating: 4.9,
    students: '42,000',
    courses: 8
  },
  {
    id: 'carlos-mendez',
    name: 'Carlos Mendez',
    image: '/instructors/instructor2.svg',
    specialty: 'Digital Marketing',
    description: 'Growth marketer who has scaled 3 startups from 0 to $10M ARR. Expert in SEO, paid acquisition, and analytics.',
    rating: 4.7,
    students: '54,000',
    courses: 9
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    image: '/instructors/instructor3.svg',
    specialty: 'Web Development',
    description: 'Full-stack engineer and open source contributor. Built products used by millions. Passionate about teaching code.',
    rating: 4.8,
    students: '78,000',
    courses: 12
  }
];

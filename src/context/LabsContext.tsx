import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

export interface Project {
  id: string;
  image: string;
  title: string;
  authorHandle: string;
  likes: number;
  views: number;
  category: string;
  description: string;
  relatedCourse?: string;
  socialMediaPlatform?: string;
  socialMediaHandle?: string;
  comments: Comment[];
  isLikedByUser?: boolean;
}

interface LabsContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'likes' | 'views' | 'comments'>) => void;
  toggleLikeProject: (id: string) => void;
  addCommentToProject: (projectId: string, author: string, text: string) => void;
}

const LabsContext = createContext<LabsContextType | undefined>(undefined);

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'minimal-product-landing-page',
    image: '/feature-courses/feature1.jpeg',
    title: 'Minimal Product Landing Page',
    authorHandle: 'ade_creates',
    likes: 47,
    views: 1240,
    category: 'Design',
    description: 'A clean and minimalist product landing page designed to maximize conversions. Focuses on whitespace, striking typography, and bold call-to-actions.',
    comments: [
      { id: '1', author: '@temi_design', text: 'Beautiful layout! The spacing is spot on.', timestamp: '2h ago' }
    ]
  },
  {
    id: 'saas-dashboard-ui-kit',
    image: '/feature-courses/feature2.jpeg',
    title: 'SaaS Dashboard UI Kit',
    authorHandle: 'kolade_dev',
    likes: 12,
    views: 388,
    category: 'Design',
    description: 'A comprehensive, modern dashboard UI kit built for complex SaaS platforms. Includes widgets, data grids, charts, and dark mode variations.',
    comments: []
  },
  {
    id: 'mist-and-mountains-golden-hour',
    image: '/feature-courses/feature3.jpeg',
    title: 'Mist & Mountains — Golden Hour Series',
    authorHandle: 'fatima_lens',
    likes: 89,
    views: 2311,
    category: 'Photography',
    description: 'Shot at sunrise in Jos, Nigeria. This series explores the interplay of mist, light, and the highland terrain. Edited with a warm, filmic look.',
    socialMediaPlatform: 'Instagram',
    socialMediaHandle: '@fatima.lens',
    comments: [
      { id: 'c1', author: '@temi_design', text: 'This is stunning work! The color palette is really well chosen.', timestamp: '3h ago' },
      { id: 'c2', author: '@femi_codes', text: 'Really impressive — did you use any particular reference for the composition?', timestamp: '1h ago' }
    ]
  },
  {
    id: 'abstract-art-explorations',
    image: '/feature-courses/feature4.jpeg',
    title: 'Abstract Art Explorations',
    authorHandle: 'chidi_arts',
    likes: 34,
    views: 910,
    category: 'Illustration',
    description: 'A collection of digital and physical abstract paintings capturing motion and emotion through vibrant colors and organic strokes.',
    comments: []
  },
  {
    id: 'ecommerce-mobile-app-flow',
    image: '/feature-courses/feature2.jpeg',
    title: 'E-commerce Mobile App Flow',
    authorHandle: 'sarah_ui',
    likes: 156,
    views: 4200,
    category: 'Design',
    description: 'A seamless mobile check-out experience for a luxury apparel store. Features optimized forms, one-tap payment, and beautiful animations.',
    comments: []
  },
  {
    id: 'brand-identity-ecopack',
    image: '/feature-courses/feature3.jpeg',
    title: 'Brand Identity for EcoPack',
    authorHandle: 'design_by_ola',
    likes: 67,
    views: 1850,
    category: 'Marketing',
    description: 'Full branding project for a sustainable packaging startup. Includes logo, typography system, color guide, and package design assets.',
    comments: []
  },
  {
    id: 'react-native-habit-tracker',
    image: '/feature-courses/feature1.jpeg',
    title: 'React Native Habit Tracker',
    authorHandle: 'dev_sam',
    likes: 102,
    views: 3100,
    category: 'Development',
    description: 'A fully-functional cross-platform mobile app built with React Native and Expo to track and cultivate positive habits. Features local notifications and progress charts.',
    comments: []
  },
  {
    id: 'character-design-sketches',
    image: '/feature-courses/feature4.jpeg',
    title: 'Character Design Sketches',
    authorHandle: 'ani_sketches',
    likes: 45,
    views: 890,
    category: 'Illustration',
    description: 'Drafts and concept art sketches for a fantasy graphic novel, exploring different silhouettes, costumes, and expressions.',
    comments: []
  }
];

export const LabsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('freecourses_projects');
    return saved ? JSON.parse(saved) : DEFAULT_PROJECTS;
  });

  useEffect(() => {
    localStorage.setItem('freecourses_projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (projectData: Omit<Project, 'id' | 'likes' | 'views' | 'comments'>) => {
    const slug = projectData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newProject: Project = {
      ...projectData,
      id: slug || `project-${Date.now()}`,
      likes: 0,
      views: 1, // Start with 1 view
      comments: []
    };
    setProjects((prev) => [newProject, ...prev]);
  };

  const toggleLikeProject = (id: string) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === id) {
          const isLiked = !proj.isLikedByUser;
          return {
            ...proj,
            isLikedByUser: isLiked,
            likes: isLiked ? proj.likes + 1 : proj.likes - 1
          };
        }
        return proj;
      })
    );
  };

  const addCommentToProject = (projectId: string, author: string, text: string) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === projectId) {
          const newComment: Comment = {
            id: `comment-${Date.now()}`,
            author: author.startsWith('@') ? author : `@${author}`,
            text,
            timestamp: 'Just now'
          };
          return {
            ...proj,
            comments: [...proj.comments, newComment]
          };
        }
        return proj;
      })
    );
  };

  return (
    <LabsContext.Provider value={{ projects, addProject, toggleLikeProject, addCommentToProject }}>
      {children}
    </LabsContext.Provider>
  );
};

export const useLabs = () => {
  const context = useContext(LabsContext);
  if (!context) {
    throw new Error('useLabs must be used within a LabsProvider');
  }
  return context;
};

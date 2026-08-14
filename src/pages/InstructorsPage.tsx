import React from 'react';
import { Header } from '../components/Header';
import { InstructorCard } from '../components/InstructorCard';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';

export const InstructorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#070A31] font-sans transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Our Instructors</h1>
          <p className="text-gray-500 dark:text-gray-400">Learn from industry-leading professionals with real-world experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InstructorCard 
            image="/instructors/instructor1.svg"
            name="Lena Hoffmann"
            specialty="Photography"
            description="Professional photographer and educator based in Berlin. Published in Vogue, National Geographic, and more."
            rating={4.9}
            students="18K"
            courses={6}
          />
          <InstructorCard 
            image="/instructors/instructor2.svg"
            name="James Okafor"
            specialty="3D & Motion Design"
            description="Motion designer and creative director. Co-founder of a boutique animation studio. Clients include Nike and Apple."
            rating={4.7}
            students="22K"
            courses={5}
          />
          <InstructorCard 
            image="/instructors/instructor3.svg"
            name="Aiko Tanaka"
            specialty="Illustration"
            description="Illustrator and concept artist for games and animation. Former Pixar and DreamWorks artist."
            rating={4.9}
            students="31K"
            courses={7}
          />
          
          {/* Mock instructors for the grid based on the screenshot showing 6 instructors */}
          <InstructorCard 
            image="/instructors/instructor1.svg" 
            name="Sofia Reyes"
            specialty="UI/UX Design"
            description="Award-winning UX designer with 10+ years crafting digital experiences for Fortune 500 companies."
            rating={4.9}
            students="42K"
            courses={8}
          />
          <InstructorCard 
            image="/instructors/instructor2.svg"
            name="Carlos Mendez"
            specialty="Digital Marketing"
            description="Growth marketer who has scaled 3 startups from 0 to $10M ARR. Expert in SEO, paid acquisition, and analytics."
            rating={4.7}
            students="54K"
            courses={9}
          />
          <InstructorCard 
            image="/instructors/instructor3.svg"
            name="Marcus Chen"
            specialty="Web Development"
            description="Full-stack engineer and open source contributor. Built products used by millions. Passionate about teaching code."
            rating={4.8}
            students="78K"
            courses={12}
          />
        </div>
      </main>

      <LearningAdvantage />
      <Footer />
    </div>
  );
};

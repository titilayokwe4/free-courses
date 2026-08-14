import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { CategoryCard } from '../components/CategoryCard';
import { CourseCard } from '../components/CourseCard';
import { InstructorCard } from '../components/InstructorCard';
import { PlanCard } from '../components/PlanCard';
import { Button } from '../components/Button';
import { HeroCarousel } from '../components/HeroCarousel';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#070A31] font-sans text-gray-900 dark:text-white transition-colors duration-300">
      <Header />

      <main>
        <HeroCarousel />
        {/* Categories Section */}
        <section className="bg-[#FAFBFC] dark:bg-[#11143B] py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#080A33] dark:text-white">Browse courses in your area of interest</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <CategoryCard icon="🎬" title="3D & Animation" courseCount={11} />
            <CategoryCard icon="🎨" title="Design" courseCount={24} />
            <CategoryCard icon="💻" title="Development" courseCount={38} />
            <CategoryCard icon="✏️" title="Illustration" courseCount={12} />
            <CategoryCard icon="📈" title="Marketing" courseCount={18} />
            <CategoryCard icon="🎵" title="Music" courseCount={9} />
            <CategoryCard icon="📷" title="Photography" courseCount={15} />
            <CategoryCard icon="📝" title="Writing" courseCount={14} />
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              className="!rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-[#070A31] border-gray-200 dark:border-[#23264A] hover:bg-gray-50 dark:hover:bg-[#1e1e36]"
              onClick={() => window.location.href = '/categories'}
            >
              Browse All Categories <span className="ml-2">→</span>
            </Button>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-20 bg-white dark:bg-[#070A31] border-t border-gray-100 dark:border-[#23264A] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#080A33] dark:text-white mb-2">Featured Courses</h2>
              <p className="text-gray-500 dark:text-gray-400">Handpicked by our editorial team</p>
            </div>
            <a href="/courses" className="text-brand-secondary font-medium hover:underline flex items-center">
              View all <span className="ml-1">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CourseCard 
              image="/feature-courses/feature1.jpeg"
              badge="Featured"
              level="Beginner"
              category="Design"
              title="Complete UI/UX Design Masterclass"
              instructor="Sofia Reyes"
              rating={4.9}
              reviews={2840}
              duration="42.5h"
              students={18500}
              price="N15,000"
            />
            <CourseCard 
              image="/feature-courses/feature2.jpeg"
              badge="Featured"
              level="Advanced"
              category="Development"
              title="Advanced React & TypeScript"
              instructor="Marcus Chen"
              rating={4.8}
              reviews={1920}
              duration="38h"
              students={32100}
              price="N15,000"
            />
            <CourseCard 
              image="/feature-courses/feature3.jpeg"
              badge="Featured"
              level="Beginner"
              category="Photography"
              title="Portrait Photography Essentials"
              instructor="Lena Hoffmann"
              rating={4.9}
              reviews={1450}
              duration="24h"
              students={12800}
              price="N15,000"
            />
            <CourseCard 
              image="/feature-courses/feature4.jpeg"
              badge="Featured"
              level="Intermediate"
              category="3D & Animation"
              title="Motion Design with After Effects"
              instructor="James Okafor"
              rating={4.7}
              reviews={890}
              duration="31.5h"
              students={9200}
              price="N15,000"
            />
          </div>
        </section>

        {/* Top Instructors Section */}
        <section className="py-20 bg-white dark:bg-[#070A31] border-t border-gray-100 dark:border-[#23264A] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#080A33] dark:text-white mb-2">Top Instructors</h2>
              <p className="text-gray-500 dark:text-gray-400">Learn from industry-leading experts</p>
            </div>
            <a href="/instructors" className="text-brand-secondary font-medium hover:underline flex items-center">
              View all <span className="ml-1">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InstructorCard 
              image="/instructors/instructor1.svg"
              name="Lena Hoffmann"
              specialty="Photography"
              rating={4.9}
              students="18K"
              courses={6}
            />
            <InstructorCard 
              image="/instructors/instructor2.svg"
              name="James Okafor"
              specialty="3D & Motion Design"
              rating={4.7}
              students="22K"
              courses={5}
            />
            <InstructorCard 
              image="/instructors/instructor3.svg"
              name="Aiko Tanaka"
              specialty="Illustration"
              rating={4.9}
              students="31K"
              courses={7}
            />
          </div>
        </section>

        {/* Subscribe Section (Dark Theme) */}
        <section className="py-24 bg-[#080A33]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Multiple Plans</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Combine plans to unlock exactly what you need. Start with Starter, upgrade to Pro, or bring your whole team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <PlanCard title="Starter" price="$12.99" />
              <PlanCard title="Pro" price="$29.99" isPopular />
              <PlanCard title="Teams" price="$49.99" />
            </div>

            <div className="text-center">
              <Link to="/pricing">
                <Button className="!rounded-lg bg-brand-secondary text-[#080A33] hover:bg-brand-secondary-hover border-none font-bold px-8">
                  Compare All Plans <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <LearningAdvantage />
      </main>

      <Footer />
    </div>
  );
};

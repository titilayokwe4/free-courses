import React from 'react';
import { Header } from '../components/Header';
import { CategoryCard } from '../components/CategoryCard';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';

export const CategoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Browse Categories
          </h1>

          <p className="text-text-secondary">
            Explore all learning disciplines available on LearnHub
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            icon="🎬"
            title="3D & Animation"
            courseCount={11}
          />

          <CategoryCard
            icon="🎨"
            title="Design"
            courseCount={24}
          />

          <CategoryCard
            icon="💻"
            title="Development"
            courseCount={38}
          />

          <CategoryCard
            icon="✏️"
            title="Illustration"
            courseCount={12}
          />

          <CategoryCard
            icon="📈"
            title="Marketing"
            courseCount={18}
          />

          <CategoryCard
            icon="🎵"
            title="Music"
            courseCount={9}
          />

          <CategoryCard
            icon="📷"
            title="Photography"
            courseCount={15}
          />

          <CategoryCard
            icon="📝"
            title="Writing"
            courseCount={14}
          />
        </div>
      </main>

      <LearningAdvantage />
      <Footer />
    </div>
  );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  icon: string;
  title: string;
  courseCount: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, courseCount }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/courses?category=${encodeURIComponent(title)}`)}
      className="group bg-white dark:bg-[#11143B] border border-[#E1E7F0] dark:border-[#23264A] hover:border-[#00E676] dark:hover:border-[#00E676] rounded-2xl py-4 px-6 hover:shadow-md transition-all cursor-pointer flex flex-col items-start text-left w-full"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-secondary mb-1">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{courseCount} courses</p>
    </div>
  );
};

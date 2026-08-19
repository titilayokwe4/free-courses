import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  icon: string;
  title: string;
  courseCount: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  courseCount,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/courses?category=${encodeURIComponent(title)}`)
      }
      className="
        group
        bg-white
        dark:bg-[#333333]
        border
        border-gray-200
        dark:border-white/10
        hover:border-brand-secondary
        dark:hover:border-brand-secondary
        rounded-2xl
        py-4
        px-6
        hover:shadow-md
        transition-all
        cursor-pointer
        flex
        flex-col
        items-start
        text-left
        w-full
      "
    >
      {/* Category Icon */}
      <div className="text-3xl mb-2">
        {icon}
      </div>

      {/* Category Title */}
      <h3
        className="
          text-lg
          font-semibold
          text-gray-900
          dark:text-white
          group-hover:text-brand-secondary
          mb-1
        "
      >
        {title}
      </h3>

      {/* Course Count */}
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {courseCount} courses
      </p>
    </div>
  );
};

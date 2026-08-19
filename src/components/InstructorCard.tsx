import React from 'react';
import { Star, Users, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface InstructorCardProps {
  id?: string;
  image: string;
  name: string;
  specialty: string;
  description?: string;
  rating: number;
  students: string;
  courses: number;
}

export const InstructorCard: React.FC<InstructorCardProps> = ({
  id,
  image,
  name,
  specialty,
  description,
  rating,
  students,
  courses,
}) => {
  const navigate = useNavigate();

  const slug =
    id ||
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  return (
    <div
      onClick={() => navigate(`/instructors/${slug}`)}
      className="
        bg-white
        dark:bg-surface
        border
        border-gray-100
        dark:border-border
        hover:border-brand-primary
        dark:hover:border-brand-primary
        rounded-2xl
        p-6
        flex
        flex-col
        items-start
        gap-4
        hover:shadow-md
        transition-all
        cursor-pointer
        w-full
        text-left
      "
    >

      {/* Instructor Header */}
      <div className="flex items-center gap-4 w-full">

        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 dark:bg-background flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">

          <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-0.5">
            {name}
          </h3>

          {/* Updated specialty color for better contrast */}
          <p className="text-sm font-medium text-[#15803D] mb-1">
            {specialty}
          </p>

        </div>

      </div>


      {/* Description */}
      {description && (
        <p className="text-sm text-gray-500 dark:text-text-secondary line-clamp-2 mt-1 mb-2">
          {description}
        </p>
      )}


      {/* Instructor Stats */}
      <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-text-secondary mt-auto pt-2">

        {/* Rating */}
        <div className="flex items-center gap-1">

          <Star
            size={14}
            className="text-brand-primary fill-brand-primary"
          />

          <span className="font-semibold text-gray-700 dark:text-text-primary">
            {rating.toFixed(1)}
          </span>

        </div>


        {/* Students */}
        <div className="flex items-center gap-1">

          <Users
            size={14}
            className="text-brand-secondary"
          />

          <span>
            {students} students
          </span>

        </div>


        {/* Courses */}
        <div className="flex items-center gap-1">

          <BookOpen
            size={14}
            className="text-brand-secondary"
          />

          <span>
            {courses} courses
          </span>

        </div>

      </div>

    </div>
  );
};
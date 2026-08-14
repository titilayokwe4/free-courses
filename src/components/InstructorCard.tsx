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
  const slug = id || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <div 
      onClick={() => navigate(`/instructors/${slug}`)}
      className="bg-white dark:bg-[#11143B] border border-gray-100 dark:border-[#23264A] hover:border-brand-primary dark:hover:border-brand-primary rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition-all cursor-pointer w-full text-left"
    >
      <div className="flex items-center gap-4 w-full">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-0.5">{name}</h3>
          <p className="text-sm font-medium text-brand-primary mb-1">{specialty}</p>
        </div>
      </div>

      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1 mb-2">
          {description}
        </p>
      )}
      
      <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400 mt-auto pt-2">
        <div className="flex items-center gap-1">
          <Star size={14} className="text-amber-400 fill-amber-400" />
          <span className="font-semibold text-gray-700 dark:text-gray-300">{rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={14} className="text-gray-400" />
          <span>{students} students</span>
        </div>
        <div className="flex items-center gap-1">
          <BookOpen size={14} className="text-gray-400" />
          <span>{courses} courses</span>
        </div>
      </div>
    </div>
  );
};

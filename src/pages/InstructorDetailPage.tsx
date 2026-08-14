import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Users, BookOpen, ChevronLeft } from 'lucide-react';
import { Header } from '../components/Header';
import { CourseCard } from '../components/CourseCard';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';
import { INSTRUCTORS } from '../data/instructors';
import { COURSES } from '../data/courses';

export const InstructorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find instructor by ID (slug), fallback to Lena Hoffmann if not found
  const instructor = INSTRUCTORS.find((inst) => inst.id === id) || INSTRUCTORS[0];

  // Filter courses by this instructor
  const instructorCourses = COURSES.filter(
    (course) => course.instructor.toLowerCase() === instructor.name.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#070A31] font-sans transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-20">
        {/* Back Link */}
        <Link 
          to="/instructors" 
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Instructors
        </Link>

        {/* Instructor Profile Header Card */}
        <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-3xl p-8 md:p-10 mb-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 transition-colors duration-300">
          {/* Avatar Container */}
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-gray-50 dark:bg-gray-800 border-4 border-gray-100 dark:border-[#23264A] flex-shrink-0">
            <img 
              src={instructor.image} 
              alt={instructor.name} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {instructor.name}
              </h1>
              <p className="text-lg font-semibold text-brand-primary">
                {instructor.specialty}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-md leading-relaxed max-w-3xl">
              {instructor.description}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-4">
              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/10 rounded-xl flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Star size={20} fill="currentColor" />
                </div>
                <div className="text-left">
                  <div className="text-md font-bold text-gray-900 dark:text-white leading-tight">
                    {instructor.rating.toFixed(1)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Instructor rating
                  </div>
                </div>
              </div>

              {/* Students */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <Users size={20} />
                </div>
                <div className="text-left">
                  <div className="text-md font-bold text-gray-900 dark:text-white leading-tight">
                    {instructor.students}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Students
                  </div>
                </div>
              </div>

              {/* Courses */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/10 rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0">
                  <BookOpen size={20} />
                </div>
                <div className="text-left">
                  <div className="text-md font-bold text-gray-900 dark:text-white leading-tight">
                    {instructor.courses}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Courses
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructor Courses List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Courses by {instructor.name}
          </h2>

          {instructorCourses.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No courses listed yet for this instructor.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructorCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  image={course.image}
                  badge={course.badge}
                  level={course.level}
                  category={course.category}
                  title={course.title}
                  instructor={course.instructor}
                  rating={course.rating}
                  reviews={course.reviews}
                  duration={course.duration}
                  students={course.students}
                  price={`₦${course.price.toLocaleString()}`}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <LearningAdvantage />
      <Footer />
    </div>
  );
};

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Users, Play, ChevronLeft, Check, Award, BarChart } from 'lucide-react';
import { Header } from '../components/Header';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';
import { COURSES } from '../data/courses';
import { INSTRUCTORS } from '../data/instructors';
import { useCart } from '../context/CartContext';

export const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, cartItems } = useCart();

  // Find current course, fallback to first course (UI/UX)
  const course = COURSES.find((c) => c.id === id) || COURSES[0];

  // Find instructor
  const instructor = INSTRUCTORS.find(
    (inst) => inst.name.toLowerCase() === course.instructor.toLowerCase()
  ) || INSTRUCTORS[3]; // Sofia Reyes as fallback

  const isAdded = cartItems.some((item) => item.title.toLowerCase() === course.title.toLowerCase());

  const handleAddToCart = () => {
    if (isAdded) return;
    addToCart({
      title: course.title,
      instructor: course.instructor,
      image: course.image,
      price: course.price,
    });
  };

  // Curated lessons based on category
  const defaultLessons = [
    {
      title: 'Design complete user interfaces from scratch',
      duration: '4:07',
      image: '/feature-courses/feature1.jpeg',
    },
    {
      title: 'Conduct user research and usability testing',
      duration: '3:45',
      image: '/feature-courses/feature2.jpeg',
    },
    {
      title: 'Build design systems and component libraries',
      duration: '5:12',
      image: '/feature-courses/feature3.jpeg',
    },
    {
      title: 'Create interactive prototypes in Figma',
      duration: '3:58',
      image: '/feature-courses/feature4.jpeg',
    },
  ];

  const devLessons = [
    {
      title: 'Setup clean React architecture and tooling',
      duration: '6:15',
      image: '/feature-courses/feature2.jpeg',
    },
    {
      title: 'State management and component lifecycle',
      duration: '8:40',
      image: '/feature-courses/feature1.jpeg',
    },
    {
      title: 'Asynchronous API integration and Hooks',
      duration: '10:20',
      image: '/feature-courses/feature3.jpeg',
    },
    {
      title: 'Unit and integration testing of components',
      duration: '7:55',
      image: '/feature-courses/feature4.jpeg',
    },
  ];

  const lessons = course.category.toLowerCase().includes('dev') ? devLessons : defaultLessons;

  // Curated reviews
  const reviewsList = [
    {
      name: 'Alex Rivera',
      rating: 5,
      avatar: 'AR',
      text: 'This course completely changed how I approach design. Sofia is an incredible teacher — patient, thorough, and inspiring. Worth every penny.',
    },
    {
      name: 'Priya Nair',
      rating: 5,
      avatar: 'PN',
      text: 'The Figma deep-dive alone is worth the price. I went from zero to designing production-ready interfaces in 4 weeks.',
    },
    {
      name: 'Tom Walsh',
      rating: 4,
      avatar: 'TW',
      text: 'Excellent content and structure. Some sections could be condensed, but overall a fantastic learning experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#070A31] font-sans transition-colors duration-300">
      <Header />

      {/* Dark Navy Banner Header Section */}
      <div className="bg-[#0B0F3B] dark:bg-[#060822] text-white py-12 md:py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex gap-2">
                <span className="bg-[#1ABC9C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {course.level}
                </span>
                <span className="bg-[#5A12EC] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {course.category}
                </span>
              </div>

              <h1 className="text-[#FFFFFF] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-gray-300 text-md md:text-lg max-w-3xl leading-relaxed">
                Master the full design process from research to high-fidelity prototypes. Learn industry best practices, layout compositions, typography rules, and interactive elements used at top tech companies.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-300">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold text-white">{course.rating.toFixed(1)}</span>
                  <span className="text-gray-400">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                <div className="flex items-center gap-1.5">
                  <Users size={16} className="text-gray-400" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                <div className="flex items-center gap-1.5">
                  <Clock size={16} className="text-gray-400" />
                  <span>{course.duration} total</span>
                </div>
              </div>
            </div>

            {/* Right Card Spacer for large screens */}
            <div className="hidden lg:block"></div>
          </div>

        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-32 lg:-mt-40 mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12 pt-28 md:pt-40 lg:pt-44">
            
            {/* What you'll learn */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What you'll learn</h2>
                <span className="bg-emerald-50 dark:bg-emerald-950/20 text-[#1ABC9C] text-xs font-semibold px-2.5 py-1 rounded-md">
                  4 video lessons
                </span>
              </div>

              {/* Grid of video lessons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {lessons.map((lesson, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-40 overflow-hidden bg-gray-900 flex items-center justify-center">
                      <img src={lesson.image} alt={lesson.title} className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#1ABC9C]/90 hover:bg-[#1ABC9C] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer">
                          <Play size={18} fill="currentColor" className="ml-1" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {lesson.duration}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div className="flex gap-2 items-start mb-4">
                        <Check size={16} className="text-[#1ABC9C] mt-0.5 flex-shrink-0" />
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                          {lesson.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-[8px]">
                          {course.instructor.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {course.instructor}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="border-t border-gray-100 dark:border-[#23264A] pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300 pl-2">
                <li>No prior design or development experience needed.</li>
                <li>A computer (Mac or Windows) with internet access.</li>
                <li>Figma account (for design courses) or Code Editor (for coding courses).</li>
              </ul>
            </div>

            {/* Instructor */}
            <div className="border-t border-gray-100 dark:border-[#23264A] pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Instructor</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] p-6 rounded-2xl">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-[#23264A] flex-shrink-0 self-start">
                  <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                </div>
                {/* Bio Details */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{instructor.name}</h3>
                  <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider">{instructor.specialty}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pt-1">
                    {instructor.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Student Reviews */}
            <div className="border-t border-gray-100 dark:border-[#23264A] pt-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                Student Reviews
              </h2>

              <div className="space-y-4">
                {reviewsList.map((review, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#11143B] border border-gray-100 dark:border-[#23264A] p-5 rounded-2xl space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-xs text-gray-700 dark:text-gray-300">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-none">{review.name}</h4>
                        <div className="flex text-amber-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar Column (Sticky course info and includes) */}
          <div className="space-y-6">
            
            {/* Box 1: Sticky Course Summary Box (Consolidated) */}
            <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-3xl overflow-hidden shadow-xl sticky top-24">
              
              {/* Preview Image with Play Button */}
              <div className="relative h-48 bg-gray-900 flex items-center justify-center">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-16 h-16 rounded-full bg-white/95 text-brand-primary flex items-center justify-center shadow-2xl transition-transform hover:scale-105 cursor-pointer">
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              </div>

              {/* Details & Action area */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="text-3xl font-extrabold text-gray-950 dark:text-white">
                  ₦{course.price.toLocaleString()}
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => {
                      alert('Redirecting to login...');
                      window.location.href = '/login';
                    }}
                    className="w-full bg-[#5A12EC] hover:bg-brand-primary-hover text-white py-3.5 px-4 rounded-xl font-bold transition-all shadow-md cursor-pointer text-sm"
                  >
                    Log in to Enroll
                  </button>

                  <button
                    onClick={handleAddToCart}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer text-sm ${
                      isAdded
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 text-[#1ABC9C] border-emerald-200 dark:border-emerald-900/30'
                        : 'bg-white dark:bg-[#11143B] border-gray-200 dark:border-[#23264A] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1e1e36]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check size={16} />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <span>Add to Cart</span>
                    )}
                  </button>
                </div>

                <div className="text-center text-xs text-gray-400">
                  30-day money-back guarantee
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 dark:border-[#23264A] mx-6 md:mx-8"></div>

              {/* Includes Box Section (Placed together in the sticky container) */}
              <div className="p-6 md:p-8 space-y-6">
                <h3 className="text-md font-bold text-gray-950 dark:text-white">
                  This course includes
                </h3>
                
                <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <Clock size={18} className="text-[#1ABC9C] flex-shrink-0" />
                    <span>{course.duration} hours of content</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Play size={18} className="text-[#1ABC9C] flex-shrink-0" />
                    <span>4 lessons</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BarChart size={18} className="text-[#1ABC9C] flex-shrink-0" />
                    <span>Skill level: {course.level}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award size={18} className="text-[#1ABC9C] flex-shrink-0" />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </div>

      <LearningAdvantage />
      <Footer />
    </div>
  );
};

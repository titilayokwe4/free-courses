import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  Clock,
  Users,
  Play,
  ChevronLeft,
  Check,
  Award,
  BarChart
} from 'lucide-react';
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
  const instructor =
    INSTRUCTORS.find(
      (inst) =>
        inst.name.toLowerCase() === course.instructor.toLowerCase()
    ) || INSTRUCTORS[3];

  const isAdded = cartItems.some(
    (item) => item.title.toLowerCase() === course.title.toLowerCase()
  );

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

  const lessons = course.category.toLowerCase().includes('dev')
    ? devLessons
    : defaultLessons;

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
    <div className="min-h-screen bg-background text-text-primary font-sans transition-colors duration-300">
      <Header />

      {/* =========================================================
          COURSE HERO
      ========================================================= */}
      <div className="bg-[#0B0F3B] dark:bg-[#060822] text-white py-12 md:py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            to="/courses"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">

                {/* Level */}
                <span className="bg-brand-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {course.level}
                </span>

                {/* Category */}
                <span className="bg-brand-primary text-[#080A33] text-xs font-semibold px-3 py-1 rounded-full">
                  {course.category}
                </span>

              </div>

              {/* Title */}
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-gray-200 text-md md:text-lg max-w-3xl leading-relaxed">
                Master the full design process from research to
                high-fidelity prototypes. Learn industry best practices,
                layout compositions, typography rules, and interactive
                elements used at top tech companies.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-200">

                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star size={16} fill="currentColor" />

                  <span className="font-bold text-white">
                    {course.rating.toFixed(1)}
                  </span>

                  <span className="text-gray-300">
                    ({course.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />

                <div className="flex items-center gap-1.5">
                  <Users size={16} className="text-gray-300" />
                  <span>
                    {course.students.toLocaleString()} students
                  </span>
                </div>

                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />

                <div className="flex items-center gap-1.5">
                  <Clock size={16} className="text-gray-300" />
                  <span>
                    {course.duration} total
                  </span>
                </div>

              </div>
            </div>

            {/* Right Card Spacer */}
            <div className="hidden lg:block" />

          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-32 lg:-mt-40 mb-20 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* =====================================================
              MAIN COLUMN
          ===================================================== */}
          <div className="lg:col-span-2 space-y-12 pt-28 md:pt-40 lg:pt-44">

            {/* ===================================================
                WHAT YOU'LL LEARN
            =================================================== */}
            <div className="space-y-6">

              <div className="flex items-center gap-3">

                <h2 className="text-2xl font-bold text-text-primary">
                  What you'll learn
                </h2>

                <span className="
                  bg-brand-secondary/10
                  text-brand-secondary
                  text-xs
                  font-semibold
                  px-2.5
                  py-1
                  rounded-md
                ">
                  4 video lessons
                </span>

              </div>

              {/* Lessons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {lessons.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="
                      bg-surface
                      border border-border
                      rounded-2xl
                      overflow-hidden
                      flex flex-col
                      hover:shadow-md
                      transition-shadow
                      duration-300
                    "
                  >

                    {/* Thumbnail */}
                    <div className="relative h-40 overflow-hidden bg-gray-900 flex items-center justify-center">

                      <img
                        src={lesson.image}
                        alt={lesson.title}
                        className="w-full h-full object-cover opacity-80"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="
                          w-12
                          h-12
                          rounded-full
                          bg-brand-secondary/90
                          hover:bg-brand-secondary
                          text-white
                          flex
                          items-center
                          justify-center
                          shadow-lg
                          transition-transform
                          hover:scale-105
                          cursor-pointer
                        ">
                          <Play
                            size={18}
                            fill="currentColor"
                            className="ml-1"
                          />
                        </div>

                      </div>

                      <span className="
                        absolute
                        bottom-3
                        right-3
                        bg-black/75
                        text-white
                        text-[10px]
                        font-bold
                        px-2
                        py-0.5
                        rounded
                      ">
                        {lesson.duration}
                      </span>

                    </div>

                    {/* Content */}
                    <div className="p-4 flex-grow flex flex-col justify-between">

                      <div className="flex gap-2 items-start mb-4">

                        <Check
                          size={16}
                          className="text-brand-secondary mt-0.5 flex-shrink-0"
                        />

                        <h4 className="
                          text-sm
                          font-semibold
                          text-text-primary
                          leading-tight
                        ">
                          {lesson.title}
                        </h4>

                      </div>

                      <div className="flex items-center gap-2">

                        <div className="
                          w-5
                          h-5
                          rounded-full
                          bg-brand-primary
                          text-[#080A33]
                          flex
                          items-center
                          justify-center
                          font-bold
                          text-[8px]
                        ">
                          {course.instructor.substring(0, 2).toUpperCase()}
                        </div>

                        <span className="text-xs text-text-secondary">
                          {course.instructor}
                        </span>

                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* ===================================================
                REQUIREMENTS
            =================================================== */}
            <div className="
              border-t
              border-border
              pt-8
              space-y-4
            ">

              <h2 className="text-2xl font-bold text-text-primary">
                Requirements
              </h2>

              <ul className="
                list-disc
                list-inside
                space-y-2
                text-sm
                text-text-secondary
                pl-2
              ">
                <li>
                  No prior design or development experience needed.
                </li>

                <li>
                  A computer (Mac or Windows) with internet access.
                </li>

                <li>
                  Figma account (for design courses) or Code Editor
                  (for coding courses).
                </li>
              </ul>

            </div>

            {/* ===================================================
                INSTRUCTOR
            =================================================== */}
            <div className="
              border-t
              border-border
              pt-8
              space-y-4
            ">

              <h2 className="text-2xl font-bold text-text-primary">
                Your Instructor
              </h2>

              <div className="
                flex
                flex-col
                sm:flex-row
                gap-6
                bg-surface
                border
                border-border
                p-6
                rounded-2xl
              ">

                {/* Avatar */}
                <div className="
                  w-20
                  h-20
                  rounded-full
                  overflow-hidden
                  bg-surface-hover
                  border
                  border-border
                  flex-shrink-0
                  self-start
                ">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bio */}
                <div className="space-y-2">

                  <h3 className="text-lg font-bold text-text-primary">
                    {instructor.name}
                  </h3>

                  {/* Improved contrast for instructor specialty */}
                  <p className="
                    text-xs
                    font-semibold
                    text-[#5A12EC]
                    uppercase
                    tracking-wider
                  ">
                    {instructor.specialty}
                  </p>

                  <p className="
                    text-sm
                    text-text-secondary
                    leading-relaxed
                    pt-1
                  ">
                    {instructor.description}
                  </p>

                </div>
              </div>
            </div>

            {/* ===================================================
                STUDENT REVIEWS
            =================================================== */}
            <div className="
              border-t
              border-border
              pt-8
              space-y-6
            ">

              <h2 className="
                text-2xl
                font-bold
                text-text-primary
                flex
                items-center
                gap-2
              ">
                Student Reviews
              </h2>

              <div className="space-y-4">

                {reviewsList.map((review, idx) => (
                  <div
                    key={idx}
                    className="
                      bg-surface
                      border border-border
                      p-5
                      rounded-2xl
                      space-y-3
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div className="
                        w-9
                        h-9
                        rounded-full
                        bg-surface-hover
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-xs
                        text-text-secondary
                      ">
                        {review.avatar}
                      </div>

                      <div>

                        <h4 className="
                          font-bold
                          text-sm
                          text-text-primary
                          leading-none
                        ">
                          {review.name}
                        </h4>

                        <div className="flex text-amber-400 mt-1">

                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              fill={
                                i < review.rating
                                  ? 'currentColor'
                                  : 'none'
                              }
                            />
                          ))}

                        </div>

                      </div>
                    </div>

                    <p className="
                      text-sm
                      text-text-secondary
                      leading-relaxed
                    ">
                      {review.text}
                    </p>

                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* =====================================================
              RIGHT SIDEBAR
          ===================================================== */}
          <div className="space-y-6">

            <div className="
              bg-surface
              border border-border
              rounded-3xl
              overflow-hidden
              shadow-xl
              sticky
              top-24
            ">

              {/* Preview Image */}
              <div className="
                relative
                h-48
                bg-gray-900
                flex
                items-center
                justify-center
              ">

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-80"
                />

                <div className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/20
                ">

                  <div className="
                    w-16
                    h-16
                    rounded-full
                    bg-white/95
                    text-brand-primary
                    flex
                    items-center
                    justify-center
                    shadow-2xl
                    transition-transform
                    hover:scale-105
                    cursor-pointer
                  ">
                    <Play
                      size={24}
                      fill="currentColor"
                      className="ml-1"
                    />
                  </div>

                </div>
              </div>

              {/* Details & Actions */}
              <div className="p-6 md:p-8 space-y-6">

                <div className="
                  text-3xl
                  font-extrabold
                  text-text-primary
                ">
                  ₦{course.price.toLocaleString()}
                </div>

                <div className="space-y-3">

                  {/* Login */}
                  <button
                    onClick={() => {
                      alert('Redirecting to login...');
                      window.location.href = '/login';
                    }}
                    className="
                      w-full
                      bg-brand-primary
                      hover:bg-brand-primary-hover
                      text-[#080A33]
                      py-3.5
                      px-4
                      rounded-xl
                      font-bold
                      transition-all
                      shadow-md
                      cursor-pointer
                      text-sm
                    "
                  >
                    Log in to Enroll
                  </button>

                  {/* Add to Cart */}
                  <button
                    onClick={handleAddToCart}
                    className={`
                      w-full
                      py-3.5
                      px-4
                      rounded-xl
                      font-bold
                      flex
                      items-center
                      justify-center
                      gap-2
                      border
                      transition-all
                      cursor-pointer
                      text-sm

                      ${
                        isAdded
                          ? `
                            bg-brand-secondary/10
                            text-brand-secondary
                            border-brand-secondary/30
                          `
                          : `
                            bg-surface
                            border-border
                            text-text-primary
                            hover:bg-surface-hover
                          `
                      }
                    `}
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

                <div className="
                  text-center
                  text-xs
                  text-text-tertiary
                ">
                  30-day money-back guarantee
                </div>

              </div>

              {/* Divider */}
              <div className="
                border-t
                border-border
                mx-6
                md:mx-8
              " />

              {/* Course Includes */}
              <div className="p-6 md:p-8 space-y-6">

                <h3 className="
                  text-md
                  font-bold
                  text-text-primary
                ">
                  This course includes
                </h3>

                <ul className="
                  space-y-4
                  text-sm
                  text-text-secondary
                ">

                  <li className="flex items-center gap-3">
                    <Clock
                      size={18}
                      className="text-brand-secondary flex-shrink-0"
                    />
                    <span>
                      {course.duration} hours of content
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <Play
                      size={18}
                      className="text-brand-secondary flex-shrink-0"
                    />
                    <span>4 lessons</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <BarChart
                      size={18}
                      className="text-brand-secondary flex-shrink-0"
                    />
                    <span>
                      Skill level: {course.level}
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <Award
                      size={18}
                      className="text-brand-secondary flex-shrink-0"
                    />
                    <span>
                      Certificate of completion
                    </span>
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

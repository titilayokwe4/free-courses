import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  SlidersHorizontal
} from 'lucide-react';
import { Header } from '../components/Header';
import { CourseCard } from '../components/CourseCard';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';
import { AdvisorPopupModal } from '../components/AdvisorPopupModal';
import { COURSES } from '../data/courses';

export const CoursesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const [timePassed18s, setTimePassed18s] = useState(false);
  const [hasScrolled50, setHasScrolled50] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimePassed18s(true);
    }, 18000);

    const handleScroll = () => {
      const dismissed =
        sessionStorage.getItem('advisor_dismissed') === 'true';

      if (dismissed) return;

      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (docHeight > 0) {
        const scrollPercent = (scrollTop / docHeight) * 100;

        if (scrollPercent >= 50) {
          setHasScrolled50(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const dismissed =
      sessionStorage.getItem('advisor_dismissed') === 'true';

    if (timePassed18s && hasScrolled50 && !dismissed) {
      setIsAdvisorOpen(true);
    }
  }, [timePassed18s, hasScrolled50]);

  const handleCloseAdvisor = () => {
    setIsAdvisorOpen(false);
    sessionStorage.setItem('advisor_dismissed', 'true');
  };

  // ============================================================
  // CATEGORY FILTER
  // ============================================================

  const selectedCategory =
    searchParams.get('category') || 'All Categories';

  const handleCategorySelect = (category: string) => {
    if (category === 'All Categories') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }

    setSearchParams(searchParams);
  };

  // ============================================================
  // FILTER LOGIC
  // ============================================================

  const filteredCourses = COURSES.filter((course) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      course.title.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === 'All Categories' ||
      course.category.toLowerCase() ===
        selectedCategory.toLowerCase();

    const matchesLevel =
      selectedLevel === 'All' ||
      course.level.toLowerCase() ===
        selectedLevel.toLowerCase();

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const categories = [
    '3D & Animation',
    'Design',
    'Development',
    'Illustration',
    'Marketing',
    'Music',
    'Photography',
    'Writing',
  ];

  const levels = [
    'Beginner',
    'Intermediate',
    'Advanced',
  ];

  return (
    <div
      className="
        min-h-screen
        bg-background
        text-text-primary
        font-sans
        transition-colors
        duration-300
      "
    >
      <Header />

      <main
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-12
        "
      >
        {/* ======================================================
            PAGE HEADER
        ====================================================== */}
        <div className="mb-10">
          <h1
            className="
              text-3xl
              font-bold
              text-text-primary
              mb-2
            "
          >
            All Courses
          </h1>

          <p className="text-text-secondary">
            Explore {filteredCourses.length}{' '}
            {filteredCourses.length === 1
              ? 'course'
              : 'courses'}{' '}
            across all disciplines
          </p>
        </div>

        {/* ======================================================
            SEARCH
        ====================================================== */}
        <div className="relative mb-8">
          <div
            className="
              absolute
              inset-y-0
              left-0
              pl-4
              flex
              items-center
              pointer-events-none
            "
          >
            <Search
              size={20}
              className="text-text-tertiary"
            />
          </div>

          <input
            type="text"
            placeholder="Search courses by title, instructor, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              block
              w-full
              pl-12
              pr-4
              py-3.5
              border
              border-border
              rounded-2xl
              bg-surface
              text-text-primary
              focus:outline-none
              focus:ring-2
              focus:ring-brand-primary
              placeholder:text-text-tertiary
              transition-colors
            "
          />
        </div>

        {/* ======================================================
            CATEGORY FILTER
        ====================================================== */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
            mb-6
          "
        >
          <div className="p-2 text-text-tertiary">
            <SlidersHorizontal size={20} />
          </div>

          {/* All Categories */}
          <button
            onClick={() =>
              handleCategorySelect('All Categories')
            }
            className={`
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              transition-all
              cursor-pointer

              ${
                selectedCategory === 'All Categories'
                  ? `
                    bg-brand-primary
                    text-[#080A33]
                    shadow-md
                  `
                  : `
                    bg-surface
                    border
                    border-border
                    text-text-secondary
                    hover:bg-surface-hover
                    hover:text-text-primary
                  `
              }
            `}
          >
            All Categories
          </button>

          {/* Categories */}
          {categories.map((category) => {
            const isSelected =
              selectedCategory.toLowerCase() ===
              category.toLowerCase();

            return (
              <button
                key={category}
                onClick={() =>
                  handleCategorySelect(category)
                }
                className={`
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  cursor-pointer

                  ${
                    isSelected
                      ? `
                        bg-brand-primary
                        text-[#080A33]
                        shadow-md
                      `
                      : `
                        bg-surface
                        border
                        border-border
                        text-text-secondary
                        hover:bg-surface-hover
                        hover:text-text-primary
                      `
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* ======================================================
            SECONDARY FILTERS
        ====================================================== */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
            justify-between
            sm:justify-end
            mb-10
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2
            "
          >
            {/* All Levels */}
            <button
              onClick={() => setSelectedLevel('All')}
              className={`
                px-4
                py-1.5
                rounded-full
                text-sm
                font-medium
                transition-all
                cursor-pointer

                ${
                  selectedLevel === 'All'
                    ? `
                      bg-brand-secondary
                      text-[#080A33]
                      shadow-sm
                    `
                    : `
                      bg-surface
                      border
                      border-border
                      text-text-secondary
                      hover:bg-surface-hover
                      hover:text-text-primary
                    `
                }
              `}
            >
              All Levels
            </button>

            {/* Levels */}
            {levels.map((level) => {
              const isSelected =
                selectedLevel.toLowerCase() ===
                level.toLowerCase();

              return (
                <button
                  key={level}
                  onClick={() =>
                    setSelectedLevel(level)
                  }
                  className={`
                    px-4
                    py-1.5
                    rounded-full
                    text-sm
                    font-medium
                    transition-all
                    cursor-pointer

                    ${
                      isSelected
                        ? `
                          bg-brand-secondary
                          text-[#080A33]
                          shadow-sm
                        `
                        : `
                          bg-surface
                          border
                          border-border
                          text-text-secondary
                          hover:bg-surface-hover
                          hover:text-text-primary
                        `
                    }
                  `}
                >
                  {level}
                </button>
              );
            })}
          </div>

          {/* Sort */}
          <div className="relative ml-2">
            <button
              className="
                flex
                items-center
                gap-2
                px-4
                py-1.5
                rounded-full
                bg-surface
                border
                border-border
                text-text-secondary
                text-sm
                font-medium
                hover:bg-surface-hover
                hover:text-text-primary
                transition-colors
                cursor-pointer
              "
            >
              Newest
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* ======================================================
            COURSE GRID
        ====================================================== */}
        {filteredCourses.length === 0 ? (
          <div
            className="
              text-center
              py-20
              bg-surface
              border
              border-border
              rounded-3xl
              mb-20
              p-8
            "
          >
            <SlidersHorizontal
              size={40}
              className="
                mx-auto
                text-text-tertiary
                mb-4
              "
            />

            <h3
              className="
                text-lg
                font-bold
                text-text-primary
                mb-1
              "
            >
              No courses found
            </h3>

            <p
              className="
                text-text-secondary
                text-sm
                max-w-sm
                mx-auto
              "
            >
              Try adjusting your search query,
              selecting another category, or
              removing the level filter.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-6
              mb-20
            "
          >
            {filteredCourses.map((course) => (
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
      </main>

      <AdvisorPopupModal
        isOpen={isAdvisorOpen}
        onClose={handleCloseAdvisor}
      />

      <LearningAdvantage />
      <Footer />
    </div>
  );
};
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
    <div className="
      min-h-screen
      bg-background
      text-text-primary
      font-sans
      transition-colors
      duration-300
    ">
      <Header />

      <main>

        <HeroCarousel />


        <section className="
          bg-background-secondary
          py-20
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          transition-colors
          duration-300
        ">

          <div className="text-center mb-12">
            <h2 className="
              text-3xl
              font-bold
              text-text-primary
            ">
              Browse courses in your area of interest
            </h2>
          </div>

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            mb-10
          ">

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

          <div className="text-center">

            <Link to="/categories">
              <Button
                variant="outline"
                className="
                  !rounded-lg
                  text-text-secondary
                  bg-surface
                  border-border
                  hover:bg-surface-hover
                "
              >
                Browse All Categories
                <span className="ml-2">→</span>
              </Button>
            </Link>

          </div>

        </section>


        <section className="
          py-20
          bg-background
          border-t
          border-border
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          transition-colors
          duration-300
        ">

          <div className="
            flex
            justify-between
            items-end
            mb-10
          ">

            <div>

              <h2 className="
                text-3xl
                font-bold
                text-text-primary
                mb-2
              ">
                Featured Courses
              </h2>

              <p className="
                text-text-secondary
              ">
                Handpicked by our editorial team
              </p>

            </div>

            <Link
              to="/courses"
              className="
                text-brand-secondary
                font-medium
                hover:underline
                flex
                items-center
              "
            >
              View all
              <span className="ml-1">→</span>
            </Link>

          </div>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">

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

        <section className="
          py-20
          bg-background
          border-t
          border-border
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          transition-colors
          duration-300
        ">

          <div className="
            flex
            justify-between
            items-end
            mb-10
          ">

            <div>

              <h2 className="
                text-3xl
                font-bold
                text-text-primary
                mb-2
              ">
                Top Instructors
              </h2>

              <p className="
                text-text-secondary
              ">
                Learn from industry-leading experts
              </p>

            </div>

            <Link
              to="/instructors"
              className="
                text-brand-secondary
                font-medium
                hover:underline
                flex
                items-center
              "
            >
              View all
              <span className="ml-1">→</span>
            </Link>

          </div>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
          ">

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
      
        <LearningAdvantage />

      </main>

      <Footer />

    </div>
  );
};
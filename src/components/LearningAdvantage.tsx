import React from 'react';
import {
  Smile,
  MonitorPlay,
  ThumbsUp,
  Users,
  Bookmark,
  Globe,
  Award,
  Film
} from 'lucide-react';

export const LearningAdvantage: React.FC = () => {
  return (
    <section
      className="
        py-24
        bg-white
        dark:bg-background
        border-t
        border-gray-100
        dark:border-border
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
            Your learning advantage
          </h2>

          <div className="w-12 h-1 bg-brand-primary rounded-full mx-auto mt-4"></div>
        </div>


        {/* Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">

          {/* 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <Smile
                className="text-brand-primary"
                size={28}
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-2">
                Learn at your own pace
              </h3>

              <p className="text-gray-500 dark:text-text-secondary leading-relaxed">
                Study from anywhere with no fixed schedule. Replay lessons as
                many times as you need to fully absorb every concept.
              </p>
            </div>
          </div>


          {/* 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <MonitorPlay
                className="text-brand-secondary"
                size={28}
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-2">
                HD video, crystal-clear quality
              </h3>

              <p className="text-gray-500 dark:text-text-secondary leading-relaxed">
                Every course is recorded in high definition so you never miss
                a detail — whether it's a brush stroke or a line of code.
              </p>
            </div>
          </div>


          {/* 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <ThumbsUp
                className="text-brand-primary"
                size={28}
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-2">
                Learn from the best professionals
              </h3>

              <p className="text-gray-500 dark:text-text-secondary leading-relaxed">
                Courses are taught by vetted industry experts who share real
                methods and techniques from their own professional practice.
              </p>
            </div>
          </div>


          {/* 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <Users
                className="text-brand-secondary"
                size={28}
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-2">
                Share knowledge and ideas
              </h3>

              <p className="text-gray-500 dark:text-text-secondary leading-relaxed">
                Ask questions, request feedback, and collaborate with fellow
                learners who are just as passionate about growing as you are.
              </p>
            </div>
          </div>


          {/* 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <Bookmark
                className="text-brand-primary"
                size={28}
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-2">
                Expert teachers, real insights
              </h3>

              <p className="text-gray-500 dark:text-text-secondary leading-relaxed">
                Each instructor brings deep expertise and genuine passion to
                every lesson — not just theory, but proven, hands-on guidance.
              </p>
            </div>
          </div>


          {/* 6 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <Globe
                className="text-brand-secondary"
                size={28}
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-2">
                Connect with a global community
              </h3>

              <p className="text-gray-500 dark:text-text-secondary leading-relaxed">
                Join thousands of learners from across Nigeria and beyond.
                Learn together, grow together, and build lasting connections.
              </p>
            </div>
          </div>


          {/* 7 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <Award
                className="text-brand-primary"
                size={28}
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-2">
                Earn a certificate with every course
              </h3>

              <p className="text-gray-500 dark:text-text-secondary leading-relaxed">
                Receive a shareable certificate of completion for each course
                you finish. Add it to your portfolio, CV, or LinkedIn.
              </p>
            </div>
          </div>


          {/* 8 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <Film
                className="text-brand-secondary"
                size={28}
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-2">
                Professionally produced courses
              </h3>

              <p className="text-gray-500 dark:text-text-secondary leading-relaxed">
                Every course on free courses is reviewed for quality before
                going live, ensuring a premium learning experience from start
                to finish.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

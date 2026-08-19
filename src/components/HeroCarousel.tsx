import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe,
  Monitor,
  Radio,
  Star,
  Zap,
} from 'lucide-react';

import { Button } from './Button';

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden h-[600px]">

      {/* =========================================================
          SLIDE 1: LEARN
      ========================================================= */}
      <div
        className={`absolute inset-0 w-full h-full bg-brand-secondary/10 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 0
            ? 'opacity-100 z-10'
            : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

            {/* Left Content */}
            <div className="flex flex-col justify-center">

              <div className="mb-6 inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-3 py-1.5 rounded-full text-sm font-semibold border border-brand-secondary/20">
                <Monitor size={16} />
                Start your journey
              </div>

              <h1 className="text-5xl font-bold text-[#333333] mb-4">
                Learn skills that move you forward
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Begin with practical knowledge, discover your strengths, and
                take your first step toward a brighter future.
              </p>

              <ul className="space-y-4 mb-10 text-gray-700">
                {[
                  'Practical courses for today’s opportunities',
                  'Learn at your own pace, from anywhere',
                  'Build confidence through real skills',
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-brand-secondary flex-shrink-0"
                    />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-bold text-[#333333]">
                  Start learning
                </span>

                <span className="text-gray-500">
                  today
                </span>

                <span className="ml-2 bg-brand-primary/20 text-[#333333] px-2 py-1 rounded text-xs font-semibold">
                  Open to every ambitious learner
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  className="!bg-brand-primary hover:!bg-brand-primary-hover !text-[#333333] !rounded-lg"
                  icon={<Zap size={18} fill="currentColor" />}
                  size="lg"
                >
                  Start learning
                </Button>

                <Button
                  variant="outline"
                  className="!bg-transparent !border-[#333333]/20 !text-[#333333] hover:!bg-white !rounded-lg"
                  size="lg"
                >
                  Explore courses
                  <ArrowRight size={18} className="ml-1" />
                </Button>
              </div>
            </div>

            {/* Right Images */}
            <div className="hidden md:flex items-center justify-center relative">
              <div className="grid grid-cols-2 gap-4 w-full max-w-lg">

                <img
                  src="/feature-courses/feature1.jpeg"
                  alt="Feature 1"
                  className="rounded-2xl object-cover w-full h-40 shadow-lg"
                />

                <img
                  src="/feature-courses/feature2.jpeg"
                  alt="Feature 2"
                  className="rounded-2xl object-cover w-full h-40 shadow-lg"
                />

                <img
                  src="/feature-courses/feature3.jpeg"
                  alt="Feature 3"
                  className="rounded-2xl object-cover w-full h-40 shadow-lg"
                />

                <img
                  src="/feature-courses/feature4.jpeg"
                  alt="Feature 4"
                  className="rounded-2xl object-cover w-full h-40 shadow-lg"
                />

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          SLIDE 2: EQUIP YOURSELF
      ========================================================= */}
      <div
        className={`absolute inset-0 w-full h-full bg-brand-primary/10 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 1
            ? 'opacity-100 z-10'
            : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

            {/* Left Content */}
            <div className="flex flex-col justify-center">

              <div className="flex gap-3 mb-6">

                <div className="inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-3 py-1.5 rounded-full text-sm font-semibold border border-brand-secondary/20">
                  <Calendar size={16} />
                  Learn by doing
                </div>

                <div className="inline-flex items-center gap-2 bg-brand-primary text-[#333333] px-3 py-1.5 rounded-full text-sm font-semibold">
                  <Star size={16} fill="currentColor" />
                  Build your edge
                </div>

              </div>

              <h1 className="text-5xl font-bold text-[#333333] mb-4">
                Equip yourself for what’s next
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Go beyond theory with the knowledge, tools, and confidence to
                grow in school, work, and business.
              </p>

              <ul className="space-y-4 mb-10 text-gray-700">
                {[
                  'Learn in-demand digital and professional skills',
                  'Practice with projects and real-world challenges',
                  'Keep growing with guided learning',
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-brand-primary flex-shrink-0"
                    />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-bold text-[#333333]">
                  Skills for
                </span>

                <span className="text-gray-500">
                  your next opportunity
                </span>

                <span className="ml-2 bg-brand-secondary/10 text-brand-secondary px-2 py-1 rounded text-xs font-semibold">
                  Learn. Practise. Progress.
                </span>
              </div>

              <div className="flex items-center gap-4">

                <Button
                  className="!bg-brand-primary hover:!bg-brand-primary-hover !text-[#333333] !rounded-lg"
                  icon={<Zap size={18} fill="currentColor" />}
                  size="lg"
                >
                  Equip yourself
                </Button>

                <Button
                  variant="outline"
                  className="!bg-transparent !border-[#333333]/20 !text-[#333333] hover:!bg-white !rounded-lg"
                  size="lg"
                >
                  Find your path
                  <ArrowRight size={18} className="ml-1" />
                </Button>

              </div>
            </div>

            {/* Right Content */}
            <div className="hidden md:flex items-center justify-center relative">
              <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden p-2 border border-brand-primary/20">

                <img
                  src="/feature-courses/feature1.jpeg"
                  alt="Feature Pro"
                  className="w-full h-56 object-cover rounded-2xl"
                />

                <div className="p-6">
                  <div className="h-4 bg-gray-100 rounded-full w-3/4 mb-3" />

                  <div className="h-4 bg-gray-100 rounded-full w-1/2 mb-6" />

                  <div className="flex justify-between items-center">
                    <div className="h-8 bg-gray-100 rounded-lg w-24" />

                    <div className="h-10 bg-brand-primary rounded-lg w-32" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          SLIDE 3: BUILD CAPACITY
      ========================================================= */}
      <div
        className={`absolute inset-0 w-full h-full bg-[#333333] transition-opacity duration-1000 ease-in-out ${
          currentSlide === 2
            ? 'opacity-100 z-10'
            : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

            {/* Left Content */}
            <div className="flex flex-col justify-center">

              <div className="mb-6 inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-3 py-1.5 rounded-full text-sm font-semibold border border-brand-secondary/30">
                <Radio size={16} />
                Learn together
              </div>

              <h1 className="text-5xl font-bold text-white mb-4">
                Build capacity together
              </h1>

              <p className="text-lg text-gray-300 mb-8">
                Strong communities create stronger futures. Learn with peers,
                share ideas, and grow together.
              </p>

              <ul className="space-y-4 mb-10 text-gray-200">
                {[
                  'Connect with a community of ambitious Africans',
                  'Learn from mentors and fellow builders',
                  'Turn ideas into projects that matter',
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-brand-secondary flex-shrink-0"
                    />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-8 text-white">
                <span className="text-4xl font-bold">
                  Grow through
                </span>

                <span className="text-gray-300">
                  shared knowledge
                </span>

                <span className="ml-2 bg-brand-secondary/15 text-brand-secondary px-2 py-1 rounded text-xs font-semibold">
                  Your growth is our mission
                </span>
              </div>

              <div className="flex items-center gap-4">

                <Button
                  className="!bg-brand-primary hover:!bg-brand-primary-hover !text-[#333333] font-bold !rounded-lg"
                  icon={<Zap size={18} fill="currentColor" />}
                  size="lg"
                >
                  Join the movement
                </Button>

                <Button
                  variant="outline"
                  className="!bg-transparent !border-white/30 !text-white hover:!bg-white/10 !rounded-lg"
                  size="lg"
                >
                  Meet your community
                  <ArrowRight size={18} className="ml-1" />
                </Button>

              </div>
            </div>

            {/* Right Content */}
            <div className="hidden md:flex flex-col gap-4 items-center justify-center relative">

              <div className="w-full max-w-lg relative">

                <img
                  src="/feature-courses/feature1.jpeg"
                  alt="Team Main"
                  className="rounded-2xl object-cover w-full h-48 shadow-lg"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-brand-secondary text-[#333333] px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#333333] animate-pulse" />
                    LIVE NOW
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-4 w-full max-w-lg">

                <img
                  src="/feature-courses/feature2.jpeg"
                  alt="Team 2"
                  className="rounded-2xl object-cover w-full h-32 shadow-lg opacity-80"
                />

                <img
                  src="/feature-courses/feature3.jpeg"
                  alt="Team 3"
                  className="rounded-2xl object-cover w-full h-32 shadow-lg opacity-80"
                />

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          SLIDE 4: GROW
      ========================================================= */}
      <div
        className={`absolute inset-0 w-full h-full bg-[#333333] transition-opacity duration-1000 ease-in-out ${
          currentSlide === 3
            ? 'opacity-100 z-10'
            : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

            {/* Left Content */}
            <div className="flex flex-col justify-center">

              <div className="flex gap-3 mb-6">

                <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1.5 rounded-full text-sm font-semibold border border-brand-primary/30">
                  <Award size={16} />
                  Make your progress visible
                </div>

                <div className="inline-flex items-center gap-2 bg-brand-primary text-[#333333] px-3 py-1.5 rounded-full text-sm font-semibold">
                  <Globe size={16} />
                  Career ready
                </div>

              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Turn your skills <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">
                  into opportunity
                </span>
              </h1>

              <p className="text-md text-gray-300 mb-8 max-w-md">
                Keep learning, keep building, and create proof of what you can
                do. Your skills can open doors across Africa and around the
                world.
              </p>

              <ul className="space-y-4 mb-10 text-sm text-gray-200">
                {[
                  'Earn certificates as you complete courses',
                  'Build a portfolio that shows your abilities',
                  'Share your progress with employers and clients',
                  'Grow toward the future you want',
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={18}
                      className="text-brand-primary mt-0.5 flex-shrink-0"
                    />

                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">

                <Button
                  className="!bg-brand-primary hover:!bg-brand-primary-hover !text-[#333333] !rounded-lg"
                  icon={<Award size={18} />}
                  size="lg"
                >
                  Show what you can do
                </Button>

                <Button
                  variant="outline"
                  className="!bg-transparent !border-white/30 !text-white hover:!bg-white/10 !rounded-lg"
                  size="lg"
                >
                  Keep growing
                  <ArrowRight size={18} className="ml-1" />
                </Button>

              </div>
            </div>

            {/* Certificate */}
            <div className="hidden md:flex items-center justify-center relative">

              <div className="w-full max-w-xl bg-[#FFFDF0] rounded-sm p-6 relative shadow-2xl border-[8px] border-brand-primary/40 outline outline-1 outline-offset-[-6px] outline-brand-primary">

                {/* Certificate Corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-primary" />

                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-primary" />

                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-primary" />

                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-primary" />

                <div className="flex flex-col items-center justify-center text-center p-8">

                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-[#333333] mb-2 shadow-lg">
                    <Award size={32} />
                  </div>

                  <div className="text-[#333333] text-xs font-bold tracking-[0.2em] mb-4">
                    FREE COURSES
                  </div>

                  <h2 className="text-3xl font-serif text-gray-800 tracking-wider mb-8">
                    CERTIFICATE OF SKILL DEVELOPMENT
                  </h2>

                  <p className="text-[10px] text-gray-500 max-w-xs mb-2 italic">
                    This certificate celebrates your commitment to learning,
                    building practical skills, and growing your potential.
                  </p>

                  <h3 className="text-3xl font-serif text-gray-900 italic font-bold mb-4 border-b border-gray-300 pb-2 w-3/4">
                    John Adebayo
                  </h3>

                  <p className="text-[9px] text-gray-500 max-w-sm mb-10 leading-relaxed">
                    For successfully completing the{' '}
                    <strong>
                      Practical Skills Learning Programme
                    </strong>{' '}
                    and demonstrating dedication, curiosity, and commitment
                    to personal and professional growth.
                  </p>

                  <div className="flex justify-between w-full px-4 items-end mt-4">

                    {/* Left Signature */}
                    <div className="flex flex-col items-center">

                      <div className="w-32 border-b border-gray-400 mb-2" />

                      <span className="text-[10px] font-bold text-gray-800">
                        Dr. Kemi Adeola
                      </span>

                      <span className="text-[8px] text-gray-500">
                        Director, ACTD
                      </span>

                    </div>

                    {/* UKIQ Badge */}
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-brand-secondary flex items-center justify-center flex-col relative text-brand-secondary">

                      <CheckCircle size={16} />

                      <span className="text-[8px] font-bold mt-1">
                        UKIQ
                      </span>

                    </div>

                    {/* Right Signature */}
                    <div className="flex flex-col items-center">

                      <div className="w-32 border-b border-gray-400 mb-2" />

                      <span className="text-[10px] font-bold text-gray-800">
                        Prof. James Briggs
                      </span>

                      <span className="text-[8px] text-gray-500">
                        Director, UKIQ
                      </span>

                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          NAVIGATION ARROWS
      ========================================================= */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-4
          sm:left-8
          top-1/2
          -translate-y-1/2
          w-10
          h-10
          md:w-12
          md:h-12
          rounded-full
          flex
          items-center
          justify-center
          z-20
          transition-all
          cursor-pointer
          backdrop-blur-sm
          bg-white/10
          hover:bg-brand-primary
          border
          border-white/20
        "
        style={{
          color: currentSlide >= 2 ? '#FFFFFF' : '#333333',
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="
          absolute
          right-4
          sm:right-8
          top-1/2
          -translate-y-1/2
          w-10
          h-10
          md:w-12
          md:h-12
          rounded-full
          flex
          items-center
          justify-center
          z-20
          transition-all
          cursor-pointer
          backdrop-blur-sm
          bg-white/10
          hover:bg-brand-primary
          border
          border-white/20
        "
        style={{
          color: currentSlide >= 2 ? '#FFFFFF' : '#333333',
        }}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* =========================================================
          PAGINATION DOTS
      ========================================================= */}
      <div className="absolute bottom-8 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-3 z-20">

        {[0, 1, 2, 3].map((index) => {
          let dotColor = 'bg-gray-300';

          if (currentSlide === index) {
            if (index === 0 || index === 2) {
              dotColor = 'bg-brand-secondary w-6';
            } else {
              dotColor = 'bg-brand-primary w-6';
            }
          } else if (currentSlide >= 2) {
            dotColor = 'bg-white/30';
          }

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${dotColor}
                ${currentSlide !== index ? 'w-2' : ''}
                cursor-pointer
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}

      </div>
    </div>
  );
};
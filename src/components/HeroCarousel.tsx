import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Calendar,
  Star,
  Radio,
  Award,
  Globe,
  CheckCircle2,
  ArrowRight,
  Zap,
  CheckCircle
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
          SLIDE 1: STARTER
      ========================================================= */}
      <div
        className={`absolute inset-0 w-full h-full bg-brand-secondary/10 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 0
            ? 'opacity-100 z-10'
            : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

            {/* Left Content */}
            <div className="flex flex-col justify-center">

              <div className="mb-6 inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-3 py-1.5 rounded-full text-sm font-semibold">
                <Monitor size={16} />
                Most Popular
              </div>

              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Starter
              </h1>

              <p className="text-lg text-gray-500 mb-8">
                Perfect for beginners exploring new skills
              </p>

              <ul className="space-y-4 mb-10 text-gray-600">
                {[
                  'Access to 50+ beginner courses',
                  'Certificate of completion',
                  'Mobile app access'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-brand-secondary"
                    />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  ₦12.99
                </span>

                <span className="text-gray-500">
                  /month
                </span>

                <span className="ml-2 bg-brand-secondary/10 text-brand-secondary px-2 py-1 rounded text-xs font-semibold">
                  Save 20% yearly
                </span>
              </div>

              <div className="flex items-center gap-4">

                <Button
                  className="!bg-brand-primary hover:!bg-brand-primary-hover !text-[#333333] !rounded-lg"
                  icon={<Zap size={18} fill="currentColor" />}
                  size="lg"
                >
                  Get started
                </Button>

                <Button
                  variant="outline"
                  className="!bg-transparent border-gray-300 text-gray-900 !rounded-lg"
                  size="lg"
                >
                  Compare plans
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
          SLIDE 2: PRO
      ========================================================= */}
      <div
        className={`absolute inset-0 w-full h-full bg-brand-primary/10 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 1
            ? 'opacity-100 z-10'
            : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

            {/* Left Content */}
            <div className="flex flex-col justify-center">

              <div className="flex gap-3 mb-6">

                <div className="inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-3 py-1.5 rounded-full text-sm font-semibold">
                  <Calendar size={16} />
                  Pay Once
                </div>

                <div className="inline-flex items-center gap-2 bg-brand-primary text-[#333333] px-3 py-1.5 rounded-full text-sm font-semibold">
                  <Star size={16} fill="currentColor" />
                  Most Popular
                </div>

              </div>

              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Pro
              </h1>

              <p className="text-lg text-gray-500 mb-8">
                For serious learners who want unlimited access
              </p>

              <ul className="space-y-4 mb-10 text-gray-600">
                {[
                  'Access to 400+ courses',
                  'All skill levels included',
                  'Offline downloads'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-brand-primary"
                    />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-8">

                <span className="text-4xl font-bold text-gray-900">
                  ₦29.99
                </span>

                <span className="text-gray-500">
                  /month
                </span>

                <span className="ml-2 bg-brand-secondary/10 text-brand-secondary px-2 py-1 rounded text-xs font-semibold">
                  Save 20% yearly
                </span>

              </div>

              <div className="flex items-center gap-4">

                <Button
                  className="!bg-brand-primary hover:!bg-brand-primary-hover !text-[#333333] !rounded-lg"
                  icon={<Zap size={18} fill="currentColor" />}
                  size="lg"
                >
                  Get started
                </Button>

                <Button
                  variant="outline"
                  className="!bg-transparent border-gray-300 text-gray-900 !rounded-lg"
                  size="lg"
                >
                  Compare plans
                  <ArrowRight size={18} className="ml-1" />
                </Button>

              </div>
            </div>

            {/* Right Content */}
            <div className="hidden md:flex items-center justify-center relative">

              <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden p-2">

                <img
                  src="/feature-courses/feature1.jpeg"
                  alt="Feature Pro"
                  className="w-full h-56 object-cover rounded-2xl"
                />

                <div className="p-6">

                  <div className="h-4 bg-gray-100 rounded-full w-3/4 mb-3"></div>

                  <div className="h-4 bg-gray-100 rounded-full w-1/2 mb-6"></div>

                  <div className="flex justify-between items-center">

                    <div className="h-8 bg-gray-100 rounded-lg w-24"></div>

                    <div className="h-10 bg-brand-primary rounded-lg w-32"></div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


      {/* =========================================================
          SLIDE 3: TEAMS
      ========================================================= */}
      <div
        className={`absolute inset-0 w-full h-full bg-[#333333] transition-opacity duration-1000 ease-in-out ${
          currentSlide === 2
            ? 'opacity-100 z-10'
            : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

            {/* Left Content */}
            <div className="flex flex-col justify-center">

              <div className="mb-6 inline-flex items-center gap-2 bg-brand-secondary/15 text-brand-secondary px-3 py-1.5 rounded-full text-sm font-semibold border border-brand-secondary/30">
                <Radio size={16} />
                Live Cohort
              </div>

              <h1 className="text-5xl font-bold text-white mb-4">
                Teams
              </h1>

              <p className="text-lg text-gray-400 mb-8">
                Collaborative learning for professionals
              </p>

              <ul className="space-y-4 mb-10 text-gray-300">
                {[
                  'Everything in Pro',
                  'Up to 5 team members',
                  'Team progress dashboard'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-brand-secondary"
                    />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-8 text-white">

                <span className="text-4xl font-bold">
                  ₦49.99
                </span>

                <span className="text-gray-400">
                  /month
                </span>

                <span className="ml-2 bg-brand-secondary/15 text-brand-secondary px-2 py-1 rounded text-xs font-semibold">
                  Save 20% yearly
                </span>

              </div>

              <div className="flex items-center gap-4">

                <Button
                  className="!bg-brand-primary hover:!bg-brand-primary-hover !text-[#333333] font-bold !rounded-lg"
                  icon={<Zap size={18} fill="currentColor" />}
                  size="lg"
                >
                  Get started
                </Button>

                <Button
                  variant="outline"
                  className="!bg-transparent border-gray-600 text-white hover:bg-gray-800 !rounded-lg"
                  size="lg"
                >
                  Compare plans
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

                    <div className="w-2 h-2 rounded-full bg-[#333333] animate-pulse"></div>

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
          SLIDE 4: CERTIFICATES
      ========================================================= */}
      <div
        className={`absolute inset-0 w-full h-full bg-[#333333] transition-opacity duration-1000 ease-in-out ${
          currentSlide === 3
            ? 'opacity-100 z-10'
            : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

            {/* Left Content */}
            <div className="flex flex-col justify-center">

              <div className="flex gap-3 mb-6">

                <div className="inline-flex items-center gap-2 bg-brand-primary/15 text-brand-primary px-3 py-1.5 rounded-full text-sm font-semibold border border-brand-primary/30">
                  <Award size={16} />
                  Globally Recognised
                </div>

                <div className="inline-flex items-center gap-2 bg-brand-primary text-[#333333] px-3 py-1.5 rounded-full text-sm font-semibold">
                  <Globe size={16} />
                  International
                </div>

              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Earn certificates <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">
                  recognised worldwide
                </span>
              </h1>

              <p className="text-md text-gray-400 mb-8 max-w-md">
                Every free course certificate is accredited by leading international bodies,
                giving your qualification real-world weight with employers globally.
              </p>

              <ul className="space-y-4 mb-10 text-sm text-gray-300">
                {[
                  'Accredited by ACTD — Africa Centre for Talent Development',
                  'Accredited by UKIQ — UK Institute of Qualifications',
                  'Shareable on LinkedIn, CV & professional portfolios',
                  'Recognised by 500+ employers across 40 countries'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">

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
                  Start earning
                </Button>

                <Button
                  variant="outline"
                  className="!bg-transparent border-gray-600 text-white hover:bg-gray-800 !rounded-lg"
                  size="lg"
                >
                  View plans
                  <ArrowRight size={18} className="ml-1" />
                </Button>

              </div>

            </div>

            {/* Certificate */}
            <div className="hidden md:flex items-center justify-center relative">

              <div className="w-full max-w-xl bg-[#FFFDF0] rounded-sm p-6 relative shadow-2xl border-[8px] border-brand-primary/40 outline outline-1 outline-offset-[-6px] outline-brand-primary">

                {/* Certificate Corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-primary"></div>

                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-primary"></div>

                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-primary"></div>

                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-primary"></div>

                <div className="flex flex-col items-center justify-center text-center p-8">

                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-[#333333] mb-2 shadow-lg">
                    <Award size={32} />
                  </div>

                  <div className="text-brand-primary text-xs font-bold tracking-[0.2em] mb-4">
                    FREE COURSES
                  </div>

                  <h2 className="text-3xl font-serif text-gray-800 tracking-wider mb-8">
                    CERTIFICATE OF ACHIEVEMENT
                  </h2>

                  <p className="text-[10px] text-gray-500 max-w-xs mb-2 italic">
                    This Certificate is Proudly Presented in recognition of academic excellence,
                    perseverance, and commitment to learning to
                  </p>

                  <h3 className="text-3xl font-serif text-gray-900 italic font-bold mb-4 border-b border-gray-300 pb-2 w-3/4">
                    John Adebayo
                  </h3>

                  <p className="text-[9px] text-gray-500 max-w-sm mb-10 leading-relaxed">
                    For successfully completing the{' '}
                    <strong>Advanced React & TypeScript Masterclass</strong> and demonstrating
                    dedication, intellectual curiosity, and commitment to professional growth.
                  </p>

                  <div className="flex justify-between w-full px-4 items-end mt-4">

                    <div className="flex flex-col items-center">

                      <div className="w-32 border-b border-gray-400 mb-2"></div>

                      <span className="text-[10px] font-bold text-gray-800">
                        Dr. Kemi Adeola
                      </span>

                      <span className="text-[8px] text-gray-500">
                        Director, ACTD
                      </span>

                    </div>

                    {/* UKIQ */}
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-brand-secondary flex items-center justify-center flex-col relative text-brand-secondary">

                      <CheckCircle size={16} />

                      <span className="text-[8px] font-bold mt-1">
                        UKIQ
                      </span>

                    </div>

                    <div className="flex flex-col items-center">

                      <div className="w-32 border-b border-gray-400 mb-2"></div>

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
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-sm border border-gray-400/30 text-gray-800 rounded-full flex items-center justify-center z-20 transition-all cursor-pointer"
        style={{
          color: currentSlide >= 2 ? 'white' : '#111827'
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-sm border border-gray-400/30 text-gray-800 rounded-full flex items-center justify-center z-20 transition-all cursor-pointer"
        style={{
          color: currentSlide >= 2 ? 'white' : '#111827'
        }}
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

            if (index === 0) {
              dotColor = 'bg-brand-secondary w-6';
            } else if (index === 1) {
              dotColor = 'bg-brand-primary w-6';
            } else if (index === 2) {
              dotColor = 'bg-brand-secondary w-6';
            } else if (index === 3) {
              dotColor = 'bg-brand-primary w-6';
            }

          } else if (currentSlide >= 2) {

            dotColor = 'bg-gray-600';

          }

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotColor
              } ${
                currentSlide !== index ? 'w-2' : ''
              } cursor-pointer`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );

        })}

      </div>

    </div>
  );
};
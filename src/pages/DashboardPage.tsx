import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  CheckCircle,
  LayoutGrid,
  ArrowRight,
  Eye,
  EyeOff,
  TrendingUp,
  Compass,
  FolderOpen,
} from 'lucide-react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const DashboardPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ============================================================
  // PRIVATE PROFILE
  // ============================================================

  const [isPrivate, setIsPrivate] = useState<boolean>(() => {
    return localStorage.getItem('isPrivateProfile') === 'true';
  });

  useEffect(() => {
    const handleProfileChange = () => {
      setIsPrivate(
        localStorage.getItem('isPrivateProfile') === 'true'
      );
    };

    window.addEventListener(
      'privateProfileChanged',
      handleProfileChange
    );

    window.addEventListener('storage', handleProfileChange);

    return () => {
      window.removeEventListener(
        'privateProfileChanged',
        handleProfileChange
      );

      window.removeEventListener(
        'storage',
        handleProfileChange
      );
    };
  }, []);

  const togglePrivateProfile = () => {
    const newValue = !isPrivate;

    localStorage.setItem(
      'isPrivateProfile',
      String(newValue)
    );

    setIsPrivate(newValue);

    window.dispatchEvent(
      new Event('privateProfileChanged')
    );
  };

  // ============================================================
  // ACTIVE TAB
  // ============================================================

  const activeTab =
    location.pathname === '/dashboard/learning'
      ? 'learning'
      : 'dashboard';

  // ============================================================
  // DASHBOARD STATS
  // ============================================================

  const stats = [
    {
      label: 'Enrolled',
      value: '0',
      icon: <BookOpen size={17} />,
    },
    {
      label: 'In Progress',
      value: '0',
      icon: <Clock size={17} />,
    },
    {
      label: 'Completed',
      value: '0',
      icon: <CheckCircle size={17} />,
    },
  ];

  // ============================================================
  // QUICK LINKS
  // ============================================================

  const quickLinks = [
    {
      label: 'Browse all courses',
      path: '/courses',
      icon: <BookOpen size={17} />,
      type: 'cyan',
    },
    {
      label: 'My learning progress',
      path: '/dashboard/learning',
      icon: <TrendingUp size={17} />,
      type: 'lime',
    },
    {
      label: 'Manage Resources',
      path: '/resources',
      icon: <FolderOpen size={17} />,
      type: 'cyan',
    },
  ];

  // ============================================================
  // LEARNER ACTIVITY
  // FIRST NAMES ONLY
  // ============================================================

  const learnerActivity = [
    {
      name: 'Amara',
      course: 'UI/UX Design Masterclass',
    },
    {
      name: 'David',
      course: 'Advanced React & TypeScript',
    },
    {
      name: 'Chioma',
      course: 'Digital Marketing Fundamentals',
    },
    {
      name: 'Michael',
      course: 'Portrait Photography Essentials',
    },
    {
      name: 'Sarah',
      course: 'Motion Design with After Effects',
    },
    {
      name: 'Daniel',
      course: 'Full Stack Web Development',
    },
    {
      name: 'Grace',
      course: 'Illustration for Beginners',
    },
    {
      name: 'Emeka',
      course: 'Advanced React & TypeScript',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans flex flex-col transition-colors duration-300">

      <Header />

      {/* ========================================================
          DASHBOARD HERO
      ======================================================== */}

      <section className="bg-[#0B0F3B] dark:bg-[#060822] text-white py-10 md:py-12 border-b border-gray-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* USER HEADER */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* USER */}

            <div className="flex items-center gap-4">

              {/* Avatar */}

              <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#2563EB] flex items-center justify-center text-white text-xl font-bold border-2 border-white/20 flex-shrink-0">

                <span>OL</span>

                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0B0F3B] dark:border-[#060822]" />

              </div>

              {/* USER DETAILS */}

              <div className="space-y-1">

                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">

                  <LayoutGrid size={14} />

                  <span>Dashboard</span>

                </div>

                <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  Good morning, Oluwafemi
                </h1>

                {/* PRIVACY */}

                <button
                  type="button"
                  onClick={togglePrivateProfile}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border border-emerald-500/20 bg-emerald-500/10 text-[#00E676] hover:bg-emerald-500/20 transition-colors cursor-pointer"
                >

                  {isPrivate ? (
                    <>
                      <EyeOff size={10} />

                      <span>
                        Private Profile
                      </span>
                    </>
                  ) : (
                    <>
                      <Eye size={10} />

                      <span>
                        Public Profile — click to make private
                      </span>
                    </>
                  )}

                </button>

              </div>

            </div>

            {/* BROWSE BUTTON */}

            <button
              type="button"
              onClick={() => navigate('/courses')}
              className="px-4 py-2 border border-white/20 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-2"
            >

              <Compass size={14} />

              <span>
                Browse Courses
              </span>

            </button>

          </div>

          {/* ====================================================
              STATISTICS
          ==================================================== */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3"
              >

                <div className="w-9 h-9 rounded-lg bg-brand-primary/10 text-brand-primary dark:text-[#00E676] flex items-center justify-center border border-brand-primary/20 flex-shrink-0">
                  {stat.icon}
                </div>

                <div>

                  <div className="text-xl font-extrabold text-white leading-none">
                    {stat.value}
                  </div>

                  <div className="text-[11px] text-gray-400 font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ========================================================
          LEARNER ACTIVITY BANNER
      ======================================================== */}

      <section className="bg-background border-b border-border overflow-hidden">

        {/* BANNER TITLE */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">

          <div className="flex items-center gap-2">

            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />

            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-text-tertiary">
              Learners currently learning
            </span>

          </div>

        </div>

        {/* ROLLING CONTENT */}

        <div className="overflow-hidden w-full pb-2">

          <div className="learner-scroll flex w-max">

            {/* FIRST SET */}

            {learnerActivity.map((learner, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-2.5 px-5 whitespace-nowrap flex-shrink-0"
              >

                <div className="w-6 h-6 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center text-[8px] font-bold flex-shrink-0">
                  {learner.name.charAt(0)}
                </div>

                <span className="text-xs font-semibold text-text-primary">
                  {learner.name}
                </span>

                <span className="text-[11px] text-text-tertiary">
                  is learning
                </span>

                <span className="text-xs font-semibold text-brand-secondary">
                  {learner.course}
                </span>

                <span className="text-text-tertiary px-2">
                  •
                </span>

              </div>
            ))}

            {/* SECOND SET */}

            {learnerActivity.map((learner, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-2.5 px-5 whitespace-nowrap flex-shrink-0"
              >

                <div className="w-6 h-6 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center text-[8px] font-bold flex-shrink-0">
                  {learner.name.charAt(0)}
                </div>

                <span className="text-xs font-semibold text-text-primary">
                  {learner.name}
                </span>

                <span className="text-[11px] text-text-tertiary">
                  is learning
                </span>

                <span className="text-xs font-semibold text-brand-secondary">
                  {learner.course}
                </span>

                <span className="text-text-tertiary px-2">
                  •
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ========================================================
          MAIN CONTENT
      ======================================================== */}

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">

        {/* ======================================================
            DASHBOARD
        ====================================================== */}

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ==================================================
                START LEARNING
            ================================================== */}

            <div className="lg:col-span-2 space-y-4">

              <h2 className="text-lg font-bold text-text-primary">
                Start Learning
              </h2>

              <div className="border-2 border-dashed border-border rounded-3xl p-10 md:p-12 text-center flex flex-col items-center justify-center bg-surface shadow-sm">

                <div className="w-14 h-14 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-4">
                  <BookOpen size={24} />
                </div>

                <h3 className="text-base font-bold text-text-primary mb-1.5">
                  No courses yet
                </h3>

                <p className="text-sm text-text-secondary mb-6 max-w-sm">
                  Find something you love and start learning today
                </p>

                <button
                  type="button"
                  onClick={() => navigate('/courses')}
                  className="px-5 py-2.5 bg-brand-secondary hover:bg-brand-secondary-hover text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >

                  <span>
                    Browse Courses
                  </span>

                  <ArrowRight size={14} />

                </button>

              </div>

            </div>

            {/* ==================================================
                QUICK LINKS
            ================================================== */}

            <div className="space-y-4">

              <h2 className="text-lg font-bold text-text-primary">
                Quick Links
              </h2>

              <div className="space-y-3">

                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => navigate(link.path)}
                    className="w-full flex items-center justify-between p-3.5 bg-surface border border-border rounded-2xl hover:shadow-md hover:bg-surface-hover transition-all cursor-pointer group text-left"
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className={
                          link.type === 'cyan'
                            ? 'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-brand-secondary/10 text-brand-secondary'
                            : 'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-brand-primary/10 text-brand-primary'
                        }
                      >
                        {link.icon}
                      </div>

                      <span className="text-xs md:text-sm font-semibold text-text-secondary group-hover:text-brand-primary dark:group-hover:text-[#00E676] transition-colors">
                        {link.label}
                      </span>

                    </div>

                    <ArrowRight
                      size={14}
                      className="text-text-tertiary group-hover:translate-x-1 transition-transform"
                    />

                  </button>
                ))}

              </div>

            </div>

          </div>
        )}

        {/* ======================================================
            MY LEARNING
        ====================================================== */}

        {activeTab === 'learning' && (
          <div className="space-y-6 max-w-4xl mx-auto">

            <div>

              <h2 className="text-2xl font-bold text-text-primary">
                My Learning
              </h2>

              <p className="text-sm text-text-secondary mt-1">
                Track your progress across all enrolled courses
              </p>

            </div>

            <div className="border-2 border-dashed border-border rounded-3xl p-12 md:p-16 text-center flex flex-col items-center justify-center bg-surface shadow-sm">

              <div className="w-16 h-16 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-4">
                <BookOpen size={28} />
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-2">
                No courses yet
              </h3>

              <p className="text-sm text-text-secondary mb-6 max-w-sm leading-relaxed">
                Start learning by enrolling in your first course
              </p>

              <button
                type="button"
                onClick={() => navigate('/courses')}
                className="px-6 py-3 bg-brand-secondary hover:bg-brand-secondary-hover text-white rounded-xl text-sm font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
              >

                <span>
                  Browse Courses
                </span>

                <ArrowRight size={16} />

              </button>

            </div>

          </div>
        )}

      </main>

      <Footer />

    </div>
  );
};

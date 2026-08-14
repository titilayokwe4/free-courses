import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { BookOpen, Clock, CheckCircle, CreditCard, LayoutGrid, ArrowRight, Eye, EyeOff, Sparkles, TrendingUp, Compass, Settings } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const DashboardPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isPrivate, setIsPrivate] = useState(() => {
    return localStorage.getItem('isPrivateProfile') === 'true';
  });

  // Keep state synchronized with storage events
  useEffect(() => {
    const handleSync = () => {
      setIsPrivate(localStorage.getItem('isPrivateProfile') === 'true');
    };

    window.addEventListener('privateProfileChanged', handleSync);
    window.addEventListener('storage', handleSync);

    return () => {
      window.removeEventListener('privateProfileChanged', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const togglePrivateProfile = () => {
    const newVal = !isPrivate;
    localStorage.setItem('isPrivateProfile', newVal ? 'true' : 'false');
    setIsPrivate(newVal);
    window.dispatchEvent(new Event('privateProfileChanged'));
  };

  const getActiveTab = () => {
    if (location.pathname === '/dashboard/learning') return 'learning';
    if (location.pathname === '/dashboard/subscriptions') return 'subscriptions';
    return 'dashboard';
  };

  const activeTab = getActiveTab();

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#070A31] font-sans flex flex-col transition-colors duration-300">
      <Header />

      {/* Hero Header Section */}
      <div className="bg-[#0B0F3B] dark:bg-[#060822] text-white py-12 transition-colors duration-300 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* User Meta Row */}
            <div className="flex items-center gap-4">
              
              {/* Avatar circle with OL and status indicator */}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#2563EB] flex items-center justify-center text-white text-xl font-bold border-2 border-white/20 flex-shrink-0 select-none">
                <span>OL</span>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0B0F3B] dark:border-[#060822]"></span>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  <LayoutGrid size={14} />
                  <span>Dashboard</span>
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  Good morning, Oluwafemi
                </h1>
                
                {/* Privacy Toggle Badge */}
                <button
                  onClick={togglePrivateProfile}
                  className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold border transition-all cursor-pointer ${
                    isPrivate 
                      ? 'bg-gray-700/30 text-gray-300 border-gray-600/50 hover:bg-gray-700/50' 
                      : 'bg-emerald-500/10 text-[#00E676] border-emerald-500/20 hover:bg-emerald-500/20'
                  }`}
                >
                  {isPrivate ? (
                    <>
                      <EyeOff size={10} />
                      <span>Private Profile — courses hidden from public</span>
                    </>
                  ) : (
                    <>
                      <Eye size={10} />
                      <span>Public Profile — click to make private</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/courses')}
                className="px-4 py-2 border border-white/20 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Compass size={14} />
                <span>Browse Courses</span>
              </button>

              {isPrivate && (
                <button 
                  onClick={() => navigate('/pricing')}
                  className="px-4 py-2 bg-[#5A12EC] hover:bg-[#4E0ED6] text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm shadow-[#5A12EC]/20"
                >
                  <TrendingUp size={14} />
                  <span>Upgrade Plan</span>
                </button>
              )}
            </div>

          </div>

          {/* Stats Cards Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { label: 'Enrolled', val: '0', icon: <BookOpen size={16} /> },
              { label: 'In Progress', val: '0', icon: <Clock size={16} /> },
              { label: 'Completed', val: '0', icon: <CheckCircle size={16} /> },
              { label: 'Active Plans', val: '0', icon: <CreditCard size={16} /> },
            ].map((stat, i) => (
              <div 
                key={i}
                className="bg-[#11143B]/40 dark:bg-[#080B2B]/40 border border-gray-800 rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#5A12EC]/10 text-brand-primary dark:text-[#00E676] flex items-center justify-center border border-[#5A12EC]/20 flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white leading-none">{stat.val}</div>
                  <div className="text-[11px] text-gray-400 font-medium mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'dashboard' && (
          /* MAIN DASHBOARD TAB VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Start Learning Block */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-lg font-bold text-gray-950 dark:text-white">Start Learning</h2>
              
              <div className="border-2 border-dashed border-gray-200 dark:border-[#23264A] rounded-3xl p-12 text-center flex flex-col items-center justify-center bg-white dark:bg-[#11143B] shadow-sm">
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-[#00E676] flex items-center justify-center mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-base font-bold text-gray-950 dark:text-white mb-1.5">No courses yet</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm">
                  Find something you love and start learning today
                </p>
                <button 
                  onClick={() => navigate('/courses')}
                  className="px-5 py-2.5 bg-[#00E676] hover:bg-[#00D47C] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm shadow-[#00E676]/20"
                >
                  <span>Browse Courses</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right: Plans & Quick Links */}
            <div className="space-y-8">
              
              {/* Box 1: My Plans */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-950 dark:text-white">My Plans</h2>
                  <Link to="/pricing" className="text-xs font-bold text-brand-primary dark:text-[#00E676] hover:underline flex items-center gap-0.5">
                    <span>Manage</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
                
                <div className="border-2 border-dashed border-gray-200 dark:border-[#23264A] rounded-3xl p-8 text-center flex flex-col items-center justify-center bg-white dark:bg-[#11143B] shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-950/20 text-brand-primary dark:text-purple-300 flex items-center justify-center mb-3">
                    <CreditCard size={18} />
                  </div>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">No active plans</p>
                  
                  <button 
                    onClick={() => navigate('/pricing')}
                    className="w-full py-3 bg-[#5A12EC] hover:bg-[#4E0ED6] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm shadow-[#5A12EC]/10"
                  >
                    View Plans
                  </button>
                </div>
              </div>

              {/* Box 2: Quick Links */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-950 dark:text-white">Quick Links</h2>
                
                <div className="space-y-3">
                  {[
                    { label: 'Browse all courses', path: '/courses', icon: <BookOpen size={16} />, color: 'emerald' },
                    { label: 'My learning progress', path: '/dashboard', icon: <TrendingUp size={16} />, color: 'purple' },
                    { label: 'Manage subscriptions', path: '/dashboard/subscriptions', icon: <CreditCard size={16} />, color: 'purple' },
                    { label: 'Explore plans', path: '/pricing', icon: <Sparkles size={16} />, color: 'emerald' },
                  ].map((link, idx) => (
                    <button
                      key={idx}
                      onClick={() => navigate(link.path)}
                      className="w-full flex items-center justify-between p-3.5 bg-white dark:bg-[#11143B] border border-gray-100 dark:border-[#23264A] rounded-2xl hover:shadow-md transition-all cursor-pointer group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          link.color === 'emerald' 
                            ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-[#00E676]' 
                            : 'bg-purple-50 dark:bg-purple-950/20 text-brand-primary dark:text-purple-300'
                        }`}>
                          {link.icon}
                        </div>
                        <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-[#5A12EC] dark:group-hover:text-[#00E676] transition-colors">
                          {link.label}
                        </span>
                      </div>
                      <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {activeTab === 'learning' && (
          /* MY LEARNING TAB VIEW */
          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 dark:text-white leading-tight">My Learning</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Track your progress across all enrolled courses
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-200 dark:border-[#23264A] rounded-3xl p-16 text-center flex flex-col items-center justify-center bg-white dark:bg-[#11143B] shadow-sm">
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-[#00E676] flex items-center justify-center mb-4">
                <BookOpen size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-2">No courses yet</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
                Start learning by enrolling in your first course
              </p>
              <button 
                onClick={() => navigate('/courses')}
                className="px-6 py-3 bg-[#00E676] hover:bg-[#00D47C] text-white rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm shadow-[#00E676]/20"
              >
                <span>Browse Courses</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'subscriptions' && (
          /* MY SUBSCRIPTIONS TAB VIEW */
          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 dark:text-white leading-tight">My Subscriptions</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Manage all your active learning packages
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-200 dark:border-[#23264A] rounded-3xl p-16 text-center flex flex-col items-center justify-center bg-white dark:bg-[#11143B] shadow-sm">
              <div className="w-16 h-16 rounded-full bg-purple-50 dark:bg-purple-950/20 text-brand-primary dark:text-purple-300 flex items-center justify-center mb-4">
                <CreditCard size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-2">No active subscriptions</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
                Subscribe to a plan to unlock unlimited access to courses
              </p>
              <button 
                onClick={() => navigate('/pricing')}
                className="px-6 py-3 bg-[#5A12EC] hover:bg-[#4E0ED6] text-white rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm shadow-[#5A12EC]/20"
              >
                <span>Browse Plans</span>
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

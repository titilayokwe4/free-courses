import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, ShoppingCart, Phone, LayoutGrid, Bell, EyeOff, Eye, BookOpen, CreditCard, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartItems, toggleCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true' || isDashboardRoute;
  });

  const [isPrivate, setIsPrivate] = useState(() => {
    return localStorage.getItem('isPrivateProfile') === 'true';
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sync login status if on dashboard
  useEffect(() => {
    if (isDashboardRoute && !isLoggedIn) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    }
  }, [isDashboardRoute, isLoggedIn]);

  // Handle cross-component synchronization of private profile status
  useEffect(() => {
    const handleSync = () => {
      setIsPrivate(localStorage.getItem('isPrivateProfile') === 'true');
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true' || location.pathname.startsWith('/dashboard'));
    };

    window.addEventListener('privateProfileChanged', handleSync);
    window.addEventListener('storage', handleSync);

    return () => {
      window.removeEventListener('privateProfileChanged', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, [location.pathname]);

  const togglePrivateProfile = () => {
    const currentVal = localStorage.getItem('isPrivateProfile') === 'true';
    const newVal = !currentVal;
    localStorage.setItem('isPrivateProfile', newVal ? 'true' : 'false');
    setIsPrivate(newVal);
    window.dispatchEvent(new Event('privateProfileChanged'));
  };

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    window.dispatchEvent(new Event('privateProfileChanged'));
    navigate('/');
  };

  const navItems = [
    { name: 'Courses', path: '/courses' },
    { name: 'Categories', path: '/categories' },
    { name: 'Instructors', path: '/instructors' },
    { name: 'Practice Labs', path: '/practice-labs' },
  ];

  return (
    <div className="w-full flex flex-col z-50">
      <header className="bg-white dark:bg-[#070A31] border-b border-gray-200 dark:border-[#23264A] sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img src="/freecourses_logo.png" alt="freecourses" className={`w-28 ${theme === 'dark' ? 'brightness-0 invert' : 'brightness-0'}`} />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl px-8 hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for courses, skills, or instructors..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-[#23264A] rounded-full leading-5 bg-gray-50 dark:bg-[#11143B] text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:bg-white dark:focus:bg-[#070A31] focus:ring-1 focus:ring-brand-primary focus:border-brand-primary sm:text-sm transition-colors"
                />
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <a href="tel:+2348012345678" className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-[#1ABC9C] hover:text-[#16A085] transition-colors">
                <Phone size={16} />
                +234 801 234 5678
              </a>
              
              <button onClick={toggleTheme} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none cursor-pointer p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1e1e36] transition-colors">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button 
                onClick={toggleCart}
                className="relative text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none cursor-pointer p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1e1e36] transition-colors flex items-center gap-1"
                aria-label="Open cart"
              >
                <ShoppingCart size={20} />
                {cartItems.length > 0 && (
                  <span className="bg-brand-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {isLoggedIn ? (
                <>
                  {/* Dashboard link with LayoutGrid icon */}
                  <Link 
                    to="/dashboard" 
                    className={`hidden sm:flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      isDashboardRoute 
                        ? 'text-brand-primary dark:text-[#00E676]' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <LayoutGrid size={18} />
                    <span>Dashboard</span>
                  </Link>

                  {/* Notification Bell */}
                  <button className="relative text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1e1e36] transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 bg-[#00E676] text-white text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full text-center">
                      3
                    </span>
                  </button>

                  {/* Avatar Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="relative w-8 h-8 rounded-full bg-[#5A12EC] flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:bg-opacity-95 focus:outline-none"
                    >
                      {isPrivate ? (
                        <div className="w-full h-full rounded-full flex items-center justify-center relative">
                          <span>O</span>
                          <span className="absolute -bottom-1 -right-1 bg-[#070A31] border border-white dark:border-[#23264A] text-white p-0.5 rounded-full">
                            <EyeOff size={8} className="text-gray-300" />
                          </span>
                        </div>
                      ) : (
                        <span>O</span>
                      )}
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-2xl shadow-xl py-3 z-50 animate-fade-in text-left">
                        <div className="px-4 py-2.5 border-b border-gray-100 dark:border-[#23264A] mb-2">
                          <div className="font-bold text-sm text-gray-950 dark:text-white">Oluwafemi Adesanya</div>
                          <div className="text-xs text-gray-400">oluwadavid081@gmail.com</div>
                        </div>
                        
                        <Link 
                          to="/dashboard" 
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1C2053] transition-colors"
                        >
                          <LayoutGrid size={16} />
                          <span>Dashboard</span>
                        </Link>

                        <Link 
                          to="/dashboard/learning" 
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1C2053] transition-colors"
                        >
                          <BookOpen size={16} />
                          <span>My Learning</span>
                        </Link>

                        <Link 
                          to="/dashboard/subscriptions" 
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1C2053] transition-colors"
                        >
                          <CreditCard size={16} />
                          <span>Subscriptions</span>
                        </Link>

                        <button 
                          onClick={() => {
                            togglePrivateProfile();
                            setIsDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1C2053] transition-colors text-left"
                        >
                          {isPrivate ? (
                            <>
                              <Eye size={16} />
                              <span>Public Profile</span>
                            </>
                          ) : (
                            <>
                              <EyeOff size={16} />
                              <span>Private Profile</span>
                            </>
                          )}
                        </button>

                        <div className="border-t border-gray-100 dark:border-[#23264A] my-1.5"></div>

                        <button 
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors text-left"
                        >
                          <LogOut size={16} />
                          <span>Log out</span>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    Log in
                  </Link>
                  <Link to="/signup">
                    <Button className="!py-2 !px-4 !rounded-lg text-sm bg-brand-primary text-white hover:bg-brand-primary-hover border-none">
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Sub-navigation */}
        <div className="border-t border-gray-100 dark:border-[#23264A] hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium px-1 py-3 ${
                    location.pathname === item.path 
                      ? 'text-gray-900 dark:text-white border-b-2 border-brand-primary' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Private Profile Warning Banner */}
      {isLoggedIn && isPrivate && isDashboardRoute && (
        <div className="bg-[#0B0F3B] dark:bg-[#060822] text-white py-3 border-b border-gray-800 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs md:text-sm">
            <div className="flex items-center gap-2.5">
              <span className="text-base select-none">👻</span>
              <span>
                <strong className="font-bold">Private Profile is on.</strong> Your profile is private — courses you've taken and your learning activity are not visible to other users.
              </span>
            </div>
            <button 
              onClick={() => {
                localStorage.setItem('isPrivateProfile', 'false');
                window.dispatchEvent(new Event('privateProfileChanged'));
              }}
              className="px-3.5 py-1 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg text-xs font-bold text-white transition-all cursor-pointer select-none"
            >
              Turn off
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

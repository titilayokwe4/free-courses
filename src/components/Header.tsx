import React, { useState, useEffect } from 'react';
import {
  Search,
  Moon,
  Sun,
  ShoppingCart,
  Phone,
  LayoutGrid,
  Bell,
  EyeOff,
  Eye,
  BookOpen,
  CreditCard,
  LogOut,
  Globe2,
} from 'lucide-react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Button } from './Button';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartItems, toggleCart } = useCart();

  const location = useLocation();
  const navigate = useNavigate();

  const isDashboardRoute =
    location.pathname.startsWith('/dashboard');

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return (
      localStorage.getItem('isLoggedIn') === 'true' ||
      isDashboardRoute
    );
  });

  const [isPrivate, setIsPrivate] = useState(() => {
    return (
      localStorage.getItem('isPrivateProfile') === 'true'
    );
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // ============================================================
  // LOGIN SYNCHRONIZATION
  // ============================================================

  useEffect(() => {
    if (isDashboardRoute && !isLoggedIn) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    }
  }, [isDashboardRoute, isLoggedIn]);

  // ============================================================
  // CROSS-COMPONENT SYNCHRONIZATION
  // ============================================================

  useEffect(() => {
    const handleSync = () => {
      setIsPrivate(
        localStorage.getItem('isPrivateProfile') === 'true'
      );

      setIsLoggedIn(
        localStorage.getItem('isLoggedIn') === 'true' ||
        location.pathname.startsWith('/dashboard')
      );
    };

    window.addEventListener(
      'privateProfileChanged',
      handleSync
    );

    window.addEventListener('storage', handleSync);

    return () => {
      window.removeEventListener(
        'privateProfileChanged',
        handleSync
      );

      window.removeEventListener('storage', handleSync);
    };
  }, [location.pathname]);

  // ============================================================
  // PRIVATE PROFILE
  // ============================================================

  const togglePrivateProfile = () => {
    const currentValue =
      localStorage.getItem('isPrivateProfile') === 'true';

    const newValue = !currentValue;

    localStorage.setItem(
      'isPrivateProfile',
      newValue ? 'true' : 'false'
    );

    setIsPrivate(newValue);

    window.dispatchEvent(
      new Event('privateProfileChanged')
    );
  };

  // ============================================================
  // LOGOUT
  // ============================================================

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');

    setIsLoggedIn(false);
    setIsDropdownOpen(false);

    window.dispatchEvent(
      new Event('privateProfileChanged')
    );

    navigate('/');
  };

  // ============================================================
  // NAVIGATION ITEMS
  // ============================================================

  const navItems = [
    {
      name: 'Courses',
      path: '/courses',
    },
    {
      name: 'Categories',
      path: '/categories',
    },
    {
      name: 'Instructors',
      path: '/instructors',
    },
    {
      name: 'Practice Labs',
      path: '/practice-labs',
    },
    {
      name: 'Explore Africa',
      path: '/africa',
    },
  ];

  return (
    <div className="w-full flex flex-col z-50">

      {/* ========================================================
          MAIN HEADER
      ======================================================== */}

      <header
        className="
          bg-white
          dark:bg-[#333333]
          border-b
          border-gray-200
          dark:border-white/10
          sticky
          top-0
          z-50
          transition-colors
          duration-300
        "
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16">

            {/* ==================================================
                LOGO
            ================================================== */}

            <div className="flex-shrink-0 flex items-center">

              <Link
                to="/"
                className="flex items-center gap-2"
              >
                <img
                  src="/freecourses_logo.png"
                  alt="FreeCourses"
                  className={`w-28 ${
                    theme === 'dark'
                      ? 'brightness-0 invert'
                      : 'brightness-0'
                  }`}
                />
              </Link>

            </div>

            {/* ==================================================
                SEARCH BAR
            ================================================== */}

            <div className="
              flex-1
              max-w-2xl
              px-8
              hidden
              md:block
            ">

              <div className="relative">

                <div className="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                ">
                  <Search
                    size={18}
                    className="text-gray-400"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Search for courses, skills, or instructors..."
                  className="
                    block
                    w-full
                    pl-10
                    pr-3
                    py-2
                    border
                    border-gray-200
                    dark:border-white/10
                    rounded-full
                    leading-5
                    bg-gray-50
                    dark:bg-[#2A2A2A]
                    text-gray-900
                    dark:text-white
                    placeholder-gray-500
                    focus:outline-none
                    focus:bg-white
                    dark:focus:bg-[#333333]
                    focus:ring-1
                    focus:ring-brand-secondary
                    focus:border-brand-secondary
                    sm:text-sm
                    transition-colors
                  "
                />

              </div>

            </div>

            {/* ==================================================
                RIGHT SECTION
            ================================================== */}

            <div className="
              flex
              items-center
              space-x-4
              md:space-x-6
            ">

              {/* Phone */}
              <a
                href="tel:+2348012345678"
                className="
                  hidden
                  lg:flex
                  items-center
                  gap-1.5
                  text-sm
                  font-medium
                  text-brand-secondary
                  hover:text-brand-secondary-hover
                  transition-colors
                "
              >
                <Phone size={16} />
                +234 801 234 5678
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="
                  text-gray-500
                  dark:text-gray-300
                  hover:text-gray-900
                  dark:hover:text-white
                  focus:outline-none
                  cursor-pointer
                  p-1.5
                  rounded-lg
                  hover:bg-gray-100
                  dark:hover:bg-white/10
                  transition-colors
                "
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )}
              </button>

              {/* Shopping Cart */}
              <button
                onClick={toggleCart}
                className="
                  relative
                  text-gray-500
                  dark:text-gray-300
                  hover:text-gray-900
                  dark:hover:text-white
                  focus:outline-none
                  cursor-pointer
                  p-1.5
                  rounded-lg
                  hover:bg-gray-100
                  dark:hover:bg-white/10
                  transition-colors
                  flex
                  items-center
                  gap-1
                "
                aria-label="Open cart"
              >

                <ShoppingCart size={20} />

                {cartItems.length > 0 && (
                  <span
                    className="
                      bg-brand-primary
                      text-[#333333]
                      text-[10px]
                      font-bold
                      px-1.5
                      py-0.5
                      rounded-full
                      min-w-[18px]
                      text-center
                    "
                  >
                    {cartItems.length}
                  </span>
                )}

              </button>

              {/* ==================================================
                  LOGGED IN
              ================================================== */}

              {isLoggedIn ? (
                <>

                  {/* Dashboard */}
                  <Link
                    to="/dashboard"
                    className={`hidden sm:flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      isDashboardRoute
                        ? 'text-brand-secondary'
                        : 'text-gray-500 dark:text-gray-300 hover:text-brand-secondary'
                    }`}
                  >
                    <LayoutGrid size={18} />
                    <span>Dashboard</span>
                  </Link>

                  {/* Notifications */}
                  <button
                    className="
                      relative
                      text-gray-500
                      dark:text-gray-300
                      hover:text-gray-900
                      dark:hover:text-white
                      cursor-pointer
                      p-1.5
                      rounded-lg
                      hover:bg-gray-100
                      dark:hover:bg-white/10
                      transition-colors
                    "
                    aria-label="Notifications"
                  >

                    <Bell size={20} />

                    <span
                      className="
                        absolute
                        top-0
                        right-0
                        bg-brand-primary
                        text-[#333333]
                        text-[8px]
                        font-bold
                        w-3.5
                        h-3.5
                        flex
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
                      3
                    </span>

                  </button>

                  {/* Avatar */}
                  <div className="relative">

                    <button
                      onClick={() =>
                        setIsDropdownOpen(!isDropdownOpen)
                      }
                      className="
                        relative
                        w-8
                        h-8
                        rounded-full
                        bg-brand-primary
                        flex
                        items-center
                        justify-center
                        text-[#333333]
                        font-bold
                        text-sm
                        cursor-pointer
                        hover:brightness-95
                        focus:outline-none
                      "
                      aria-label="Open profile menu"
                    >

                      {isPrivate ? (
                        <div className="
                          w-full
                          h-full
                          rounded-full
                          flex
                          items-center
                          justify-center
                          relative
                        ">

                          <span>O</span>

                          <span
                            className="
                              absolute
                              -bottom-1
                              -right-1
                              bg-[#333333]
                              border
                              border-white
                              text-white
                              p-0.5
                              rounded-full
                            "
                          >
                            <EyeOff
                              size={8}
                              className="text-gray-300"
                            />
                          </span>

                        </div>
                      ) : (
                        <span>O</span>
                      )}

                    </button>

                    {/* ==================================================
                        DROPDOWN
                    ================================================== */}

                    {isDropdownOpen && (
                      <div
                        className="
                          absolute
                          right-0
                          mt-2
                          w-64
                          bg-white
                          dark:bg-[#2A2A2A]
                          border
                          border-gray-200
                          dark:border-white/10
                          rounded-2xl
                          shadow-xl
                          py-3
                          z-50
                          text-left
                        "
                      >

                        {/* User Information */}
                        <div
                          className="
                            px-4
                            py-2.5
                            border-b
                            border-gray-100
                            dark:border-white/10
                            mb-2
                          "
                        >

                          <div className="
                            font-bold
                            text-sm
                            text-gray-950
                            dark:text-white
                          ">
                            Oluwafemi Adesanya
                          </div>

                          <div className="
                            text-xs
                            text-gray-500
                            dark:text-gray-400
                          ">
                            oluwadavid081@gmail.com
                          </div>

                        </div>

                        {/* Dashboard */}
                        <Link
                          to="/dashboard"
                          onClick={() =>
                            setIsDropdownOpen(false)
                          }
                          className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-2
                            text-sm
                            text-gray-700
                            dark:text-gray-200
                            hover:bg-brand-secondary/10
                            hover:text-brand-secondary
                            transition-colors
                          "
                        >
                          <LayoutGrid size={16} />
                          <span>Dashboard</span>
                        </Link>

                        {/* My Learning */}
                        <Link
                          to="/dashboard/learning"
                          onClick={() =>
                            setIsDropdownOpen(false)
                          }
                          className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-2
                            text-sm
                            text-gray-700
                            dark:text-gray-200
                            hover:bg-brand-secondary/10
                            hover:text-brand-secondary
                            transition-colors
                          "
                        >
                          <BookOpen size={16} />
                          <span>My Learning</span>
                        </Link>

                        {/* Subscriptions */}
                        <Link
                          to="/dashboard/subscriptions"
                          onClick={() =>
                            setIsDropdownOpen(false)
                          }
                          className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-2
                            text-sm
                            text-gray-700
                            dark:text-gray-200
                            hover:bg-brand-secondary/10
                            hover:text-brand-secondary
                            transition-colors
                          "
                        >
                          <CreditCard size={16} />
                          <span>Subscriptions</span>
                        </Link>

                        {/* Explore Africa */}
                        <Link
                          to="/africa"
                          onClick={() =>
                            setIsDropdownOpen(false)
                          }
                          className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-2
                            text-sm
                            text-gray-700
                            dark:text-gray-200
                            hover:bg-brand-secondary/10
                            hover:text-brand-secondary
                            transition-colors
                          "
                        >
                          <Globe2 size={16} />
                          <span>Explore Africa</span>
                        </Link>

                        {/* Private Profile */}
                        <button
                          onClick={() => {
                            togglePrivateProfile();
                            setIsDropdownOpen(false);
                          }}
                          className="
                            w-full
                            flex
                            items-center
                            gap-3
                            px-4
                            py-2
                            text-sm
                            text-gray-700
                            dark:text-gray-200
                            hover:bg-brand-secondary/10
                            hover:text-brand-secondary
                            transition-colors
                            text-left
                          "
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

                        {/* Divider */}
                        <div className="
                          border-t
                          border-gray-100
                          dark:border-white/10
                          my-1.5
                        " />

                        {/* Logout */}
                        <button
                          onClick={handleLogout}
                          className="
                            w-full
                            flex
                            items-center
                            gap-3
                            px-4
                            py-2
                            text-sm
                            text-red-600
                            hover:bg-red-50
                            dark:hover:bg-red-950/20
                            transition-colors
                            text-left
                          "
                        >
                          <LogOut size={16} />
                          <span>Log out</span>
                        </button>

                      </div>
                    )}

                  </div>

                </>
              ) : (

                /* ==================================================
                    LOGGED OUT
                ================================================== */

                <>
                  <Link
                    to="/login"
                    className="
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-200
                      hover:text-brand-secondary
                    "
                  >
                    Log in
                  </Link>

                  <Link to="/signup">
                    <Button
                      className="
                        !py-2
                        !px-4
                        !rounded-lg
                        text-sm
                        !bg-brand-primary
                        !text-[#333333]
                        hover:!bg-brand-primary-hover
                        border-none
                      "
                    >
                      Sign up
                    </Button>
                  </Link>
                </>

              )}

            </div>

          </div>

        </div>

        {/* ========================================================
            SUB NAVIGATION
        ======================================================== */}

        <div
          className="
            border-t
            border-gray-100
            dark:border-white/10
            hidden
            md:block
          "
        >

          <div className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          ">

            <nav className="
              flex
              space-x-8
              h-12
              items-center
            ">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium px-1 py-3 ${
                    location.pathname === item.path
                      ? 'text-gray-900 dark:text-white border-b-2 border-brand-primary'
                      : 'text-gray-500 dark:text-gray-300 hover:text-brand-secondary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

            </nav>

          </div>

        </div>

      </header>

      {/* ========================================================
          PRIVATE PROFILE WARNING
      ======================================================== */}

      {isLoggedIn &&
        isPrivate &&
        isDashboardRoute && (
          <div
            className="
              bg-[#333333]
              text-white
              py-3
              border-b
              border-white/10
            "
          >

            <div
              className="
                max-w-7xl
                mx-auto
                px-4
                sm:px-6
                lg:px-8
                flex
                items-center
                justify-between
                text-xs
                md:text-sm
              "
            >

              <div className="
                flex
                items-center
                gap-2.5
              ">

                <span className="text-base select-none">
                  👻
                </span>

                <span>
                  <strong className="
                    font-bold
                    text-brand-primary
                  ">
                    Private Profile is on.
                  </strong>{' '}
                  Your profile is private — courses you've
                  taken and your learning activity are not
                  visible to other users.
                </span>

              </div>

              <button
                onClick={() => {
                  localStorage.setItem(
                    'isPrivateProfile',
                    'false'
                  );

                  window.dispatchEvent(
                    new Event('privateProfileChanged')
                  );
                }}
                className="
                  px-3.5
                  py-1
                  bg-white/10
                  hover:bg-brand-secondary/15
                  border
                  border-white/20
                  hover:border-brand-secondary
                  rounded-lg
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  cursor-pointer
                  select-none
                "
              >
                Turn off
              </button>

            </div>

          </div>
        )}

    </div>
  );
};
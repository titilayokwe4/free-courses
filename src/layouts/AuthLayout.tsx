import React from 'react';

interface AuthLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ leftContent, rightContent }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row relative overflow-hidden">
      {/* Subtle radial glow background effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-brand-primary opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      {/* Left side: Information/Marketing (Hidden on small screens, stacks on tablets, side-by-side on desktop) */}
      <div className="flex-1 flex flex-col justify-between z-10 hidden md:flex min-h-[50vh] lg:min-h-screen border-b lg:border-b-0 lg:border-r border-border border-opacity-30">
        <div className="max-w-xl mx-auto w-full flex-1 flex flex-col">
          {leftContent}
        </div>
      </div>

      {/* Right side: Form (Takes full width on mobile, half on desktop) */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 z-10 w-full min-h-screen md:min-h-[50vh] lg:min-h-screen">
        <div className="w-full max-w-md">
          {rightContent}
        </div>
      </div>
      
      {/* Mobile left content display - optional fallback for small screens if needed, 
          but usually we want to prioritize the form. We'll append the footer here for mobile. */}
      <div className="md:hidden p-6 text-center text-sm text-text-tertiary">
        © 2026 freecourses. All rights reserved.
      </div>
    </div>
  );
};

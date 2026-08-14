import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080A33] text-white pt-16 pb-8 border-t border-[#11143B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/freecourses_logo.png" alt="freecourses" className="w-28 brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Where ambitious learners come to grow.<br />
              Creative and professional skills taught by world-class instructors.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
                <svg className="w-4.5 h-4.5 text-gray-400 group-hover:text-white fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
                <svg className="w-4.5 h-4.5 text-gray-400 group-hover:text-white fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
                <svg className="w-4.5 h-4.5 text-gray-400 group-hover:text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
                <svg className="w-4.5 h-4.5 text-gray-400 group-hover:text-white fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
                <svg className="w-4.5 h-4.5 text-gray-400 group-hover:text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            
            <a href="tel:+2348012345678" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-sm font-medium text-[#1ABC9C] transition-colors">
              <div className="w-2 h-2 rounded-full bg-[#1ABC9C]"></div>
              +234 801 234 5678
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-6 text-white">Learn</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">All Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">Instructors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">Practice Labs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-6 text-white">Account</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">My Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">Subscriptions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            © 2026 freecourses
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <div className="inline-flex items-center gap-1.5 bg-[#11143B] border border-[#23264A] rounded-full px-2.5 py-1 text-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
              Powered by Codar
            </div>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

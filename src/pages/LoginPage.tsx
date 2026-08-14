import React from 'react';
import { BookOpen, Award, Users, Star } from 'lucide-react';
import { AuthLayout } from '../layouts/AuthLayout';
import { Logo } from '../components/Logo';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

const benefits = [
  { icon: <BookOpen size={20} className="text-brand-secondary" />, text: 'Access 8+ expert-led courses' },
  { icon: <Award size={20} className="text-brand-secondary" />, text: 'Earn certificates of completion' },
  { icon: <Users size={20} className="text-brand-secondary" />, text: 'Join thousands of learners' },
  { icon: <Star size={20} className="text-brand-secondary" />, text: 'Top-rated instructors worldwide' },
];

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="white" />
  </svg>
);

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    window.dispatchEvent(new Event('privateProfileChanged'));
    navigate('/dashboard');
  };

  const leftContent = (
    <div className="h-full flex flex-col pt-8 pb-12">
      <Logo />

      <div className="mt-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Continue your <br />
          <span className="text-gradient">learning journey</span>
        </h1>
        <p className="text-xl text-text-secondary">Pick up right where you left off.</p>
      </div>

      <div className="space-y-2 mb-auto">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[rgba(0,230,118,0.1)] flex items-center justify-center">
              {benefit.icon}
            </div>
            <span className="text-text-primary font-medium">{benefit.text}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-surface/50 border border-border rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-text-secondary italic mb-6">
          "freecourses completely changed how I learn. The courses are top-notch and the instructors are world-class."
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
              <img src="https://i.pravatar.cc/150?u=amara" alt="Amara Osei" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-semibold text-text-primary text-sm">Amara Osei</div>
              <div className="text-text-tertiary text-xs">UX Designer</div>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-text-tertiary">
        © 2026 freecourses. All rights reserved.
      </div>
    </div>
  );

  const rightContent = (
    <div>

      <div className="bg-surface p-8 rounded-[2rem] border border-border w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Welcome back</h2>
          <p className="text-text-secondary text-sm">Sign in to access your courses and track your progress.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input
            label="Email address"
            type="email"
            placeholder="you@example.com"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            rightElement={<a href="#" className="text-brand-secondary hover:underline text-xs font-medium">Forgot password?</a>}
          />

          <div className="pt-2">
            <Button fullWidth type="submit">
              Sign in <span className="ml-2">→</span>
            </Button>
          </div>
        </form>

        <div className="my-3 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-surface px-4 text-text-tertiary">or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <Button variant="outline" icon={<GoogleIcon />} onClick={handleSubmit}>
            Google
          </Button>
          <Button variant="outline" icon={<GitHubIcon />} onClick={handleSubmit}>
            GitHub
          </Button>
        </div>

        <div className="text-center text-sm text-text-secondary">
          Don't have an account? <Link to="/signup" className="text-brand-secondary font-medium hover:underline">Sign up free</Link>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-text-tertiary leading-relaxed px-4">
        By continuing, you agree to our <a href="#" className="text-text-secondary hover:underline">Terms of Service</a> and <a href="#" className="text-text-secondary hover:underline">Privacy Policy</a>
      </div>
    </div>
  );

  return <AuthLayout leftContent={leftContent} rightContent={rightContent} />;
};

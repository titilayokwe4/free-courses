import React, { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'cursor-pointer inline-flex items-center justify-center gap-2 font-medium transition-colors';

  const variants = {
    // Primary: Lime #D6FB61
    // Dark text provides better contrast than white.
    primary:
      'bg-brand-primary text-[#333333] hover:bg-brand-primary-hover',

    // Secondary: Blue #39B1D1
    // Dark text keeps the button readable.
    secondary:
      'bg-brand-secondary text-[#333333] hover:bg-brand-secondary-hover',

    // Outline button
    outline:
      'border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100',

    // Ghost button
    ghost:
      'bg-transparent text-gray-600 hover:text-[#333333] hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-3 py-2 text-xs rounded-lg',
    md: 'px-4 py-4 text-sm rounded-xl',
    lg: 'px-6 py-4 text-base rounded-xl',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className} ${
        disabled ? 'opacity-50 !cursor-not-allowed' : ''
      }`}
      {...props}
    >
      {icon && (
        <span className="w-5 h-5 flex items-center justify-center">
          {icon}
        </span>
      )}

      {children}
    </button>
  );
};
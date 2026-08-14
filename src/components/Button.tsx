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
  const baseStyles = 'cursor-pointer inline-flex items-center justify-center gap-2 font-medium transition-colors';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary-hover',
    secondary: 'bg-brand-secondary text-background hover:bg-brand-secondary-hover',
    outline: 'border border-border bg-transparent text-text-primary hover:bg-surface-hover',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface'
  };

  const sizes = {
    sm: 'px-3 py-2 text-xs rounded-lg',
    md: 'px-4 py-4 text-sm rounded-xl',
    lg: 'px-6 py-4 text-base rounded-xl',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className} ${disabled ? 'opacity-50 !cursor-not-allowed' : ''}`}
      {...props}
    >
      {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
      {children}
    </button>
  );
};

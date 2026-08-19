import React, { type InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || 'checkbox';

  return (
    <div className={`flex items-start gap-3 ${className}`}>

      <div className="relative flex items-center mt-0.5">

        <input
          type="checkbox"
          id={inputId}
          className="
            peer
            appearance-none
            w-5
            h-5
            border
            border-gray-300
            dark:border-white/20
            rounded
            bg-white
            dark:bg-[#333333]
            checked:bg-brand-secondary
            checked:border-brand-secondary
            focus:outline-none
            focus:ring-2
            focus:ring-brand-secondary
            focus:ring-offset-2
            focus:ring-offset-white
            dark:focus:ring-offset-[#333333]
            transition-colors
            cursor-pointer
          "
          {...props}
        />

        {/* Check mark */}
        <svg
          className="
            absolute
            inset-0
            w-5
            h-5
            text-[#333333]
            pointer-events-none
            opacity-0
            peer-checked:opacity-100
            transition-opacity
          "
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 10 8 14 16 6" />
        </svg>

      </div>

      <label
        htmlFor={inputId}
        className="
          text-sm
          text-gray-600
          dark:text-gray-300
          cursor-pointer
          leading-tight
        "
      >
        {label}
      </label>

    </div>
  );
};
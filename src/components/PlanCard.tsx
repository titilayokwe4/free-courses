import React from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  isPopular?: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  isPopular,
}) => {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col justify-center relative border transition-all duration-300 ${
        isPopular
          ? 'bg-surface border-brand-primary shadow-lg shadow-brand-primary/10'
          : 'bg-surface/60 border-border hover:border-brand-secondary/50 hover:shadow-md'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-6 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-text-primary text-xl font-bold mb-2">
        {title}
      </h3>

      <div className="text-text-primary font-bold flex items-baseline">
        <span className="text-4xl">
          {price}
        </span>

        <span className="text-sm text-text-tertiary ml-1">
          /mo
        </span>
      </div>
    </div>
  );
};
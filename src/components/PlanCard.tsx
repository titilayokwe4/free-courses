import React from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  isPopular?: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({ title, price, isPopular }) => {
  return (
    <div 
      className={`rounded-2xl p-8 flex flex-col justify-center relative border transition-all ${
        isPopular 
          ? 'bg-[#11143B] border-brand-primary' 
          : 'bg-[#11143B]/60 border-[#23264A]'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-6 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <div className="text-white font-bold flex items-baseline">
        <span className="text-4xl">{price}</span>
        <span className="text-sm text-gray-400 ml-1">/mo</span>
      </div>
    </div>
  );
};

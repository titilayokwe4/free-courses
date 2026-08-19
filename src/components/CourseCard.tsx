import React from 'react';
import { Star, Clock, Users, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  id?: string;
  image: string;
  badge?: string;
  level: string;
  category: string;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  duration: string;
  students: number;
  price: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  id,
  image,
  badge,
  level,
  category,
  title,
  instructor,
  rating,
  reviews,
  duration,
  students,
  price,
}) => {
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  const isBeginner = level.toLowerCase() === 'beginner';
  const isIntermediate = level.toLowerCase() === 'intermediate';

  // Course level colours
  let levelColor =
    'bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400';

  if (isBeginner) {
    levelColor =
      'bg-brand-secondary/10 text-brand-secondary dark:bg-brand-secondary/15 dark:text-brand-secondary';
  }

  if (isIntermediate) {
    levelColor =
      'bg-brand-primary/15 text-[#333333] dark:bg-brand-primary/15 dark:text-brand-primary';
  }

  const isAdded = cartItems.some(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );

  const slug =
    id ||
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isAdded) return;

    // Parse numeric price from string
    const numericPrice =
      parseInt(price.replace(/[^0-9]/g, '')) || 15000;

    addToCart({
      title,
      instructor,
      image,
      price: numericPrice,
    });
  };

  const handleCardClick = () => {
    navigate(`/courses/${slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="
        bg-white
        dark:bg-[#333333]
        border
        border-gray-200
        dark:border-white/10
        rounded-2xl
        overflow-hidden
        flex
        flex-col
        group
        hover:shadow-xl
        transition-all
        duration-300
        cursor-pointer
        text-left
      "
    >

      {/* Image Container */}
      <div className="relative h-40 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Course Badge */}
        {badge && (
          <div
            className="
              absolute
              top-3
              left-3
              bg-brand-primary
              text-[#333333]
              text-xs
              font-semibold
              px-2.5
              py-1
              rounded-full
            "
          >
            {badge}
          </div>
        )}

        {/* Hover Cart Icon */}
        <div
          onClick={handleAddToCart}
          className={`
            absolute
            bottom-3
            right-3
            p-2.5
            rounded-full
            opacity-0
            translate-y-4
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-300
            shadow-lg
            cursor-pointer
            ${
              isAdded
                ? 'bg-brand-secondary text-[#333333] hover:bg-brand-secondary-hover'
                : 'bg-brand-primary text-[#333333] hover:bg-brand-primary-hover'
            }
          `}
        >
          {isAdded ? (
            <Check size={18} />
          ) : (
            <ShoppingCart size={18} />
          )}
        </div>
      </div>


      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">

        {/* Level + Category */}
        <div className="flex items-center gap-3 mb-3">

          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-md ${levelColor}`}
          >
            {level}
          </span>

          <span className="text-xs text-gray-500 dark:text-gray-300">
            {category}
          </span>

        </div>


        {/* Course Title */}
        <h3
          className="
            text-sm
            font-semibold
            text-gray-900
            dark:text-white
            leading-tight
            mb-1
            line-clamp-2
          "
        >
          {title}
        </h3>


        {/* Instructor */}
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">
          {instructor}
        </p>


        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">

          <span className="text-sm font-bold text-brand-secondary">
            {rating.toFixed(1)}
          </span>

          <div className="flex text-brand-primary">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={
                  i < Math.floor(rating)
                    ? 'currentColor'
                    : 'none'
                }
              />
            ))}
          </div>

          <span className="text-xs text-gray-500 dark:text-gray-300 ml-1">
            ({reviews.toLocaleString()})
          </span>

        </div>


        {/* Duration + Students */}
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-300 mb-5">

          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{students.toLocaleString()}</span>
          </div>

        </div>


        {/* Price + Add Button */}
        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            pt-4
            border-t
            border-gray-100
            dark:border-white/10
          "
        >

          <span className="text-md font-bold text-gray-900 dark:text-white">
            {price}
          </span>

          <button
            onClick={handleAddToCart}
            className={`
              flex
              items-center
              gap-1.5
              px-3
              py-1.5
              rounded-lg
              text-xs
              font-medium
              transition-colors
              cursor-pointer
              ${
                isAdded
                  ? 'bg-brand-secondary text-[#333333] hover:bg-brand-secondary-hover'
                  : 'bg-brand-primary text-[#333333] hover:bg-brand-primary-hover'
              }
            `}
          >
            {isAdded ? (
              <>
                <Check size={14} />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart size={14} />
                <span>Add</span>
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
};
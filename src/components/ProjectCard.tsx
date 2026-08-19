import React from 'react';
import { Heart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLabs } from '../context/LabsContext';

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  authorHandle: string;
  likes: number;
  views: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  image,
  title,
  authorHandle,
  likes,
  views
}) => {
  const navigate = useNavigate();
  const { toggleLikeProject, projects } = useLabs();

  const project = projects.find((p) => p.id === id);
  const isLiked = project?.isLikedByUser || false;
  const currentLikes = project?.likes ?? likes;

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLikeProject(id);
  };

  return (
    <div
      onClick={() => navigate(`/practice-labs/${id}`)}
      className="flex flex-col group cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-3">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Hover Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/90
            via-black/30
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
          "
        />

        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`
            absolute top-3 right-3
            p-2 rounded-full
            backdrop-blur-sm
            transition-all duration-300
            transform translate-y-[-10px]
            opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            cursor-pointer
            ${
              isLiked
                ? 'bg-brand-primary text-white'
                : 'bg-white/90 text-gray-500 hover:text-brand-primary hover:bg-white'
            }
          `}
          aria-label={isLiked ? 'Unlike project' : 'Like project'}
        >
          <Heart
            size={16}
            fill={isLiked ? 'currentColor' : 'none'}
          />
        </button>

        {/* Hover Title */}
        <div
          className="
            absolute bottom-4 left-4 right-4
            transform translate-y-[10px]
            opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all duration-300
          "
        >
          <h3 className="text-white font-bold text-sm line-clamp-2">
            {title}
          </h3>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between px-1">

        {/* Author */}
        <span className="text-sm font-medium text-gray-700 dark:text-text-secondary">
          @{authorHandle}
        </span>

        {/* Stats */}
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-text-tertiary">

          {/* Likes */}
          <button
            onClick={handleLike}
            className={`
              flex items-center gap-1
              transition-colors
              cursor-pointer
              ${
                isLiked
                  ? 'text-brand-primary'
                  : 'hover:text-brand-primary'
              }
            `}
            aria-label={isLiked ? 'Unlike project' : 'Like project'}
          >
            <Heart
              size={12}
              fill={isLiked ? 'currentColor' : 'none'}
            />
            <span>{currentLikes.toLocaleString()}</span>
          </button>

          {/* Views */}
          <div className="flex items-center gap-1">
            <Eye size={12} />
            <span>{views.toLocaleString()}</span>
          </div>

        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Eye, ChevronLeft, Send, MessageSquare, Share2 } from 'lucide-react';
import { Header } from '../components/Header';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';
import { useLabs } from '../context/LabsContext';

export const PracticeLabDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects, toggleLikeProject, addCommentToProject } = useLabs();

  // Find the selected project
  const project = projects.find((p) => p.id === id) || projects[0];

  // Comment state
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');

  // Handle comment submit
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const authorName = commentName.trim() || 'Anonymous';
    addCommentToProject(project.id, authorName, commentText.trim());

    setCommentText('');
    setCommentName('');
  };

  // Get other projects for "MORE FROM THIS CREATOR" (excluding the current one)
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  // Fallback other projects if we don't have enough
  const displayOtherProjects = otherProjects.length > 0 ? otherProjects : projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#070A31] font-sans transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
        {/* Back Link */}
        <Link 
          to="/practice-labs" 
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-6 transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Practice Labs
        </Link>

        {/* Large Project Image Banner */}
        <div className="w-full h-[320px] md:h-[480px] rounded-3xl overflow-hidden mb-10 shadow-lg border border-gray-100 dark:border-[#23264A]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left / Main Details Column (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Creator Block */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/10 text-brand-primary text-xs font-semibold rounded-full">
                {project.category}
              </span>
              
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {project.title}
              </h1>

              {/* Creator details */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg shadow-inner">
                  {project.authorHandle.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-gray-950 dark:text-white leading-none">
                    @{project.authorHandle}
                  </h3>
                  {project.socialMediaHandle ? (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.socialMediaPlatform || 'Social'}: {project.socialMediaHandle}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Instagram: @{project.authorHandle}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-gray-100 dark:border-[#23264A] pt-6">
              <p className="text-gray-700 dark:text-gray-300 text-md leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Comments Area */}
            <div className="border-t border-gray-100 dark:border-[#23264A] pt-8 space-y-6">
              <div className="flex items-center gap-2">
                <MessageSquare size={20} className="text-brand-primary" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Comments ({project.comments.length})
                </h3>
              </div>

              {/* Comments list */}
              <div className="space-y-4">
                {project.comments.length === 0 ? (
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">No comments yet. Be the first to comment!</p>
                ) : (
                  project.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3 bg-white dark:bg-[#11143B] p-4 rounded-xl border border-gray-100 dark:border-[#23264A]">
                      <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-xs text-gray-700 dark:text-gray-300 flex-shrink-0">
                        {comment.author.replace('@', '').substring(0, 2).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="font-bold text-xs text-gray-900 dark:text-white">{comment.author}</span>
                          <span className="text-[10px] text-gray-400">{comment.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-normal">{comment.text}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Write comment form */}
              <form onSubmit={handleCommentSubmit} className="space-y-3 bg-gray-50 dark:bg-[#11143B]/50 p-4 rounded-xl border border-gray-100 dark:border-[#23264A]">
                <input
                  type="text"
                  placeholder="Your name or handle (optional)"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-200 dark:border-[#23264A] rounded-xl bg-white dark:bg-[#11143B] text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-primary placeholder-gray-400"
                />
                
                <div className="relative">
                  <textarea
                    rows={3}
                    placeholder="Leave a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                    className="block w-full px-4 py-3 border border-gray-200 dark:border-[#23264A] rounded-xl bg-white dark:bg-[#11143B] text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-primary placeholder-gray-400 pr-12 resize-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 bottom-3 bg-brand-primary text-white p-2 rounded-lg hover:bg-brand-primary-hover transition-colors cursor-pointer"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right / Sidebar Column (1/3 width on desktop) */}
          <div className="space-y-6">
            
            {/* Box 1: Action/Stats Card */}
            <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-2xl p-6 space-y-6 shadow-sm">
              <div className="flex justify-around text-sm text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-[#23264A] pb-4">
                <div className="flex items-center gap-1.5 font-medium">
                  <Eye size={16} className="text-gray-400" />
                  <span>{project.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Heart size={16} className="text-gray-400" />
                  <span>{project.likes.toLocaleString()} likes</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => toggleLikeProject(project.id)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer text-sm ${
                    project.isLikedByUser
                      ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200'
                      : 'bg-brand-primary text-white hover:bg-brand-primary-hover shadow-md hover:shadow-lg'
                  }`}
                >
                  <Heart size={16} fill={project.isLikedByUser ? 'currentColor' : 'none'} />
                  <span>{project.isLikedByUser ? 'Liked project' : 'Like this project'}</span>
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Project link copied to clipboard!');
                  }}
                  className="w-full py-3 px-4 rounded-xl font-semibold border border-gray-200 dark:border-[#23264A] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1e1e36] flex items-center justify-center gap-2 transition-colors cursor-pointer text-sm"
                >
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Box 2: More From This Creator */}
            <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-wider mb-4 uppercase">
                More from this creator
              </h3>

              <div className="space-y-4">
                {displayOtherProjects.map((otherProj) => (
                  <Link
                    key={otherProj.id}
                    to={`/practice-labs/${otherProj.id}`}
                    className="flex gap-3 items-center group block"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                      <img 
                        src={otherProj.image} 
                        alt={otherProj.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Text info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-xs text-gray-900 dark:text-white truncate group-hover:text-brand-primary transition-colors">
                        {otherProj.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        @{otherProj.authorHandle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <LearningAdvantage />
      <Footer />
    </div>
  );
};

import React, { useState } from 'react';
import { FlaskConical, Plus, ChevronDown } from 'lucide-react';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { SubmitProjectModal } from '../components/SubmitProjectModal';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';
import { useLabs } from '../context/LabsContext';

export const PracticeLabsPage: React.FC = () => {
  const { projects } = useLabs();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const categories = [
    'Design',
    'Development',
    'Photography',
    'Illustration',
    'Music',
    '3D & Animation',
    'Writing',
    'Marketing',
  ];

  // Dynamically calculate counts
  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return projects.length;
    return projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;
  };

  // Filter projects
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#070A31] font-sans transition-colors duration-300">
      <Header />

      {/* Sub-navigation for Community section */}
      <div className="bg-white dark:bg-[#070A31] border-b border-gray-200 dark:border-[#23264A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 h-14 items-center">
            {['Community', 'Contests', 'Projects', 'Creatives'].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium px-1 py-4 ${
                  item === 'Projects' 
                    ? 'text-gray-900 dark:text-white border-b-2 border-[#00E676]' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 text-[#00E676] rounded-xl flex items-center justify-center">
              <FlaskConical size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Practice Labs
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Real work from real learners
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsSubmitModalOpen(true)}
            className="bg-[#0B0F3B] dark:bg-white text-white dark:text-[#0B0F3B] px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#060822] dark:hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Plus size={16} /> Submit a project
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button 
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-[#00E676] text-white shadow-sm'
                : 'bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1e1e36]'
            }`}
          >
            All 
            <span className={`text-xs px-1.5 py-0.5 rounded-md ${
              selectedCategory === 'All' 
                ? 'bg-white/20 text-white' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
            }`}>
              {getCategoryCount('All')}
            </span>
          </button>

          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#00E676] text-white shadow-sm'
                  : 'bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1e1e36]'
              }`}
            >
              {cat} 
              <span className={`text-xs ${
                selectedCategory === cat 
                  ? 'text-white/80' 
                  : 'text-gray-400 dark:text-gray-500'
              }`}>
                {getCategoryCount(cat)}
              </span>
            </button>
          ))}
        </div>

        {/* Sort Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
            <span className="font-bold text-gray-900 dark:text-white">
              {filteredProjects.length}
            </span> projects
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Sort by:
            </span>

            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-[#23264A] rounded-lg bg-white dark:bg-[#11143B] text-gray-700 dark:text-gray-300 text-sm font-medium">
              Featured <ChevronDown size={14} />
            </button>

            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-[#23264A] rounded-lg bg-white dark:bg-[#11143B] text-gray-700 dark:text-gray-300 text-sm font-medium">
              All time <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-3xl p-8">
            <FlaskConical size={40} className="mx-auto text-gray-400 mb-4" />

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              No projects found
            </h3>

            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mx-auto">
              No projects have been submitted for the "{selectedCategory}" category yet. Feel free to submit one!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                image={project.image}
                title={project.title}
                authorHandle={project.authorHandle}
                likes={project.likes}
                views={project.views}
              />
            ))}
          </div>
        )}
      </main>

      <SubmitProjectModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />

      <LearningAdvantage />
      <Footer />
    </div>
  );
};
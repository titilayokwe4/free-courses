import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { useLabs } from '../context/LabsContext';

interface SubmitProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitProjectModal: React.FC<SubmitProjectModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { addProject } = useLabs();

  // Form states
  const [authorHandle, setAuthorHandle] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [relatedCourse, setRelatedCourse] = useState('');
  const [socialPlatform, setSocialPlatform] = useState('Instagram');
  const [socialHandle, setSocialHandle] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!authorHandle || !title || !category || !description) {
      alert('Please fill out all required fields.');
      return;
    }

    // Determine category placeholder if image URL is empty
    let finalImage = image.trim();

    if (!finalImage) {
      const catLower = category.toLowerCase();

      if (catLower.includes('design')) {
        finalImage = '/feature-courses/feature1.jpeg';
      } else if (
        catLower.includes('development') ||
        catLower.includes('code')
      ) {
        finalImage = '/feature-courses/feature2.jpeg';
      } else if (catLower.includes('photography')) {
        finalImage = '/feature-courses/feature3.jpeg';
      } else if (
        catLower.includes('illustration') ||
        catLower.includes('art')
      ) {
        finalImage = '/feature-courses/feature4.jpeg';
      } else {
        finalImage = '/feature-courses/feature1.jpeg';
      }
    }

    // Add prefix to handle if needed
    const cleanHandle = authorHandle.startsWith('@')
      ? authorHandle.replace('@', '')
      : authorHandle;

    addProject({
      title: title.trim(),
      authorHandle: cleanHandle.trim(),
      category,
      description: description.trim(),
      image: finalImage,
      relatedCourse: relatedCourse.trim() || undefined,
      socialMediaPlatform: socialPlatform,
      socialMediaHandle: socialHandle.trim() || undefined,
    });

    alert('Project submitted successfully!');
    onClose();

    // Reset form
    setAuthorHandle('');
    setTitle('');
    setCategory('');
    setDescription('');
    setImage('');
    setRelatedCourse('');
    setSocialHandle('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="
          relative w-full max-w-lg
          bg-white dark:bg-background
          rounded-2xl shadow-2xl
          flex flex-col z-10
          max-h-[90vh]
          overflow-hidden
          border border-gray-100 dark:border-border
          transition-colors duration-300
        "
      >

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div
          className="
            p-6
            border-b border-gray-100 dark:border-border
            flex justify-between items-center
            bg-gray-50 dark:bg-surface
            flex-shrink-0
          "
        >
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-text-primary">
              Submit a project
            </h2>

            <p className="text-gray-500 dark:text-text-secondary text-xs mt-0.5">
              Share your work with the free courses community.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              text-gray-400 dark:text-text-tertiary
              hover:text-gray-900 dark:hover:text-text-primary
              p-1 rounded-lg
              hover:bg-gray-100 dark:hover:bg-surface-hover
              transition-colors
              cursor-pointer
            "
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>


        {/* =====================================================
            FORM BODY
        ===================================================== */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-6 space-y-4"
        >

          {/* Your Name / Handle */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 dark:text-text-secondary uppercase tracking-wide">
              Your name / handle{' '}
              <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              required
              placeholder="e.g. ada_designs or @ada_designs"
              value={authorHandle}
              onChange={(e) => setAuthorHandle(e.target.value)}
              className="
                block w-full
                px-4 py-2.5
                border border-gray-200 dark:border-border
                rounded-xl
                bg-white dark:bg-surface
                text-sm
                text-gray-950 dark:text-text-primary
                placeholder:text-gray-400 dark:placeholder:text-text-tertiary
                focus:outline-none
                focus:ring-1 focus:ring-brand-primary
                focus:border-brand-primary
                transition-colors
              "
            />
          </div>


          {/* Project Title */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 dark:text-text-secondary uppercase tracking-wide">
              Project title{' '}
              <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              required
              placeholder="Give your project a clear title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                block w-full
                px-4 py-2.5
                border border-gray-200 dark:border-border
                rounded-xl
                bg-white dark:bg-surface
                text-sm
                text-gray-950 dark:text-text-primary
                placeholder:text-gray-400 dark:placeholder:text-text-tertiary
                focus:outline-none
                focus:ring-1 focus:ring-brand-primary
                focus:border-brand-primary
                transition-colors
              "
            />
          </div>


          {/* Category */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 dark:text-text-secondary uppercase tracking-wide">
              Category{' '}
              <span className="text-red-500">*</span>
            </label>

            <select
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                block w-full
                px-4 py-2.5
                border border-gray-200 dark:border-border
                rounded-xl
                bg-white dark:bg-surface
                text-sm
                text-gray-950 dark:text-text-primary
                focus:outline-none
                focus:ring-1 focus:ring-brand-primary
                focus:border-brand-primary
                transition-colors
              "
            >
              <option value="" disabled>
                Select a creative field
              </option>

              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Photography">Photography</option>
              <option value="Illustration">Illustration</option>
              <option value="Music">Music</option>
              <option value="3D & Animation">3D & Animation</option>
              <option value="Writing">Writing</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>


          {/* Description */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 dark:text-text-secondary uppercase tracking-wide">
              Description{' '}
              <span className="text-red-500">*</span>
            </label>

            <textarea
              required
              rows={3}
              placeholder="What did you make? What course or skill inspired it?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="
                block w-full
                px-4 py-2.5
                border border-gray-200 dark:border-border
                rounded-xl
                bg-white dark:bg-surface
                text-sm
                text-gray-950 dark:text-text-primary
                placeholder:text-gray-400 dark:placeholder:text-text-tertiary
                focus:outline-none
                focus:ring-1 focus:ring-brand-primary
                focus:border-brand-primary
                resize-none
                transition-colors
              "
            />
          </div>


          {/* Project Image URL */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 dark:text-text-secondary uppercase tracking-wide">
              Project image URL{' '}
              <span className="text-gray-400 dark:text-text-tertiary font-normal">
                (optional)
              </span>
            </label>

            <div className="relative">
              <input
                type="text"
                placeholder="https://..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="
                  block w-full
                  pl-10 pr-4 py-2.5
                  border border-gray-200 dark:border-border
                  rounded-xl
                  bg-white dark:bg-surface
                  text-sm
                  text-gray-950 dark:text-text-primary
                  placeholder:text-gray-400 dark:placeholder:text-text-tertiary
                  focus:outline-none
                  focus:ring-1 focus:ring-brand-primary
                  focus:border-brand-primary
                  transition-colors
                "
              />

              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 dark:text-text-tertiary">
                <Upload size={16} />
              </div>
            </div>

            <p className="text-[10px] text-gray-400 dark:text-text-tertiary">
              Paste a link to your image. Leave blank to use a category
              placeholder.
            </p>
          </div>


          {/* Related Course */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 dark:text-text-secondary uppercase tracking-wide">
              Related course{' '}
              <span className="text-gray-400 dark:text-text-tertiary font-normal">
                (optional)
              </span>
            </label>

            <input
              type="text"
              placeholder="e.g. Complete UI/UX Design Masterclass"
              value={relatedCourse}
              onChange={(e) => setRelatedCourse(e.target.value)}
              className="
                block w-full
                px-4 py-2.5
                border border-gray-200 dark:border-border
                rounded-xl
                bg-white dark:bg-surface
                text-sm
                text-gray-950 dark:text-text-primary
                placeholder:text-gray-400 dark:placeholder:text-text-tertiary
                focus:outline-none
                focus:ring-1 focus:ring-brand-primary
                focus:border-brand-primary
                transition-colors
              "
            />
          </div>


          {/* Social Media Handle */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 dark:text-text-secondary uppercase tracking-wide">
              Social media handle{' '}
              <span className="text-gray-400 dark:text-text-tertiary font-normal">
                (optional)
              </span>
            </label>

            <div className="flex gap-2">

              <select
                value={socialPlatform}
                onChange={(e) => setSocialPlatform(e.target.value)}
                className="
                  w-1/3
                  px-3 py-2.5
                  border border-gray-200 dark:border-border
                  rounded-xl
                  bg-white dark:bg-surface
                  text-sm
                  text-gray-950 dark:text-text-primary
                  focus:outline-none
                  focus:ring-1 focus:ring-brand-primary
                  focus:border-brand-primary
                  transition-colors
                "
              >
                <option value="Instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="GitHub">GitHub</option>
                <option value="Dribbble">Dribbble</option>
              </select>

              <input
                type="text"
                placeholder="@yourhandle"
                value={socialHandle}
                onChange={(e) => setSocialHandle(e.target.value)}
                className="
                  flex-1
                  px-4 py-2.5
                  border border-gray-200 dark:border-border
                  rounded-xl
                  bg-white dark:bg-surface
                  text-sm
                  text-gray-950 dark:text-text-primary
                  placeholder:text-gray-400 dark:placeholder:text-text-tertiary
                  focus:outline-none
                  focus:ring-1 focus:ring-brand-primary
                  focus:border-brand-primary
                  transition-colors
                "
              />
            </div>
          </div>


          {/* =====================================================
              ACTIONS
          ===================================================== */}
          <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-border flex-shrink-0">

            <button
              type="button"
              onClick={onClose}
              className="
                w-1/2
                py-2.5 px-4
                rounded-xl
                border border-gray-200 dark:border-border
                text-gray-700 dark:text-text-secondary
                hover:bg-gray-50 dark:hover:bg-surface-hover
                hover:border-brand-secondary/40
                text-sm font-semibold
                transition-colors
                cursor-pointer
                text-center
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                w-1/2
                py-2.5 px-4
                rounded-xl
                bg-brand-primary
                hover:bg-brand-primary-hover
                text-white
                text-sm font-semibold
                transition-colors
                cursor-pointer
                shadow-md
                hover:shadow-lg
                text-center
              "
            >
              Submit project
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

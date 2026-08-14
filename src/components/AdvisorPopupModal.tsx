import React from 'react';
import { X, Brain, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AdvisorPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvisorPopupModal: React.FC<AdvisorPopupModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleStartAdvisor = () => {
    onClose();
    navigate('/advisor');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop - NO GLASS BLUR EFFECT */}
      <div 
        className="fixed inset-0 bg-black/70 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#070A31] rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden border border-gray-150 dark:border-[#23264A]">
        {/* Navy Top Banner Box */}
        <div className="bg-gradient-to-br from-[#0B0F3B] to-[#120B44] p-8 text-center text-white relative">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Brain Icon inside a circle */}
          <div className="w-14 h-14 bg-emerald-950/40 text-[#00E676] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00E676]/30">
            <Brain size={28} />
          </div>

          <h3 className="text-xl font-bold mb-2">Not sure where to start?</h3>
          <p className="text-gray-300 text-xs leading-relaxed max-w-sm mx-auto">
            You've been exploring for a while. Let our AI advisor ask you a few quick questions and point you to the perfect course and instructor.
          </p>
        </div>

        {/* White bottom section */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Bullet points */}
          <ul className="space-y-3.5">
            <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
              <Sparkles size={16} className="text-[#00E676] mt-0.5 flex-shrink-0" />
              <span>Takes less than 2 minutes</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
              <Sparkles size={16} className="text-[#00E676] mt-0.5 flex-shrink-0" />
              <span>Personalised course recommendations</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
              <Sparkles size={16} className="text-[#00E676] mt-0.5 flex-shrink-0" />
              <span>Matched to your goals and skill level</span>
            </li>
          </ul>

          {/* Actions */}
          <div className="space-y-3.5 pt-2">
            <button
              onClick={handleStartAdvisor}
              className="w-full bg-[#5A12EC] hover:bg-brand-primary-hover text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer text-sm"
            >
              <span>Find my perfect course</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onClose}
              className="w-full text-center text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white font-semibold hover:underline transition-colors cursor-pointer"
            >
              I'll keep browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

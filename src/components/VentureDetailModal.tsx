import React, { useEffect } from 'react';
import { Venture } from '../data/portfolio-content';
import { X, CheckCircle, Layers, Target, Compass } from 'lucide-react';
import { P2PChargingDiagram } from './P2PChargingDiagram';

interface VentureDetailModalProps {
  venture: Venture | null;
  onClose: () => void;
}

export const VentureDetailModal: React.FC<VentureDetailModalProps> = ({ venture, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (venture) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [venture, onClose]);

  if (!venture) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0F1110]/60 dark:bg-[#000000]/80 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FBF9F5] dark:bg-[#121513] border border-[#E6DFD3] dark:border-[#232724] rounded-3xl shadow-2xl overflow-y-auto flex flex-col z-10">
        {/* Header */}
        <div className="sticky top-0 bg-[#FBF9F5]/95 dark:bg-[#121513]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#E6DFD3] dark:border-[#232724] flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#1E3A2F]/10 dark:bg-[#88C49F]/20 text-[#1E3A2F] dark:text-[#88C49F] border border-[#1E3A2F]/20">
              {venture.stage}
            </span>
            <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B] hidden sm:inline">
              {venture.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-[#484540] dark:text-[#B5B0A4] hover:text-[#1B1A18] dark:hover:text-[#ECEAE4] hover:bg-[#F0EDE4] dark:hover:bg-[#1E2420] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Title Area */}
          <div>
            <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B] mb-1">
              Role: {venture.role}
            </div>
            <h3 id="modal-title" className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1A18] dark:text-[#ECEAE4] mb-3">
              {venture.title}
            </h3>
            <p className="font-serif text-lg italic text-[#1E3A2F] dark:text-[#88C49F]">
              "{venture.tagline}"
            </p>
          </div>

          {/* Metrics Pill Grid */}
          {venture.metrics && venture.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {venture.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724]"
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B] mb-0.5">
                    {m.label}
                  </div>
                  <div className="font-serif text-base sm:text-lg font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Context & Summary */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F] flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Genesis & Market Context</span>
            </h4>
            <p className="text-base text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
              {venture.context}
            </p>
          </div>

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#F4EFE6] dark:bg-[#161B18] border border-[#E6DFD3] dark:border-[#232724] space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#1B1A18] dark:text-[#ECEAE4] flex items-center gap-1.5 font-medium">
                <Target className="w-3.5 h-3.5 text-[#1E3A2F] dark:text-[#88C49F]" />
                <span>The Core Problem</span>
              </div>
              <p className="text-sm text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                {venture.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F4EFE6] dark:bg-[#161B18] border border-[#E6DFD3] dark:border-[#232724] space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#1B1A18] dark:text-[#ECEAE4] flex items-center gap-1.5 font-medium">
                <Layers className="w-3.5 h-3.5 text-[#1E3A2F] dark:text-[#88C49F]" />
                <span>The Proposed Approach</span>
              </div>
              <p className="text-sm text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                {venture.approach}
              </p>
            </div>
          </div>

          {/* Custom Diagram for P2P Charging */}
          {venture.id === 'p2p-charging' && (
            <div className="pt-2">
              <P2PChargingDiagram />
            </div>
          )}

          {/* Key Contributions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F]">
              What I Work On & Direct Contributions
            </h4>
            <ul className="space-y-2.5">
              {venture.keyContributions.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-[#484540] dark:text-[#B5B0A4] leading-relaxed"
                >
                  <CheckCircle className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Critical Learnings */}
          {venture.learnings && venture.learnings.length > 0 && !venture.confidential && (
            <div className="p-5 rounded-2xl bg-[#FAF7F0] dark:bg-[#141815] border border-[#E6DFD3] dark:border-[#232724] space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
                Key Execution Insights & Realities
              </div>
              <ul className="space-y-2">
                {venture.learnings.map((learn, idx) => (
                  <li key={idx} className="text-sm italic text-[#484540] dark:text-[#B5B0A4]">
                    "{learn}"
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 bg-[#F4EFE6]/80 dark:bg-[#121513]/80 border-t border-[#E6DFD3] dark:border-[#232724] flex items-center justify-between text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
          <span>Jayveer Trivedi Portfolio Archive</span>
          <button
            onClick={onClose}
            className="hover:text-[#1B1A18] dark:hover:text-[#ECEAE4] transition-colors"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#F4EFE6]/50 dark:bg-[#0A0C0B] border-t border-[#E6DFD3] dark:border-[#232724] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#E6DFD3] dark:border-[#232724]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#1E3A2F] text-[#FAF7F0] dark:bg-[#FAF7F0] dark:text-[#1E3A2F] flex items-center justify-center font-serif text-sm font-semibold">
              JT
            </span>
            <div>
              <div className="font-serif text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                {PORTFOLIO_DATA.meta.name}
              </div>
              <div className="text-[11px] font-mono text-[#736E65] dark:text-[#8A857B]">
                {PORTFOLIO_DATA.meta.academicInstitution} · {PORTFOLIO_DATA.meta.program}
              </div>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B] hover:text-[#1B1A18] dark:hover:text-[#ECEAE4] transition-colors"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.meta.name}.
          </div>
          <div>
            Mehsana, Gujarat · IIMB Digital Business & Entrepreneurship
          </div>
        </div>
      </div>
    </footer>
  );
};

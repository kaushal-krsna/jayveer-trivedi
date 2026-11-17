import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Layers, Users, Briefcase, Award, FileText } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (targetId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectAction,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const items = [
    { id: 'overview', title: 'Overview & Thematic Identity', category: 'Section', icon: BookOpen },
    { id: 'about', title: 'The Person Behind the Work (About Me)', category: 'Section', icon: BookOpen },
    { id: 'ventures', title: 'Aarambh Network (300+ Founders & Roundtables)', category: 'Venture', icon: Layers },
    { id: 'ventures', title: 'SevaSetu (Local Services Marketplace in Mehsana)', category: 'Venture', icon: Layers },
    { id: 'ventures', title: 'Growth Network (500+ Member Community)', category: 'Venture', icon: Layers },
    { id: 'ventures', title: 'P2P EV Charging Systems Architecture', category: 'Venture', icon: Layers },
    { id: 'ecosystem', title: 'Avenor (700+ Founder Network Connectivity)', category: 'Ecosystem', icon: Users },
    { id: 'ecosystem', title: 'Startup Mentorship & Advisory Ecosystem', category: 'Ecosystem', icon: Users },
    { id: 'experience', title: 'Kalnet (Business Development Executive)', category: 'Experience', icon: Briefcase },
    { id: 'experience', title: 'Finance, Stock Markets & Capital Allocation', category: 'Markets', icon: Briefcase },
    { id: 'recognition', title: 'TVS Credit E.P.I.C. 8.0 (Top 15 in India)', category: 'Recognition', icon: Award },
    { id: 'recognition', title: 'Campus Ambassador Appointments (IIM Calcutta, Unstop, etc.)', category: 'Recognition', icon: Award },
    { id: 'recognition', title: 'Case Competitions (IIT Madras, IIT Dhanbad, NSUT)', category: 'Recognition', icon: Award },
    { id: 'research', title: 'CURE 2027 Research: Information Asymmetry & Market Efficiency', category: 'Research', icon: FileText },
    { id: 'contact', title: 'Direct Contact & IIM Bangalore Affiliation', category: 'Contact', icon: Users },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0F1110]/60 dark:bg-[#000000]/80 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-[#FBF9F5] dark:bg-[#141815] border border-[#E6DFD3] dark:border-[#232724] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E6DFD3] dark:border-[#232724] gap-3">
          <Search className="w-4 h-4 text-[#736E65] dark:text-[#8A857B] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type to jump (e.g., Aarambh, SevaSetu, CURE 2027, Kalnet)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#1B1A18] dark:text-[#ECEAE4] placeholder-[#736E65] dark:placeholder-[#8A857B] focus:outline-hidden font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-[#736E65] dark:text-[#8A857B] hover:text-[#1B1A18] dark:hover:text-[#ECEAE4]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
              No matching records found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    onSelectAction(item.id);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#F0EDE4] dark:hover:bg-[#1E2320] text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F] shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                        {item.title}
                      </div>
                      <div className="text-[10px] font-mono text-[#736E65] dark:text-[#8A857B]">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#736E65] dark:text-[#8A857B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#F4EFE6]/80 dark:bg-[#121513]/80 border-t border-[#E6DFD3] dark:border-[#232724] flex items-center justify-between text-[11px] font-mono text-[#736E65] dark:text-[#8A857B]">
          <span>Navigate with Tab / Enter</span>
          <kbd className="px-1.5 py-0.5 rounded bg-[#EAE5DA] dark:bg-[#252C27]">Esc to close</kbd>
        </div>
      </div>
    </div>
  );
};

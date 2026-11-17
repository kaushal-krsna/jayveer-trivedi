import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { FileText, ChevronDown, ChevronUp, Scale, Search } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const { research } = PORTFOLIO_DATA;
  const paper = research.activePaper;
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <section id="research" className="py-24 border-b border-[#E6DFD3] dark:border-[#232724] bg-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] mb-3">
              <span>06</span>
              <span className="w-6 h-px bg-[#1E3A2F] dark:bg-[#88C49F]" />
              <span>Academic Inquiries & Working Papers</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
              {research.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
            {research.subtitle} Grounding entrepreneurial intuition in empirical research and economic theory.
          </p>
        </div>

        {/* ACTIVE WORKING PAPER: CURE 2027 */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-8">
          {/* Working Paper Metadata Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#1E3A2F]/10 dark:bg-[#88C49F]/20 text-[#1E3A2F] dark:text-[#88C49F]">
                  Target: {paper.targetVenue}
                </span>
                <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                  Status: {paper.status}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1B1A18] dark:text-[#ECEAE4] pt-1">
                {paper.title}
              </h3>
            </div>

            <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B] bg-[#F4EFE6] dark:bg-[#181D1A] px-3.5 py-2 rounded-xl border border-[#E6DFD3] dark:border-[#232724] shrink-0">
              Field: Information Economics & Consumer Markets
            </div>
          </div>

          {/* Abstract */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F] flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Abstract & Analytical Thesis</span>
            </h4>
            <p className="font-serif text-base sm:text-lg text-[#484540] dark:text-[#B5B0A4] leading-relaxed italic bg-[#F4EFE6]/50 dark:bg-[#181D1A]/50 p-6 rounded-2xl border border-[#E6DFD3] dark:border-[#232724]">
              "{paper.abstract}"
            </p>
          </div>

          {/* Core Research Inquiries */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paper.coreInquiries.map((inquiry, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F4EFE6] dark:bg-[#161B18] border border-[#E6DFD3] dark:border-[#232724] space-y-2"
              >
                <div className="text-xs font-mono text-[#1E3A2F] dark:text-[#88C49F]">
                  Research Question 0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                  {inquiry}
                </p>
              </div>
            ))}
          </div>

          {/* Expandable Deep Dive: Theoretical Anchors & Methodology */}
          <div className="pt-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F] hover:underline"
            >
              <span>{expanded ? 'Hide Theoretical Anchors' : 'View Theoretical Anchors & Methodology'}</span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {expanded && (
              <div className="mt-4 p-6 rounded-2xl bg-[#F4EFE6] dark:bg-[#161B18] border border-[#E6DFD3] dark:border-[#232724] grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#1E3A2F] dark:text-[#88C49F] uppercase tracking-wider flex items-center gap-2">
                    <Scale className="w-3.5 h-3.5" />
                    <span>Theoretical Foundations</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#484540] dark:text-[#B5B0A4]">
                    {paper.theoreticalAnchors.map((anchor, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#88C49F]" />
                        <span>{anchor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#1E3A2F] dark:text-[#88C49F] uppercase tracking-wider flex items-center gap-2">
                    <Search className="w-3.5 h-3.5" />
                    <span>Methodological Framework</span>
                  </div>
                  <p className="text-xs text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                    {paper.methodologicalApproach} Focuses on price variance across non-standardized trades and the compensatory role played by digital reputation versus neighborhood proximity.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Intellectual Interests Pill Cloud */}
          <div className="pt-6 border-t border-[#E6DFD3] dark:border-[#232724] space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
              Broader Intellectual Inquiry Domains:
            </span>
            <div className="flex flex-wrap gap-2">
              {research.intellectualInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 rounded-full bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] text-xs text-[#1B1A18] dark:text-[#ECEAE4]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

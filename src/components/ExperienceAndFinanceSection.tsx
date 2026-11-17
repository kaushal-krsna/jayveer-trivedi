import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { CheckCircle, Landmark } from 'lucide-react';

export const ExperienceAndFinanceSection: React.FC = () => {
  const { professionalExperience, financeAndMarkets } = PORTFOLIO_DATA;
  const kalnet = professionalExperience[0];

  return (
    <section id="experience" className="py-24 border-b border-[#E6DFD3] dark:border-[#232724] bg-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] mb-3">
              <span>04</span>
              <span className="w-6 h-px bg-[#1E3A2F] dark:bg-[#88C49F]" />
              <span>Commercial Execution & Markets</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
              Professional Experience & Financial Thinking
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
            Direct exposure to commercial business development, lead qualification, sales dialogue, and capital market analysis.
          </p>
        </div>

        {/* KALNET BUSINESS DEVELOPMENT EXECUTIVE */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#1E3A2F]/10 dark:bg-[#88C49F]/20 text-[#1E3A2F] dark:text-[#88C49F]">
                  {kalnet.type}
                </span>
                <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                  {kalnet.period}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                {kalnet.title}
              </h3>
              <div className="font-serif text-lg text-[#1E3A2F] dark:text-[#88C49F]">
                {kalnet.organization}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] text-xs font-mono text-[#57534E] dark:text-[#A8A29E]">
              Core Competency: Frontline Commercial Outreach
            </div>
          </div>

          <p className="text-base text-[#484540] dark:text-[#B5B0A4] leading-relaxed max-w-4xl">
            {kalnet.description} This practical role solidified that understanding business is not merely conceptual: it requires communicating value clearly to skeptical prospects, active listening during discovery conversations, and maintaining discipline across sales follow-ups.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
                Key Responsibilities Executed:
              </h4>
              <div className="space-y-2.5">
                {kalnet.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#484540] dark:text-[#B5B0A4]">
                    <CheckCircle className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F]">
                Demonstrated Learning & Outcomes:
              </h4>
              <ul className="space-y-2 text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                {kalnet.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="italic">
                    • "{outcome}"
                  </li>
                ))}
              </ul>
              <div className="text-[11px] font-mono text-[#736E65] dark:text-[#8A857B] pt-2 border-t border-[#E6DFD3] dark:border-[#232724]">
                Factual execution record. Does not claim inflated deal sizes or speculative revenue figures.
              </div>
            </div>
          </div>
        </div>

        {/* FINANCE, MARKETS & INVESTMENT THINKING */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F]">
                Analytical Curiosity
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                {financeAndMarkets.heading}
              </h3>
              <p className="font-serif text-base text-[#1E3A2F] dark:text-[#88C49F] italic">
                "{financeAndMarkets.subheading}"
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#736E65] dark:text-[#8A857B] bg-[#F4EFE6] dark:bg-[#181D1A] px-3 py-1.5 rounded-full border border-[#E6DFD3] dark:border-[#232724]">
              <Landmark className="w-3.5 h-3.5 text-[#1E3A2F] dark:text-[#88C49F]" />
              <span>Fundamental Analysis Lens</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#484540] dark:text-[#B5B0A4] leading-relaxed max-w-4xl">
            {financeAndMarkets.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financeAndMarkets.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F4EFE6] dark:bg-[#161B18] border border-[#E6DFD3] dark:border-[#232724] space-y-2.5"
              >
                <div className="text-xs font-mono text-[#1E3A2F] dark:text-[#88C49F]">
                  Theme 0{idx + 1}
                </div>
                <h4 className="font-serif text-lg font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B] p-4 rounded-xl bg-[#F4EFE6]/60 dark:bg-[#161B18]/60 border border-[#E6DFD3] dark:border-[#232724] italic">
            *Presented as rigorous intellectual inquiry, business analysis, and market curiosity. No speculative trading claims, portfolio size claims, or unregistered financial advisory representations.
          </div>
        </div>
      </div>
    </section>
  );
};

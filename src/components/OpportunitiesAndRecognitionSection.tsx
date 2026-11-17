import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';

export const OpportunitiesAndRecognitionSection: React.FC = () => {
  const { selectedOpportunities, invitationsAndRecommendations } = PORTFOLIO_DATA;

  return (
    <section className="py-24 border-b border-[#E6DFD3] dark:border-[#232724]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] mb-3">
              <span>07</span>
              <span className="w-6 h-px bg-[#1E3A2F] dark:bg-[#88C49F]" />
              <span>Institutional Engagements & Credentials</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
              Selected Opportunities & Credentials
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
            Verified institutional selections, formal jury invitations, and letters of recommendation documenting character, execution, and initiative.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: Opportunities on Left, Jury & LORs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Institutional Selections / NIF */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3] dark:border-[#232724]">
              <h3 className="font-serif text-2xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                Institutional Selection Journey
              </h3>
              <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                Competitive Progression
              </span>
            </div>

            {selectedOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F]">
                    {opp.nature}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAE5DA] dark:bg-[#252C27] text-[#1B1A18] dark:text-[#ECEAE4]">
                    DST, Govt. of India
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                    {opp.title}
                  </h4>
                  <div className="text-xs text-[#736E65] dark:text-[#8A857B] mt-0.5">
                    {opp.authority}
                  </div>
                </div>

                <p className="text-sm text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                  {opp.summary}
                </p>

                <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] text-xs font-mono text-[#57534E] dark:text-[#A8A29E]">
                  • Status: {opp.statusNote}
                </div>
              </div>
            ))}
          </div>

          {/* Invited Jury & Letters of Recommendation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3] dark:border-[#232724]">
              <h3 className="font-serif text-2xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                Jury Invitations & Recommendations
              </h3>
              <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                Verified Records
              </span>
            </div>

            <div className="space-y-4">
              {invitationsAndRecommendations.map((rec) => (
                <div
                  key={rec.id}
                  className="p-6 rounded-2xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-3 hover:border-[#1E3A2F]/40 dark:hover:border-[#88C49F]/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A8792C] dark:text-[#D1A054]">
                      {rec.type}
                    </span>
                    <span className="text-[10px] font-mono text-[#736E65] dark:text-[#8A857B]">
                      Official Record
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                      {rec.title}
                    </h4>
                    <div className="text-xs text-[#1E3A2F] dark:text-[#88C49F] font-mono mt-0.5">
                      {rec.authority}
                    </div>
                  </div>

                  <p className="text-xs text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                    {rec.summary}
                  </p>

                  <div className="text-[11px] font-mono text-[#736E65] dark:text-[#8A857B] pt-2 border-t border-[#E6DFD3] dark:border-[#232724]">
                    {rec.statusNote}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

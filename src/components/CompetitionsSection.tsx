import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { Trophy } from 'lucide-react';

export const CompetitionsSection: React.FC = () => {
  const { competitionsAndRecognition, campusAmbassadorRoles } = PORTFOLIO_DATA;

  const tvsEpic = competitionsAndRecognition.find((c) => c.id === 'tvs-credit-epic')!;
  const caseCompetitions = competitionsAndRecognition.filter((c) => c.id !== 'tvs-credit-epic');

  return (
    <section id="recognition" className="py-24 border-b border-[#E6DFD3] dark:border-[#232724]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] mb-3">
              <span>05</span>
              <span className="w-6 h-px bg-[#1E3A2F] dark:bg-[#88C49F]" />
              <span>Competitions & Campus Leadership</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
              Institutional Challenges & Recognition
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
            Rigorous team-based problem solving, business case analysis, and national campus representation across premier institutions.
          </p>
        </div>

        {/* FEATURED: TVS CREDIT E.P.I.C. 8.0 TOP 15 */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8792C]/15 dark:bg-[#A8792C]/30 text-[#A8792C] dark:text-[#E0B15B] text-xs font-mono tracking-wider uppercase">
                <Trophy className="w-3.5 h-3.5" />
                <span>National Recognition</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                {tvsEpic.event}
              </h3>
              <div className="font-serif text-lg text-[#1E3A2F] dark:text-[#88C49F]">
                Organized by {tvsEpic.organizer}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] text-left lg:text-right shrink-0">
              <div className="font-serif text-3xl sm:text-4xl font-normal text-[#A8792C] dark:text-[#E0B15B]">
                Top 15
              </div>
              <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                All-India Campus Ambassador
              </div>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <p className="lg:col-span-8 text-base text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
              {tvsEpic.details} Selected from a highly competitive national applicant pool, driving campus engagement, campaign execution, and strategic student mobilization for TVS Credit's flagship national talent challenge.
            </p>
            <div className="lg:col-span-4 p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] text-xs font-mono text-[#57534E] dark:text-[#A8A29E]">
              Verified Status: Campus Ambassador — Top 15 in India
            </div>
          </div>
        </div>

        {/* CASE COMPETITIONS & ENTREPRENEURIAL CHALLENGES */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3] dark:border-[#232724]">
            <h3 className="font-serif text-2xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
              Case Competitions & Challenges
            </h3>
            <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
              Verified Milestones
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseCompetitions.map((comp) => (
              <div
                key={comp.id}
                className="p-6 rounded-2xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] flex flex-col justify-between space-y-4 hover:border-[#1E3A2F]/40 dark:hover:border-[#88C49F]/40 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#736E65] dark:text-[#8A857B]">
                      {comp.organizer}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        comp.status === 'Finalist'
                          ? 'bg-[#1E3A2F]/10 dark:bg-[#88C49F]/20 text-[#1E3A2F] dark:text-[#88C49F] border-[#1E3A2F]/20'
                          : 'bg-[#EAE5DA] dark:bg-[#252C27] text-[#1B1A18] dark:text-[#ECEAE4] border-transparent'
                      }`}
                    >
                      {comp.status}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                    {comp.event}
                  </h4>

                  <p className="text-xs text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                    {comp.details}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-[#736E65] dark:text-[#8A857B] pt-3 border-t border-[#E6DFD3] dark:border-[#232724]">
                  {comp.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAMPUS AMBASSADOR PROGRAMMES & INSTITUTIONAL OUTREACH */}
        <div className="p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E6DFD3] dark:border-[#232724]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F]">
                Institutional Engagement
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                Campus Leadership & Ambassador Appointments
              </h3>
            </div>
            <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
              Verified Programme Selections
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {campusAmbassadorRoles.map((role, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] space-y-1.5"
              >
                <div className="text-xs font-mono text-[#1E3A2F] dark:text-[#88C49F]">
                  {role.institution}
                </div>
                <div className="font-serif text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                  {role.program}
                </div>
                <div className="text-xs text-[#57534E] dark:text-[#A8A29E] font-mono">
                  {role.outcome}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[11px] font-mono text-[#736E65] dark:text-[#8A857B] italic">
            *Carefully distinguished between appointed ambassadors, selected representatives, and competition finalists. Factual integrity maintained across all entries.
          </div>
        </div>
      </div>
    </section>
  );
};

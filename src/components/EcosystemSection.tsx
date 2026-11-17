import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { Users, Compass, ShieldCheck } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const { avenor, mentorship } = PORTFOLIO_DATA.ecosystem;

  return (
    <section id="ecosystem" className="py-24 border-b border-[#E6DFD3] dark:border-[#232724]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] mb-3">
              <span>03</span>
              <span className="w-6 h-px bg-[#1E3A2F] dark:bg-[#88C49F]" />
              <span>Founder Ecosystem & Investor Relations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
              Connecting Ecosystems & Catalyzing Growth
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
            Practical engagement around founders, investor circles, partnership dialogues, and structured startup support.
          </p>
        </div>

        {/* AVENOR HIGHLIGHT */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#1E3A2F]/10 dark:bg-[#88C49F]/20 text-[#1E3A2F] dark:text-[#88C49F]">
                  Founder Network & Investor Connectivity
                </span>
                <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                  Ecosystem Engagement
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                {avenor.title}
              </h3>
              <p className="font-serif text-lg text-[#1E3A2F] dark:text-[#88C49F] italic">
                "{avenor.headline}"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#191F1A] border border-[#E6DFD3] dark:border-[#232724] text-left lg:text-right shrink-0">
              <div className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                700<span className="text-[#1E3A2F] dark:text-[#88C49F]">+</span>
              </div>
              <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                Founder Network Scope
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                {avenor.summary} Demonstrates frontline exposure to managing relational pipelines, qualifying startup requirements, conducting high-touch onboarding, and supporting founder connectivity with the broader investor landscape.
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
                  Core Operational Activities:
                </div>
                <div className="space-y-2 text-sm text-[#484540] dark:text-[#B5B0A4]">
                  {avenor.coreActivities.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#88C49F] shrink-0 mt-2" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#1E3A2F] dark:text-[#88C49F] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Scope & Governance Discipline</span>
              </div>
              <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                {avenor.guardrailNote}
              </p>
              <div className="text-[11px] font-mono text-[#736E65] dark:text-[#8A857B] pt-3 border-t border-[#E6DFD3] dark:border-[#232724]">
                Reflects practical relationship-building and business development acumen essential for startup ecosystem orchestration.
              </div>
            </div>
          </div>
        </div>

        {/* TWO-WAY STARTUP MENTORSHIP & SUPPORT */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
              Reciprocal Growth Philosophy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
              {mentorship.headline}
            </h3>
            <p className="text-sm text-[#57534E] dark:text-[#A8A29E] max-w-3xl leading-relaxed">
              {mentorship.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Practical Support Provided to Early-Stage Founders */}
            <div className="p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3] dark:border-[#232724]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#1E3A2F] dark:text-[#88C49F] uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  <span>Support Provided</span>
                </div>
                <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                  To Early-Stage Founders
                </span>
              </div>

              <div className="space-y-4">
                {mentorship.supportProvided.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#161B18] border border-[#E6DFD3] dark:border-[#232724] space-y-1"
                  >
                    <div className="font-serif text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                      {item.title}
                    </div>
                    <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support & Mentorship Received */}
            <div className="p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3] dark:border-[#232724]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A8792C] dark:text-[#D1A054] uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Advisory Network & Mentorship</span>
                </div>
                <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                  Knowledge Inflow
                </span>
              </div>

              <div className="space-y-4">
                {mentorship.supportReceived.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#161B18] border border-[#E6DFD3] dark:border-[#232724] space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-serif text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                        {item.entity}
                      </div>
                      <span className="text-[10px] font-mono text-[#736E65] dark:text-[#8A857B] px-2 py-0.5 rounded bg-[#EAE5DA] dark:bg-[#252C27]">
                        {item.domain}
                      </span>
                    </div>
                    <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                      {item.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

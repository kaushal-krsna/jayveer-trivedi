import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 border-b border-[#E6DFD3] dark:border-[#232724]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F]">
                <span>01</span>
                <span className="w-6 h-px bg-[#1E3A2F] dark:bg-[#88C49F]" />
                <span>Identity & Academic Foundation</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#1B1A18] dark:text-[#ECEAE4] font-normal leading-tight">
                {about.heading}
              </h2>

              <blockquote className="border-l-2 border-[#1E3A2F] dark:border-[#88C49F] pl-4 py-1 italic font-serif text-lg text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                "{PORTFOLIO_DATA.meta.positioning}"
              </blockquote>

              <div className="p-6 rounded-2xl bg-[#F4EFE6] dark:bg-[#141715] border border-[#E6DFD3] dark:border-[#232724] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1E3A2F] text-[#FAF7F0] dark:bg-[#88C49F] dark:text-[#0F1110] flex items-center justify-center font-serif text-lg font-semibold">
                    IIM
                  </div>
                  <div>
                    <div className="font-serif text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                      Indian Institute of Management Bangalore
                    </div>
                    <div className="text-xs text-[#57534E] dark:text-[#A8A29E]">
                      {PORTFOLIO_DATA.meta.degree}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed pt-2 border-t border-[#E6DFD3] dark:border-[#232724]">
                  Bridging analytical strategy, technology venture models, and grassroots field execution.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Operating Mindset */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#484540] dark:text-[#B5B0A4] leading-relaxed font-normal">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Operating Mindset Section */}
            <div className="pt-6 border-t border-[#E6DFD3] dark:border-[#232724] space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F]" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F]">
                  Operating Mindset & Core Principles
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {about.operatingMindset.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF7F0] dark:bg-[#161A17] border border-[#E6DFD3] dark:border-[#232724] space-y-1.5"
                  >
                    <div className="font-serif text-sm font-medium text-[#1B1A18] dark:text-[#ECEAE4] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#88C49F]" />
                      <span>{item.principle}</span>
                    </div>
                    <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Grounded Attributes */}
            <div className="pt-6 border-t border-[#E6DFD3] dark:border-[#232724]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#9A958A] mb-4">
                Structural Profile Data
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="p-4 rounded-xl bg-[#FAF7F0] dark:bg-[#161A17] border border-[#E6DFD3] dark:border-[#232724]"
                  >
                    <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B] mb-1">
                      {fact.label}
                    </div>
                    <div className="text-sm font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                      {fact.value}
                    </div>
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

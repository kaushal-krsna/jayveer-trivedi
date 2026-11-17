import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { Check, Compass, Layers, Users, BarChart2, BookOpen, Target } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const { capabilities } = PORTFOLIO_DATA;

  const clusterIcons = [Compass, Target, Users, BarChart2, BookOpen, Layers];

  return (
    <section className="py-24 border-b border-[#E6DFD3] dark:border-[#232724] bg-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] mb-3">
              <span>08</span>
              <span className="w-6 h-px bg-[#1E3A2F] dark:bg-[#88C49F]" />
              <span>Demonstrated Capabilities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
              Working Capabilities & Execution Tooling
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
            Organized as demonstrated, practical competencies rather than arbitrary percentage ratings or speculative claims.
          </p>
        </div>

        {/* 6 Capabilities Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((group, idx) => {
            const Icon = clusterIcons[idx % clusterIcons.length];
            return (
              <div
                key={group.name}
                className="p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] flex flex-col justify-between space-y-6 hover:border-[#1E3A2F]/40 dark:hover:border-[#88C49F]/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                      Cluster 0{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F4EFE6] dark:bg-[#1C211D] text-[#1E3A2F] dark:text-[#88C49F] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                      {group.name}
                    </h3>
                    <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-1">
                      {group.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-[#E6DFD3] dark:border-[#232724]">
                    {group.capabilities.map((cap, cIdx) => (
                      <li
                        key={cIdx}
                        className="flex items-start gap-2.5 text-xs text-[#484540] dark:text-[#B5B0A4] leading-relaxed"
                      >
                        <Check className="w-3.5 h-3.5 text-[#1E3A2F] dark:text-[#88C49F] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-[11px] font-mono text-[#736E65] dark:text-[#8A857B] pt-2">
                  Demonstrated via {idx === 0 ? 'Aarambh & SevaSetu' : idx === 1 ? 'Kalnet Execution' : idx === 2 ? 'Avenor Ecosystem' : idx === 3 ? 'Market Analysis' : idx === 4 ? 'CURE 2027 Research' : 'Roundtable Leadership'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

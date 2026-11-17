import React, { useState } from 'react';
import { PORTFOLIO_DATA, Venture } from '../data/portfolio-content';
import { ArrowUpRight, ChevronRight, Lock } from 'lucide-react';
import { VentureDetailModal } from './VentureDetailModal';
import { P2PChargingDiagram } from './P2PChargingDiagram';

export const VenturesSection: React.FC = () => {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const { ventures } = PORTFOLIO_DATA;

  const aarambh = ventures.find((v) => v.id === 'aarambh-network')!;
  const marketverse = ventures.find((v) => v.id === 'marketverse')!;
  const sevasetu = ventures.find((v) => v.id === 'sevasetu')!;
  const growthNetwork = ventures.find((v) => v.id === 'growth-network')!;
  const p2pCharging = ventures.find((v) => v.id === 'p2p-charging')!;
  const eyePlus = ventures.find((v) => v.id === 'eye-plus')!;

  return (
    <section id="ventures" className="py-24 border-b border-[#E6DFD3] dark:border-[#232724] bg-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] mb-3">
              <span>02</span>
              <span className="w-6 h-px bg-[#1E3A2F] dark:bg-[#88C49F]" />
              <span>Core Ventures & Builder Initiatives</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
              What I Am Building
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
            Detailed project stories explaining the problem origin, primary customer conversations, iterative MVP tests, and direct execution contributions.
          </p>
        </div>

        {/* SIGNATURE HERO VENTURE: Aarambh Network */}
        <div className="relative rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] p-8 sm:p-10 lg:p-14 overflow-hidden transition-all duration-300 hover:border-[#1E3A2F]/40 dark:hover:border-[#88C49F]/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E3A2F]/5 dark:bg-[#88C49F]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-[#1E3A2F] text-[#FAF7F0] dark:bg-[#88C49F] dark:text-[#0F1110] font-medium">
                  Signature Initiative
                </span>
                <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                  {aarambh.stage}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4] mb-3">
                  {aarambh.title}
                </h3>
                <p className="font-serif text-xl sm:text-2xl text-[#1E3A2F] dark:text-[#88C49F] italic font-light">
                  "{aarambh.tagline}"
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                {aarambh.summary} Conceived not merely as an informal networking group, but as an entrepreneurial ecosystem vehicle facilitating peer accountability, unit economics debates, and mentorship connections for 300+ founders.
              </p>

              {/* Direct Contribution Bullets */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
                  Direct Responsibilities & Execution:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#484540] dark:text-[#B5B0A4]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#88C49F]" />
                    <span>Curating 300+ founder community</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#88C49F]" />
                    <span>Organizing Founders' Roundtables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#88C49F]" />
                    <span>Engaging 50+ speakers & mentors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#88C49F]" />
                    <span>Leading partnership conversations</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedVenture(aarambh)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3A2F] text-[#FAF7F0] hover:bg-[#162E25] dark:bg-[#88C49F] dark:text-[#0F1110] dark:hover:bg-[#9ED4B3] font-medium text-sm transition-all cursor-pointer"
                >
                  <span>Explore Case Study & Model</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Metrics & Artifact Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#F4EFE6] dark:bg-[#191F1A] border border-[#E6DFD3] dark:border-[#232724] space-y-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F] flex items-center justify-between pb-3 border-b border-[#E6DFD3] dark:border-[#232724]">
                  <span>Community Scale</span>
                  <span>Ecosystem Benchmarks</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-serif text-4xl sm:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                      300<span className="text-[#1E3A2F] dark:text-[#88C49F]">+</span>
                    </div>
                    <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B] mt-1">
                      Founders Convened
                    </div>
                  </div>

                  <div>
                    <div className="font-serif text-4xl sm:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                      50<span className="text-[#1E3A2F] dark:text-[#88C49F]">+</span>
                    </div>
                    <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B] mt-1">
                      Speakers & Mentors
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F0] dark:bg-[#121513] border border-[#E6DFD3] dark:border-[#232724] text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                  <span className="font-medium text-[#1B1A18] dark:text-[#ECEAE4] block mb-1">
                    Format Discipline
                  </span>
                  Structured roundtables avoiding promotional presentations. Discussion focuses strictly on hiring bottlenecks, customer acquisition friction, and founder resilience.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-COLUMN GRID: MarketVerse, SevaSetu, & Growth Network */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MarketVerse */}
          <div className="p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] flex flex-col justify-between space-y-6 hover:border-[#1E3A2F]/40 dark:hover:border-[#88C49F]/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
                  Role: Founder / Product Builder
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#1E3A2F]/10 dark:bg-[#88C49F]/20 text-[#1E3A2F] dark:text-[#88C49F] font-medium">
                  Live MVP
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                  {marketverse.title}
                </h3>
                <p className="font-serif text-base text-[#1E3A2F] dark:text-[#88C49F] italic mt-1">
                  "{marketverse.tagline}"
                </p>
              </div>

              <p className="text-sm text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                Built a working MVP for first-time investors and students, featuring plain-language market explanations, beginner-friendly screening, and practice-oriented learning modules focused on risk awareness.
              </p>

              <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] text-xs font-mono text-[#57534E] dark:text-[#A8A29E] space-y-1">
                <div>• Architecture: AI-assisted financial literacy</div>
                <div>• Status: Functional live prototype & testing</div>
                <div>• Focus: Plain-language translation & risk discipline</div>
              </div>
            </div>

            <button
              onClick={() => setSelectedVenture(marketverse)}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F] hover:underline pt-4 border-t border-[#E6DFD3] dark:border-[#232724] cursor-pointer"
            >
              <span>Explore Product Architecture</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* SevaSetu */}
          <div className="p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] flex flex-col justify-between space-y-6 hover:border-[#1E3A2F]/40 dark:hover:border-[#88C49F]/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
                  Role: Founder
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#EAE5DA] dark:bg-[#252C27] text-[#1B1A18] dark:text-[#ECEAE4]">
                  {sevasetu.stage}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                  {sevasetu.title}
                </h3>
                <p className="font-serif text-base text-[#1E3A2F] dark:text-[#88C49F] italic mt-1">
                  "{sevasetu.tagline}"
                </p>
              </div>

              <p className="text-sm text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                Originating from hands-on observation in Mehsana, Gujarat. Investigating how a structured digital marketplace can bridge the reliability and discovery deficit for local skilled professionals (electricians, plumbers, cleaners, carpenters) in non-metro markets.
              </p>

              <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] text-xs font-mono text-[#57534E] dark:text-[#A8A29E] space-y-1">
                <div>• Context: Mehsana, Gujarat (Tier-2/3 archetype)</div>
                <div>• Stage: Grounded Fieldwork & Customer Discovery</div>
                <div>• Focus: Trust verification & informal market liquidity</div>
              </div>
            </div>

            <button
              onClick={() => setSelectedVenture(sevasetu)}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F] hover:underline pt-4 border-t border-[#E6DFD3] dark:border-[#232724] cursor-pointer"
            >
              <span>View Fieldwork & Approach</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Growth Network */}
          <div className="p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] flex flex-col justify-between space-y-6 hover:border-[#1E3A2F]/40 dark:hover:border-[#88C49F]/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
                  Role: Founder & Community Builder
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#EAE5DA] dark:bg-[#252C27] text-[#1B1A18] dark:text-[#ECEAE4]">
                  500+ Member Network
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                  {growthNetwork.title}
                </h3>
                <p className="font-serif text-base text-[#1E3A2F] dark:text-[#88C49F] italic mt-1">
                  "{growthNetwork.tagline}"
                </p>
              </div>

              <p className="text-sm text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                A community initiative with a verified network of 500+ students, founders, and working professionals, kept strictly distinct from Aarambh Network. Focused on recurring discussions, collaborative momentum, and network-based growth.
              </p>

              <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] text-xs font-mono text-[#57534E] dark:text-[#A8A29E] space-y-1">
                <div>• Scale: 500+ community members</div>
                <div>• Model: Decentralized peer-to-peer connection hub</div>
                <div>• Focus: Consistency, curated opportunities & peer learning</div>
              </div>
            </div>

            <button
              onClick={() => setSelectedVenture(growthNetwork)}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F] hover:underline pt-4 border-t border-[#E6DFD3] dark:border-[#232724] cursor-pointer"
            >
              <span>Explore Network Architecture</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* P2P CHARGING MODEL (Business Model Exploration) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#1E3A2F]/10 dark:bg-[#88C49F]/20 text-[#1E3A2F] dark:text-[#88C49F]">
                  Business Model Exploration
                </span>
                <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                  Analytical Framework
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                {p2pCharging.title}
              </h3>
              <p className="font-serif text-base text-[#1E3A2F] dark:text-[#88C49F] italic">
                "{p2pCharging.tagline}"
              </p>
            </div>

            <button
              onClick={() => setSelectedVenture(p2pCharging)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E3A2F] text-[#FAF7F0] dark:bg-[#88C49F] dark:text-[#0F1110] text-xs font-mono uppercase tracking-wider self-start lg:self-auto hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span>Examine Systems Model</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-sm sm:text-base text-[#484540] dark:text-[#B5B0A4] leading-relaxed max-w-4xl">
            {p2pCharging.summary} Exploring multi-sided marketplace unit economics, supply incentives for private hosts, and the regulatory challenges of domestic electricity tariff classification in India.
          </p>

          {/* Embedded Interactive Diagram */}
          <P2PChargingDiagram />
        </div>

        {/* DISCREET TEASER: Eye+ */}
        <div className="p-6 rounded-2xl bg-[#F4EFE6]/70 dark:bg-[#121513]/70 border border-[#E6DFD3] dark:border-[#232724] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EAE5DA] dark:bg-[#1E2420] text-[#736E65] dark:text-[#8A857B] flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-serif font-medium text-[#1B1A18] dark:text-[#ECEAE4] flex items-center gap-2">
                <span>{eyePlus.title}</span>
                <span className="text-[10px] font-mono uppercase bg-[#EAE5DA] dark:bg-[#252C27] text-[#736E65] dark:text-[#8A857B] px-2 py-0.5 rounded">
                  Stealth
                </span>
              </div>
              <p className="text-xs text-[#57534E] dark:text-[#A8A29E]">
                {eyePlus.summary}
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B] shrink-0">
            Details Restricted
          </span>
        </div>
      </div>

      {/* Modal for Deep Dive */}
      <VentureDetailModal
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
      />
    </section>
  );
};

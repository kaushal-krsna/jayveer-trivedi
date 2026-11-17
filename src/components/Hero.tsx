import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { ArrowDown, ArrowUpRight, Compass, Users, Sparkles, BookOpen, Download } from 'lucide-react';

interface HeroProps {
  onOpenDossier: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDossier }) => {
  return (
    <section
      id="overview"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#E6DFD3] dark:border-[#232724] bg-paper-texture overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow / Institutional Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0EDE4] dark:bg-[#1A1F1B] border border-[#E6DFD3] dark:border-[#2A312B] text-xs font-mono text-[#57534E] dark:text-[#A8A29E] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#1E3A2F] dark:bg-[#7DB295] animate-pulse" />
          <span>IIM Bangalore</span>
          <span className="text-[#A8A29E] dark:text-[#57534E]">/</span>
          <span>Digital Business & Entrepreneurship</span>
        </div>

        {/* Master Headline */}
        <div className="max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#1B1A18] dark:text-[#ECEAE4] leading-[1.12] mb-8">
            Building ventures. <br className="hidden sm:inline" />
            <span className="italic font-light text-[#1E3A2F] dark:text-[#88C49F]">Connecting people.</span> <br className="hidden sm:inline" />
            Moving ideas forward.
          </h1>

          <p className="text-lg sm:text-xl text-[#484540] dark:text-[#B5B0A4] font-normal leading-relaxed max-w-3xl mb-10">
            I'm <span className="text-[#1B1A18] dark:text-[#ECEAE4] font-medium">{PORTFOLIO_DATA.meta.name}</span>, pursuing Digital Business & Entrepreneurship at{' '}
            <span className="text-[#1B1A18] dark:text-[#ECEAE4] font-medium">IIM Bangalore</span>. My work spans venture building, founder ecosystems, commercial business development, market research, and exploring pragmatic business models.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#ventures"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E3A2F] text-[#FAF7F0] hover:bg-[#162E25] dark:bg-[#88C49F] dark:text-[#0F1110] dark:hover:bg-[#9ED4B3] font-medium text-sm transition-all shadow-xs hover:shadow-md"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenDossier}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#F0EDE4] dark:bg-[#1A1F1B] text-[#1B1A18] dark:text-[#ECEAE4] hover:bg-[#E5DFD3] dark:hover:bg-[#252C27] border border-[#E6DFD3] dark:border-[#2A312B] font-medium text-sm transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F]" />
              <span>Academic Dossier & CV</span>
            </button>

            <a
              href="/Jayveer_Trivedi_Resume.pdf"
              download="Jayveer_Trivedi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#F0EDE4] dark:bg-[#1A1F1B] text-[#1B1A18] dark:text-[#ECEAE4] hover:bg-[#E5DFD3] dark:hover:bg-[#252C27] border border-[#E6DFD3] dark:border-[#2A312B] font-medium text-sm transition-all"
            >
              <Download className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F]" />
              <span>Resume PDF</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-[#484540] dark:text-[#B5B0A4] hover:text-[#1B1A18] dark:hover:text-[#ECEAE4] hover:bg-[#F0EDE4] dark:hover:bg-[#1A1F1B] font-medium text-sm transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* The 3 Core Pillars (Editorial Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#E6DFD3] dark:border-[#232724]">
          {PORTFOLIO_DATA.meta.coreThemes.map((theme, index) => {
            const icons = [Compass, Users, Sparkles];
            const Icon = icons[index % icons.length];
            return (
              <div
                key={theme.title}
                className="group p-6 rounded-2xl bg-[#FAF7F0] dark:bg-[#141715] border border-[#E6DFD3]/80 dark:border-[#232724] hover:border-[#1E3A2F]/30 dark:hover:border-[#88C49F]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#736E65] dark:text-[#8A857B]">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F0EDE4] dark:bg-[#1E2420] text-[#1E3A2F] dark:text-[#88C49F] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1B1A18] dark:text-[#ECEAE4] mb-2 group-hover:text-[#1E3A2F] dark:group-hover:text-[#88C49F] transition-colors">
                  {theme.title}
                </h3>
                <p className="text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                  {theme.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

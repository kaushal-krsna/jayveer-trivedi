import React, { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { X, Printer, Download } from 'lucide-react';

interface AcademicDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicDossierModal: React.FC<AcademicDossierModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'resume' | 'dossier'>('resume');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0F1110]/70 dark:bg-[#000000]/80 backdrop-blur-xs transition-opacity no-print"
      />

      {/* Surface */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#121513] text-[#1B1A18] dark:text-[#ECEAE4] border border-[#E6DFD3] dark:border-[#232724] rounded-3xl shadow-2xl overflow-y-auto flex flex-col z-10 print:max-h-none print:border-none print:shadow-none print:rounded-none">
        {/* Controls Bar (hidden during print) */}
        <div className="sticky top-0 bg-white/95 dark:bg-[#121513]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-[#E6DFD3] dark:border-[#232724] flex flex-wrap items-center justify-between gap-4 z-20 no-print">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A2F] dark:bg-[#88C49F]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F] font-semibold">
              Academic & Venture Credentials
            </span>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center p-1 rounded-full bg-[#F4EFE6] dark:bg-[#1C211D] border border-[#E6DFD3] dark:border-[#2A312B] text-xs font-mono">
            <button
              onClick={() => setActiveTab('resume')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                activeTab === 'resume'
                  ? 'bg-white dark:bg-[#252C27] text-[#1B1A18] dark:text-[#ECEAE4] font-medium shadow-xs'
                  : 'text-[#736E65] dark:text-[#8A857B] hover:text-[#1B1A18]'
              }`}
            >
              Curriculum Vitae (PDF Data)
            </button>
            <button
              onClick={() => setActiveTab('dossier')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                activeTab === 'dossier'
                  ? 'bg-white dark:bg-[#252C27] text-[#1B1A18] dark:text-[#ECEAE4] font-medium shadow-xs'
                  : 'text-[#736E65] dark:text-[#8A857B] hover:text-[#1B1A18]'
              }`}
            >
              Research & Portfolio Dossier
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Jayveer_Trivedi_Resume.pdf"
              download="Jayveer_Trivedi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-[#1E3A2F] text-white hover:bg-[#162E25] dark:bg-[#88C49F] dark:text-[#0F1110] transition-colors cursor-pointer"
              title="Download official PDF copy"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-[#F4EFE6] dark:bg-[#1C211D] text-[#1B1A18] dark:text-[#ECEAE4] hover:bg-[#EAE5DA] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 rounded-full text-[#736E65] dark:text-[#8A857B] hover:text-[#1B1A18] dark:hover:text-[#ECEAE4] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= TAB 1: CURRICULUM VITAE (AUTHENTIC RESUME FROM PDF) ================= */}
        {activeTab === 'resume' && (
          <div className="p-8 sm:p-12 lg:p-16 space-y-8 font-sans">
            {/* Header */}
            <div className="pb-6 border-b-2 border-[#1B1A18] dark:border-[#ECEAE4] space-y-2 text-center sm:text-left">
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
                {PORTFOLIO_DATA.meta.name}
              </h1>
              <div className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] font-semibold">
                FOUNDER • BUILDER • VENTURE ECOSYSTEM
              </div>
              <div className="text-xs text-[#57534E] dark:text-[#A8A29E] flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-1 pt-1 font-mono">
                <span>{PORTFOLIO_DATA.contact.location}</span>
                <span>|</span>
                <a href={`tel:${PORTFOLIO_DATA.contact.phone}`} className="hover:underline">
                  {PORTFOLIO_DATA.contact.phone}
                </a>
                <span>|</span>
                <a href={`mailto:${PORTFOLIO_DATA.contact.personalEmail}`} className="hover:underline">
                  {PORTFOLIO_DATA.contact.personalEmail}
                </a>
                <span>|</span>
                <a href={`mailto:${PORTFOLIO_DATA.contact.academicEmail}`} className="hover:underline">
                  {PORTFOLIO_DATA.contact.academicEmail}
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] font-semibold">
                PROFILE
              </h2>
              <p className="text-sm text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                Early-stage builder at IIM Bangalore (Digital Business & Entrepreneurship). I have built a working AI-enabled financial learning MVP (MarketVerse), validated a local-services marketplace by interviewing households and providers (SevaSetu), and built a 500+ member entrepreneurship community (Growth Network). I also co-build a founder discussion platform (Aarambh Network) and work within a 700+ founder network at Avenor. I start from a problem, talk to the people closest to it, test an early version and learn from the result. I want to apply that approach to emerging technology and AI, and to problems that don't yet have an owner.
              </p>
            </div>

            {/* Evidence at a Glance */}
            <div className="p-4 rounded-xl bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1B1A18] dark:text-[#ECEAE4] font-semibold">
                EVIDENCE AT A GLANCE
              </h2>
              <ul className="space-y-1.5 text-xs text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-[#1B1A18] dark:text-[#ECEAE4]">• Built:</span>
                  <span>A live AI-enabled financial learning MVP (MarketVerse) and a validated local-services marketplace concept (SevaSetu).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-[#1B1A18] dark:text-[#ECEAE4]">• Ran:</span>
                  <span>A 500+ member entrepreneurship community (Growth Network), a finance community (The Ledger Society) and a founder discussion platform (Aarambh Network, co-built).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-[#1B1A18] dark:text-[#ECEAE4]">• Operated in:</span>
                  <span>A 700+ founder network (Avenor), with outreach, onboarding and partnership conversations across founders, investors and startup teams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-[#1B1A18] dark:text-[#ECEAE4]">• Recognised:</span>
                  <span>Top 15 Campus Ambassadors across India, TVS Credit E.P.I.C.</span>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="space-y-2 pt-2 border-t border-[#E6DFD3] dark:border-[#232724]">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] font-semibold">
                EDUCATION
              </h2>
              <div>
                <div className="font-serif text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                  Indian Institute of Management Bangalore | BBA, Digital Business & Entrepreneurship
                </div>
                <div className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-0.5">
                  Focus: digital business, entrepreneurship, technology-enabled problem solving and venture-building exposure.
                </div>
              </div>
            </div>

            {/* Founder & Builder Experience */}
            <div className="space-y-4 pt-2 border-t border-[#E6DFD3] dark:border-[#232724]">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] font-semibold">
                FOUNDER & BUILDER EXPERIENCE
              </h2>

              <div className="space-y-4">
                {/* MarketVerse */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-medium text-sm text-[#1B1A18] dark:text-[#ECEAE4]">
                      Founder / Product Builder, MarketVerse
                    </span>
                    <span className="text-xs font-mono text-[#1E3A2F] dark:text-[#88C49F]">
                      Live MVP | Finance, technology and investor education
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#484540] dark:text-[#B5B0A4] space-y-1">
                    <li>Built a working MVP for first-time investors and students, with plain-language market explanations, beginner-friendly screening and practice-oriented learning features.</li>
                    <li>Designed the product around risk awareness and better financial decision-making, turning learning gaps observed into product features.</li>
                    <li>Worked at the intersection of finance, technology and product thinking, exploring how AI can make complex financial concepts easier to understand and act on.</li>
                    <li>Progressed the product through development and competitive innovation work.</li>
                  </ul>
                </div>

                {/* SevaSetu */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-medium text-sm text-[#1B1A18] dark:text-[#ECEAE4]">
                      Founder, SevaSetu
                    </span>
                    <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                      Concept & validation stage | Local services
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#484540] dark:text-[#B5B0A4] space-y-1">
                    <li>Took a marketplace for plumbers, electricians, cleaners, carpenters and other service professionals from problem discovery to customer and provider validation, aimed at improving access to trusted providers.</li>
                    <li>Held structured conversations with households and service providers, then turned the findings into an early value proposition, business model and go-to-market direction.</li>
                    <li>Studied both sides of the marketplace before building, examining onboarding friction, pricing and adoption.</li>
                  </ul>
                </div>

                {/* Growth Network */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-medium text-sm text-[#1B1A18] dark:text-[#ECEAE4]">
                      Founder / Community Builder, Growth Network
                    </span>
                    <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                      500+ members | Entrepreneurial community
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#484540] dark:text-[#B5B0A4] space-y-1">
                    <li>Built and scaled a 500+ member community of students, founders and working professionals around entrepreneurship, learning and opportunities.</li>
                    <li>Designed recurring discussions, curated opportunities and peer-learning interactions, learning how community value compounds through consistency and useful connections.</li>
                  </ul>
                </div>

                {/* Aarambh Network */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-medium text-sm text-[#1B1A18] dark:text-[#ECEAE4]">
                      Co-builder, Aarambh Network
                    </span>
                    <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                      Founder learning & discussion platform (300+ Founders)
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#484540] dark:text-[#B5B0A4] space-y-1">
                    <li>Co-build a founder-focused platform around structured roundtables, practical founder insights and moderated discussions.</li>
                    <li>Handle outreach, session design, questioning, coordination and community engagement, creating a space where founders can exchange practical perspectives.</li>
                  </ul>
                </div>

                {/* The Ledger Society */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-medium text-sm text-[#1B1A18] dark:text-[#ECEAE4]">
                      Founder / Community Builder, The Ledger Society
                    </span>
                    <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                      Finance & investing community
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#484540] dark:text-[#B5B0A4] space-y-1">
                    <li>Built a peer-learning environment around investing, business and entrepreneurship, with an emphasis on practical knowledge-sharing and discussion.</li>
                    <li>Used community-building and finance conversations to understand how students learn markets, evaluate ideas and exchange perspectives.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ecosystem & Business Experience */}
            <div className="space-y-4 pt-2 border-t border-[#E6DFD3] dark:border-[#232724]">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] font-semibold">
                ECOSYSTEM & BUSINESS EXPERIENCE
              </h2>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Business Development & Partnerships, Avenor</span>
                    <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">Startup ecosystem (700+ network)</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#484540] dark:text-[#B5B0A4] space-y-1">
                    <li>Engage founders, investors and startup teams through outreach, conversations, onboarding and relationship management across a network of 700+ founders.</li>
                    <li>Support the partnership lifecycle from first outreach and pitch conversations through follow-up and onboarding.</li>
                    <li>Work within a high-velocity startup ecosystem where learning, networking and execution often require navigating incomplete information and multiple stakeholders.</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Business Development Executive, Kalnet</span>
                    <span className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">Professional experience</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#484540] dark:text-[#B5B0A4] space-y-1">
                    <li>Contribute to business development and sales execution through professional outreach, coordination and follow-through in a team environment.</li>
                    <li>Communicate with prospects and stakeholders, clarify business requirements and move tasks from discussion to execution.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Selected Projects & Recognitions */}
            <div className="space-y-3 pt-2 border-t border-[#E6DFD3] dark:border-[#232724]">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] font-semibold">
                RECOGNITIONS & SELECTED ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-inside text-xs text-[#484540] dark:text-[#B5B0A4] space-y-1">
                <li><strong className="text-[#1B1A18] dark:text-[#ECEAE4]">TVS Credit E.P.I.C.:</strong> Recognised among the Top 15 Campus Ambassadors across India for campus engagement.</li>
                <li><strong className="text-[#1B1A18] dark:text-[#ECEAE4]">MarketVerse:</strong> Progressed an AI-enabled financial learning product through product development and competitive innovation work.</li>
                <li><strong className="text-[#1B1A18] dark:text-[#ECEAE4]">SevaSetu:</strong> Developed a service-marketplace concept through direct primary research with users and service providers.</li>
                <li><strong className="text-[#1B1A18] dark:text-[#ECEAE4]">P2P EV Charging Marketplace:</strong> Researched a peer-to-peer EV charging model connecting charging-point owners with nearby EV users.</li>
              </ul>
            </div>

            {/* Operating Mindset */}
            <div className="p-4 rounded-xl bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] font-semibold">
                OPERATING MINDSET
              </h2>
              <ul className="space-y-1 text-xs text-[#484540] dark:text-[#B5B0A4]">
                <li>• <strong>Build before being asked:</strong> learn by talking to the people closest to the problem.</li>
                <li>• <strong>Turn ambiguity into action:</strong> focus on the next actionable step rather than waiting for perfect information.</li>
                <li>• <strong>Technology with human context:</strong> use technology to increase research and execution speed while keeping human judgment central.</li>
                <li>• <strong>Substance over activity:</strong> prefer useful relationships and measurable progress over activity for its own sake.</li>
              </ul>
            </div>
          </div>
        )}

        {/* ================= TAB 2: RESEARCH & PORTFOLIO DOSSIER ================= */}
        {activeTab === 'dossier' && (
          <div className="p-8 sm:p-12 lg:p-16 space-y-10 font-serif">
            {/* Header */}
            <div className="pb-8 border-b-2 border-[#1B1A18] dark:border-[#ECEAE4] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#1B1A18] dark:text-[#ECEAE4]">
                  {PORTFOLIO_DATA.meta.name}
                </h1>
                <div className="font-mono text-xs text-[#736E65] dark:text-[#8A857B]">
                  Academic Portfolio Dossier · 2026-2027
                </div>
              </div>

              <div className="text-sm font-sans text-[#484540] dark:text-[#B5B0A4] flex flex-wrap gap-x-4 gap-y-1">
                <span>{PORTFOLIO_DATA.meta.academicInstitution}</span>
                <span>•</span>
                <span>{PORTFOLIO_DATA.meta.degree}</span>
                <span>•</span>
                <span>{PORTFOLIO_DATA.contact.location}</span>
                <span>•</span>
                <span className="font-mono text-xs">{PORTFOLIO_DATA.contact.academicEmail}</span>
              </div>
            </div>

            {/* Core Professional Identity */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F]">
                Executive Summary & Identity
              </h2>
              <p className="text-base font-sans text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
                "{PORTFOLIO_DATA.meta.editorialManifesto}"
              </p>
            </div>

            {/* Academic Background & Current Research */}
            <div className="space-y-4 pt-4 border-t border-[#E6DFD3] dark:border-[#232724]">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F]">
                Academic Affiliation & Empirical Inquiries
              </h2>
              <div className="font-sans space-y-3">
                <div className="p-4 rounded-xl bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724]">
                  <div className="font-serif text-lg font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                    Indian Institute of Management Bangalore (IIM-B)
                  </div>
                  <div className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-0.5">
                    {PORTFOLIO_DATA.meta.degree}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-serif text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                      {PORTFOLIO_DATA.research.activePaper.title}
                    </div>
                    <span className="text-[10px] font-mono text-[#1E3A2F] dark:text-[#88C49F] bg-[#1E3A2F]/10 dark:bg-[#88C49F]/20 px-2 py-0.5 rounded">
                      {PORTFOLIO_DATA.research.activePaper.targetVenue}
                    </span>
                  </div>
                  <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                    {PORTFOLIO_DATA.research.activePaper.abstract}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Ventures Portfolio Summary */}
            <div className="space-y-4 pt-4 border-t border-[#E6DFD3] dark:border-[#232724]">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F]">
                Venture Building & Ecosystem Initiatives
              </h2>
              <div className="font-sans space-y-3">
                {PORTFOLIO_DATA.ventures.map((v) => (
                  <div
                    key={v.id}
                    className="p-4 rounded-xl bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-serif text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                        {v.title}
                      </div>
                      <span className="text-[10px] font-mono text-[#736E65] dark:text-[#8A857B]">
                        {v.stage}
                      </span>
                    </div>
                    <div className="text-xs text-[#1E3A2F] dark:text-[#88C49F] font-mono">
                      Role: {v.role}
                    </div>
                    <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                      {v.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial & Ecosystem Exposure */}
            <div className="space-y-4 pt-4 border-t border-[#E6DFD3] dark:border-[#232724]">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F]">
                Commercial Exposure & Ecosystem Governance
              </h2>
              <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] space-y-1">
                  <div className="font-serif text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                    Kalnet
                  </div>
                  <div className="text-xs text-[#1E3A2F] dark:text-[#88C49F] font-mono">
                    Business Development Executive
                  </div>
                  <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed pt-1">
                    Outbound prospecting, commercial lead qualification, customer pain point discovery, and structured sales pipeline hygiene.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] space-y-1">
                  <div className="font-serif text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                    Avenor (700+ Founder Network)
                  </div>
                  <div className="text-xs text-[#1E3A2F] dark:text-[#88C49F] font-mono">
                    Business Development & Partnerships
                  </div>
                  <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed pt-1">
                    Facilitated founder onboarding, relational follow-ups, and ecosystem dialogue across a 700+ founder community.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Recognitions */}
            <div className="space-y-4 pt-4 border-t border-[#E6DFD3] dark:border-[#232724]">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F]">
                Verified Institutional Honors & Ambassadorships
              </h2>
              <div className="font-sans grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724]">
                  <span className="font-medium text-[#1B1A18] dark:text-[#ECEAE4]">TVS Credit E.P.I.C. 8.0:</span> Top 15 Campus Ambassador across India.
                </div>
                <div className="p-3 rounded-lg bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724]">
                  <span className="font-medium text-[#1B1A18] dark:text-[#ECEAE4]">Faculty Startup Evaluathon 2026:</span> Invited Evaluation Jury Member.
                </div>
                <div className="p-3 rounded-lg bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724]">
                  <span className="font-medium text-[#1B1A18] dark:text-[#ECEAE4]">National Innovation Foundation (NIF):</span> IAPP Selection & Interview Journey.
                </div>
                <div className="p-3 rounded-lg bg-[#F8F6F1] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724]">
                  <span className="font-medium text-[#1B1A18] dark:text-[#ECEAE4]">Case Competition Finalist:</span> IIT Madras & IIT Dhanbad National Challenges.
                </div>
              </div>
            </div>

            {/* Formal Sign-off */}
            <div className="pt-8 border-t border-[#1B1A18] dark:border-[#ECEAE4] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
              <div>Authenticated Academic Record — Jayveer Trivedi</div>
              <div>Indian Institute of Management Bangalore</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

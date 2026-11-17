import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { Copy, Check, ArrowUpRight, MapPin, Landmark } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { contact } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(type);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#E6DFD3] dark:border-[#232724]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6DFD3] dark:border-[#232724]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#88C49F] mb-3">
              <span>09</span>
              <span className="w-6 h-px bg-[#1E3A2F] dark:bg-[#88C49F]" />
              <span>Dialogue & Collaboration</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1A18] dark:text-[#ECEAE4]">
              {contact.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
            Open to discussions around early-stage venture building, founder roundtables, market research inquiries, and commercial partnerships.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-6">
              <p className="font-serif text-xl sm:text-2xl text-[#1B1A18] dark:text-[#ECEAE4] leading-relaxed font-normal">
                "{contact.intro}"
              </p>

              {/* Email Cards */}
              <div className="space-y-3 pt-4 border-t border-[#E6DFD3] dark:border-[#232724]">
                {/* Academic Email */}
                <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#88C49F]">
                      Academic Correspondence (IIM Bangalore)
                    </div>
                    <a
                      href={`mailto:${contact.academicEmail}`}
                      className="font-mono text-sm sm:text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4] hover:underline"
                    >
                      {contact.academicEmail}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contact.academicEmail, 'academic')}
                    aria-label="Copy academic email"
                    className="p-2.5 rounded-xl bg-[#FAF7F0] dark:bg-[#121513] border border-[#E6DFD3] dark:border-[#232724] hover:bg-[#EAE5DA] dark:hover:bg-[#1F2521] text-[#484540] dark:text-[#B5B0A4] transition-colors"
                  >
                    {copiedEmail === 'academic' ? (
                      <Check className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Personal / Work Email */}
                <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
                      Direct & Venture Inquiries
                    </div>
                    <a
                      href={`mailto:${contact.personalEmail}`}
                      className="font-mono text-sm sm:text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4] hover:underline"
                    >
                      {contact.personalEmail}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contact.personalEmail, 'personal')}
                    aria-label="Copy personal email"
                    className="p-2.5 rounded-xl bg-[#FAF7F0] dark:bg-[#121513] border border-[#E6DFD3] dark:border-[#232724] hover:bg-[#EAE5DA] dark:hover:bg-[#1F2521] text-[#484540] dark:text-[#B5B0A4] transition-colors"
                  >
                    {copiedEmail === 'personal' ? (
                      <Check className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Direct Phone */}
                <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
                      Direct Telephone & Mobile
                    </div>
                    <a
                      href={`tel:${contact.phone}`}
                      className="font-mono text-sm sm:text-base font-medium text-[#1B1A18] dark:text-[#ECEAE4] hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contact.phone, 'phone')}
                    aria-label="Copy phone number"
                    className="p-2.5 rounded-xl bg-[#FAF7F0] dark:bg-[#121513] border border-[#E6DFD3] dark:border-[#232724] hover:bg-[#EAE5DA] dark:hover:bg-[#1F2521] text-[#484540] dark:text-[#B5B0A4] transition-colors"
                  >
                    {copiedEmail === 'phone' ? (
                      <Check className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Details & Social */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724] space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B]">
                Institutional Affiliation & Presence
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Landmark className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                      Academic Institution
                    </div>
                    <div className="text-sm font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                      {contact.institution}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1E3A2F] dark:text-[#88C49F] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B]">
                      Current Residence & Location
                    </div>
                    <div className="text-sm font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
                      {contact.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6DFD3] dark:border-[#232724] space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#736E65] dark:text-[#8A857B] mb-2">
                  Professional Channels:
                </div>
                {contact.socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F4EFE6] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] text-xs font-medium text-[#1B1A18] dark:text-[#ECEAE4] hover:bg-[#EAE5DA] dark:hover:bg-[#1F2521] transition-colors"
                  >
                    <span>{s.name}</span>
                    <div className="flex items-center gap-1 font-mono text-[#736E65] dark:text-[#8A857B]">
                      <span>{s.handle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

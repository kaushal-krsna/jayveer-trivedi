import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio-content';
import { Moon, Sun, Menu, X, FileText, Search } from 'lucide-react';

interface NavbarProps {
  onOpenDossier: () => void;
  onOpenSearch: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDossier,
  onOpenSearch,
  darkMode,
  toggleDarkMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Recognition', href: '#recognition' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-[#FBF9F5]/90 dark:bg-[#0F1110]/90 backdrop-blur-md border-b border-[#E6DFD3] dark:border-[#232724] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram & Title */}
        <a
          href="#overview"
          className="group flex items-center gap-3 text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1E3A2F]"
        >
          <span className="w-9 h-9 rounded-full bg-[#1E3A2F] text-[#FAF7F0] dark:bg-[#FAF7F0] dark:text-[#1E3A2F] flex items-center justify-center font-serif text-base font-semibold tracking-tighter transition-transform duration-200 group-hover:scale-105">
            JT
          </span>
          <div>
            <div className="font-serif text-lg font-medium tracking-tight text-[#1B1A18] dark:text-[#ECEAE4] leading-tight">
              {PORTFOLIO_DATA.meta.name}
            </div>
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#736E65] dark:text-[#9A958A] flex items-center gap-1.5">
              <span>{PORTFOLIO_DATA.meta.academicInstitution}</span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#1E3A2F] dark:bg-[#7DB295]" />
              <span>DBE</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium text-[#484540] dark:text-[#B5B0A4]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-full hover:text-[#1B1A18] dark:hover:text-[#ECEAE4] hover:bg-[#F0EDE4] dark:hover:bg-[#1E2320] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Search / Command Palette Button */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-mono text-[#736E65] dark:text-[#9A958A] bg-[#F0EDE4] dark:bg-[#1A1F1B] hover:text-[#1B1A18] dark:hover:text-[#ECEAE4] border border-[#E6DFD3] dark:border-[#2A312B] transition-colors"
            title="Search sections & ventures (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Quick Jump</span>
            <kbd className="text-[10px] bg-[#E2DCCE] dark:bg-[#282F2A] px-1.5 py-0.5 rounded text-[#484540] dark:text-[#B5B0A4]">
              ⌘K
            </kbd>
          </button>

          {/* Academic Dossier / Print View */}
          <button
            onClick={onOpenDossier}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#1E3A2F] dark:text-[#88C49F] bg-[#1E3A2F]/10 dark:bg-[#1E3A2F]/30 hover:bg-[#1E3A2F]/20 dark:hover:bg-[#1E3A2F]/40 border border-[#1E3A2F]/20 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Academic Dossier</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light editorial theme" : "Switch to midnight dark theme"}
            title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono text-[#484540] dark:text-[#B5B0A4] hover:text-[#1B1A18] dark:hover:text-[#ECEAE4] bg-[#F0EDE4] dark:bg-[#1A1F1B] border border-[#E6DFD3] dark:border-[#2A312B] transition-colors cursor-pointer"
          >
            {darkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#E0B15B]" />
                <span className="hidden sm:inline text-[11px]">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#1E3A2F]" />
                <span className="hidden sm:inline text-[11px]">Dark</span>
              </>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden rounded-full text-[#484540] dark:text-[#B5B0A4] hover:bg-[#F0EDE4] dark:hover:bg-[#1A1F1B]"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] dark:bg-[#0F1110] border-b border-[#E6DFD3] dark:border-[#232724] px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif font-medium text-[#1B1A18] dark:text-[#ECEAE4] py-1.5 hover:text-[#1E3A2F] dark:hover:text-[#88C49F]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E6DFD3] dark:border-[#232724] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium border border-[#E6DFD3] dark:border-[#232724] text-[#484540] dark:text-[#B5B0A4] bg-[#F0EDE4] dark:bg-[#1A1F1B]"
            >
              {darkMode ? <Sun className="w-4 h-4 text-[#E0B15B]" /> : <Moon className="w-4 h-4 text-[#1E3A2F]" />}
              <span>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossier();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium bg-[#1E3A2F] text-[#FAF7F0] dark:bg-[#88C49F] dark:text-[#0F1110]"
            >
              <FileText className="w-4 h-4" />
              <span>View Academic Dossier</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium border border-[#E6DFD3] dark:border-[#232724] text-[#484540] dark:text-[#B5B0A4]"
            >
              <Search className="w-4 h-4" />
              <span>Quick Search (⌘K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

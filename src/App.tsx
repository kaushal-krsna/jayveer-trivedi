import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VenturesSection } from './components/VenturesSection';
import { EcosystemSection } from './components/EcosystemSection';
import { ExperienceAndFinanceSection } from './components/ExperienceAndFinanceSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { ResearchSection } from './components/ResearchSection';
import { OpportunitiesAndRecognitionSection } from './components/OpportunitiesAndRecognitionSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { AcademicDossierModal } from './components/AcademicDossierModal';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return false; // Default to signature warm ivory editorial light palette
    }
    return false;
  });

  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSelectSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1B1A18] dark:bg-[#0F1110] dark:text-[#ECEAE4] transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar
        onOpenDossier={() => setIsDossierOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content */}
      <main>
        <Hero onOpenDossier={() => setIsDossierOpen(true)} />
        <AboutSection />
        <VenturesSection />
        <EcosystemSection />
        <ExperienceAndFinanceSection />
        <CompetitionsSection />
        <ResearchSection />
        <OpportunitiesAndRecognitionSection />
        <CapabilitiesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectAction={handleSelectSection}
      />

      {/* Official Academic Dossier Modal */}
      <AcademicDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}

export default App;

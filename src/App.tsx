import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import StorySection from './components/sections/StorySection';
import QuoteBreak from './components/sections/QuoteBreak';
import EmissionsSection from './components/sections/EmissionsSection';
import MultiformatSection from './components/sections/MultiformatSection';
import ProofSection from './components/sections/ProofSection';
import SponsorProjectionSection from './components/sections/SponsorProjectionSection';
import ProjectionsSection from './components/sections/ProjectionsSection';
import PartnershipSection from './components/sections/PartnershipSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <HeroSection />
      <StorySection />

      {/* Citation — après l'histoire, avant le show */}
      <QuoteBreak
        stat="45 000"
        text="personnes en live simultané pour les après-matchs."
        sub="Record d'audience pendant la CAN 2025 — sur 5 plateformes en même temps."
        accentColor="pink"
      />

      <EmissionsSection />

      {/* Citation — après les émissions, avant le multiformat */}
      <QuoteBreak
        stat="134M"
        text="de vues vidéo en 3 semaines de compétition."
        sub="YouTube, TikTok, Meta, Snapchat, X — l'émission a tout alimenté."
        accentColor="blue"
      />

      <MultiformatSection />
      <ProofSection />
      <SponsorProjectionSection />

      {/* Citation — avant les projections */}
      <QuoteBreak
        stat="239M"
        text="d'impressions. Et ce n'était que la CAN."
        sub="Coupe du Monde 2026, Ligue des Champions, saison complète — le meilleur reste à venir."
        accentColor="purple"
      />

      <ProjectionsSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

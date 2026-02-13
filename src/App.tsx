import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ConceptSection from './components/sections/ConceptSection';
import EmissionsSection from './components/sections/EmissionsSection';
import MultiformatSection from './components/sections/MultiformatSection';
import BilanSection from './components/sections/BilanSection';
import ProjectionsSection from './components/sections/ProjectionsSection';
import OffreSection from './components/sections/OffreSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <EmissionsSection />
      <MultiformatSection />
      <BilanSection />
      <ProjectionsSection />
      <OffreSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

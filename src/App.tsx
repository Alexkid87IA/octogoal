import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import CANProgramSection from './components/sections/CANProgramSection';
import BrandIntegrationSection from './components/sections/BrandIntegrationSection';
import ContentFormatsSection from './components/sections/ContentFormatsSection';
import DualDiffusionSection from './components/sections/DualDiffusionSection';
import VolumeImpactSection from './components/sections/VolumeImpactSection';
import RightsReusageSection from './components/sections/RightsReusageSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CANProgramSection />
      <BrandIntegrationSection />
      <ContentFormatsSection />
      <DualDiffusionSection />
      <VolumeImpactSection />
      <RightsReusageSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ArturaExplodedView from '../components/ArturaExplodedView';
import DesignPhilosophy from '../components/DesignPhilosophy';
import FeatureGallery from '../components/FeatureGallery';
import ColorConfigurator from '../components/ColorConfigurator';
import Specifications from '../components/Specifications';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-black font-sans">
      <Navbar />
      <Hero />
      <ArturaExplodedView />
      <DesignPhilosophy />
      <FeatureGallery />
      <ColorConfigurator />
      <Specifications />
      <Footer />
    </main>
  );
}

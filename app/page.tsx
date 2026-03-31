import Navbar from '../components/Navbar';
import HostingHero from '../components/HostingHero';
import HostingPain from '../components/HostingPain';
import HostingPositioning from '../components/HostingPositioning';
import HostingVsMaintenance from '../components/HostingVsMaintenance';
import HostingPlans from '../components/HostingPlans';
import HostingOnboarding from '../components/HostingOnboarding';
import HostingSecurity from '../components/HostingSecurity';
import HostingDifferentials from '../components/HostingDifferentials';
import HostingRules from '../components/HostingRules';
import HostingTransparency from '../components/HostingTransparency';
import HostingFinalCTA from '../components/HostingFinalCTA';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import PrivacyModal from '../components/PrivacyModal';
import CookiePolicyModal from '../components/CookiePolicyModal';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content">
        <HostingHero />
        <HostingPain />
        <HostingPositioning />
        <HostingVsMaintenance />
        <HostingPlans />
        <HostingOnboarding />
        <HostingSecurity />
        <HostingDifferentials />
        <HostingRules />
        <HostingTransparency />
        <HostingFinalCTA />
      </main>
      <Footer />
      <CookieBanner />
      <PrivacyModal />
      <CookiePolicyModal />
    </div>
  );
}

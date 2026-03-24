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
import HostingEnhancements from '../components/HostingEnhancements';
import HostingFinalCTA from '../components/HostingFinalCTA';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import PrivacyModal from '../components/PrivacyModal';
import CookiePolicyModal from '../components/CookiePolicyModal';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { SITE_CONFIG } from '../constants';

export const dynamic = 'force-dynamic';

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TAG08',
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}/logo.png`,
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Hospedagem e infraestrutura web',
    name: 'Infraestrutura Web TAG08',
    provider: organizationSchema,
    description:
      'Hospedagem segura, estável e otimizada para empresas que precisam de performance e previsibilidade.',
    areaServed: 'Worldwide',
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
        <HostingEnhancements />
        <HostingFinalCTA />
      </main>
      <Footer />
      <CookieBanner />
      <PrivacyModal />
      <CookiePolicyModal />
      <LanguageSwitcher />
    </div>
  );
}

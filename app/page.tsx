import dynamicImport from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemContext from '../components/ProblemContext';
import ValueProposition from '../components/ValueProposition';
import CookieBanner from '../components/CookieBanner';
import PrivacyModal from '../components/PrivacyModal';
import CookiePolicyModal from '../components/CookiePolicyModal';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { SITE_CONFIG } from '../constants';

export const dynamic = 'force-dynamic';

const OpportunityCalculator = dynamicImport(() => import('../components/OpportunityCalculator'), { ssr: true });
const IncludedPillars = dynamicImport(() => import('../components/IncludedPillars'), { ssr: true });
const MonthlyCycle = dynamicImport(() => import('../components/MonthlyCycle'), { ssr: true });
const GrowthRoadmap = dynamicImport(() => import('../components/GrowthRoadmap'), { ssr: true });
const StrategicBenefits = dynamicImport(() => import('../components/StrategicBenefits'), { ssr: true });
const Testimonials = dynamicImport(() => import('../components/Testimonials'), { ssr: true });
const InvestmentAndSecurity = dynamicImport(() => import('../components/InvestmentAndSecurity'), { ssr: true });
const ClientResponsibilities = dynamicImport(() => import('../components/ClientResponsibilities'), { ssr: true });
const FAQ = dynamicImport(() => import('../components/FAQ'), { ssr: true });
const FinalCTA = dynamicImport(() => import('../components/FinalCTA'), { ssr: true });
const Footer = dynamicImport(() => import('../components/Footer'), { ssr: true });

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
    serviceType: 'Marketing Digital Estrategico',
    name: 'Plano Base TAG08',
    provider: organizationSchema,
    description:
      'Marketing estrategico mensal para empresas em consolidacao digital. Focado em conteudo, trafego pago e escala de marca.',
    areaServed: 'Worldwide',
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProblemContext />
        <div className="reveal">
          <OpportunityCalculator />
        </div>
        <div className="reveal">
          <ValueProposition />
        </div>
        <IncludedPillars />
        <div className="reveal">
          <MonthlyCycle />
        </div>
        <div className="reveal">
          <GrowthRoadmap />
        </div>
        <div className="reveal">
          <StrategicBenefits />
        </div>
        <div className="reveal">
          <Testimonials />
        </div>
        <div className="reveal">
          <InvestmentAndSecurity />
        </div>
        <div className="reveal">
          <ClientResponsibilities />
        </div>
        <div className="reveal">
          <FAQ />
        </div>
        <div className="reveal">
          <FinalCTA />
        </div>
      </main>
      <Footer />
      <CookieBanner />
      <PrivacyModal />
      <CookiePolicyModal />
      <LanguageSwitcher />
    </div>
  );
}

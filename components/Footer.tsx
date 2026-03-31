'use client';

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { useUX } from '../contexts/UXContext';
import BrandLogo from './BrandLogo';
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Twitter,
  Phone,
  ShieldCheck,
} from 'lucide-react';

const socialLinks = [
  { href: 'https://instagram.com/tag08.com.br', label: 'Instagram', icon: Instagram },
  { href: 'https://linkedin.com/company/tag08-com-br/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.facebook.com/tag08.com.br', label: 'Facebook', icon: Facebook },
  { href: 'https://www.youtube.com/@tag08portfolio66', label: 'YouTube', icon: Youtube },
  { href: 'https://twitter.com/TAG08_com_br', label: 'Twitter', icon: Twitter },
];

const Footer: React.FC = () => {
  const { t, setPrivacyModalOpen, setCookieModalOpen } = useTranslation();
  const { setStrategyNote } = useUX();

  const handleResetCookies = () => {
    localStorage.removeItem('tag08-cookie-preferences');
    window.location.reload();
  };

  return (
    <footer
      id="contato"
      className="bg-brand-black text-white border-t border-white/10 relative overflow-hidden bg-noise"
      itemScope
      itemType="https://schema.org/Organization"
      onMouseEnter={() => setStrategyNote(t.strategyNotes.hero)}
      onMouseLeave={() => setStrategyNote(null)}
    >
      <meta itemProp="name" content="TAG08 Studio Creations" />
      <meta itemProp="url" content="https://hospedagem.tag08.com.br" />
      <meta itemProp="logo" content="https://hospedagem.tag08.com.br/logo.png" />
      <meta itemProp="legalName" content="TAG08 STUDIO CREATIONS LTDA" />

      <div className="pt-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          <span className="blueprint-label -top-8 left-0 text-[8px]">FOOTER_ARCHITECTURE: GRID_12_OPTIMIZED</span>

          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-4 space-y-12 reveal relative">
            <span className="blueprint-label -top-4 left-0">BRAND_SECTION</span>
            <div className="group transition-transform duration-500 hover:scale-[1.02] origin-left cursor-pointer">
              <BrandLogo className="text-4xl text-white" color="white" />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm font-medium max-w-sm">
              {t.footer.about}
            </p>

            <div className="space-y-8 pt-4">
              <div className="flex items-start gap-4 group relative">
                <div className="bg-white/5 p-3 rounded-xl group-hover:bg-brand-lime group-hover:text-brand-black transition-all duration-500 shadow-xl border border-white/5 group-hover:border-brand-lime">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1 font-mono">Headquarters</span>
                  <address className="not-italic">
                    <a
                      href="https://www.google.com/search?q=TAG08+-+Marketing+e+Consultoria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold leading-snug text-sm hover:text-brand-lime transition-colors"
                    >
                      R. Cassimiro de Abreu, 60<br />
                      Sala 05 • Brisamar<br />
                      João Pessoa - PB
                    </a>
                  </address>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-white/5 p-3 rounded-xl group-hover:bg-brand-lime group-hover:text-brand-black transition-all duration-500 shadow-xl border border-white/5 group-hover:border-brand-lime">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1 font-mono">Central Support</span>
                  <a
                    href="mailto:contato@tag08.com.br"
                    className="text-white font-bold hover:text-brand-lime transition-colors text-sm"
                  >
                    contato@tag08.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 lg:pl-8 space-y-8 reveal stagger-1 relative">
            <h4 className="text-white font-black uppercase tracking-widest italic text-base border-l-2 border-brand-lime pl-4">{t.footer.ecosystem}</h4>
            <ul className="space-y-4">
              {[
                { label: 'TAG08 Digital Strategy', href: 'https://tag08.com.br/' },
                { label: t.footer.aboutTag08, href: 'https://tag08.com.br/sobre-a-tag08/' },
                { label: t.footer.blog, href: 'https://tag08.com.br/blog/' },
                { label: t.footer.sebraetec, href: 'https://tag08.com.br/sebraetec-impulsionando-empreendedores/' },
                { label: 'Process Intelligence', href: null, active: true },
              ].map((item, idx) => (
                <li key={idx}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-lime transition-all flex items-center gap-3 group font-bold text-[13px] uppercase tracking-wider"
                    >
                      <ArrowUpRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-lime" />
                      {item.label}
                    </a>
                  ) : (
                    <div className="text-white font-black flex items-center gap-3 text-[13px] italic bg-white/5 py-2 px-3 rounded-lg w-fit border border-white/10 mt-2">
                      <span className="w-1.5 h-1.5 bg-brand-lime rounded-full animate-pulse shadow-[0_0_8px_rgba(212,255,0,1)]"></span>
                      {item.label}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional */}
          <div className="lg:col-span-2 space-y-8 reveal stagger-2">
            <h4 className="text-white font-black uppercase tracking-widest italic text-base">{t.footer.institutional}</h4>
            <ul className="space-y-4">
              {[
                { label: t.footer.privacy, action: () => setPrivacyModalOpen(true) },
                { label: t.footer.cookies, action: () => setCookieModalOpen(true) },
                { label: t.footer.preferences, action: handleResetCookies }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={item.action}
                    className="text-slate-400 hover:text-brand-lime transition-all font-bold text-[13px] uppercase tracking-wider text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="lg:col-span-3 space-y-8 reveal stagger-3 relative">
            <h4 className="text-white font-black uppercase tracking-widest italic text-base">{t.footer.social}</h4>
            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-brand-lime hover:text-brand-black p-3.5 rounded-xl transition-all group border border-white/5 hover:border-brand-lime shadow-lg flex items-center justify-center aspect-square"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="pt-4 p-4 rounded-2xl bg-brand-lime/5 border border-brand-lime/10">
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic">
                {t.footer.socialDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-8 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[9px] font-mono uppercase tracking-[0.4em] text-slate-500 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {t.footer.rights}</span>
            <span className="hidden sm:block text-white/10">|</span>
            <span>{t.footer.allRights}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[9px] text-slate-500 uppercase tracking-[0.4em] font-mono text-center sm:text-left relative group">
            <span className="blueprint-label -top-6 right-0 opacity-0 group-hover:opacity-100 italic transition-all pointer-events-none">NODE_SVR_PROD: LATEST</span>
            <span>CNPJ: 43.140.403/0001-37</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-lime rounded-full animate-pulse shadow-[0_0_8px_rgba(212,255,0,0.5)]"></div>
              <span>JOÃO PESSOA • BRAZIL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

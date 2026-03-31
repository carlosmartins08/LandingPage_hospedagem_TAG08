'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationSchema } from '../types';
import { translations } from '../translations';

export interface CookieConsent {
  necessary: true;
  analytical: boolean;
  marketing: boolean;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  isPrivacyModalOpen: boolean;
  setPrivacyModalOpen: (open: boolean) => void;
  isCookieModalOpen: boolean;
  setCookieModalOpen: (open: boolean) => void;
  cookieConsent: CookieConsent | null;
  updateCookieConsent: (consent: CookieConsent) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// IDs do Google (Analytics, Tag e Ads) vindos de env vars públicas
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export const LanguageProvider: React.FC<{ children?: React.ReactNode, initialLanguage?: Language }> = ({ children, initialLanguage }) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage || 'pt');
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    if (initialLanguage && initialLanguage !== language) {
      setLanguageState(initialLanguage);
    }
  }, [initialLanguage, language]);

  // Function to load Google Analytics / Ads based on consent
  const loadGoogleAnalytics = (consentOverride?: CookieConsent) => {
    const consent = consentOverride ?? cookieConsent;
    if (!consent) return;

    const { analytical, marketing } = consent;
    if (!analytical && !marketing) return;

    if (typeof window === 'undefined') return;

    const primaryId = GA_TRACKING_ID || GOOGLE_TAG_ID || GOOGLE_ADS_ID;
    if (!primaryId) {
      console.warn('[Analytics] Nenhum ID do Google configurado. Defina NEXT_PUBLIC_GA_TRACKING_ID ou NEXT_PUBLIC_GOOGLE_ADS_ID.');
      return;
    }

    const doc = window.document;
    const hasScript = !!doc.getElementById('ga-script');

    const configLines: string[] = [];
    if (analytical) {
      if (GA_TRACKING_ID) {
        configLines.push(`gtag('config', '${GA_TRACKING_ID}', { 'anonymize_ip': true });`);
      } else {
        console.warn('[Analytics] Consentimento analítico dado, mas NEXT_PUBLIC_GA_TRACKING_ID está ausente.');
      }

      if (GOOGLE_TAG_ID) {
        configLines.push(`gtag('config', '${GOOGLE_TAG_ID}');`);
      }
    }

    if (marketing) {
      if (GOOGLE_ADS_ID) {
        configLines.push(`gtag('config', '${GOOGLE_ADS_ID}');`);
      } else {
        console.warn('[Ads] Consentimento de marketing dado, mas NEXT_PUBLIC_GOOGLE_ADS_ID está ausente.');
      }
    }

    if (configLines.length === 0) return;

    if (!hasScript) {
      const script = doc.createElement('script');
      script.id = 'ga-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
      doc.head.appendChild(script);

      const inlineScript = doc.createElement('script');
      inlineScript.id = 'ga-init-script';
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        ${configLines.join('\n        ')}
      `;
      doc.head.appendChild(inlineScript);

      console.debug('Google Analytics / Ads ativado com sucesso.');
    } else {
      const gtagFn = (window as typeof globalThis & { gtag?: CallableFunction }).gtag;
      if (gtagFn) {
        if (analytical && GA_TRACKING_ID) {
          gtagFn('config', GA_TRACKING_ID, { 'anonymize_ip': true });
        }
        if (analytical && GOOGLE_TAG_ID) {
          gtagFn('config', GOOGLE_TAG_ID);
        }
        if (marketing && GOOGLE_ADS_ID) {
          gtagFn('config', GOOGLE_ADS_ID);
        }
      }
    }
  };


  useEffect(() => {
    // Carregar consentimento de cookies
    const savedConsent = localStorage.getItem('tag08-cookie-preferences');
    if (savedConsent) {
      const parsedConsent: CookieConsent = JSON.parse(savedConsent);
      setCookieConsent(parsedConsent);

      // Se houver consentimento salvo, com Analytics ou Marketing
      loadGoogleAnalytics(parsedConsent);
    }

    // If no initial language, fallback to local storage or browser
    if (!initialLanguage) {
      const savedLang = localStorage.getItem('tag08-lang') as Language | null;
      const supportedLanguages: Language[] = ['pt', 'en', 'es', 'fr'];

      if (savedLang && supportedLanguages.includes(savedLang)) {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language.toLowerCase();
        let resolvedLang: Language = 'en';

        if (browserLang.includes('pt')) {
          resolvedLang = 'pt';
        } else if (browserLang.includes('es')) {
          resolvedLang = 'es';
        } else if (browserLang.includes('fr')) {
          resolvedLang = 'fr';
        }

        setLanguageState(resolvedLang);
      }
    }
  }, [initialLanguage]);

  const setLanguage = (lang: Language) => {
    // With URL routing, we should probably redirect instead of just setting state.
    // For now, keep state so components can react immediately.
    setLanguageState(lang);
    localStorage.setItem('tag08-lang', lang);
    document.documentElement.lang = lang;
  };

  const updateCookieConsent = (consent: CookieConsent) => {
    setCookieConsent(consent);
    localStorage.setItem('tag08-cookie-preferences', JSON.stringify(consent));

    // Gerenciamento dinâmico de scripts baseado no novo consentimento
    if (consent.analytical || consent.marketing) {
      loadGoogleAnalytics(consent);
    } else {
      console.debug('Scripts Analiticos desativados pelo usuario.');
    }

    if (consent.marketing) {
      console.debug('Iniciando Scripts de Marketing (Pixel/Ads)...');
    }
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t: translations[language],
      isPrivacyModalOpen,
      setPrivacyModalOpen,
      isCookieModalOpen,
      setCookieModalOpen,
      cookieConsent,
      updateCookieConsent
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};

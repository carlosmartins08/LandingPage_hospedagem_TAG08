'use client';

import React, { useEffect, useRef, useState } from 'react';
import Magnetic from './Magnetic';

const waLink = 'https://wa.me/message/XURZIJ762YMVB1';

const HostingOnboarding = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [requirementsText, setRequirementsText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    site: '',
    goal: '',
  });

  const syncFromStorage = () => {
    if (typeof window === 'undefined') return;
    const storedPlan = localStorage.getItem('tag08_selected_plan');
    if (storedPlan) setSelectedPlan(storedPlan);
    else setSelectedPlan('');

    const storedRequirements = localStorage.getItem('tag08_requirements');
    if (storedRequirements) {
      try {
        const parsed = JSON.parse(storedRequirements) as {
          sites?: number;
          storage?: number;
          emails?: number;
        };
        const parts = [
          parsed.sites ? `${parsed.sites} sites` : null,
          parsed.storage ? `${parsed.storage} GB` : null,
          parsed.emails ? `${parsed.emails} e-mails` : null,
        ].filter(Boolean);
        if (parts.length) {
          setRequirementsText(parts.join(', '));
          return;
        }
      } catch (error) {
        console.warn('Falha ao ler requisitos do localStorage', error);
      }
    }
    setRequirementsText('');
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleOpen = () => {
      syncFromStorage();
      setIsOpen(true);
    };
    window.addEventListener('tag08:open-onboarding', handleOpen);
    return () => window.removeEventListener('tag08:open-onboarding', handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    const message = [
      'Olá! Quero iniciar o onboarding da hospedagem TAG08.',
      selectedPlan ? `Plano escolhido: ${selectedPlan}` : 'Plano escolhido: não informado',
      `Nome: ${formData.name}`,
      `Empresa: ${formData.company}`,
      `Site: ${formData.site}`,
      `Objetivo principal: ${formData.goal}`,
      requirementsText ? `Necessidades informadas: ${requirementsText}` : null,
      selectedPlan === 'Sob consulta' ? 'Observação: necessidades acima dos planos padrão' : null,
    ].filter(Boolean).join('\n');

    const url = `${waLink}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div id="onboarding" />
      {isOpen && (
        <div
          className="fixed inset-0 z-[200] bg-brand-black/80 backdrop-blur-md flex items-center justify-center px-6 py-10"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-brand-black bg-noise shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-brand-lime hover:border-brand-lime transition-all"
              aria-label="Fechar onboarding"
            >
              ✕
            </button>

            <div className="p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-12">
                <div className="mb-6 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
                  <span>Etapa 1 de 1</span>
                  <span className="text-brand-lime">Onboarding rápido</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-full bg-brand-lime"></div>
                </div>
              </div>

              <div className="lg:col-span-4 lg:pr-6">
                <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em]">
                  Onboarding rápido
                </div>
                <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic text-white">
                  Comece seu onboarding em 2 minutos
                </h2>
                <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-sm">
                  Preencha os dados essenciais e fale direto com um especialista.
                </p>
                <p className="mt-6 text-xs text-white/50 uppercase tracking-[0.3em] font-black">
                  Infraestrutura Web TAG08
                </p>
              </div>

              <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-white/10">
                <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                      Plano escolhido:
                      <span className="text-brand-lime">{selectedPlan || 'Não informado'}</span>
                    </span>
                    {requirementsText && (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                        Necessidades:
                        <span className="text-brand-lime">{requirementsText}</span>
                      </span>
                    )}
                  </div>

                  <div className="grid gap-5">
                    <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60 font-black">
                      Nome
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome completo"
                        className="w-full rounded-2xl border border-white/10 bg-brand-black/60 px-4 py-3 text-sm font-semibold text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-lime"
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60 font-black">
                      Empresa
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Nome da empresa"
                        className="w-full rounded-2xl border border-white/10 bg-brand-black/60 px-4 py-3 text-sm font-semibold text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-lime"
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60 font-black">
                      Site
                      <input
                        name="site"
                        value={formData.site}
                        onChange={handleChange}
                        required
                        placeholder="www.seusite.com.br"
                        className="w-full rounded-2xl border border-white/10 bg-brand-black/60 px-4 py-3 text-sm font-semibold text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-lime"
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60 font-black">
                      Objetivo principal
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleSelectChange}
                        required
                        className="w-full rounded-2xl border border-white/10 bg-brand-black/60 px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-brand-lime"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        <option value="Site institucional">Site institucional</option>
                        <option value="Landing page">Landing page</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Blog">Blog</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-2 grid gap-3">
                    <Magnetic>
                      <button
                        type="submit"
                        className="btn-magnetic w-full inline-flex items-center justify-center px-10 py-4 bg-brand-lime text-brand-black rounded-full font-black text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,255,0,0.45)] transition-all"
                      >
                        Iniciar onboarding no WhatsApp
                      </button>
                    </Magnetic>
                    <span className="text-[10px] text-white/50 font-medium uppercase tracking-[0.3em]">
                      Ao enviar, você concorda com a Política de Privacidade.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HostingOnboarding;

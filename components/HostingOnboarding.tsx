'use client';

import React, { useRef, useState } from 'react';
import Magnetic from './Magnetic';

const waLink = 'https://wa.me/message/XURZIJ762YMVB1';

const HostingOnboarding = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    whatsapp: '',
    site: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      `Nome: ${formData.name}`,
      `Empresa: ${formData.company}`,
      `WhatsApp: ${formData.whatsapp}`,
      `Site: ${formData.site}`,
    ].join('\n');

    const url = `${waLink}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="onboarding" className="relative py-24 bg-brand-black bg-noise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 lg:p-14 grid lg:grid-cols-12 gap-10 items-start reveal">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em]">
              Onboarding rápido
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic text-white">
              Comece seu onboarding em 2 minutos
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Preencha os dados essenciais e fale direto com um especialista.
            </p>
            <p className="mt-6 text-xs text-white/50 uppercase tracking-[0.3em] font-black">
              Infraestrutura Web TAG08
            </p>
          </div>

          <div className="lg:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60 font-black">
                  Nome
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                    className="w-full rounded-2xl border border-white/10 bg-brand-black/60 px-4 py-3 text-sm font-semibold text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-lime"
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
                    className="w-full rounded-2xl border border-white/10 bg-brand-black/60 px-4 py-3 text-sm font-semibold text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-lime"
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60 font-black">
                  WhatsApp
                  <input
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    placeholder="(DDD) 9 0000-0000"
                    className="w-full rounded-2xl border border-white/10 bg-brand-black/60 px-4 py-3 text-sm font-semibold text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-lime"
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
                    className="w-full rounded-2xl border border-white/10 bg-brand-black/60 px-4 py-3 text-sm font-semibold text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-lime"
                  />
                </label>
              </div>

              <div className="mt-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Magnetic>
                  <button
                    type="submit"
                    className="btn-magnetic inline-flex items-center justify-center px-10 py-4 bg-brand-lime text-brand-black rounded-full font-black text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,255,0,0.45)] transition-all"
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
    </section>
  );
};

export default HostingOnboarding;

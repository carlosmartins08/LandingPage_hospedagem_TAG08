import Image from 'next/image';
import Magnetic from './Magnetic';

const HostingHero = () => {
  return (
    <section id="hero" className="relative pt-28 pb-24 lg:pt-40 lg:pb-32 bg-brand-black bg-noise overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 left-1/3 w-96 h-96 bg-brand-lime/15 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-lime/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="reveal stagger-1 inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em]">
              Infraestrutura Gerenciada
            </div>

            <h1 className="reveal stagger-2 mt-6 text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase italic">
              Infraestrutura Web{' '}
              <span className="inline-block bg-brand-lime text-brand-black px-3 py-1 rounded-2xl">Segura</span>{' '}
              para o seu negócio{' '}
              <span className="inline-block bg-brand-lime text-brand-black px-3 py-1 rounded-2xl">crescer</span>{' '}
              sem dor de cabeça
            </h1>

            <p className="reveal stagger-3 mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
              Hospedagem, segurança e estabilidade em um ambiente pensado para empresas que precisam do site funcionando — de verdade.
            </p>

            <p className="reveal stagger-3 mt-4 text-base text-white/70 leading-relaxed max-w-2xl">
              Na TAG08, você não contrata apenas hospedagem. Você garante que seu site esteja sempre disponível, seguro e preparado para gerar resultados.
            </p>

            <div className="reveal stagger-4 mt-10 flex flex-col sm:flex-row gap-4">
              <Magnetic>
                <a
                  href="#planos"
                  className="btn-magnetic inline-flex items-center justify-center px-10 py-4 bg-brand-lime text-brand-black rounded-full font-black text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,255,0,0.45)] transition-all"
                >
                  Ver planos
                </a>
              </Magnetic>
              <a
                href="#onboarding"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white rounded-full font-black text-sm uppercase tracking-widest hover:border-brand-lime hover:text-brand-lime transition-all"
              >
                Falar com especialista
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block reveal stagger-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                alt="Equipe avaliando infraestrutura digital"
                width={900}
                height={1100}
                priority
                className="w-full h-auto grayscale brightness-75 contrast-125 scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-brand-black/70 backdrop-blur-xl px-4 py-3 text-xs uppercase tracking-[0.3em] font-black text-white/70">
                  Ambiente TAG08
                  <span className="text-brand-lime">24/7</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-brand-lime/30 rounded-bl-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-brand-lime/30 rounded-tr-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingHero;

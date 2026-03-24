import Magnetic from './Magnetic';

const HostingFinalCTA = () => {
  return (
    <section id="cta-final" className="relative py-24 bg-brand-black bg-noise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 lg:p-14 grid lg:grid-cols-12 gap-10 items-center reveal">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic text-white">
              Precisa de ajuda para escolher?
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Se você não sabe qual plano faz mais sentido para o seu momento, podemos te orientar.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Magnetic>
              <a
                href="#onboarding"
                className="btn-magnetic inline-flex items-center justify-center px-10 py-4 bg-brand-lime text-brand-black rounded-full font-black text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,255,0,0.45)] transition-all"
              >
                Falar com especialista TAG08
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingFinalCTA;

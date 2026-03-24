const transparencyItems = [
  'cobrança mensal',
  'cancelamento a qualquer momento',
  'sem taxas ocultas',
  'possibilidade de upgrade de plano conforme o crescimento',
];

const HostingTransparency = () => {
  return (
    <section id="transparencia" className="relative py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em]">
            Transparência
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic text-white">
            Sem surpresas
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {transparencyItems.map((item) => (
            <div key={item} className="p-6 rounded-2xl border border-white/10 bg-white/5 text-white reveal">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingTransparency;

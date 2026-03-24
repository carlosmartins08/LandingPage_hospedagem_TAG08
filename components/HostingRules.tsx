const rules = [
  'Cada plano possui limites de recursos definidos (sites, espaço e contas)',
  'O uso deve respeitar a capacidade contratada',
  'Recursos adicionais podem ser contratados conforme necessidade',
  'O ambiente é otimizado para aplicações web (especialmente WordPress)',
  'Não é permitido uso para atividades que comprometam a estabilidade do servidor',
];

const HostingRules = () => {
  return (
    <section id="regras" className="relative py-24 bg-white text-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-brand-black/10 bg-brand-black/5 text-brand-black text-[10px] font-black uppercase tracking-[0.3em]">
            Regras e condições
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic">
            Regras de uso e funcionamento
          </h2>
          <p className="mt-4 text-lg text-brand-black/70 leading-relaxed">
            Texto claro e direto para garantir previsibilidade.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 reveal">
          {rules.map((rule) => (
            <div key={rule} className="p-5 rounded-2xl border border-brand-black/10 bg-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-black/80">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingRules;

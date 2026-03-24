import { Icons } from '../constants';

const differentialItems = [
  'gestão completa do WordPress',
  'atualizações de segurança',
  'otimização de performance',
  'suporte técnico contínuo',
];

const HostingDifferentials = () => {
  return (
    <section id="diferenciais" className="relative py-24 bg-brand-black bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start reveal">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em]">
              Diferencial
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic text-white">
              Mais do que hospedagem
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg text-slate-400 leading-relaxed">
              Você pode evoluir seu plano com:
            </p>
            <ul className="mt-6 space-y-4">
              {differentialItems.map((item) => (
                <li key={item} className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5">
                  <span className="mt-1 text-brand-lime">
                    <Icons.Check />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wide text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 rounded-2xl border border-brand-lime/20 bg-brand-lime/10 text-white">
              <p className="font-semibold">
                Transforme sua hospedagem em um ambiente gerenciado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingDifferentials;

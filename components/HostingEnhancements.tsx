import { Icons } from '../constants';

const enhancements = [
  'um print do painel',
  'um depoimento',
  'um exemplo de cliente',
  'tempo de uptime',
];

const verdict = [
  'posiciona valor',
  'não vira guerra de preço',
  'educa o cliente',
  'reduz suporte',
  'aumenta conversão',
];

const HostingEnhancements = () => {
  return (
    <section id="ajustes" className="relative py-24 bg-brand-black bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 reveal">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em]">
              Ajuste estratégico final
            </div>
            <h3 className="mt-6 text-2xl sm:text-3xl font-black tracking-tighter uppercase italic text-white">
              Você pode melhorar ainda mais essa página incluindo:
            </h3>
            <ul className="mt-6 space-y-4">
              {enhancements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1 text-brand-lime">
                    <Icons.Check />
                  </span>
                  <span className="font-medium uppercase tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-brand-lime/60 bg-brand-lime text-brand-black shadow-[0_0_45px_rgba(212,255,0,0.25)]">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-brand-black/20 bg-brand-black/10 text-brand-black text-[10px] font-black uppercase tracking-[0.3em]">
              Veredito
            </div>
            <h3 className="mt-6 text-2xl sm:text-3xl font-black tracking-tighter uppercase italic text-brand-black">
              Essa página:
            </h3>
            <ul className="mt-6 space-y-4">
              {verdict.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-black/90">
                  <span className="mt-1 text-brand-black">
                    <Icons.Check />
                  </span>
                  <span className="font-semibold uppercase tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingEnhancements;

import { Icons } from '../constants';

const positioningItems = [
  'controle de recursos por projeto',
  'ambiente otimizado para WordPress',
  'backups automáticos',
  'proteção contra erros comuns',
  'estrutura pensada para crescimento',
];

const HostingPositioning = () => {
  return (
    <section id="infraestrutura" className="relative py-24 bg-brand-black bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em]">
            Posicionamento
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic text-white">
            Por que a Infraestrutura TAG08 é diferente
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Nós não vendemos espaço em servidor. Criamos um ambiente estruturado para que seu site funcione com estabilidade, segurança e previsibilidade.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {positioningItems.map((item) => (
            <div
              key={item}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center">
                <Icons.Check />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPositioning;

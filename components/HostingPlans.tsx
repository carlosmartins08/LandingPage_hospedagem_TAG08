import { Icons } from '../constants';
import clsx from 'clsx';

const plans = [
  {
    name: 'START',
    label: 'Para sites institucionais simples',
    price: 'R$ 49 / mês',
    highlight: false,
    includes: [
      '1 site',
      '3 GB de espaço',
      'banda ilimitada',
      '2 contas de e-mail',
      'certificado SSL',
      'backup automático',
      'ambiente seguro e otimizado',
    ],
    idealFor: ['empresas iniciando no digital', 'sites institucionais', 'páginas de apresentação'],
  },
  {
    name: 'PROFISSIONAL',
    label: 'Para empresas que utilizam o site como ferramenta',
    price: 'R$ 89 / mês',
    highlight: true,
    includes: [
      'até 3 sites',
      '10 GB de espaço',
      '10 contas de e-mail',
      'backup diário',
      'maior autonomia de gestão',
      'clonagem de site para testes',
      'melhor capacidade de processamento',
    ],
    idealFor: ['empresas em crescimento', 'landing pages', 'blogs e múltiplos projetos'],
  },
  {
    name: 'BUSINESS',
    label: 'Para operações mais robustas',
    price: 'R$ 149 / mês',
    highlight: false,
    includes: [
      'até 10 sites',
      '25 GB de espaço',
      '50 contas de e-mail',
      'acesso avançado',
      'suporte a maior volume de acessos',
      'recursos para performance e estabilidade',
    ],
    idealFor: ['e-commerces', 'empresas com múltiplos projetos', 'operações digitais mais intensas'],
  },
  {
    name: 'AGÊNCIA',
    label: 'Para quem gerencia múltiplos clientes',
    price: 'R$ 249 / mês',
    highlight: false,
    includes: [
      'até 20 sites',
      '50 GB de espaço',
      '100 contas de e-mail',
      'acesso completo ao ambiente',
      'recursos avançados (SSH, Redis, etc.)',
      'estrutura para revenda',
    ],
    idealFor: ['designers', 'desenvolvedores', 'agências'],
  },
];

const HostingPlans = () => {
  return (
    <section id="planos" className="relative py-24 bg-brand-black bg-noise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em]">
            Planos
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic text-white">
            Escolha o plano ideal para o seu momento
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'relative flex flex-col h-full rounded-3xl border p-6 backdrop-blur-xl',
                'reveal',
                plan.highlight
                  ? 'border-brand-lime/60 bg-brand-lime/10 shadow-[0_0_40px_rgba(212,255,0,0.15)]'
                  : 'border-white/10 bg-white/5'
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 bg-brand-lime text-brand-black text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full">
                  Mais escolhido
                </span>
              )}
              <div className="flex items-center gap-3">
                <span
                  className={clsx(
                    'w-3 h-3 rounded-full',
                    plan.highlight ? 'bg-brand-lime' : 'bg-white/40'
                  )}
                ></span>
                <h3 className="text-xl font-black uppercase tracking-widest text-white">{plan.name}</h3>
              </div>
              <p className="mt-3 text-sm text-white/60 font-medium">{plan.label}</p>
              <div className="mt-6 text-2xl font-black text-brand-lime">{plan.price}</div>

              <div className="mt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Inclui</p>
                <ul className="mt-4 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-1 text-brand-lime">
                        <Icons.Check />
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Indicado para</p>
                <ul className="mt-4 space-y-3">
                  {plan.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-1 text-brand-lime">
                        <Icons.Check />
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;

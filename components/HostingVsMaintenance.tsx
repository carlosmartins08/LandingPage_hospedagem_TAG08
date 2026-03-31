import { Icons } from '../constants';
import OnboardingLink from './OnboardingLink';

const hostingItems = [
  'manter o site online 24h por dia',
  'garantir estabilidade e velocidade de acesso',
  'armazenar arquivos, imagens e banco de dados',
  'fornecer ambiente seguro para funcionamento',
];

const maintenanceItems = [
  'atualização de plugins e sistema',
  'correção de erros',
  'ajustes técnicos',
  'prevenção de falhas e vulnerabilidades',
  'monitoramento de funcionamento',
];

const importanceExamples = [
  'site fora do ar por plugin desatualizado',
  'erro em formulário de contato',
  'lentidão causada por conflito de sistema',
  'falhas de segurança',
];

const verdictItems = [
  'reduz suporte desnecessário',
  'educa o cliente',
  'prepara upsell de manutenção',
  'aumenta percepção de profissionalismo',
  'protege sua operação',
];

const HostingVsMaintenance = () => {
  return (
    <section id="hospedagem-vs-manutencao" className="relative py-24 bg-brand-black bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em]">
            Hospedagem x Manutenção
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic text-white">
            O que é Hospedagem e o que é Manutenção?
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Muitas vezes esses dois conceitos são confundidos — e entender a diferença é fundamental para garantir o funcionamento do seu site com segurança e previsibilidade.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 reveal">
          <div className="p-8 rounded-3xl border border-brand-lime/30 bg-brand-lime/10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">Hospedagem</span>
            <p className="mt-4 text-base text-white/80 leading-relaxed">
              A hospedagem é a infraestrutura onde o seu site fica armazenado e disponível na internet.
            </p>
            <ul className="mt-6 space-y-3">
              {hostingItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1 text-brand-lime">
                    <Icons.Check />
                  </span>
                  <span className="font-medium uppercase tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/70 font-semibold uppercase tracking-wide">
              Em resumo: a hospedagem garante que o seu site exista e possa ser acessado.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-brand-accent/40 bg-brand-accent/10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">Manutenção</span>
            <p className="mt-4 text-base text-white/80 leading-relaxed">
              A manutenção é o cuidado contínuo com o funcionamento do site.
            </p>
            <ul className="mt-6 space-y-3">
              {maintenanceItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1 text-brand-accent">
                    <Icons.Check />
                  </span>
                  <span className="font-medium uppercase tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/70 font-semibold uppercase tracking-wide">
              Em resumo: a manutenção garante que o seu site continue funcionando bem ao longo do tempo.
            </p>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 reveal">
            <div className="flex items-center gap-3 text-brand-lime uppercase tracking-[0.3em] text-[10px] font-black">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              Por que essa diferença é importante?
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Um site pode estar hospedado corretamente e, ainda assim, apresentar problemas se não houver manutenção.
            </p>
            <ul className="mt-4 space-y-3">
              {importanceExamples.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-1 text-brand-lime">
                    <Icons.Warning />
                  </span>
                  <span className="font-medium uppercase tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 reveal">
            <div className="flex items-center gap-3 text-brand-lime uppercase tracking-[0.3em] text-[10px] font-black">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              Como a TAG08 atua
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Na TAG08, oferecemos a infraestrutura de hospedagem estruturada, com segurança e estabilidade.
            </p>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              E, para empresas que desejam mais tranquilidade, é possível evoluir para um modelo com gestão e manutenção contínua, onde cuidamos também do funcionamento do site no dia a dia.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm font-semibold uppercase tracking-wide text-white/70">
              <span>Hospedagem mantém o site online.</span>
              <span className="text-brand-lime">Manutenção garante que ele funcione bem.</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 reveal">
          <div className="text-sm text-white/70 uppercase tracking-[0.3em] font-black">
            Quer que a gente cuide do seu site por completo?
          </div>
          <OnboardingLink
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] hover:border-brand-lime hover:text-brand-lime transition-all"
          >
            Conheça o modelo de manutenção da TAG08
          </OnboardingLink>
        </div>

        <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/5 reveal">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
            Veredito
          </div>
          <ul className="mt-4 grid md:grid-cols-2 gap-3">
            {verdictItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                <span className="mt-1 text-brand-lime">
                  <Icons.Check />
                </span>
                <span className="font-medium uppercase tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HostingVsMaintenance;

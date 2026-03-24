import { ShieldCheck, Lock, Database, KeyRound, Code2 } from 'lucide-react';

const securityItems = [
  { title: 'certificado SSL automático', icon: ShieldCheck },
  { title: 'backups regulares', icon: Database },
  { title: 'isolamento de ambiente', icon: Lock },
  { title: 'controle de acesso', icon: KeyRound },
  { title: 'suporte a versões modernas de PHP', icon: Code2 },
];

const HostingSecurity = () => {
  return (
    <section id="seguranca" className="relative py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em]">
            Segurança
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic text-white">
            Seu site protegido desde o primeiro dia
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Todos os planos incluem:
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl reveal">
                <div className="w-12 h-12 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/80">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HostingSecurity;

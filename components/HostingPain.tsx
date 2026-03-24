import { Icons } from '../constants';

const painPoints = [
  'site fora do ar',
  'lentidão na navegação',
  'erro em formulário de contato',
  'problemas com e-mail',
  'ataques ou invasões',
];

const HostingPain = () => {
  return (
    <section id="dor" className="relative py-24 bg-white text-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start reveal">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-brand-black/10 bg-brand-black/5 text-brand-black text-[10px] font-black uppercase tracking-[0.3em]">
              Quebra de padrão
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic">
              Se o seu site parar, você perde clientes.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg text-brand-black/70 leading-relaxed font-medium">
              A maioria das empresas só percebe a importância da hospedagem quando algo dá errado:
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {painPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-brand-black/10 bg-white shadow-sm"
                >
                  <span className="w-10 h-10 rounded-xl bg-brand-black text-brand-lime flex items-center justify-center">
                    <Icons.Warning />
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wide text-brand-black">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 rounded-2xl border border-brand-black/10 bg-brand-lime/20">
              <p className="text-base sm:text-lg font-semibold text-brand-black">
                A verdade é simples: hospedagem ruim não aparece quando está funcionando, mas custa caro quando falha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingPain;

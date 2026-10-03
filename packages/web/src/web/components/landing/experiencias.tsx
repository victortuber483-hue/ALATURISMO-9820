const ITENS = [
  {
    n: "01",
    t: "Excursões em grupo",
    d: "Viagens de ônibus com saída de Crato, Juazeiro do Norte e cidades vizinhas, programação organizada e companhia de quem ama viajar.",
    img: "/images/real/lencois-grupo-sm.jpg",
  },
  {
    n: "02",
    t: "Natureza & aventura",
    d: "Cachoeiras, trilhas, mirantes e teleféricos — roteiros para quem quer sentir o destino de perto.",
    img: "/images/real/cachoeira-banho-sm.jpg",
  },
  {
    n: "03",
    t: "Cultura & fé",
    d: "Cidades históricas, museus e grandes destinos religiosos, como Aparecida do Norte e Canção Nova.",
    img: "/images/real/museu-sm.jpg",
  },
  {
    n: "04",
    t: "Festivais & Carnaval",
    d: "Carnaval em Natal, festivais na Serra da Ibiapaba e roteiros especiais nos feriados prolongados.",
    img: "/images/real/por-do-sol-sm.jpg",
  },
  {
    n: "05",
    t: "Pacotes aéreos",
    d: "Para destinos mais distantes, pacotes com aéreo, hospedagem e traslados organizados pela equipe.",
    img: "/images/real/sp-skyline-sm.jpg",
  },
  {
    n: "06",
    t: "Roteiros internacionais",
    d: "Viagens para fora do país com orientação sobre documentos e preparação — Portugal em 2027.",
    img: "/images/portugal.jpg",
  },
];

export function Experiencias() {
  return (
    <section id="experiencias" className="relative bg-sand py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="label reveal flex items-center gap-3 text-orange">
              <span className="h-px w-10 bg-orange" /> Experiências
            </p>
            <h2 className="font-display reveal mt-6 text-[2.6rem] font-light leading-[1.02] text-ink md:text-6xl" style={{ ["--d" as string]: "80ms" }}>
              Cada viagem, <em className="italic text-navy">um jeito</em> de viver o destino.
            </h2>
          </div>
          <p className="reveal text-[15px] leading-relaxed text-muted-ala md:col-span-4 md:col-start-9" style={{ ["--d" as string]: "160ms" }}>
            Do bate-volta ao roteiro internacional, a ALA organiza a viagem que combina com o seu momento.
          </p>
        </div>

        <ul className="mt-14 border-t border-ink/15 md:mt-20">
          {ITENS.map((it, i) => (
            <li
              key={it.n}
              className="reveal group relative border-b border-ink/15"
              style={{ ["--d" as string]: `${i * 60}ms` }}
            >
              <div className="grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 py-7 md:grid-cols-12 md:items-center md:gap-8 md:py-9">
                <span className="label pt-2 text-orange md:col-span-1 md:pt-0">{it.n}</span>
                <h3 className="font-display text-[1.75rem] font-light leading-tight text-ink transition-transform duration-500 md:col-span-4 md:text-[2.4rem] md:group-hover:translate-x-2">
                  {it.t}
                </h3>
                <p className="col-start-2 text-[15px] leading-relaxed text-muted-ala md:col-span-5 md:col-start-6">{it.d}</p>
                <div className="hidden justify-end md:col-span-2 md:flex">
                  <div className="h-20 w-28 overflow-hidden opacity-60 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0">
                    <img src={it.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

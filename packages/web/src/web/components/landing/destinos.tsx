import { ArrowUpRight, ArrowRight } from "./icons";
import { DESTINOS, SITE, wa, type Destino } from "../../lib/site";

function Card({ d, i }: { d: Destino; i: number }) {
  return (
    <a
      href={wa(`Olá, ALA Turismo! Tenho interesse em viajar para ${d.nome} (${d.uf}). Pode me passar as próximas datas?`)}
      target="_blank"
      rel="noopener"
      className="reveal group relative block aspect-[4/5] w-[78vw] shrink-0 snap-start overflow-hidden bg-ink sm:w-[46vw] md:w-auto"
      style={{ ["--d" as string]: `${(i % 3) * 90}ms` }}
    >
      <img
        src={d.img}
        alt={`${d.nome}, ${d.uf}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent transition-opacity duration-700 group-hover:from-ink" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 text-white md:p-6">
        <span className="label text-white/80">{String(i + 1).padStart(2, "0")}</span>
        <span className="label border border-white/30 px-2.5 py-1 text-white/90 backdrop-blur-sm">{d.uf}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
        <h3 className="font-display text-[1.9rem] font-light leading-[1.05] md:text-[2.1rem]">{d.nome}</h3>
        <div className="grid grid-rows-[1fr] transition-all duration-700 md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
          <p className="overflow-hidden pt-3 text-sm leading-relaxed text-white/75">{d.desc}</p>
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-amber">
          Consultar datas
          <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

export function Destinos() {
  const brasil = DESTINOS.filter((d) => d.tag === "Brasil");
  const portugal = DESTINOS.find((d) => d.tag === "Internacional")!;

  return (
    <section id="destinos" className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="label reveal flex items-center gap-3 text-orange">
              <span className="h-px w-10 bg-orange" /> Destinos & experiências
            </p>
            <h2 className="font-display reveal mt-6 text-[2.6rem] font-light leading-[1.02] text-ink md:text-7xl" style={{ ["--d" as string]: "80ms" }}>
              Lugares que a ALA já leva <em className="italic text-navy">você</em> para conhecer.
            </h2>
          </div>
          <div className="reveal md:col-span-4 md:col-start-9" style={{ ["--d" as string]: "160ms" }}>
            <p className="text-[15px] leading-relaxed text-muted-ala">
              Roteiros publicados pela ALA Turismo — do litoral nordestino às serras, das cidades históricas ao exterior.
              Toque em um destino e fale direto com a equipe.
            </p>
            <a
              href={SITE.catalog}
              target="_blank"
              rel="noopener"
              className="btn-arrow mt-6 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-sm font-semibold text-ink transition-colors hover:border-orange hover:text-orange"
            >
              Ver catálogo no WhatsApp <ArrowRight />
            </a>
          </div>
        </div>

        {/* grid */}
        <div className="-mx-6 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:mx-0 md:mt-20 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {brasil.map((d, i) => (
            <div key={d.slug} className={`shrink-0 md:shrink ${i % 3 === 1 ? "lg:translate-y-16" : ""}`}>
              <Card d={d} i={i} />
            </div>
          ))}
        </div>
        <p className="label mt-3 text-muted-ala/70 md:hidden">Deslize para ver mais →</p>

        {/* destaque internacional */}
        <a
          href={wa("Olá, ALA Turismo! Quero receber informações sobre o roteiro para Portugal 2027.")}
          target="_blank"
          rel="noopener"
          aria-label="Portugal 2027 — quero receber informações"
          className="reveal group relative mt-16 block overflow-hidden bg-ink text-white lg:mt-32"
        >
          <div className="grid md:grid-cols-12">
            <div className="relative aspect-[16/10] overflow-hidden md:col-span-7 md:aspect-auto md:min-h-[460px]">
              <img
                src={portugal.img}
                alt="Lisboa, Portugal — bonde amarelo em rua histórica"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/60" />
            </div>
            <div className="flex flex-col justify-between gap-10 p-8 md:col-span-5 md:p-12">
              <div>
                <span className="label inline-flex items-center gap-2 text-amber">
                  <span className="size-1.5 rounded-full bg-amber" /> Roteiro inédito · Internacional
                </span>
                <h3 className="font-display mt-6 text-5xl font-light leading-none md:text-7xl">
                  Portugal <span className="italic text-white/50">2027</span>
                </h3>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">{portugal.desc}</p>
              </div>
              <span className="btn-arrow inline-flex items-center gap-3 self-start bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors group-hover:bg-orange group-hover:text-white">
                Quero receber informações <ArrowRight />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

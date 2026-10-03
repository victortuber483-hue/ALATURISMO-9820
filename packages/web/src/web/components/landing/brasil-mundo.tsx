import { ArrowRight } from "./icons";
import { wa } from "../../lib/site";

export function BrasilMundo() {
  return (
    <section id="brasil-mundo" className="grain relative overflow-hidden bg-ink py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="label reveal flex items-center gap-3 text-amber">
            <span className="h-px w-10 bg-amber" /> Nacional & Internacional
          </p>
          <h2 className="font-display reveal mt-6 text-[2.6rem] font-light leading-[1.02] md:text-7xl" style={{ ["--d" as string]: "80ms" }}>
            Seja no Brasil ou no exterior,
            <br />
            <em className="italic text-amber">a ALA está com você.</em>
          </h2>
        </div>
          <p className="reveal text-[15px] leading-relaxed text-white/65 md:col-span-4 md:col-start-9" style={{ ["--d" as string]: "160ms" }}>
            A mesma organização e o mesmo cuidado em cada roteiro — de uma excursão pelo Nordeste a uma viagem para
            o outro lado do oceano.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
          {/* Brasil */}
          <article className="reveal group md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <img
                src="/images/real/igreja-grupo.jpg"
                alt="Grupo de viajantes da ALA Turismo em frente a uma igreja histórica"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <span className="font-display absolute -bottom-3 left-4 select-none text-[22vw] font-light leading-none text-white/10 md:-bottom-6 md:text-[11rem]">
                Brasil
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                <span className="label text-white/60">01 — Viagens nacionais</span>
                <h3 className="font-display mt-3 text-4xl font-light md:text-5xl">Brasil</h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75">
                  Excursões rodoviárias e pacotes aéreos para o litoral, as serras, as cidades históricas e os grandes
                  destinos religiosos do país — com embarque no Cariri.
                </p>
              </div>
            </div>
            <a
              href={wa("Olá, ALA Turismo! Quero conhecer as próximas viagens nacionais.")}
              target="_blank"
              rel="noopener"
              className="btn-arrow mt-5 inline-flex items-center gap-3 text-sm font-semibold text-white/85 transition-colors hover:text-amber"
            >
              Ver próximas saídas nacionais <ArrowRight />
            </a>
          </article>

          {/* Internacional */}
          <article className="reveal group md:col-span-5 md:mt-40" style={{ ["--d" as string]: "140ms" }}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/aviao.jpg"
                alt="Vista da janela do avião sobre as nuvens ao amanhecer"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                <span className="label text-white/60">02 — Viagens internacionais</span>
                <h3 className="font-display mt-3 text-4xl font-light md:text-5xl">Internacional</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                  Roteiros para o exterior com orientação completa — da documentação ao embarque. Próximo destino:
                  <strong className="font-semibold text-white"> Portugal 2027.</strong>
                </p>
              </div>
            </div>
            <a
              href={wa("Olá, ALA Turismo! Quero informações sobre viagens internacionais.")}
              target="_blank"
              rel="noopener"
              className="btn-arrow mt-5 inline-flex items-center gap-3 text-sm font-semibold text-white/85 transition-colors hover:text-amber"
            >
              Consultar viagens internacionais <ArrowRight />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

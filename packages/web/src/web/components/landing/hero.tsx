import { ArrowRight, Plane } from "./icons";
import { SITE, wa } from "../../lib/site";

export function Hero() {
  return (
    <section id="topo" className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      {/* foto */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Litoral do Nordeste brasileiro com mar azul-turquesa, coqueiros e jangada"
          className="kenburns h-full w-full object-cover object-[65%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-ink/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/50" />
      </div>

      {/* rota de voo */}
      <svg
        className="pointer-events-none absolute inset-0 -z-0 hidden h-full w-full md:block"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          id="rota"
          className="route-draw"
          d="M-40 760 C 300 700, 520 380, 860 330 S 1300 170, 1500 90"
          fill="none"
          stroke="rgba(255,255,255,.45)"
          strokeWidth="1.2"
          strokeDasharray="2 9"
        />
      </svg>
      <div className="pointer-events-none absolute right-[14%] top-[30%] hidden rotate-[58deg] text-white/80 md:block rise" style={{ ["--d" as string]: "3800ms" }}>
        <Plane className="size-5" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20">
        {/* foto real em destaque */}
        <figure
          className="rise absolute bottom-[190px] right-10 hidden w-[230px] xl:block"
          style={{ ["--d" as string]: "1100ms" }}
        >
          <div className="overflow-hidden border border-white/20 p-1.5 backdrop-blur-sm">
            <img src="/images/real/igreja-grupo-sm.jpg" alt="Grupo de viajantes da ALA Turismo" className="aspect-[4/5] w-full object-cover" />
          </div>
          <figcaption className="label mt-3 flex items-center gap-2 text-white/70">
            <span className="size-1.5 rounded-full bg-orange" /> Nossos viajantes
          </figcaption>
        </figure>

        <div className="max-w-[880px]">
          <p className="label rise flex items-center gap-3 text-white/70" style={{ ["--d" as string]: "200ms" }}>
            <span className="h-px w-10 bg-orange" />
            Agência de turismo · Crato — CE
          </p>

          <h1 className="rise mt-7" style={{ ["--d" as string]: "350ms" }}>
            <span className="block font-sans text-[13px] font-bold tracking-[0.5em] text-white/90 md:text-sm">ALA TURISMO</span>
            <span className="font-display mt-4 block text-[2.6rem] font-light leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Uma experiência completa para transformar seus planos de viagem em{" "}
              <em className="font-normal italic text-amber">momentos inesquecíveis.</em>
            </span>
          </h1>

          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4" style={{ ["--d" as string]: "650ms" }}>
            <a
              href={wa("Olá, ALA Turismo! Quero planejar minha viagem.")}
              target="_blank"
              rel="noopener"
              className="btn-arrow inline-flex items-center justify-center gap-3 bg-orange px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_20px_60px_-20px_rgba(242,106,33,.7)] transition-colors duration-300 hover:bg-[#ff7a2e]"
            >
              Planejar minha viagem <ArrowRight />
            </a>
            <a
              href="#destinos"
              className="inline-flex items-center justify-center gap-3 border border-white/30 px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
            >
              Conhecer destinos
            </a>
          </div>
        </div>

        {/* rodapé do hero */}
        <div className="rise mt-16 grid grid-cols-1 gap-6 border-t border-white/15 pt-6 text-white/65 sm:grid-cols-3 md:mt-24" style={{ ["--d" as string]: "900ms" }}>
          <p className="font-display text-lg italic text-white/85 sm:col-span-2 md:text-xl">“{SITE.slogan}”</p>
          <div className="flex items-center justify-between gap-6 sm:justify-end">
            <span className="label">7°14′S · 39°24′W</span>
            <a href="#destinos" className="group flex items-center gap-3" aria-label="Rolar para destinos">
              <span className="label">Explorar</span>
              <span className="relative h-10 w-px overflow-hidden bg-white/20">
                <span className="scrollcue absolute inset-x-0 top-0 h-1/2 bg-white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

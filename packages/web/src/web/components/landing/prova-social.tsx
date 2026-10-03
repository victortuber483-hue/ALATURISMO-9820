import { ArrowUpRight, Instagram } from "./icons";
import { SITE } from "../../lib/site";

export function ProvaSocial() {
  return (
    <section className="grain relative overflow-hidden bg-navy text-white">
      <div className="mx-auto grid max-w-[1320px] md:grid-cols-12">
        <div className="relative aspect-[4/5] md:col-span-6 md:aspect-auto md:min-h-[680px]">
          <img
            src="/images/real/lencois-grupo.jpg"
            alt="Grupo da ALA Turismo nos Lençóis Maranhenses"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent md:bg-gradient-to-r md:from-transparent md:to-navy/40" />
        </div>

        <div className="flex flex-col justify-center px-6 py-20 md:col-span-6 md:px-16 md:py-28">
          <p className="label reveal flex items-center gap-3 text-amber">
            <span className="h-px w-10 bg-amber" /> Nossa viagem, sua experiência
          </p>
          <blockquote className="reveal mt-8" style={{ ["--d" as string]: "80ms" }}>
            <span className="font-display block text-7xl leading-none text-orange/80">“</span>
            <p className="font-display -mt-4 text-[1.9rem] font-light leading-[1.2] md:text-[2.6rem]">
              Viajar com vocês e fazer parte de momentos tão especiais é o que dá sentido ao nosso trabalho.
            </p>
            <footer className="label mt-8 text-white/55">— Equipe ALA Turismo</footer>
          </blockquote>

          <div className="reveal mt-12 grid grid-cols-3 gap-2 md:gap-3" style={{ ["--d" as string]: "160ms" }}>
            {["igreja-grupo", "cachoeira-grupo", "icaraizinho-barco"].map((s) => (
              <div key={s} className="aspect-square overflow-hidden">
                <img src={`/images/real/${s}-sm.jpg`} alt="Grupo de viajantes da ALA Turismo" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            ))}
          </div>

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener"
            className="reveal group mt-10 inline-flex items-center gap-4 self-start border-b border-white/30 pb-2 text-sm font-semibold transition-colors hover:border-amber hover:text-amber"
            style={{ ["--d" as string]: "220ms" }}
          >
            <Instagram className="size-5" />
            Acompanhe as viagens em {SITE.instagramHandle}
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

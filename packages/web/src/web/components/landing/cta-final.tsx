import { ArrowRight, WhatsApp } from "./icons";
import { SITE, wa } from "../../lib/site";

export function CtaFinal() {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-white">
      <img
        src="/images/final.jpg"
        alt="Jangada na praia ao entardecer"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90" />

      <div className="mx-auto flex min-h-[88svh] max-w-[1320px] flex-col items-center justify-center px-6 py-28 text-center md:px-10">
        <p className="label reveal text-white/70">Vamos planejar juntos?</p>
        <h2 className="font-display reveal mt-8 max-w-5xl text-[2.9rem] font-light leading-[1] sm:text-6xl md:text-8xl" style={{ ["--d" as string]: "80ms" }}>
          Seu próximo destino <em className="italic text-amber">pode começar aqui.</em>
        </h2>
        <p className="reveal mt-8 max-w-xl text-[16px] leading-relaxed text-white/75" style={{ ["--d" as string]: "160ms" }}>
          Conte para onde você sonha ir. A equipe da ALA Turismo responde pelo WhatsApp com datas, roteiro e tudo o
          que está incluso.
        </p>
        <div className="reveal mt-12 flex flex-col items-center gap-4 sm:flex-row" style={{ ["--d" as string]: "240ms" }}>
          <a
            href={wa()}
            target="_blank"
            rel="noopener"
            className="btn-arrow inline-flex items-center gap-3 bg-orange px-9 py-5 text-[15px] font-semibold text-white shadow-[0_24px_70px_-20px_rgba(242,106,33,.8)] transition-colors duration-300 hover:bg-[#ff7a2e]"
          >
            <WhatsApp className="size-5" /> Falar com a ALA Turismo <ArrowRight />
          </a>
          <a
            href={SITE.catalog}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 border border-white/30 px-8 py-5 text-[15px] font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
          >
            Ver catálogo de viagens
          </a>
        </div>
        <p className="label reveal mt-10 text-white/45" style={{ ["--d" as string]: "300ms" }}>
          {SITE.whatsappDisplay} · {SITE.whatsapp2Display}
        </p>
      </div>
    </section>
  );
}

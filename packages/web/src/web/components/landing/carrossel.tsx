import { FOTOS_REAIS, type Foto } from "../../lib/site";

function Row({ fotos, dir, dur }: { fotos: Foto[]; dir: "left" | "right"; dur: number }) {
  // duplicado para loop contínuo sem emenda
  const list = [...fotos, ...fotos];
  return (
    <div className="marquee marquee-mask overflow-hidden">
      <div className={`marquee-track ${dir === "left" ? "marquee-left" : "marquee-right"}`} style={{ ["--dur" as string]: `${dur}s` }}>
        {list.map((f, i) => (
          <figure
            key={`${f.src}-${i}`}
            className="group relative mr-3 aspect-[4/5] w-[56vw] shrink-0 overflow-hidden bg-navy sm:w-[34vw] md:mr-5 md:w-[22vw] lg:w-[300px]"
            aria-hidden={i >= fotos.length}
          >
            <img
              src={`${f.src}-sm.jpg`}
              alt={i < fotos.length ? f.alt : ""}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-full w-full select-none object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/10" />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Carrossel() {
  const a = FOTOS_REAIS.filter((_, i) => i % 2 === 0);
  const b = FOTOS_REAIS.filter((_, i) => i % 2 === 1);
  // garante faixas longas o bastante para telas largas
  const top = a;
  const bottom = b;

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32" aria-label="Destinos que já fizeram parte da nossa jornada">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display reveal max-w-3xl text-[2.4rem] font-light leading-[1.04] md:text-6xl">
            Destinos que já fizeram parte da <em className="italic text-amber">nossa jornada</em>
          </h2>
          <p className="reveal max-w-sm text-[15px] leading-relaxed text-white/65" style={{ ["--d" as string]: "120ms" }}>
            Experiências nacionais e internacionais que transformam viagens em memórias.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-3 md:mt-20 md:gap-5">
        <Row fotos={top} dir="left" dur={95} />
        <Row fotos={bottom} dir="right" dur={105} />
      </div>
    </section>
  );
}

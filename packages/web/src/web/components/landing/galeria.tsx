import { useEffect, useState } from "react";
import { FOTOS_REAIS } from "../../lib/site";

const pick = (s: string) => FOTOS_REAIS.find((f) => f.src.endsWith(s))!;
const LAYOUT = [
  { f: pick("lencois-grupo"), cls: "col-span-2 row-span-2 md:col-span-8" },
  { f: pick("icaraizinho-barco"), cls: "row-span-2 md:col-span-4" },
  { f: pick("cachoeira"), cls: "row-span-2 md:col-span-4" },
  { f: pick("cachoeira-banho"), cls: "row-span-2 md:col-span-4" },
  { f: pick("lencois-dunas"), cls: "md:col-span-4" },
  { f: pick("cascata-grupo"), cls: "md:col-span-4" },
  { f: pick("por-do-sol"), cls: "md:col-span-3" },
  { f: pick("neve"), cls: "md:col-span-3" },
  { f: pick("serra-grupo"), cls: "col-span-2 row-span-2 md:col-span-3 md:row-span-1" },
  { f: pick("teleferico-1"), cls: "col-span-2 md:col-span-3" },
];

export function Galeria() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % LAYOUT.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + LAYOUT.length) % LAYOUT.length));
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="galeria" className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label reveal flex items-center gap-3 text-orange">
              <span className="h-px w-10 bg-orange" /> Galeria
            </p>
            <h2 className="font-display reveal mt-6 max-w-2xl text-[2.6rem] font-light leading-[1.02] text-ink md:text-6xl" style={{ ["--d" as string]: "80ms" }}>
              Momentos reais, <em className="italic text-navy">de quem viajou.</em>
            </h2>
          </div>
          <p className="label reveal text-muted-ala" style={{ ["--d" as string]: "160ms" }}>
            Fotos dos grupos ALA Turismo
          </p>
        </div>

        <div className="mt-14 grid grid-flow-dense auto-rows-[38vw] grid-cols-2 gap-3 sm:auto-rows-[28vw] md:mt-20 md:auto-rows-[200px] md:grid-cols-12 md:gap-5 lg:auto-rows-[240px]">
          {LAYOUT.map(({ f, cls }, i) => (
            <button
              key={f.src}
              type="button"
              onClick={() => setOpen(i)}
              className={`reveal group relative overflow-hidden bg-sand ${cls}`}
              style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}
              aria-label={`Ampliar foto: ${f.alt}`}
            >
              <img
                src={`${f.src}.jpg`}
                alt={f.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="label absolute bottom-4 left-4 translate-y-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Ampliar +
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <dialog
          open
          aria-modal="true"
          aria-label={LAYOUT[open].f.alt}
          className="fixed inset-0 z-[80] m-0 flex h-full max-h-none w-full max-w-none items-center justify-center bg-ink/95 p-4 backdrop-blur-md md:p-12"
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setOpen(null)}
          />
          <img
            src={`${LAYOUT[open].f.src}.jpg`}
            alt={LAYOUT[open].f.alt}
            className="rise pointer-events-none relative max-h-full max-w-full object-contain"
          />
          <button type="button" className="label absolute right-5 top-5 text-white/80 hover:text-white" onClick={() => setOpen(null)}>
            Fechar ✕
          </button>
          <div className="label absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50">
            {String(open + 1).padStart(2, "0")} / {String(LAYOUT.length).padStart(2, "0")}
          </div>
        </dialog>
      )}
    </section>
  );
}

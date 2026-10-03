import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { WhatsApp } from "./icons";
import { wa } from "../../lib/site";

const LINKS = [
  { href: "#destinos", label: "Destinos" },
  { href: "#brasil-mundo", label: "Brasil & Mundo" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-ink/85 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6 md:h-[84px] md:px-10">
        <a href="#topo" aria-label="ALA Turismo — início" className="shrink-0">
          <Logo tone="light" className="h-12 w-auto md:h-14" />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[13px] font-medium tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-orange transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={wa()}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2.5 border border-white/25 px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:border-orange hover:bg-orange sm:inline-flex"
          >
            <WhatsApp className="size-4" />
            Fale conosco
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative grid size-11 place-items-center lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span className={`absolute h-px w-6 bg-white transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute h-px w-6 bg-white transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`} />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-ink transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col px-6 pb-10 pt-8" aria-label="Menu móvel">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-white/10 py-5 font-display text-3xl text-white"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
              <span className="label text-white/30">0{i + 1}</span>
            </a>
          ))}
          <a
            href={wa()}
            target="_blank"
            rel="noopener"
            className="mt-auto inline-flex items-center justify-center gap-3 bg-orange px-6 py-4 text-sm font-semibold text-white"
          >
            <WhatsApp className="size-5" /> Planejar minha viagem
          </a>
        </nav>
      </div>
    </header>
  );
}

import { Logo } from "./logo";
import { Instagram, WhatsApp } from "./icons";
import { SITE, wa } from "../../lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-[1320px] px-6 pb-10 pt-20 md:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="light" className="h-20 w-auto" />
            <p className="font-display mt-6 max-w-xs text-xl italic leading-snug text-white/85">“{SITE.slogan}”</p>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <h3 className="label text-white/40">Navegue</h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                ["#destinos", "Destinos"],
                ["#brasil-mundo", "Brasil & Internacional"],
                ["#experiencias", "Experiências"],
                ["#galeria", "Galeria"],
                ["#sobre", "Sobre a ALA"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="transition-colors hover:text-amber">
                    {l}
                  </a>
                </li>
              ))}
              <li>
                <a href={SITE.catalog} target="_blank" rel="noopener" className="transition-colors hover:text-amber">
                  Catálogo no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="label text-white/40">Contato oficial</h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li>
                <a href={wa()} target="_blank" rel="noopener" className="group flex items-center gap-3 transition-colors hover:text-white">
                  <WhatsApp className="size-5 text-[#25D366]" />
                  <span>
                    {SITE.whatsappDisplay} <span className="text-white/40">· Prof. Gilson</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsApp className="size-5 text-white/40" />
                <span>
                  {SITE.whatsapp2Display} <span className="text-white/40">· Profª Veris</span>
                </span>
              </li>
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener" className="flex items-center gap-3 transition-colors hover:text-white">
                  <Instagram className="size-5" /> {SITE.instagramHandle}
                </a>
              </li>
              <li className="pt-2 text-[14px] leading-relaxed text-white/50">
                {SITE.address}
                <br />
                {SITE.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ALA Turismo · Agência de turismo em Crato — CE</p>
          <p>Viagens nacionais e internacionais</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsFloat() {
  return (
    <a
      href={wa()}
      target="_blank"
      rel="noopener"
      aria-label="Falar com a ALA Turismo no WhatsApp"
      className="group fixed bottom-20 right-5 z-[60] flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-[0_18px_50px_-12px_rgba(37,211,102,.6)] transition-all duration-500 hover:pr-6 md:bottom-24 md:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.6s]" />
      <WhatsApp className="size-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[180px] md:inline">
        Planejar viagem
      </span>
    </a>
  );
}

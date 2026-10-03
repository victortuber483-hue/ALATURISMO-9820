import { SITE } from "../../lib/site";

export function Sobre() {
  return (
    <section id="sobre" className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="relative md:col-span-5">
          <div className="reveal relative aspect-[4/5] overflow-hidden">
            <img src="/images/real/sp-skyline.jpg" alt="Prof. Gilson, da ALA Turismo, em viagem a São Paulo" loading="lazy" className="h-full w-full object-cover" />
            <span className="label absolute left-4 top-4 bg-ink/70 px-3 py-1.5 text-white backdrop-blur-sm">Prof. Gilson</span>
          </div>
          <div className="reveal absolute -bottom-8 -right-4 w-[46%] border-[6px] border-paper md:-right-10" style={{ ["--d" as string]: "160ms" }}>
            <img src="/images/real/mirante-sm.jpg" alt="Viajantes da ALA Turismo em um mirante" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-10">
          <p className="label reveal flex items-center gap-3 text-orange">
            <span className="h-px w-10 bg-orange" /> Sobre a ALA Turismo
          </p>
          <h2 className="font-display reveal mt-6 text-[2.6rem] font-light leading-[1.02] text-ink md:text-6xl" style={{ ["--d" as string]: "80ms" }}>
            Do Cariri para o Brasil <em className="italic text-navy">e para o mundo.</em>
          </h2>
          <div className="reveal mt-8 space-y-5 text-[16px] leading-relaxed text-muted-ala" style={{ ["--d" as string]: "160ms" }}>
            <p>
              A ALA Turismo é uma agência de turismo de Crato, no Ceará, que organiza excursões e viagens para destinos
              nacionais e internacionais — com roteiro planejado, hospedagem, passeios e acompanhamento do início ao fim.
            </p>
            <p>
              À frente da organização estão o <strong className="font-semibold text-ink">Prof. Gilson</strong> e a{" "}
              <strong className="font-semibold text-ink">Profª Veris</strong>, que cuidam de cada detalhe para que o viajante
              só precise embarcar, aproveitar e voltar com boas histórias para contar.
            </p>
          </div>

          <dl className="reveal mt-12 grid grid-cols-1 gap-px bg-ink/10 sm:grid-cols-2" style={{ ["--d" as string]: "220ms" }}>
            <div className="bg-paper py-5 sm:pr-6">
              <dt className="label text-muted-ala/80">Endereço</dt>
              <dd className="mt-2 text-[15px] leading-snug text-ink">
                {SITE.address}
                <br />
                {SITE.city}
              </dd>
            </div>
            <div className="bg-paper py-5 sm:pl-6">
              <dt className="label text-muted-ala/80">Atendimento</dt>
              <dd className="mt-2 text-[15px] leading-snug text-ink">
                Prof. Gilson · {SITE.whatsappDisplay}
                <br />
                Profª Veris · {SITE.whatsapp2Display}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

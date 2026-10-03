import { IconBus, IconBed, IconCompass, IconGift, IconPin, IconShield } from "./icons";

const ITENS = [
  { I: IconBus, t: "Ônibus de luxo", d: "Transporte confortável, com água e lanche a bordo nas excursões rodoviárias." },
  { I: IconBed, t: "Hospedagem & café", d: "Hotel ou pousada selecionados, com café da manhã incluso nos pacotes." },
  { I: IconCompass, t: "Guias & city tour", d: "Acompanhamento de guia e passeios pela cidade já incluídos no roteiro." },
  { I: IconPin, t: "Embarque no Cariri", d: "Saídas de Crato, Juazeiro do Norte e cidades vizinhas — perto de você." },
  { I: IconShield, t: "Organização completa", d: "Roteiro, horários e logística planejados pela equipe. Você só embarca e aproveita." },
  { I: IconGift, t: "Facilidade no pagamento", d: "Parcelamento no cartão de crédito e brindes exclusivos para os viajantes." },
];

export function PorQue() {
  return (
    <section className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="label reveal flex items-center gap-3 text-orange">
              <span className="h-px w-10 bg-orange" /> Por que a ALA
            </p>
            <h2 className="font-display reveal mt-6 text-[2.6rem] font-light leading-[1.02] text-ink md:text-6xl" style={{ ["--d" as string]: "80ms" }}>
              Por que viajar com a <em className="italic text-navy">ALA Turismo?</em>
            </h2>
            <p className="reveal mt-6 max-w-sm text-[15px] leading-relaxed text-muted-ala" style={{ ["--d" as string]: "160ms" }}>
              Embarcar, aproveitar, criar memórias e voltar feliz. O resto, deixa com a gente.
            </p>
            <div className="reveal mt-10 hidden overflow-hidden lg:block" style={{ ["--d" as string]: "220ms" }}>
              <img src="/images/real/teleferico-2.jpg" alt="Teleférico sobre a serra em passeio da ALA Turismo" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {ITENS.map(({ I, t, d }, i) => (
            <div
              key={t}
              className="reveal group bg-paper p-7 transition-colors duration-500 hover:bg-white md:p-10"
              style={{ ["--d" as string]: `${(i % 2) * 90}ms` }}
            >
              <div className="grid size-14 place-items-center border border-ink/15 text-navy transition-all duration-500 group-hover:border-orange group-hover:text-orange">
                <I className="size-7" />
              </div>
              <h3 className="font-display mt-8 text-2xl font-normal text-ink">{t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-ala">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
